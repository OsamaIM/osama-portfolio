// Define the shape of our bounding box object for TypeScript
export interface BoundingBox {
  x: number;
  y: number;
  w: number;
  h: number;
  prob: number;
  classId: number;
}

/**
 * 1. Preprocessing: Converts webcam canvas to a 640x640 Float32Array Tensor
 */
export function preprocessFrame(videoElement: HTMLVideoElement | HTMLImageElement, canvasWidth: number, canvasHeight: number): Float32Array {
  const modelWidth = 640;
  const modelHeight = 640;
  
  // Create an off-screen canvas to resize the video frame
  const offscreenCanvas = document.createElement('canvas');
  offscreenCanvas.width = modelWidth;
  offscreenCanvas.height = modelHeight;
  const ctx = offscreenCanvas.getContext('2d');
  
  if (!ctx) {
    throw new Error("Could not get 2D context from canvas");
  }

  // Draw the video frame onto the 640x640 canvas
  ctx.drawImage(videoElement, 0, 0, modelWidth, modelHeight);
  const imageData = ctx.getImageData(0, 0, modelWidth, modelHeight);
  const data = imageData.data; // RGBA array

  // YOLOv8 expects a flat array of shape [1, 3, 640, 640] (Batch, Channel, Height, Width)
  const float32Data = new Float32Array(1 * 3 * modelWidth * modelHeight);
  
  for (let i = 0; i < modelWidth * modelHeight; i++) {
    // Normalize pixel values to 0.0 - 1.0
    float32Data[i] = data[i * 4] / 255.0; // Red
    float32Data[modelWidth * modelHeight + i] = data[i * 4 + 1] / 255.0; // Green
    float32Data[modelWidth * modelHeight * 2 + i] = data[i * 4 + 2] / 255.0; // Blue
  }

  return float32Data;
}

/**
 * 2. Postprocessing: Decode YOLOv8 output [1, 6, 8400] and apply NMS
 */
export function processPredictions(outputArray: Float32Array | any, threshold: number = 0.45): BoundingBox[] { 
  const boxes: BoundingBox[] = [];
  const numAnchors = 8400;

  for (let i = 0; i < numAnchors; i++) {
    // The output is flattened. Shape is [1, 6, 8400]. 
    // Row 0: x, Row 1: y, Row 2: w, Row 3: h, Row 4: class0, Row 5: class1
    const xCenter = outputArray[i];
    const yCenter = outputArray[numAnchors + i];
    const width = outputArray[2 * numAnchors + i];
    const height = outputArray[3 * numAnchors + i];
    
    // Check your data.yaml to see which class is 0 and which is 1.
    // Assuming Class 0: Chair, Class 1: Person based on typical alphabetic sorting
    const class0Prob = outputArray[4 * numAnchors + i];
    const class1Prob = outputArray[5 * numAnchors + i];

    const maxProb = Math.max(class0Prob, class1Prob);
    const classId = class0Prob > class1Prob ? 0 : 1;

    // Apply the 0.45 Confidence Threshold from your methodology 
    if (maxProb >= threshold) {
      // Convert center x, y to top-left x, y
      const x1 = xCenter - width / 2;
      const y1 = yCenter - height / 2;
      
      boxes.push({
        x: x1, y: y1, w: width, h: height,
        prob: maxProb, classId: classId
      });
    }
  }

  // Apply Non-Maximum Suppression (NMS) to remove duplicates
  return applyNMS(boxes, 0.5); 
}

function applyNMS(boxes: BoundingBox[], iouThreshold: number): BoundingBox[] {
  // Sort boxes by confidence score in descending order
  boxes.sort((a, b) => b.prob - a.prob);
  const result: BoundingBox[] = [];

  while (boxes.length > 0) {
    const current = boxes.shift();
    if (!current) break;
    
    result.push(current);

    // Filter out boxes of the same class that overlap too much
    for (let i = boxes.length - 1; i >= 0; i--) {
      if (boxes[i].classId === current.classId) {
        if (calculateIoU(current, boxes[i]) > iouThreshold) {
          boxes.splice(i, 1);
        }
      }
    }
  }
  return result;
}

/**
 * 3. Your Heuristic Spatial Logic Layer
 */
export function applySpatialLogic(detectedBoxes: BoundingBox[]) {
  const chairs = detectedBoxes.filter(b => b.classId === 0); 
  const people = detectedBoxes.filter(b => b.classId === 1); 
  
  const occupiedSeats: BoundingBox[] = [];
  const availableSeats: BoundingBox[] = [];

  chairs.forEach(chair => {
    let isOccupied = false;

    for (const person of people) {
      const overlap = calculateIoU(chair, person);
      
      // The 0.30 overlap threshold from your methodology 
      if (overlap > 0.30) {
        isOccupied = true;
        break;
      }
    }

    if (isOccupied) {
      occupiedSeats.push(chair);
    } else {
      availableSeats.push(chair);
    }
  });

  // Calculate Social Distancing Recommendation using Euclidean distance 
  let bestSeat: BoundingBox | null = null;
  let maxMinDistance = -1;

  availableSeats.forEach(available => {
    let minDistanceToOccupied = Infinity;
    const availCenterX = available.x + available.w / 2;
    const availCenterY = available.y + available.h / 2;

    occupiedSeats.forEach(occupied => {
      const occCenterX = occupied.x + occupied.w / 2;
      const occCenterY = occupied.y + occupied.h / 2;
      
      // Euclidean distance formula 
      const dist = Math.sqrt(Math.pow(availCenterX - occCenterX, 2) + Math.pow(availCenterY - occCenterY, 2));
      if (dist < minDistanceToOccupied) {
        minDistanceToOccupied = dist;
      }
    });

    if (minDistanceToOccupied > maxMinDistance && minDistanceToOccupied !== Infinity) {
      maxMinDistance = minDistanceToOccupied;
      bestSeat = available;
    }
  });

  return { occupiedSeats, availableSeats, bestSeat };
}

// Helper: Standard Intersection over Union math [cite: 126]
function calculateIoU(box1: BoundingBox, box2: BoundingBox): number {
  const xA = Math.max(box1.x, box2.x);
  const yA = Math.max(box1.y, box2.y);
  const xB = Math.min(box1.x + box1.w, box2.x + box2.w);
  const yB = Math.min(box1.y + box1.h, box2.y + box2.h);

  const interArea = Math.max(0, xB - xA) * Math.max(0, yB - yA);
  if (interArea === 0) return 0;

  const box1Area = box1.w * box1.h;
  const box2Area = box2.w * box2.h;

  return interArea / (box1Area + box2Area - interArea);
}