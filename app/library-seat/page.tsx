import React from 'react';
import LiveDemo from '../components/LiveDemo'; 

export default function LibrarySeatProject() {
  return (
    <main className="min-h-screen bg-gray-950 text-white p-6 md:p-12 font-sans">
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* Header Section */}
        <header className="text-center space-y-5">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-emerald-400">
            Real-Time Library Seat Occupancy
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            An edge-optimized computer vision system using YOLOv8 and custom spatial heuristic logic to track seat availability and recommend socially-distanced seating.
          </p>
          
          {/* GitHub CTA */}
          <div className="flex justify-center pt-2">
            <a 
              href="https://github.com/OsamaIM/Library_Seat_Occupancy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-lg transition-all border border-gray-700 shadow-lg hover:shadow-blue-500/20"
            >
              {/* GitHub SVG Icon */}
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              View Source on GitHub
            </a>
          </div>
        </header>

        {/* Live Demo Wrapper Section */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <h2 className="text-2xl font-bold flex items-center gap-3">
              <span className="relative flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500"></span>
              </span>
              Live Edge Inference
            </h2>
            <div className="text-sm text-gray-400 font-mono bg-gray-900 px-4 py-2 rounded-full border border-gray-800">
              Processing via ONNX Runtime WebGL
            </div>
          </div>
          
          {/* This imports your interactive component */}
          <div className="ring-1 ring-gray-800 rounded-2xl p-2 bg-gray-900 shadow-2xl">
            <LiveDemo />
          </div>
        </section>
        
        {/* Project Highlights / Methodology Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-gray-800">
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-emerald-500/50 transition-colors">
            <h3 className="text-xl font-bold mb-3 text-emerald-400">Spatial Logic Layer</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Calculates Intersection over Union (IoU &gt; 0.30) between person and chair bounding boxes. This mathematical verification eliminates false positives caused by passersby or environmental clutter.
            </p>
          </div>
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-yellow-500/50 transition-colors">
            <h3 className="text-xl font-bold mb-3 text-yellow-400">Distancing Optimizer</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Actively processes detection data to calculate Euclidean distances between available and occupied seats, dynamically highlighting the optimal seat for spatial hygiene.
            </p>
          </div>
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-colors">
            <h3 className="text-xl font-bold mb-3 text-blue-400">Client-Side AI</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Runs entirely inside the browser using your local device&apos;s hardware acceleration. No video feeds are sent to a server, ensuring low latency and complete privacy.
            </p>
          </div>
        </section>

      </div>
    </main>
  );
}