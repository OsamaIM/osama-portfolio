'use client';
import React, { useState } from 'react';
import { Github, Linkedin, Mail, Brain, Bug, Building2, Terminal } from 'lucide-react';
import { Code, BrainCircuit, Scan, Network, Share2, Cpu, GitBranch, TerminalSquare, Database, MapPin, Target, Monitor } from 'lucide-react';
import {  FileText, Sparkles } from 'lucide-react'; // Make sure you have these imported!
import dynamic from 'next/dynamic';
const MRIAnalyzer = dynamic(() => import('./components/MRIAnalyzer'), { ssr: false });
const SwarmSimulation = dynamic(() => import('./components/SwarmSimulation'), { ssr: false });
export default function Portfolio() {
  const [showMRI, setShowMRI] = useState(false);
  const [showHiveMind, setShowHiveMind] = useState(false);
  return (
    // We added a custom Tailwind grid background here
    <main className="min-h-screen bg-black text-white font-sans relative overflow-x-hidden selection:bg-cyan-900 selection:text-cyan-50">
      
      {/* Custom Animation Keyframes */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob { animation: blob 15s infinite alternate ease-in-out; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}} />

      {/* Animated AI Glowing Aurora Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Deep Indigo glow */}
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-indigo-900/30 blur-[120px] mix-blend-screen animate-blob"></div>
        
        {/* Cyan glow - delayed so they don't move exactly the same */}
        <div className="absolute bottom-[-10%] right-[-5%] w-[50vw] h-[50vw] rounded-full bg-cyan-900/20 blur-[150px] mix-blend-screen animate-blob animation-delay-2000"></div>
        
        {/* Subtle purple glow in the middle */}
        <div className="absolute top-[40%] left-[50%] w-[30vw] h-[30vw] rounded-full bg-purple-900/20 blur-[120px] mix-blend-screen animate-blob animation-delay-4000"></div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-6xl mx-auto px-6 pt-12 md:pt-24 pb-12 relative z-10">
        
        {/* Simple Top Nav */}
        <nav className="flex justify-between items-center mb-16 md:mb-24">
          <div className="font-bold text-xl flex items-center gap-2">
            <Sparkles className="text-cyan-400" size={20} /> OsamaIM
          </div>
          <div className="hidden md:flex gap-6 text-sm text-gray-400">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <a href="/#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="/startup" className="hover:text-white transition-colors">Startup</a>
            <a href="/#about" className="hover:text-white transition-colors">About</a>
          </div>
        </nav>

        {/* Hero Section */}
        <div id="home" className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          
          {/* Left Column: Text & Info */}
          <div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Hey, I'm <span className="text-cyan-400">Osama.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed max-w-md">
              An AI Engineer & Researcher crafting intelligent, vision-driven, and swarm-based solutions at Shanghai University of Engineering Science.
            </p>

            <div className="mb-8 border-l-2 border-white/10 pl-6">
              <p className="text-sm font-semibold text-gray-300 mb-4 uppercase tracking-widest">I specialize in:</p>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_8px_#22d3ee]"></span> 
                  Deep Learning & CNNs
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_8px_#22d3ee]"></span> 
                  Computer Vision Systems
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_8px_#22d3ee]"></span> 
                  Swarm Intelligence
                </li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/10 rounded-full flex items-center gap-2 transition-all text-sm font-medium">
                <Brain size={16} className="text-cyan-400" /> AI Projects
              </button>
              <button className="px-6 py-3 bg-transparent hover:bg-white/5 border border-white/10 rounded-full flex items-center gap-2 transition-all text-sm font-medium">
                <FileText size={16} /> Resume
              </button>
              
              {/* Live Status Indicator */}
              <div className="flex items-center gap-2 px-4 py-3 rounded-full border border-white/5 bg-white/5 text-xs text-gray-400 ml-auto md:ml-0">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_#22c55e]"></span>
                Training models right now
              </div>
            </div>
          </div>
          

          {/* Right Column: Profile Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full p-2 group cursor-pointer">
              {/* Animated outer ring */}
              <div className="absolute inset-0 rounded-full border border-dashed border-cyan-400/30 group-hover:border-cyan-400/60 animate-[spin_20s_linear_infinite] transition-colors"></div>
              {/* Inner gradient ring */}
              <div className="absolute inset-2 rounded-full border border-white/10 bg-white/5"></div>
              
              {/* Image Container */}
              <div className="relative w-full h-full rounded-full bg-[#111] overflow-hidden flex items-center justify-center">
                <img 
                  src="/avatar.jpg" 
                  alt="Osama" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>


        {/* --- PROJECTS SECTION --- */}
        <div id="projects" className="mt-12">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">My Projects</h2>
            <p className="text-gray-400">Always working on something new, check back often.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Project 1: Brain MRI (Interactive Expanding Bento) */}
            <div 
              className={`bg-[#0a0a0a] border border-white/10 rounded-2xl transition-all duration-500 overflow-hidden relative ${
                showMRI ? 'md:col-span-2 lg:col-span-3 ring-1 ring-cyan-500/50 shadow-[0_0_30px_rgba(6,182,212,0.15)] p-6' : 'hover:border-white/20 cursor-pointer group p-3'
              }`}
              onClick={() => !showMRI && setShowMRI(true)}
            >
              {!showMRI ? (
                // --- NORMAL COMPACT VIEW ---
                <>
                  <div className="w-full h-48 bg-linear-to-br from-blue-900/40 to-black rounded-xl mb-4 overflow-hidden relative flex items-center justify-center">
                     <Brain size={48} className="text-blue-500/50 group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="flex gap-2 mb-3 px-1 flex-wrap">
                    <span className="bg-blue-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-md">CNN</span>
                    <span className="bg-purple-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-md">PyTorch</span>
                    <span className="bg-emerald-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-md">Medical AI</span>
                  </div>
                  <div className="px-1 pb-2">
                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">Brain Tumor MRI</h3>
                    <p className="text-sm text-gray-400 line-clamp-2">Deep learning pipeline leveraging CNNs for automated brain tumor detection using data augmentation.</p>
                  </div>
                </>
              ) : (
                // --- EXPANDED ENGINE VIEW ---
                <div className="flex flex-col md:flex-row gap-8 relative animate-in fade-in zoom-in duration-300">
                  {/* Close Button */}
                  <button 
                    onClick={(e) => { e.stopPropagation(); setShowMRI(false); }}
                    className="absolute -top-2 -right-2 p-2 text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-colors z-20"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                  </button>

                  {/* Left Side: Info & GitHub Pinned Link */}
                  <div className="flex-1 py-2 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                       <Brain size={32} className="text-cyan-400" />
                       <h3 className="text-3xl font-bold text-white tracking-tight">Brain Tumor MRI</h3>
                    </div>
                    <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                      Test my lightweight YOLO-inspired model directly in your browser. This architecture achieved <strong className="text-cyan-400">95.04% accuracy</strong> utilizing only ~107k parameters, outperforming heavy ResNet models. It runs entirely via ONNX WebAssembly, requiring zero backend compute.
                    </p>
                    
                    <div>
                      <a 
                        href="https://github.com/OsamaIM/BRAIN_MRI_PROJECT" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#0f1115] hover:bg-white/10 border border-white/10 text-white text-sm font-medium px-5 py-2.5 rounded-xl transition-all hover:border-cyan-500/50 group/btn"
                      >
                        <Github size={18} className="group-hover/btn:text-cyan-400 transition-colors" /> 
                        View Source Code
                      </a>
                    </div>
                  </div>

                  {/* Right Side: The Interactive Engine */}
                  <div className="flex-1 flex justify-center w-full">
                    <MRIAnalyzer />
                  </div>
                </div>
              )}
            </div>

            {/* Project 2: HiveMind (Interactive Expanding Bento) */}
            <div 
              className={`bg-[#0a0a0a] border border-white/10 rounded-2xl transition-all duration-500 overflow-hidden relative ${
                showHiveMind ? 'md:col-span-2 lg:col-span-3 ring-1 ring-pink-500/50 shadow-[0_0_30px_rgba(236,72,153,0.15)] p-6' : 'hover:border-white/20 cursor-pointer group p-3'
              }`}
              onClick={() => !showHiveMind && setShowHiveMind(true)}
            >
              {!showHiveMind ? (
                // --- NORMAL COMPACT VIEW ---
                <>
                  <div className="w-full h-48 bg-linear-to-br from-pink-900/40 to-black rounded-xl mb-4 overflow-hidden relative flex items-center justify-center">
                     <Sparkles size={48} className="text-pink-500/50 group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="flex gap-2 mb-3 px-1 flex-wrap">
                    <span className="bg-pink-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-md">Local LLMs</span>
                    <span className="bg-orange-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-md">PyGame</span>
                    <span className="bg-indigo-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-md">Swarm AI</span>
                  </div>
                  <div className="px-1 pb-2">
                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-pink-400 transition-colors">HiveMind</h3>
                    <p className="text-sm text-gray-400 line-clamp-2">Real-time multi-agent physics simulation bridging classical algorithms with local neural networks.</p>
                  </div>
                </>
              ) : (
                // --- EXPANDED ENGINE VIEW ---
                <div className="flex flex-col md:flex-row gap-8 relative animate-in fade-in zoom-in duration-300">
                  {/* Close Button */}
                  <button 
                    onClick={(e) => { e.stopPropagation(); setShowHiveMind(false); }}
                    className="absolute -top-2 -right-2 p-2 text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-colors z-20"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                  </button>

                  {/* Left Side: Info & GitHub Pinned Link */}
                  <div className="flex-1 py-2 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                       <Sparkles size={32} className="text-pink-400" />
                       <h3 className="text-3xl font-bold text-white tracking-tight">HiveMind</h3>
                    </div>
                    <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                      A real-time exploration of swarm intelligence. This engine bridges classical optimization algorithms with decentralized neural networks. Hover your mouse over the simulation to see the active agents swarm and dynamically re-route their network connections.
                    </p>
                    
                    <div>
                      <a 
                        href="https://github.com/OsamaIM/HiveMind-Swarm" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#0f1115] hover:bg-white/10 border border-white/10 text-white text-sm font-medium px-5 py-2.5 rounded-xl transition-all hover:border-pink-500/50 group/btn"
                      >
                        <Github size={18} className="group-hover/btn:text-pink-400 transition-colors" /> 
                        View Source Code
                      </a>
                    </div>
                  </div>

                  {/* Right Side: The Interactive Swarm Canvas */}
                  <div className="flex-1 w-full flex justify-center items-center">
                     <SwarmSimulation />
                  </div>
                </div>
              )}
            </div>

            {/* Project 3: Edge Vision */}
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block bg-[#0a0a0a] border border-white/10 rounded-2xl p-3 hover:border-white/20 transition-all group"
            >
              {/* Image Container */}
              <div className="w-full h-48 bg-linear-to-br from-green-900/40 to-black rounded-xl mb-4 overflow-hidden relative flex items-center justify-center">
                 <Terminal size={48} className="text-green-500/50 group-hover:scale-110 transition-transform duration-500" />
              </div>
              {/* Colorful Tags */}
              <div className="flex gap-2 mb-3 px-1 flex-wrap">
                <span className="bg-green-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-md">Computer Vision</span>
                <span className="bg-red-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-md">Real-Time</span>
                <span className="bg-cyan-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-md">Edge Devices</span>
              </div>
              {/* Text */}
              <div className="px-1 pb-2">
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">Edge Vision Analytics</h3>
                <p className="text-sm text-gray-400 line-clamp-2">Multi-threaded vision pipeline designed for low-latency object tracking on edge hardware.</p>
              </div>
            </a>

          </div>
        </div>

        {/* Project 4: Offline RAG */}
        <section className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-cyan-400/50 transition-all group">
          <Terminal className="text-cyan-400 mb-6 group-hover:scale-110 transition-transform" size={32} />
          <h2 className="text-2xl font-bold mb-4">Offline RAG</h2>
          <p className="text-gray-400 text-sm mb-6">
            Privacy-first document retrieval assistant utilizing ChromaDB and lightweight embedding models for offline technical paper analysis.
          </p>
          <div className="flex gap-2 flex-wrap">
            <span className="text-[10px] uppercase bg-white/10 px-2 py-1 rounded">LangChain</span>
            <span className="text-[10px] uppercase bg-white/10 px-2 py-1 rounded">ChromaDB</span>
          </div>
        </section>


        {/* --- THE RIG SECTION --- */}
      <section className="py-16 max-w-6xl mx-auto px-6 relative z-10">
        <div className="bg-[#0a0a0a] border border-purple-500/20 rounded-3xl p-8 md:p-12 hover:border-purple-500/40 transition-all group relative overflow-hidden flex flex-col md:flex-row items-center gap-10">
          
          {/* Animated Futuristic Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#805ad510_1px,transparent_1px),linear-gradient(to_bottom,#805ad510_1px,transparent_1px)] bg-size-[24px_24px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-50"></div>
          <div className="absolute -right-20 -top-20 w-72 h-72 bg-purple-600/10 blur-[100px] rounded-full group-hover:bg-purple-600/20 transition-all duration-700"></div>

          {/* Left Side: Stats */}
          <div className="relative z-10 flex-1 w-full">
            <div className="flex items-center gap-3 mb-6">
              <Cpu className="text-purple-400" size={28} />
              <h3 className="text-3xl font-bold text-white tracking-tight">The Rig</h3>
            </div>
            <p className="text-gray-400 mb-8 max-w-md text-base leading-relaxed">
              My daily driver for training local neural networks and compiling code.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-300">
              <li className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/5 hover:bg-white/10 transition-colors"><TerminalSquare className="text-purple-400" size={16}/> <span><strong>OS:</strong> Triple-Boot (Fedora, Ubuntu, Win 11)</span></li>
              <li className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/5 hover:bg-white/10 transition-colors"><Monitor className="text-purple-400" size={16}/> <span><strong>GPU:</strong> NVIDIA RTX 3060 6GB</span></li>
              <li className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/5 hover:bg-white/10 transition-colors"><Cpu className="text-purple-400" size={16}/> <span><strong>CPU:</strong> Intel Core i7 10th Gen</span></li>
              <li className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/5 hover:bg-white/10 transition-colors"><BrainCircuit className="text-purple-400" size={16}/> <span><strong>Memory:</strong> 16GB RAM / 1TB SSD</span></li>
            </ul>
          </div>

          {/* Right Side: Futuristic Spinning Core */}
          <div className="relative z-10 w-full md:w-1/3 flex justify-center py-8">
             <div className="w-48 h-48 rounded-full border border-purple-500/20 flex items-center justify-center relative animate-[spin_10s_linear_infinite]">
               <div className="w-32 h-32 rounded-full border-2 border-transparent border-t-cyan-400 border-b-purple-400 flex items-center justify-center animate-[spin_4s_linear_infinite_reverse]">
                  <div className="w-16 h-16 rounded-full bg-purple-500/20 blur-md absolute"></div>
                  <Database className="text-cyan-300 w-8 h-8 absolute animate-pulse" />
               </div>
             </div>
          </div>

        </div>
      </section>
      

        {/* --- TECH STACK (Animated Marquee) --- */}
      <section className="py-16 max-w-6xl mx-auto px-6 relative z-10 w-full overflow-hidden">
        <h3 className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-8">Tech Stack & Arsenal</h3>
        
        {/* Custom Animation Keyframes for the Marquee */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 30s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}} />

        {/* The Marquee Container */}
        <div className="relative flex overflow-x-hidden">
          {/* We use w-max to prevent wrapping, and animate-marquee to trigger the CSS */}
          <div className="flex w-max animate-marquee gap-4 pr-4">
             {/* We double the array so the scroll loops seamlessly! */}
             {[
               { icon: <Terminal size={20}/>, name: "Python", color: "text-blue-400" },
               { icon: <Code size={20}/>, name: "Next.js / React", color: "text-cyan-400" },
               { icon: <BrainCircuit size={20}/>, name: "PyTorch / TensorFlow", color: "text-orange-400" },
               { icon: <Scan size={20}/>, name: "YOLO & ResNet", color: "text-emerald-400" },
               { icon: <Network size={20}/>, name: "SimpleCNN", color: "text-purple-400" },
               { icon: <Share2 size={20}/>, name: "Swarm Intelligence", color: "text-indigo-400" },
               { icon: <Cpu size={20}/>, name: "WebGPU / WebLLM", color: "text-pink-400" },
               { icon: <GitBranch size={20}/>, name: "Git / Kaggle API", color: "text-red-400" },
               { icon: <TerminalSquare size={20}/>, name: "Linux", color: "text-white" },
               // Duplicated items start here for the infinite loop
               { icon: <Terminal size={20}/>, name: "Python", color: "text-blue-400" },
               { icon: <Code size={20}/>, name: "Next.js / React", color: "text-cyan-400" },
               { icon: <BrainCircuit size={20}/>, name: "PyTorch / TensorFlow", color: "text-orange-400" },
               { icon: <Scan size={20}/>, name: "YOLO & ResNet", color: "text-emerald-400" },
               { icon: <Network size={20}/>, name: "SimpleCNN", color: "text-purple-400" },
               { icon: <Share2 size={20}/>, name: "Swarm Intelligence", color: "text-indigo-400" },
               { icon: <Cpu size={20}/>, name: "WebGPU / WebLLM", color: "text-pink-400" },
               { icon: <GitBranch size={20}/>, name: "Git / Kaggle API", color: "text-red-400" },
               { icon: <TerminalSquare size={20}/>, name: "Linux", color: "text-white" },
             ].map((tech, i) => (
                <div key={i} className="flex items-center gap-3 bg-[#0f1115] border border-white/5 px-6 py-4 rounded-2xl whitespace-nowrap hover:bg-white/10 transition-colors cursor-pointer">
                  <span className={tech.color}>{tech.icon}</span>
                  <span className="text-gray-300 font-medium">{tech.name}</span>
                </div>
             ))}
          </div>
        </div>
      </section>

        {/* Current Status */}
        <section className="bg-white/5 border border-white/10 rounded-3xl p-8">
           <div className="flex items-center gap-2 mb-4">
             <span className="w-2 h-2 bg-green-500 rounded-full"></span>
             <span className="text-xs uppercase tracking-widest text-gray-500">Currently</span>
           </div>
           <h3 className="text-xl font-bold mb-2">Studying AI Engineering</h3>
           <p className="text-gray-400 text-sm">
             Exploring deep learning architectures and intelligent systems at SUES in China.
           </p>
        </section>
    

        {/* --- ABOUT ME SECTION --- */}
      <section id="about" className="py-24 max-w-6xl mx-auto px-6 relative z-10 mt-12">
        
        {/* Section Header matching your placeholder */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">About Me</h2>
          <p className="text-gray-400 text-lg">My background and journey.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Box 1: The Origin Story */}
          <div className="bg-[#0f1115] border border-white/5 rounded-3xl p-8 hover:border-cyan-500/30 transition-colors group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 blur-3xl rounded-full pointer-events-none group-hover:bg-cyan-500/10 transition-colors duration-700"></div>
            <MapPin className="text-cyan-400 mb-6" size={32} />
            <h3 className="text-2xl font-bold text-white mb-4">From the Hill Tracts to the Global Stage</h3>
            <p className="text-gray-400 leading-relaxed mb-4 text-sm">
              My journey started in Bandarban, one of the most famous and beautiful hill tract districts of Bangladesh, where I was born and raised. In 2018, I relocated to the capital to attend Notre Dame College Dhaka—the #1 ranked institution in the country.
            </p>
            <p className="text-gray-400 leading-relaxed text-sm">
              After securing perfect results in my higher secondary exams, I set my sights globally. In September 2023, I moved to China to study at Shanghai University of Engineering Science (SUES), diving headfirst into the epicenter of modern artificial intelligence and cross-border innovation.
            </p>
          </div>

          {/* Box 2: The Mission */}
          <div className="bg-indigo-900/10 border border-indigo-500/20 rounded-3xl p-8 hover:border-indigo-500/40 transition-colors group relative overflow-hidden">
            <div className="absolute right-0 bottom-0 w-64 h-64 bg-indigo-500/10 blur-3xl rounded-full pointer-events-none group-hover:bg-indigo-500/20 transition-colors duration-700"></div>
            <Target className="text-indigo-400 mb-6" size={32} />
            <h3 className="text-2xl font-bold text-white mb-4">The Mission</h3>
            <p className="text-indigo-100/70 leading-relaxed mb-6 text-sm">
              Technology is only as valuable as the people it empowers. My focus is entirely on democratization—whether that means engineering lightweight CNNs for crucial medical imaging, coding local AI agents that protect mental focus, or building automated platforms that open doors.
            </p>
            <p className="text-indigo-100/70 leading-relaxed text-sm">
              With <strong className="text-white">OrbiScholar</strong>, I am taking the analytical problem-solving of engineering and applying it directly to human logistics: breaking down international barriers so brilliant students from Bangladesh can access world-class education in China. 
            </p>
          </div>

        </div>
      </section>
      </div>

      <footer className="mt-20 flex flex-col items-center gap-6">
        <div className="flex gap-6 text-gray-500">
          <Github className="hover:text-white cursor-pointer" size={20} />
          <Linkedin className="hover:text-white cursor-pointer" size={20} />
          <Mail className="hover:text-white cursor-pointer" size={20} />
        </div>
        <p className="text-gray-600 text-xs font-mono">Osama Ibn Mahfuz 2026</p>
      </footer>
    </main>
  );
}
