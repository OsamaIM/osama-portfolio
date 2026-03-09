'use client';

import React, { useState, useRef } from 'react';
import * as ort from 'onnxruntime-web';

// CRUCIAL FOR NEXT.JS: Tells the app where to find the WebAssembly binaries
ort.env.wasm.wasmPaths = "https://cdn.jsdelivr.net/npm/onnxruntime-web/dist/";

export default function MRIAnalyzer() {
  const [prediction, setPrediction] = useState<string | null>(null);
  const [confidence, setConfidence] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const classes = ['Glioma', 'Meningioma', 'No Tumor', 'Pituitary'];

  // Softmax function to convert raw model output (logits) to percentages
  const softmax = (arr: number[]) => {
    const maxLogit = Math.max(...arr);
    const scores = arr.map((l) => Math.exp(l - maxLogit));
    const sum = scores.reduce((a, b) => a + b);
    return scores.map((s) => s / sum);
  };

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setLoading(true);
    setPrediction(null);
    setConfidence(null);

    const imageUrl = URL.createObjectURL(file);
    setImageSrc(imageUrl);

    const img = new Image();
    img.src = imageUrl;
    img.onload = async () => {
      await processAndPredict(img);
    };
  };

  const processAndPredict = async (img: HTMLImageElement) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // 1. Resize to 128x128
    canvas.width = 128;
    canvas.height = 128;
    ctx.drawImage(img, 0, 0, 128, 128);

    // 2. Extract pixels
    const imageData = ctx.getImageData(0, 0, 128, 128).data;
    const float32Data = new Float32Array(3 * 128 * 128);
    
    // 3. ImageNet Normalization
    const mean = [0.485, 0.456, 0.406];
    const std = [0.229, 0.224, 0.225];

    let offset = 0;
    for (let i = 0; i < imageData.length; i += 4) {
      float32Data[offset] = (imageData[i] / 255.0 - mean[0]) / std[0];             
      float32Data[offset + 128 * 128] = (imageData[i + 1] / 255.0 - mean[1]) / std[1]; 
      float32Data[offset + 2 * 128 * 128] = (imageData[i + 2] / 255.0 - mean[2]) / std[2]; 
      offset++;
    }

    const tensor = new ort.Tensor('float32', float32Data, [1, 3, 128, 128]);

    try {
      // 4. Run Inference
      const session = await ort.InferenceSession.create('/brain_tumor_yolo.onnx');
      const results = await session.run({ input: tensor });
      
      // 5. Calculate Results
      const rawOutput = Array.from(results.output.data as Float32Array);
      const probabilities = softmax(rawOutput);
      
      const maxIndex = probabilities.indexOf(Math.max(...probabilities));
      
      setPrediction(classes[maxIndex]);
      setConfidence(probabilities[maxIndex] * 100);
      
    } catch (error) {
      console.error("Inference failed:", error);
      setPrediction("Error processing image");
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center p-6 bg-[#0a0a0a] border border-gray-800 rounded-2xl shadow-2xl w-full max-w-md mx-auto font-sans">
      <div className="w-full flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-gray-100 tracking-wide">Diagnostic Engine</h3>
        <span className="text-xs font-mono bg-blue-900/30 text-blue-400 px-2 py-1 rounded-full border border-blue-800/50">YOLO-Inspired</span>
      </div>
      
      <label className="w-full flex flex-col items-center justify-center h-32 border-2 border-dashed border-gray-700 hover:border-blue-500 hover:bg-gray-900/50 transition-all rounded-xl cursor-pointer group">
        <div className="text-gray-400 group-hover:text-blue-400 transition-colors">
          <svg className="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>
          <span className="text-sm font-medium">Drop MRI Scan Here</span>
        </div>
        <input type="file" accept="image/jpeg, image/png, image/dicom" className="hidden" onChange={handleImageUpload} />
      </label>

      <canvas ref={canvasRef} className="hidden" />

      {imageSrc && (
        <div className="mt-6 relative w-full aspect-square rounded-xl overflow-hidden border border-gray-700 bg-black">
          <img src={imageSrc} alt="Uploaded Scan" className="w-full h-full object-cover opacity-80" />
          {loading && (
             <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm">
               <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-3"></div>
               <p className="text-blue-400 font-mono text-sm animate-pulse">Running Neural Net...</p>
             </div>
          )}
        </div>
      )}

      {prediction && confidence !== null && !loading && (
        <div className="w-full mt-6 bg-gray-900 border border-gray-800 rounded-xl p-4">
          <p className="text-sm text-gray-400 mb-1">Detection Result</p>
          <p className={`text-2xl font-bold ${prediction === 'No Tumor' ? 'text-green-400' : 'text-red-400'}`}>
            {prediction}
          </p>
          
          <div className="mt-4">
            <div className="flex justify-between text-xs text-gray-400 mb-1 font-mono">
              <span>Confidence</span>
              <span>{confidence.toFixed(1)}%</span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
              <div 
                className={`h-2 rounded-full transition-all duration-1000 ease-out ${prediction === 'No Tumor' ? 'bg-green-500' : 'bg-red-500'}`}
                style={{ width: `${confidence}%` }}
              ></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}