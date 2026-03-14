'use client';

import React, { useRef, useState, useEffect } from 'react';
import Webcam from 'react-webcam';
import * as ort from 'onnxruntime-web';
import { preprocessFrame, processPredictions, applySpatialLogic } from '@/utils/yoloVision';

const LiveDemo = () => {
  const webcamRef = useRef<Webcam>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [session, setSession] = useState<ort.InferenceSession | null>(null);
  const [loading, setLoading] = useState(true);
  
  // New state for handling modes
  const [isWebcamMode, setIsWebcamMode] = useState(true);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  useEffect(() => {
    const loadModel = async () => {
      try {
        const mySession = await ort.InferenceSession.create('/best.onnx', {
          executionProviders: ['webgl', 'wasm']
        });
        setSession(mySession);
        setLoading(false);
      } catch (err) {
        console.error("Failed to load ONNX model:", err);
      }
    };
    loadModel();
  }, []);

  // --- DRAWING LOGIC (Shared between Image and Webcam) ---
  const drawOverlays = (ctx: CanvasRenderingContext2D, width: number, height: number, occupiedSeats: any[], availableSeats: any[], bestSeat: any) => {
    const scaleX = width / 640;
    const scaleY = height / 640;

    // Draw Occupied (Red)
    ctx.strokeStyle = '#EF4444';
    ctx.lineWidth = 3;
    ctx.fillStyle = 'rgba(239, 68, 68, 0.2)';
    occupiedSeats.forEach((box: any) => {
      ctx.strokeRect(box.x * scaleX, box.y * scaleY, box.w * scaleX, box.h * scaleY);
      ctx.fillRect(box.x * scaleX, box.y * scaleY, box.w * scaleX, box.h * scaleY);
    });

    // Draw Available (Green)
    ctx.strokeStyle = '#22C55E';
    ctx.lineWidth = 3;
    ctx.fillStyle = 'rgba(34, 197, 94, 0.2)';
    availableSeats.forEach((box: any) => {
      ctx.strokeRect(box.x * scaleX, box.y * scaleY, box.w * scaleX, box.h * scaleY);
      ctx.fillRect(box.x * scaleX, box.y * scaleY, box.w * scaleX, box.h * scaleY);
    });

    // Draw Optimal Seat (Gold)
    if (bestSeat) {
      ctx.strokeStyle = '#EAB308';
      ctx.lineWidth = 5;
      ctx.fillStyle = 'rgba(234, 179, 8, 0.4)';
      ctx.strokeRect(bestSeat.x * scaleX, bestSeat.y * scaleY, bestSeat.w * scaleX, bestSeat.h * scaleY);
      ctx.fillRect(bestSeat.x * scaleX, bestSeat.y * scaleY, bestSeat.w * scaleX, bestSeat.h * scaleY);
      
      ctx.fillStyle = '#EAB308';
      ctx.font = 'bold 20px Arial';
      ctx.fillText('⭐ Optimal Seat', bestSeat.x * scaleX, (bestSeat.y * scaleY) - 10);
    }
  };

  // --- WEBCAM INFERENCE LOOP ---
  const detectFrame = async () => {
    if (!session || !webcamRef.current || !canvasRef.current || !isWebcamMode) return;

    const video = webcamRef.current.video;
    if (video && video.readyState === 4) {
      const { videoWidth, videoHeight } = video;
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;
      const ctx = canvasRef.current.getContext('2d');
      if (!ctx) return;

      const tensorData = preprocessFrame(video, videoWidth, videoHeight);
      const tensor = new ort.Tensor('float32', tensorData, [1, 3, 640, 640]);
      const results = await session.run({ images: tensor });
      
      const detectedBoxes = processPredictions(results.output0.data, 0.45);
      const { occupiedSeats, availableSeats, bestSeat } = applySpatialLogic(detectedBoxes);

      ctx.clearRect(0, 0, videoWidth, videoHeight);
      drawOverlays(ctx, videoWidth, videoHeight, occupiedSeats, availableSeats, bestSeat);
      
      requestAnimationFrame(detectFrame);
    }
  };

  // --- STATIC IMAGE INFERENCE ---
  const processUploadedImage = async (imgElement: HTMLImageElement) => {
    if (!session || !canvasRef.current) return;
    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;

    const { naturalWidth: width, naturalHeight: height } = imgElement;
    canvasRef.current.width = width;
    canvasRef.current.height = height;

    // Draw the static image as the base background
    ctx.drawImage(imgElement, 0, 0, width, height);

    const tensorData = preprocessFrame(imgElement, width, height);
    const tensor = new ort.Tensor('float32', tensorData, [1, 3, 640, 640]);
    const results = await session.run({ images: tensor });
    
    const detectedBoxes = processPredictions(results.output0.data, 0.45);
    const { occupiedSeats, availableSeats, bestSeat } = applySpatialLogic(detectedBoxes);

    // Draw overlays on top of the image
    drawOverlays(ctx, width, height, occupiedSeats, availableSeats, bestSeat);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setIsWebcamMode(false);
      const url = URL.createObjectURL(file);
      setUploadedImage(url);
    }
  };

  return (
    <div className="w-full space-y-4">
      {/* Control Panel */}
      <div className="flex flex-wrap items-center gap-4 bg-gray-950 p-4 rounded-lg border border-gray-800">
        <button 
          onClick={() => setIsWebcamMode(true)}
          className={`px-4 py-2 rounded-md font-semibold transition ${isWebcamMode ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`}
        >
          Live Webcam
        </button>
        <div className="flex-1 text-center text-gray-500 font-bold">OR</div>
        <div className="relative">
          <input 
            type="file" 
            accept="image/*" 
            onChange={handleImageUpload}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
          <button className={`px-4 py-2 rounded-md font-semibold transition ${!isWebcamMode ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`}>
            Upload Image
          </button>
        </div>
      </div>

      {/* Main Display Area */}
      <div className="relative w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl bg-gray-900 border border-gray-800 min-h-96">
        {loading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center z-50 bg-black/80 text-white backdrop-blur-sm">
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="animate-pulse font-mono text-lg">Loading YOLOv8 Engine...</p>
          </div>
        )}
        
        {isWebcamMode ? (
          <Webcam
            ref={webcamRef}
            muted={true}
            onUserMedia={() => requestAnimationFrame(detectFrame)}
            className="w-full h-auto object-cover"
          />
        ) : (
          uploadedImage && (
            <img 
              src={uploadedImage} 
              alt="Uploaded Library" 
              className="hidden" // Hidden because we draw it directly to the canvas!
              onLoad={(e) => processUploadedImage(e.currentTarget)}
            />
          )
        )}

        {/* The Universal Drawing Board */}
        <canvas
          ref={canvasRef}
          className={`absolute top-0 left-0 w-full h-full ${isWebcamMode ? 'pointer-events-none' : ''}`}
        />
      </div>
    </div>
  );
};

export default LiveDemo;