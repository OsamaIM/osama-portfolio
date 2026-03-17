"use client";

import React, { useRef, useState, useEffect } from "react";
import Webcam from "react-webcam";
import * as tf from "@tensorflow/tfjs";
import * as cocossd from "@tensorflow-models/coco-ssd";
import { ShieldAlert, ArrowLeft, Activity, Lock, Power, Github } from "lucide-react";
import Link from "next/link";

export default function VeiledGuardDemo() {
  const webcamRef = useRef<Webcam>(null);
  const [hasStarted, setHasStarted] = useState(false); // NEW: Tracks if user clicked start
  const [isLoaded, setIsLoaded] = useState(false);
  const [screenTime, setScreenTime] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  
  const isPresent = useRef(false);
  const TIME_LIMIT = 15; 

  // 1. Load the AI Model ONLY if user clicked start
  useEffect(() => {
    if (!hasStarted) return;

    let interval: NodeJS.Timeout;
    const loadModel = async () => {
      await tf.ready();
      const model = await cocossd.load();
      setIsLoaded(true);
      
      // Start the detection loop
      interval = setInterval(() => detect(model), 1000);
    };
    loadModel();

    return () => clearInterval(interval);
  }, [hasStarted]);

  // 2. The Vision Loop
  const detect = async (model: cocossd.ObjectDetection) => {
    if (webcamRef.current && webcamRef.current.video?.readyState === 4) {
      const video = webcamRef.current.video;
      const predictions = await model.detect(video);
      
      const personFound = predictions.some(p => p.class === "person");
      isPresent.current = personFound;
    }
  };

  // 3. The Timer & Lockdown Logic
  useEffect(() => {
    if (!isLoaded || isLocked) return;

    const timer = setInterval(() => {
      if (isPresent.current) {
        setScreenTime((prev) => {
          if (prev + 1 >= TIME_LIMIT) {
            setIsLocked(true);
            return prev + 1;
          }
          return prev + 1;
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [isLoaded, isLocked]);

  const resetSystem = () => {
    setIsLocked(false);
    setScreenTime(0);
  };

  return (
    <main className={`min-h-screen transition-colors duration-700 ${isLocked ? "bg-red-950" : "bg-black"} text-white p-6 md:p-12 font-sans`}>
      
      {/* Top Navigation */}
      <div className="flex justify-between items-center mb-8 max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors">
          <ArrowLeft size={20} /> Back to Portfolio
        </Link>
        
        <a 
          href="https://github.com/OsamaIM/edge-vision-analytics" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white px-4 py-2 rounded-full transition-all text-sm font-medium"
        >
          <Github size={18} />
          View Source Code
        </a>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold tracking-tight mb-2 flex items-center gap-3">
              <ShieldAlert className={isLocked ? "text-red-500" : "text-cyan-400"} size={40} />
              VeiledGuard <span className="text-gray-500 font-light hidden md:inline">| Edge AI Demo</span>
            </h1>
            <p className="text-gray-400">Live browser inference using TensorFlow.js</p>
          </div>
          
          <div className={`px-4 py-2 rounded-full border flex items-center gap-2 font-bold ${!hasStarted ? "bg-gray-900 border-gray-700 text-gray-500" : isLocked ? "bg-red-900/50 border-red-500 text-red-400" : "bg-green-900/20 border-green-500/50 text-green-400"}`}>
            {!hasStarted ? <Power size={16} /> : isLocked ? <Lock size={16} /> : <Activity size={16} className="animate-pulse" />}
            {!hasStarted ? "SYSTEM STANDBY" : isLocked ? "SYSTEM LOCKED" : "MONITORING ACTIVE"}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="md:col-span-2 relative rounded-3xl overflow-hidden border-2 border-white/10 bg-[#0a0a0a] shadow-2xl min-h-100 flex items-center justify-center">
            
            {/* The Start Screen */}
            {!hasStarted ? (
              <div className="text-center p-8 flex flex-col items-center">
                <ShieldAlert size={64} className="text-cyan-900 mb-6" />
                <h2 className="text-2xl font-bold text-white mb-4">Initialize VeiledGuard</h2>
                <p className="text-gray-400 mb-8 max-w-sm mx-auto">
                  Click below to grant temporary camera access and load the neural network into your browser. No video data ever leaves your device.
                </p>
                <button 
                  onClick={() => setHasStarted(true)}
                  className="bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-3 px-8 rounded-full transition-all active:scale-95 flex items-center gap-2"
                >
                  <Power size={20} />
                  Start Live Demo
                </button>
              </div>
            ) : (
              <>
                {/* The actual webcam - only mounts if hasStarted is true */}
                <Webcam
                  ref={webcamRef}
                  muted={true}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${isLocked ? "blur-md grayscale opacity-50" : "opacity-100"}`}
                />

                {!isLoaded && (
                  <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center z-10">
                    <Activity size={48} className="text-cyan-400 animate-spin mb-4" />
                    <p className="text-cyan-400 font-mono tracking-widest animate-pulse">LOADING NEURAL NETWORK...</p>
                  </div>
                )}

                {isLocked && (
                  <div className="absolute inset-0 bg-red-950/80 flex flex-col items-center justify-center z-20 text-center p-6">
                    <ShieldAlert size={80} className="text-red-500 mb-6 animate-bounce" />
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tighter">DISTRACTIONS BLOCKED</h2>
                    <p className="text-red-300 text-lg mb-8 max-w-md">
                      VeiledGuard has detected prolonged screen exposure. Your system has been locked to enforce productivity.
                    </p>
                    <button 
                      onClick={resetSystem}
                      className="bg-red-600 hover:bg-red-500 text-white font-bold py-3 px-8 rounded-full shadow-[0_0_30px_-5px_rgba(220,38,38,0.5)] transition-all active:scale-95"
                    >
                      Override & Reset Timer
                    </button>
                  </div>
                )}
              </>
            )}
          </div>

          <div className="flex flex-col gap-6">
            <div className="bg-[#0f1115] border border-white/5 rounded-3xl p-6">
              <h3 className="text-gray-400 text-sm font-bold uppercase tracking-wider mb-4">Live Telemetry</h3>
              
              <div className="mb-6">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400">Screen Time</span>
                  <span className={`font-mono font-bold ${isLocked ? 'text-red-400' : 'text-cyan-400'}`}>{screenTime}s / {TIME_LIMIT}s</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                  <div 
                    className={`h-full transition-all duration-500 ${isLocked ? 'bg-red-500' : 'bg-cyan-500'}`}
                    style={{ width: `${Math.min((screenTime / TIME_LIMIT) * 100, 100)}%` }}
                  ></div>
                </div>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span className="text-gray-500">Subject</span>
                  <span className={isPresent.current && !isLocked && isLoaded ? "text-green-400 font-bold" : "text-gray-500"}>
                    {isPresent.current && isLoaded ? "DETECTED" : "NONE"}
                  </span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span className="text-gray-500">Engine</span>
                  <span className="text-gray-300 font-mono">TensorFlow.js</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">Model</span>
                  <span className="text-gray-300 font-mono">COCO-SSD</span>
                </div>
              </div>
            </div>

            <div className="bg-cyan-950/20 border border-cyan-500/20 rounded-3xl p-6">
              <p className="text-cyan-200/70 text-sm leading-relaxed">
                <strong className="text-cyan-400">Architecture:</strong> This web interface simulates the logic securely via the browser. The actual OS Enforcer utilizes a custom-compiled YOLOv8 pipeline running locally via PyTorch.
              </p>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}