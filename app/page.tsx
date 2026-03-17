'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { Github, Linkedin, Mail, Brain, Bug, Building2, Terminal } from 'lucide-react';
import { Code, BrainCircuit, Scan, Network, Share2, Cpu, GitBranch, TerminalSquare, Database, MapPin, Target, Monitor } from 'lucide-react';
import { FileText, Sparkles, GraduationCap, HeartHandshake, BookOpen } from 'lucide-react'; 
import dynamic from 'next/dynamic';

const MRIAnalyzer = dynamic(() => import('./components/MRIAnalyzer'), { ssr: false });
const SwarmSimulation = dynamic(() => import('./components/SwarmSimulation'), { ssr: false });

export default function Portfolio() {
  const [showMRI, setShowMRI] = useState(false);
  const [showHiveMind, setShowHiveMind] = useState(false);
  const [activeNode, setActiveNode] = useState<string | null>(null);

  // Core Data & Exact Tailwind Classes for the About Constellation
  const aboutData = {
    constellation: [
      {
        id: 'ventures',
        label: 'Business Ventures',
        icon: <Building2 size={32} />,
        theme: {
          border: 'border-cyan-500/20', hoverBorder: 'hover:border-cyan-500', shadow: 'shadow-cyan-900/50',
          bgGlow: 'bg-cyan-950/20', bgGlowHover: 'group-hover:bg-cyan-950/40',
          iconBox: 'bg-cyan-950/20 border-cyan-500/30 text-cyan-400', textHover: 'group-hover:text-cyan-400',
          dot: 'bg-cyan-400', companyText: 'text-cyan-300'
        },
        nodes: [
          { role: 'CEO & Co-founder', company: 'OrbiScholar (Shanghai, China)', duration: '01/2026 - Present' },
          { role: 'Regional Manager (Asia) & Co-founder', company: 'OrbisMec (Dhaka, Bangladesh)', duration: '10/2025 - Present' },
          { role: 'Intl. Students Ambassador', company: 'Shanghai University of Engineering Science', duration: '2024' },
        ]
      },
      {
        id: 'academics',
        label: 'Academic Foundation',
        icon: <GraduationCap size={32} />,
        theme: {
          border: 'border-emerald-500/20', hoverBorder: 'hover:border-emerald-500', shadow: 'shadow-emerald-900/50',
          bgGlow: 'bg-emerald-950/20', bgGlowHover: 'group-hover:bg-emerald-950/40',
          iconBox: 'bg-emerald-950/20 border-emerald-500/30 text-emerald-400', textHover: 'group-hover:text-emerald-400',
          dot: 'bg-emerald-400', companyText: 'text-emerald-300'
        },
        nodes: [
          { role: 'BSc, Artificial Intelligence', company: 'Shanghai University of Engineering Science', duration: 'Expected 06/2027' },
          { role: 'Higher Secondary Certificate', company: 'Notre Dame College, Dhaka', duration: '06/2020' },
          { role: 'National Round Contestant', company: 'Bangladesh Math & Physics Olympiads', duration: '2018' },
          { role: 'Bronze Honor', company: 'International Youth Math Challenge', duration: 'Awarded' },
        ]
      },
      {
        id: 'mentorship',
        label: 'Education & Mentorship',
        icon: <BookOpen size={32} />,
        theme: {
          border: 'border-blue-500/20', hoverBorder: 'hover:border-blue-500', shadow: 'shadow-blue-900/50',
          bgGlow: 'bg-blue-950/20', bgGlowHover: 'group-hover:bg-blue-950/40',
          iconBox: 'bg-blue-950/20 border-blue-500/30 text-blue-400', textHover: 'group-hover:text-blue-400',
          dot: 'bg-blue-400', companyText: 'text-blue-300'
        },
        nodes: [
          { role: 'Math & Physics Instructor', company: 'Online Seminars & Admissions', duration: '01/2022 - 05/2022' },
          { role: 'Private Home Tutor', company: 'Mathematics, Science & Language Arts', duration: '01/2021 - 05/2023' },
          { role: 'Executive Member', company: 'Notre Dame Math Club', duration: '2018 - 2020' },
        ]
      },
      {
        id: 'social',
        label: 'Social Impact',
        icon: <HeartHandshake size={32} />,
        theme: {
          border: 'border-purple-500/20', hoverBorder: 'hover:border-purple-500', shadow: 'shadow-purple-900/50',
          bgGlow: 'bg-purple-950/20', bgGlowHover: 'group-hover:bg-purple-950/40',
          iconBox: 'bg-purple-950/20 border-purple-500/30 text-purple-400', textHover: 'group-hover:text-purple-400',
          dot: 'bg-purple-400', companyText: 'text-purple-300'
        },
        nodes: [
          { role: 'Trained Volunteer (Blood Grouping)', company: 'Rotaract Club', duration: '01/2022 - Present' },
          { role: 'Member, Warm Clothes Distribution', company: 'Bangladesh Student Council', duration: '01/2018 - Present' },
          { role: 'Team Member', company: 'LEO Club', duration: '01/2018 - Present' },
          { role: 'District Ambassador', company: 'My Body Is My Body', duration: '01/2018 - 12/2020' },
        ]
      }
    ]
  };

  return (
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

      {/* Animated AI Glowing Aurora Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-indigo-900/30 blur-[120px] mix-blend-screen animate-blob"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[50vw] h-[50vw] rounded-full bg-cyan-900/20 blur-[150px] mix-blend-screen animate-blob animation-delay-2000"></div>
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
              An AI Engineering student crafting intelligent, vision-driven, and swarm-based solutions at Shanghai University of Engineering Science and an Entrepreneur
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
              
              <div className="flex items-center gap-2 px-4 py-3 rounded-full border border-white/5 bg-white/5 text-xs text-gray-400 ml-auto md:ml-0">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_#22c55e]"></span>
                Current projects
              </div>
            </div>
          </div>
          
          {/* Right Column: Profile Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full p-2 group cursor-pointer">
              <div className="absolute inset-0 rounded-full border border-dashed border-cyan-400/30 group-hover:border-cyan-400/60 animate-[spin_20s_linear_infinite] transition-colors"></div>
              <div className="absolute inset-2 rounded-full border border-white/10 bg-white/5"></div>
              
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
                <div className="flex flex-col md:flex-row gap-8 relative animate-in fade-in zoom-in duration-300">
                  <button 
                    onClick={(e) => { e.stopPropagation(); setShowMRI(false); }}
                    className="absolute -top-2 -right-2 p-2 text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-colors z-20"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                  </button>

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
                <div className="flex flex-col md:flex-row gap-8 relative animate-in fade-in zoom-in duration-300">
                  <button 
                    onClick={(e) => { e.stopPropagation(); setShowHiveMind(false); }}
                    className="absolute -top-2 -right-2 p-2 text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-colors z-20"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                  </button>

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

                  <div className="flex-1 w-full flex justify-center items-center">
                     <SwarmSimulation />
                  </div>
                </div>
              )}
            </div>

            {/* Project 3: VeiledGuard (Edge Vision) */}
            <a 
              href="/veiledguard" 
              className="block bg-[#0a0a0a] border border-white/10 rounded-2xl p-3 hover:border-white/20 transition-all group cursor-pointer"
            >
              <div className="w-full h-48 bg-linear-to-br from-green-900/40 to-black rounded-xl mb-4 overflow-hidden relative flex items-center justify-center">
                 <Terminal size={48} className="text-green-500/50 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="flex gap-2 mb-3 px-1 flex-wrap">
                <span className="bg-green-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-md">Computer Vision</span>
                <span className="bg-red-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-md">Real-Time</span>
                <span className="bg-cyan-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-md">Edge AI</span>
              </div>
              <div className="px-1 pb-2">
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">VeiledGuard</h3>
                <p className="text-sm text-gray-400 line-clamp-2">A privacy-first edge AI agent that monitors screen presence and autonomously blocks distractions.</p>
              </div>
            </a>
          </div>
        </div>

        {/* Featured ML Project Link */}
        <div className="mt-12 bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:border-emerald-500/30 transition duration-300">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Library Seat AI Agent</h3>
              <p className="text-gray-400 max-w-xl">
                A real-time edge vision system I engineered to detect seat occupancy and optimize social distancing using YOLOv8 and spatial logic. Try the live webcam demo directly in your browser.
              </p>
            </div>
            <Link 
              href="/library-seat" 
              className="shrink-0 px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl transition shadow-[0_0_20px_rgba(52,211,153,0.3)]"
            >
              Launch Live Demo 🚀
            </Link>
          </div>
        </div>

        {/* Project 4: Offline RAG */}
        <div className="mt-6 bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-cyan-400/50 transition-all group">
          <Terminal className="text-cyan-400 mb-6 group-hover:scale-110 transition-transform" size={32} />
          <h2 className="text-2xl font-bold mb-4">Offline RAG</h2>
          <p className="text-gray-400 text-sm mb-6">
            Privacy-first document retrieval assistant utilizing ChromaDB and lightweight embedding models for offline technical paper analysis.
          </p>
          <div className="flex gap-2 flex-wrap">
            <span className="text-[10px] uppercase bg-white/10 px-2 py-1 rounded">LangChain</span>
            <span className="text-[10px] uppercase bg-white/10 px-2 py-1 rounded">ChromaDB</span>
          </div>
        </div>

        {/* --- THE RIG SECTION --- */}
        <section className="py-16 relative z-10 mt-12">
          <div className="bg-[#0a0a0a] border border-purple-500/20 rounded-3xl p-8 md:p-12 hover:border-purple-500/40 transition-all group relative overflow-hidden flex flex-col md:flex-row items-center gap-10">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#805ad510_1px,transparent_1px),linear-gradient(to_bottom,#805ad510_1px,transparent_1px)] bg-size-[24px_24px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-50"></div>
            <div className="absolute -right-20 -top-20 w-72 h-72 bg-purple-600/10 blur-[100px] rounded-full group-hover:bg-purple-600/20 transition-all duration-700"></div>

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
        <section className="py-16 relative z-10 w-full overflow-hidden">
          <h3 className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-8">Tech Stack & Arsenal</h3>
          <div className="relative flex overflow-x-hidden">
            <div className="flex w-max animate-marquee gap-4 pr-4">
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

        {/* --- ABOUT ME SECTION (Narrative + Constellation) --- */}
        <section id="about" className="py-24 relative z-10 mt-12">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">About Me</h2>
            <p className="text-gray-400 text-lg">My background, mission, and journey.</p>
          </div>

          {/* Short Bio Description */}
          <div className="mb-20 bg-[#0f1115]/80 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none transition-colors duration-700"></div>
            <p className="text-xl text-gray-300 leading-relaxed font-light relative z-10">
              I'm <strong className="text-white font-semibold">Osama Ibn Mahfuz</strong>, an Artificial Intelligence undergraduate at Shanghai University of Engineering Science (SUES), originally from Bangladesh. I specialize in engineering lightweight deep learning architectures, real-time computer vision systems, and swarm intelligence algorithms. Beyond technical development, I bridge the gap between engineering and global business as the CEO of <strong className="text-white font-semibold">OrbiScholar</strong> and Regional Manager (Asia) at <strong className="text-white font-semibold">OrbisMec</strong>. My ultimate focus is building scalable AI solutions while democratizing cross-border education and industrial supply chains.
            </p>
          </div>

          {/* Interactive Constellation */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <Sparkles className="text-cyan-400" size={24} />
              Experience & Impact Map
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {aboutData.constellation.map((hub) => (
                <div
                  key={hub.id}
                  className={`block bg-[#0a0a0a]/80 backdrop-blur-xl ${hub.theme.border} border rounded-4xl p-8 md:p-10 ${hub.theme.hoverBorder} transition-all duration-500 group relative overflow-hidden ${activeNode === hub.id ? `shadow-2xl ${hub.theme.shadow} scale-[1.02]` : 'scale-100 shadow-none'}`}
                  onMouseEnter={() => setActiveNode(hub.id)}
                  onMouseLeave={() => setActiveNode(null)}
                >
                  <div className={`absolute top-0 right-0 w-64 h-64 ${hub.theme.bgGlow} blur-3xl rounded-full pointer-events-none ${hub.theme.bgGlowHover} transition-colors duration-700`}></div>
                  
                  <div className="relative z-10 flex gap-6 items-center mb-10 pb-6 border-b border-white/5">
                    <div className={`w-16 h-16 shrink-0 rounded-2xl flex items-center justify-center border shadow-[0_0_30px_-5px_currentColor] ${hub.theme.iconBox}`}>
                      {hub.icon}
                    </div>
                    <h3 className={`text-2xl font-bold text-white ${hub.theme.textHover} transition-colors`}>
                      {hub.label}
                    </h3>
                  </div>

                  <div className={`space-y-6 transition-all duration-500 ${activeNode === hub.id ? 'opacity-100' : 'opacity-70'}`}>
                    {hub.nodes.map((node, index) => (
                      <div key={index} className={`flex items-start gap-4 ${activeNode === hub.id ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-80'} transition-all duration-500`} style={{ transitionDelay: `${index * 50}ms` }}>
                        <div className="w-2 h-2 mt-2.5 shrink-0 rounded-full relative">
                          <div className={`absolute inset-0 rounded-full ${hub.theme.dot} ${activeNode === hub.id ? 'animate-pulse' : ''}`}></div>
                          <div className={`absolute inset-0 rounded-full ${hub.theme.dot}/50 blur-sm scale-150`}></div>
                        </div>
                        <div className="flex-1 pb-4 border-b border-white/5 last:border-0 last:pb-0">
                          <p className="text-white font-bold text-lg leading-tight mb-1">{node.role}</p>
                          <p className={`${hub.theme.companyText} font-medium text-sm leading-snug`}>{node.company}</p>
                          <p className="text-gray-500 text-xs mt-1.5 font-mono">{node.duration}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>

      <footer className="mt-12 pb-12 flex flex-col items-center gap-6 relative z-10">
        <div className="flex gap-6 text-gray-500">
          <Github className="hover:text-white cursor-pointer transition-colors" size={24} />
          <Linkedin className="hover:text-white cursor-pointer transition-colors" size={24} />
          <Mail className="hover:text-white cursor-pointer transition-colors" size={24} />
        </div>
        <p className="text-gray-600 text-sm font-mono tracking-wider">Osama Ibn Mahfuz © 2026</p>
      </footer>
    </main>
  );
}