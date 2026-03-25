'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { Github, Linkedin, Mail, Brain, Building2, Terminal, ArrowRight, Bot } from 'lucide-react';
import { Code, BrainCircuit, Scan, Network, Share2, Cpu, GitBranch, TerminalSquare, Database, MapPin, Monitor } from 'lucide-react';
import { FileText, Sparkles, GraduationCap, HeartHandshake, BookOpen } from 'lucide-react'; 
import dynamic from 'next/dynamic';
import Guestbook from './components/Guestbook';

const MRIAnalyzer = dynamic(() => import('./components/MRIAnalyzer'), { ssr: false });
const SwarmSimulation = dynamic(() => import('./components/SwarmSimulation'), { ssr: false });

export default function Portfolio() {
  const [showMRI, setShowMRI] = useState(false);
  const [showHiveMind, setShowHiveMind] = useState(false);
  const [showOSMenu, setShowOSMenu] = useState(false);
  const [showContact, setShowContact] = useState(false); // New state for contact dropdown

  // Core Data Restored & Retained for the Flowchart Layout
  const aboutData = {
    constellation: [
      {
        id: 'ventures',
        label: 'Business Ventures',
        icon: <Building2 size={24} />,
        theme: {
          border: 'border-cyan-500/30', hoverBorder: 'hover:border-cyan-400', 
          bgGlow: 'bg-cyan-950/30', iconBox: 'text-cyan-400',
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
        icon: <GraduationCap size={24} />,
        theme: {
          border: 'border-emerald-500/30', hoverBorder: 'hover:border-emerald-400',
          bgGlow: 'bg-emerald-950/30', iconBox: 'text-emerald-400',
          dot: 'bg-emerald-400', companyText: 'text-emerald-300'
        },
        nodes: [
          { role: 'BSc, Artificial Intelligence', company: 'Shanghai University of Engineering Science', duration: '09/2023 - Present' },
          { role: 'Higher Secondary Certificate', company: 'Notre Dame College, Dhaka', duration: '06/2020' },
          { role: 'National Round Contestant', company: 'Bangladesh Math & Physics Olympiads', duration: '2018' },
          { role: 'Bronze Honor', company: 'International Youth Math Challenge', duration: 'Awarded' },
        ]
      },
      {
        id: 'mentorship',
        label: 'Education & Mentorship',
        icon: <BookOpen size={24} />,
        theme: {
          border: 'border-blue-500/30', hoverBorder: 'hover:border-blue-400',
          bgGlow: 'bg-blue-950/30', iconBox: 'text-blue-400',
          dot: 'bg-blue-400', companyText: 'text-blue-300'
        },
        nodes: [
          { role: 'Math & Physics Instructor', company: 'Science Point Academic Care, Chattogram', duration: '01/2022 - 05/2022' },
          { role: 'Private Home Tutor', company: 'Mathematics, Physics & Science', duration: '01/2021 - 05/2023' },
          { role: 'Executive Member', company: 'Notre Dame Math Club', duration: '2018 - 2020' },
        ]
      },
      {
        id: 'social',
        label: 'Social Impact',
        icon: <HeartHandshake size={24} />,
        theme: {
          border: 'border-purple-500/30', hoverBorder: 'hover:border-purple-400',
          bgGlow: 'bg-purple-950/30', iconBox: 'text-purple-400',
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

        {/* --- HERO SECTION --- */}
        <section className="relative pt-32 pb-20 w-full max-w-7xl mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-16 z-20">
           <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-125 h-125 bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none"></div>

           <div className="flex-1 w-full relative z-10">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                <span className="text-white">Hi! It's me </span>
                <br className="hidden md:block"/>
                <span className="text-cyan-400">Osama.</span>
              </h1>

              <p className="text-gray-400 text-lg max-w-xl font-light mb-8 leading-relaxed">
                An AI Engineering student and Entrepreneur crafting intelligent, vision-driven, and swarm-based solutions at Shanghai University of Engineering Science.
              </p>

              <div className="flex flex-wrap gap-2.5 mb-10">
                <span className="text-xs font-bold px-3 py-1.5 rounded-lg bg-blue-600 text-white tracking-wide shadow-sm">
                  Deep Learning & CNNs
                </span>
                <span className="text-xs font-bold px-3 py-1.5 rounded-lg bg-emerald-500 text-white tracking-wide shadow-sm">
                  Computer Vision Systems
                </span>
                <span className="text-xs font-bold px-3 py-1.5 rounded-lg bg-indigo-600 text-white tracking-wide shadow-sm">
                  Swarm Intelligence
                </span>
              </div>

              {/* UPDATED BUTTONS */}
              <div className="flex flex-wrap items-center gap-4">
                 
                 {/* Resume Button */}
                 <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="px-8 py-3.5 bg-white/5 border border-white/10 text-white font-bold text-sm rounded-full hover:border-cyan-400 hover:text-cyan-400 transition-all shadow-lg flex items-center gap-2 group cursor-pointer">
                    <FileText size={16} className="text-cyan-400 group-hover:animate-pulse" /> Resume
                 </a>
                 
                 {/* Contact Me Dropdown */}
                 <div 
                    className="relative"
                    onMouseLeave={() => setShowContact(false)}
                 >
                    <button 
                       onClick={() => setShowContact(!showContact)}
                       className="px-8 py-3.5 bg-white/5 border border-white/10 text-white font-bold text-sm rounded-full hover:bg-white/10 transition-colors flex items-center gap-2 cursor-pointer"
                    >
                       <Mail size={16} className="text-gray-400" /> Contact Me
                    </button>

                    {showContact && (
                       <div className="absolute top-[110%] left-0 w-64 bg-[#0a0a0f] border border-cyan-500/40 rounded-xl p-4 shadow-[0_20px_50px_rgba(0,0,0,0.8)] z-50 backdrop-blur-xl animate-in fade-in zoom-in duration-200">
                          <p className="text-xs text-gray-300 leading-relaxed mb-3">
                             Feel free to reach out at:<br/>
                             <span className="font-mono text-cyan-400 tracking-wide mt-1 block">osamaibnmahfuz@gmail.com</span>
                          </p>
                          <a 
                             href="mailto:osamaibnmahfuz@gmail.com" 
                             className="w-full flex justify-center items-center gap-2 px-4 py-2.5 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 hover:bg-cyan-500/20 transition-all rounded-lg text-xs font-bold"
                          >
                             <Mail size={14} /> Click here to send
                          </a>
                       </div>
                    )}
                 </div>

                 {/* Current Projects Link */}
                 <a href="#current-projects" className="flex items-center gap-2 px-6 py-3.5 bg-white/5 border border-white/10 rounded-full text-gray-400 hover:text-white hover:border-white/20 transition-all font-medium text-xs tracking-wider cursor-pointer sm:flex">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    Current projects
                 </a>
              </div>
           </div>

           <div className="w-full lg:w-5/12 relative flex justify-center lg:justify-end mt-12 lg:mt-0">
               <div className="relative w-72 h-96 sm:w-85 sm:h-105 rounded-[2.5rem] p-0.5 bg-gradient-to-br from-cyan-400/40 via-cyan-900/10 to-transparent group hover:shadow-[0_0_40px_rgba(34,211,238,0.2)] transition-all duration-700">
                  <div className="w-full h-full rounded-[2.4rem] overflow-hidden relative bg-[#05050a] border border-black group-hover:border-cyan-500/50 transition-colors">
                     <img src="/avatar.jpg" alt="Osama" className="w-full h-full object-cover object-center scale-105 group-hover:scale-100 transition-transform duration-700 opacity-90 group-hover:opacity-100" />
                     <div className="absolute inset-0 bg-gradient-to-t from-[#05050a] via-transparent to-transparent opacity-80 pointer-events-none"></div>
                  </div>
                  <div className="absolute -left-4 sm:-left-10 bottom-12 bg-[#0a0c10]/80 backdrop-blur-xl border border-white/10 px-5 py-3 rounded-2xl shadow-2xl z-20 flex items-center gap-4 group-hover:-translate-y-2 transition-transform duration-500">
                     <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20 shrink-0 group-hover:bg-cyan-500/20 transition-colors">
                        <MapPin className="text-cyan-400" size={18} />
                     </div>
                     <div>
                        <p className="text-sm text-white font-bold leading-tight">Shanghai, CN</p>
                        <p className="text-[10px] text-gray-500 font-mono mt-0.5">FROM: CHITTAGONG, BD</p>
                     </div>
                  </div>
               </div>
           </div>
        </section>

        {/* --- PROJECTS SECTION --- */}
        <div id="projects" className="mt-12">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">My Projects</h2>
            <p className="text-gray-400">Always working on something new, check back often.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Project 1: Brain MRI */}
            <div 
              className={`bg-[#0a0a0a] border border-white/10 rounded-2xl transition-all duration-500 overflow-hidden relative ${
                showMRI ? 'md:col-span-2 lg:col-span-3 ring-1 ring-cyan-500/50 shadow-[0_0_30px_rgba(6,182,212,0.15)] p-6' : 'hover:border-white/20 cursor-pointer group p-3'
              }`}
              onClick={() => !showMRI && setShowMRI(true)}
            >
              {!showMRI ? (
                <>
                  <div className="w-full h-48 rounded-xl mb-4 overflow-hidden relative border border-white/5 bg-black">
                     <img 
                       src="/project logo.jpg" 
                       alt="BrainOnco-100K Logo" 
                       className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                     />
                  </div>
                  <div className="flex gap-2 mb-3 px-1 flex-wrap">
                    <span className="bg-blue-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-md">CNN</span>
                    <span className="bg-purple-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-md">PyTorch</span>
                    <span className="bg-emerald-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-md">Medical AI</span>
                  </div>
                  <div className="px-1 pb-2">
                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">BrainOnco-100K</h3>
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
                       <h3 className="text-3xl font-bold text-white tracking-tight">BrainOnco-100K</h3>
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

            {/* Project 2: HiveMind */}
            <div 
              className={`bg-[#0a0a0a] border border-white/10 rounded-2xl transition-all duration-500 overflow-hidden relative ${
                showHiveMind ? 'md:col-span-2 lg:col-span-3 ring-1 ring-pink-500/50 shadow-[0_0_30px_rgba(236,72,153,0.15)] p-6' : 'hover:border-white/20 cursor-pointer group p-3'
              }`}
              onClick={() => !showHiveMind && setShowHiveMind(true)}
            >
              {!showHiveMind ? (
                <>
                  <div className="w-full h-48 rounded-xl mb-4 overflow-hidden relative border border-white/5 bg-black">
                     <img 
                       src="/HiveMind logo.jpg" 
                       alt="HiveMind Logo" 
                       className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                     />
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

            {/* Project 3: VeiledGuard */}
            <a 
              href="/veiledguard" 
              className="block bg-[#0a0a0a] border border-white/10 rounded-2xl p-3 hover:border-white/20 transition-all group cursor-pointer"
            >
              <div className="w-full h-48 rounded-xl mb-4 overflow-hidden relative border border-white/5 bg-black">
                 <img 
                   src="/veiledguard logo.jpg" 
                   alt="VeiledGuard Logo" 
                   className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                 />
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
        <a href="/offline-rag" className="block mt-6 border border-white/10 rounded-3xl p-1 hover:border-indigo-500/40 transition-all group relative overflow-hidden bg-gradient-to-br from-white/5 to-transparent">
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none group-hover:bg-indigo-500/20 transition-colors duration-700 z-0"></div>
          <div className="bg-[#0a0a0a] rounded-[1.35rem] p-8 md:p-10 flex flex-col md:flex-row gap-10 items-center relative z-10 w-full h-full border border-black group-hover:border-indigo-900/50 transition-colors">
            
            <div className="flex-1 w-full">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-indigo-500/10 rounded-xl border border-indigo-500/20 text-indigo-400 group-hover:scale-110 transition-transform duration-500">
                  <Database size={24} />
                </div>
                <h2 className="text-3xl font-bold text-white group-hover:text-indigo-400 transition-colors tracking-tight">Offline RAG</h2>
              </div>
              <p className="text-gray-400 text-base mb-6 leading-relaxed max-w-xl">
                A 100% local, privacy-first Retrieval-Augmented Generation system. Built to allow secure chatting with technical PDFs without internet access or data leaks.
              </p>
              <div className="flex gap-2 flex-wrap mb-8">
                <span className="text-[11px] font-bold px-3 py-1.5 rounded-lg bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 uppercase tracking-wider">LangChain LCEL</span>
                <span className="text-[11px] font-bold px-3 py-1.5 rounded-lg bg-orange-500/10 text-orange-400 border border-orange-500/20 uppercase tracking-wider">ChromaDB</span>
                <span className="text-[11px] font-bold px-3 py-1.5 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 uppercase tracking-wider">Ollama (Phi-3)</span>
              </div>
              <div className="inline-flex items-center gap-2 text-indigo-400 font-bold group-hover:gap-3 transition-all text-sm uppercase tracking-widest">
                Explore Architecture <ArrowRight size={16} />
              </div>
            </div>

            <div className="w-full md:w-105 shrink-0 bg-[#0d1117] border border-white/10 rounded-2xl p-6 shadow-2xl relative overflow-hidden">
              <div className="flex gap-2 mb-8 pb-4 border-b border-white/5">
                 <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                 <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                 <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="flex items-center justify-between text-gray-500 text-xs font-mono mb-8 px-2">
                <div className="flex flex-col items-center gap-2">
                  <FileText className="text-gray-400 group-hover:text-white transition-colors" size={24}/>
                  <span>PDF</span>
                </div>
                <div className="flex-1 border-t-2 border-dashed border-gray-700 mx-3 relative">
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0d1117] px-2 text-[9px] text-cyan-500 uppercase font-bold tracking-widest">Embed</div>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Database className="text-indigo-500 group-hover:text-indigo-400 transition-colors" size={24}/>
                  <span className="text-indigo-400">VectorDB</span>
                </div>
                <div className="flex-1 border-t-2 border-dashed border-gray-700 mx-3 relative">
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0d1117] px-2 text-[9px] text-purple-500 uppercase font-bold tracking-widest">Retrieve</div>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Bot className="text-purple-500 group-hover:text-purple-400 transition-colors" size={24}/>
                  <span className="text-purple-400">Phi-3</span>
                </div>
              </div>
              <div className="pt-4 border-t border-white/5 font-mono text-xs text-gray-400 flex items-center gap-2">
                <span className="text-green-400">~/osama</span>
                <span className="text-blue-400">➜</span> 
                <span className="text-gray-300">chain.invoke(query)</span>
                <span className="w-2 h-4 bg-gray-400 animate-pulse ml-1"></span>
              </div>
            </div>

          </div>
        </a>

        {/* --- CURRENT PROJECTS PLACEHOLDER --- */}
        <section id="current-projects" className="py-16 relative z-20 max-w-6xl mx-auto px-6 mt-12 scroll-mt-24">
          <div className="flex items-center gap-3 mb-8">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <h3 className="text-2xl font-bold text-white tracking-tight uppercase">Current Focus</h3>
          </div>
          
          <div className="bg-[#05050a] border border-white/10 border-dashed rounded-[1.4rem] p-10 md:p-16 flex flex-col items-center justify-center text-center relative overflow-hidden group hover:border-green-500/30 transition-colors">
             <div className="absolute inset-0 bg-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
             
             <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform duration-500">
               <Bot size={28} className="text-green-400" />
             </div>
             
             <h4 className="text-xl font-bold text-gray-200 mb-3">System Under Development</h4>
             <p className="text-gray-500 max-w-md text-sm leading-relaxed mb-6">
               I am actively building a new AI-driven architecture. Module parameters and repository links will be initialized here upon deployment.
             </p>
             
             <div className="flex items-center gap-2 text-xs font-mono text-green-500/70 uppercase tracking-widest bg-green-500/10 px-4 py-2 rounded-full border border-green-500/20">
               Status: Compiling...
             </div>
          </div>
        </section>

       {/* --- THE RIG SECTION --- */}
        <section className="py-8 relative z-20 max-w-6xl mx-auto px-6 mt-12">
          <div className="relative rounded-3xl p-px bg-gradient-to-r from-cyan-500/50 via-purple-600/50 to-pink-500/50 group hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-shadow duration-700">
            <div className="bg-[#05050a] rounded-[1.4rem] p-5 md:p-6 relative flex flex-col lg:flex-row items-center justify-between gap-6">
              
              <div className="absolute inset-0 rounded-[1.4rem] overflow-hidden pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ff1_1px,transparent_1px),linear-gradient(to_bottom,#0ff1_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_20%,transparent_100%)] opacity-20"></div>
                <div className="absolute -left-10 -bottom-10 w-48 h-48 bg-cyan-600/20 blur-[80px] rounded-full mix-blend-screen"></div>
              </div>

              <div className="relative z-10 flex-1 w-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-white/5 rounded-lg border border-white/10 shadow-[0_0_10px_rgba(255,255,255,0.05)]">
                    <Cpu className="text-white" size={18} />
                  </div>
                  <h3 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-pink-400 tracking-tight uppercase">
                    The Rig
                  </h3>
                  <span className="text-[9px] font-mono text-cyan-400 border border-cyan-500/30 px-2 py-0.5 rounded-full ml-2 hidden sm:block bg-cyan-500/10">LOCAL_COMPUTE_NODE</span>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full relative">
                  
                  <div 
                    onClick={() => setShowOSMenu(!showOSMenu)}
                    onMouseLeave={() => setShowOSMenu(false)}
                    className="relative flex items-center gap-3 bg-white/5 border border-white/5 p-3 rounded-xl hover:bg-white/10 hover:border-cyan-500/50 transition-all group/card cursor-pointer"
                  >
                    <TerminalSquare size={16} className="text-cyan-400 drop-shadow-[0_0_5px_#22d3ee]" />
                    <div>
                      <p className="text-[9px] text-gray-500 uppercase tracking-widest font-bold leading-none mb-1">OS</p>
                      <p className="text-xs font-bold text-gray-200 leading-none group-hover/card:text-cyan-300 transition-colors">Triple-Boot ▾</p>
                    </div>

                    {showOSMenu && (
                      <div className="absolute top-[110%] left-0 w-48 bg-[#0a0a0f] border border-cyan-500/40 rounded-xl p-4 shadow-[0_20px_50px_rgba(0,0,0,0.8)] z-50 backdrop-blur-xl">
                        <p className="text-[9px] font-mono text-cyan-400 mb-3 border-b border-cyan-500/30 pb-2 uppercase tracking-widest">Select_Boot_Drive</p>
                        <ul className="space-y-3 text-xs font-bold text-gray-300">
                          <li className="flex items-center gap-3 hover:text-white transition-colors cursor-default">
                            <div className="w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_8px_#3b82f6]"></div> Fedora Linux
                          </li>
                          <li className="flex items-center gap-3 hover:text-white transition-colors cursor-default">
                            <div className="w-2 h-2 bg-orange-500 rounded-full shadow-[0_0_8px_#f97316]"></div> Ubuntu 22.04
                          </li>
                          <li className="flex items-center gap-3 hover:text-white transition-colors cursor-default">
                            <div className="w-2 h-2 bg-cyan-500 rounded-full shadow-[0_0_8px_#06b6d4]"></div> Windows 11
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center gap-3 bg-white/5 border border-white/5 p-3 rounded-xl hover:bg-white/10 hover:border-pink-500/50 transition-all group/card cursor-default">
                    <Monitor size={16} className="text-pink-400 drop-shadow-[0_0_5px_#ec4899]" />
                    <div>
                      <p className="text-[9px] text-gray-500 uppercase tracking-widest font-bold leading-none mb-1">GPU</p>
                      <p className="text-xs font-bold text-gray-200 leading-none">RTX 3060 6GB</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 bg-white/5 border border-white/5 p-3 rounded-xl hover:bg-white/10 hover:border-purple-500/50 transition-all group/card cursor-default">
                    <Cpu size={16} className="text-purple-400 drop-shadow-[0_0_5px_#a855f7]" />
                    <div>
                      <p className="text-[9px] text-gray-500 uppercase tracking-widest font-bold leading-none mb-1">CPU</p>
                      <p className="text-xs font-bold text-gray-200 leading-none">i7 10th Gen</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 bg-white/5 border border-white/5 p-3 rounded-xl hover:bg-white/10 hover:border-emerald-500/50 transition-all group/card cursor-default">
                    <Database size={16} className="text-emerald-400 drop-shadow-[0_0_5px_#10b981]" />
                    <div>
                      <p className="text-[9px] text-gray-500 uppercase tracking-widest font-bold leading-none mb-1">RAM / ROM</p>
                      <p className="text-xs font-bold text-gray-200 leading-none">16GB / 1TB</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="hidden lg:flex w-24 h-24 shrink-0 items-center justify-center relative ml-4 pointer-events-none">
                 <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 via-purple-500 to-pink-500 rounded-full blur-[20px] opacity-40 animate-pulse"></div>
                 <div className="absolute inset-0 rounded-full border border-dashed border-cyan-400/40 animate-[spin_20s_linear_infinite]"></div>
                 <div className="absolute inset-2 rounded-full border-2 border-transparent border-t-cyan-400 border-b-pink-400 border-r-purple-500 border-l-transparent animate-[spin_12s_linear_infinite_reverse]"></div>
                 <div className="absolute inset-5 rounded-full border-2 border-dotted border-white/30 animate-[spin_8s_linear_infinite]"></div>
                 <div className="absolute inset-7 bg-[#0a0a0a] border border-white/20 rounded-full flex items-center justify-center z-20 shadow-[inset_0_0_10px_rgba(168,85,247,0.5)]">
                   <BrainCircuit className="text-white w-4 h-4 animate-[pulse_2s_ease-in-out_infinite]" />
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

        {/* --- ABOUT ME SECTION --- */}
        <section id="about" className="py-24 relative z-10 mt-12">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">About Me</h2>
            <p className="text-gray-400 text-lg">My background, mission, and journey.</p>
          </div>

          <div className="mb-20 bg-[#0f1115]/80 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none transition-colors duration-700"></div>
            <p className="text-xl text-gray-300 leading-relaxed font-light relative z-10">
              I'm <strong className="text-white font-semibold">Osama Ibn Mahfuz</strong>, an Artificial Intelligence undergraduate at Shanghai University of Engineering Science (SUES), originally from Bangladesh. I specialize in engineering lightweight deep learning architectures, real-time computer vision systems, and swarm intelligence algorithms. Beyond technical development, I bridge the gap between engineering and global business as the CEO of <strong className="text-white font-semibold">OrbiScholar</strong> and Regional Manager (Asia) at <strong className="text-white font-semibold">OrbisMec</strong>. My ultimate focus is building scalable AI solutions while democratizing cross-border education and industrial supply chains.
            </p>
          </div>

          {/* --- NEW FLOWCHART EXPERIENCE MAP --- */}
          <section className="py-12 relative z-10 w-full">
            <div className="flex items-center gap-3 mb-24 justify-center">
              <Network className="text-cyan-400" size={24} />
              <h3 className="text-3xl font-bold text-white tracking-tight uppercase text-center">
                Education & Experiences <span className="text-gray-600 font-mono text-base ml-2 tracking-widest">// Flowchart</span>
              </h3>
            </div>

            <div className="relative w-full max-w-5xl mx-auto">
              
              {/* Central Spine Pipeline */}
              <div className="absolute left-7 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/20 via-purple-500/20 to-pink-500/20 -translate-x-1/2">
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-16 bg-gradient-to-b from-transparent via-cyan-400 to-transparent animate-pulse-slow"></div>
              </div>

              {/* Start Node */}
              <div className="relative z-10 flex justify-start md:justify-center mb-16 pl-14 md:pl-0">
                <div className="bg-[#05050a] border border-cyan-500/30 px-6 py-2 rounded-full font-mono text-xs text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                  Journey
                </div>
              </div>

              {/* Flowchart Nodes Loop */}
              {aboutData.constellation.map((category, index) => {
                const isEven = index % 2 === 0;

                return (
                  <div key={category.id} className="relative w-full flex flex-col md:flex-row items-center mb-16 md:mb-24 last:mb-0">
                    
                    {/* Central Connector Dot */}
                    <div className="absolute left-7 md:left-1/2 flex items-center justify-center -translate-x-1/2 z-20 top-8 md:top-1/2 md:-translate-y-1/2">
                       <div className={`w-5 h-5 rounded-full bg-[#05050a] border-[3px] ${category.theme.border.replace('border-', 'border-').split('/')[0]} flex items-center justify-center shadow-[0_0_15px_currentColor] text-${category.theme.iconBox.split('-')[1]}-400`}>
                          <div className={`w-1.5 h-1.5 rounded-full ${category.theme.dot}`}></div>
                       </div>
                    </div>
                    
                    {/* Mobile Horizontal Connector */}
                    <div className="absolute left-7 md:hidden w-8 h-0.5 bg-white/10 top-8 z-0"></div>

                    {/* Left Column (Even items render here on desktop) */}
                    <div className={`w-full md:w-1/2 pl-14 md:pl-0 md:pr-12 ${isEven ? 'flex md:justify-end' : 'hidden md:flex'}`}>
                       {isEven && (
                          <div className={`w-full max-w-lg bg-[#05050a] border ${category.theme.border} rounded-3xl p-6 md:p-8 relative group hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 z-10`}>
                             
                             <div className={`flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6 border-b border-white/5 pb-5 md:flex-row-reverse`}>
                                <div className={`p-3 rounded-xl ${category.theme.bgGlow} border ${category.theme.border} ${category.theme.iconBox} transition-colors`}>
                                   {category.icon}
                                </div>
                                <h4 className="text-xl font-bold text-white tracking-tight">{category.label}</h4>
                             </div>

                             <div className="flex flex-col gap-3 w-full">
                                {category.nodes.map((node, i) => (
                                   <div key={i} className={`flex flex-col md:items-end md:text-right items-start text-left bg-white/5 border border-white/5 p-4 rounded-xl group-hover:bg-white/10 transition-colors`}>
                                      <h5 className="text-sm font-bold text-gray-200">{node.role}</h5>
                                      <p className="text-xs text-gray-400 mt-1">{node.company}</p>
                                      <span className={`text-[10px] font-mono mt-2 px-2 py-0.5 rounded-md bg-white/5 border border-white/10 ${category.theme.companyText}`}>{node.duration}</span>
                                   </div>
                                ))}
                             </div>

                          </div>
                       )}
                    </div>

                    {/* Right Column (Odd items render here on desktop) */}
                    <div className={`w-full md:w-1/2 pl-14 md:pl-12 mt-8 md:mt-0 ${!isEven ? 'flex md:justify-start' : 'hidden md:flex'}`}>
                       {!isEven && (
                          <div className={`w-full max-w-lg bg-[#05050a] border ${category.theme.border} rounded-3xl p-6 md:p-8 relative group hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 z-10`}>
                             
                             <div className={`flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6 border-b border-white/5 pb-5`}>
                                <div className={`p-3 rounded-xl ${category.theme.bgGlow} border ${category.theme.border} ${category.theme.iconBox} transition-colors`}>
                                   {category.icon}
                                </div>
                                <h4 className="text-xl font-bold text-white tracking-tight">{category.label}</h4>
                             </div>

                             <div className="flex flex-col gap-3 w-full">
                                {category.nodes.map((node, i) => (
                                   <div key={i} className={`flex flex-col items-start text-left bg-white/5 border border-white/5 p-4 rounded-xl group-hover:bg-white/10 transition-colors`}>
                                      <h5 className="text-sm font-bold text-gray-200">{node.role}</h5>
                                      <p className="text-xs text-gray-400 mt-1">{node.company}</p>
                                      <span className={`text-[10px] font-mono mt-2 px-2 py-0.5 rounded-md bg-white/5 border border-white/10 ${category.theme.companyText}`}>{node.duration}</span>
                                   </div>
                                ))}
                             </div>

                          </div>
                       )}
                    </div>

                  </div>
                );
              })}

              {/* End Node */}
              <div className="relative z-10 flex justify-start md:justify-center mt-16 pl-14 md:pl-0">
                <div className="bg-[#05050a] border border-white/20 px-6 py-2 rounded-full font-mono text-xs text-gray-400">
                  AWAITING_INPUT // NEXT_PHASE
                </div>
              </div>

            </div>
          </section>

        </section>

      </div>
      
      <Guestbook />

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