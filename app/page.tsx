import React from 'react';
import { Github, Linkedin, Mail, Brain, Bug, Building2, Terminal } from 'lucide-react';

import {  FileText, Sparkles } from 'lucide-react'; // Make sure you have these imported!

export default function Portfolio() {
  return (
    // We added a custom Tailwind grid background here
    <main className="min-h-screen bg-black text-white font-sans relative overflow-x-hidden selection:bg-cyan-900 selection:text-cyan-50">
      
      {/* Futuristic AI Glowing Aurora Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Deep Indigo glow on the top left */}
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-indigo-900/20 blur-[120px] mix-blend-screen"></div>
        
        {/* Cyan glow on the bottom right */}
        <div className="absolute bottom-[-10%] right-[-5%] w-[50vw] h-[50vw] rounded-full bg-cyan-900/10 blur-[150px] mix-blend-screen"></div>
        
        {/* Subtle purple glow in the middle to bridge them */}
        <div className="absolute top-[40%] left-[50%] w-[30vw] h-[30vw] rounded-full bg-purple-900/10 blur-[120px] mix-blend-screen"></div>
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
            
            {/* Project 1: Brain MRI */}
            <a 
              href="https://github.com/OsamaIM/BRAIN_MRI_PROJECT" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block bg-[#0a0a0a] border border-white/10 rounded-2xl p-3 hover:border-white/20 transition-all group"
            >
              {/* Image Container (Replace gradient with an <img /> later) */}
              <div className="w-full h-48 bg-gradient-to-br from-blue-900/40 to-black rounded-xl mb-4 overflow-hidden relative flex items-center justify-center">
                 <Brain size={48} className="text-blue-500/50 group-hover:scale-110 transition-transform duration-500" />
              </div>
              {/* Colorful Tags */}
              <div className="flex gap-2 mb-3 px-1 flex-wrap">
                <span className="bg-blue-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-md">CNN</span>
                <span className="bg-purple-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-md">PyTorch</span>
                <span className="bg-emerald-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-md">Medical AI</span>
              </div>
              {/* Text */}
              <div className="px-1 pb-2">
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">Brain Tumor MRI</h3>
                <p className="text-sm text-gray-400 line-clamp-2">Deep learning pipeline leveraging CNNs for automated brain tumor detection using data augmentation.</p>
              </div>
            </a>

            {/* Project 2: HiveMind */}
            <a 
              href="https://github.com/OsamaIM/HiveMind-Swarm" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block bg-[#0a0a0a] border border-white/10 rounded-2xl p-3 hover:border-white/20 transition-all group"
            >
              {/* Image Container */}
              <div className="w-full h-48 bg-gradient-to-br from-pink-900/40 to-black rounded-xl mb-4 overflow-hidden relative flex items-center justify-center">
                 <Sparkles size={48} className="text-pink-500/50 group-hover:scale-110 transition-transform duration-500" />
              </div>
              {/* Colorful Tags */}
              <div className="flex gap-2 mb-3 px-1 flex-wrap">
                <span className="bg-pink-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-md">Local LLMs</span>
                <span className="bg-orange-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-md">PyGame</span>
                <span className="bg-indigo-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-md">Swarm AI</span>
              </div>
              {/* Text */}
              <div className="px-1 pb-2">
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">HiveMind</h3>
                <p className="text-sm text-gray-400 line-clamp-2">Real-time multi-agent physics simulation bridging classical algorithms with local neural networks.</p>
              </div>
            </a>

            {/* Project 3: Edge Vision */}
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block bg-[#0a0a0a] border border-white/10 rounded-2xl p-3 hover:border-white/20 transition-all group"
            >
              {/* Image Container */}
              <div className="w-full h-48 bg-gradient-to-br from-green-900/40 to-black rounded-xl mb-4 overflow-hidden relative flex items-center justify-center">
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

        {/* OrbiScholar Section */}
        <section className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-cyan-400/50 transition-all group">
          <Building2 className="text-cyan-400 mb-6 group-hover:scale-110 transition-transform" size={32} />
          <h2 className="text-2xl font-bold mb-4">OrbiScholar</h2>
          <p className="text-gray-400 text-sm mb-6">
            Empowering Bangladeshi students to pursue higher education in China through streamlined admission services.
          </p>
          <a href="#" className="text-cyan-400 text-sm hover:underline flex items-center gap-2">
            Learn more <span>-&gt;</span>
          </a>
        </section>

        {/* Tech Stack */}
        <section className="bg-white/5 border border-white/10 rounded-3xl p-8">
          <h3 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-6">Tech Stack</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/5 p-4 rounded-xl flex flex-col items-center gap-2 border border-white/5">
              <Terminal size={20} className="text-cyan-400" />
              <span className="text-xs">Python</span>
            </div>
            <div className="bg-white/5 p-4 rounded-xl flex flex-col items-center gap-2 border border-white/5">
              <span className="text-cyan-400 font-bold">🔥</span>
              <span className="text-xs">PyTorch</span>
            </div>
            <div className="bg-white/5 p-4 rounded-xl flex flex-col items-center gap-2 border border-white/5">
              <span className="text-cyan-400 font-bold">🐧</span>
              <span className="text-xs">Linux</span>
            </div>
            <div className="bg-white/5 p-4 rounded-xl flex flex-col items-center gap-2 border border-white/5">
              <span className="text-cyan-400 font-bold">⚛️</span>
              <span className="text-xs">React</span>
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
        {/* --- STARTUP SECTION --- */}
        <div id="startup" className="mt-32 min-h-[50vh]">
          <h2 className="text-3xl font-bold mb-6">Startup & Ventures</h2>
          <p className="text-gray-400">Details about my business initiatives coming soon...</p>
        </div>

        {/* --- ABOUT SECTION --- */}
        <div id="about" className="mt-32 min-h-[50vh]">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-gray-400">More about my background and journey coming soon...</p>
        </div>
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
