"use client";

import React from 'react';
import { Sparkles, GraduationCap, MapPin, MessageCircle, ArrowLeft, Globe, Factory, Briefcase, Building2 } from 'lucide-react';

export default function Startup() {
  return (
    <main className="min-h-screen bg-black text-white font-sans relative overflow-x-hidden selection:bg-cyan-900 selection:text-cyan-50">
      
      {/* Futuristic AI Glowing Aurora Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-indigo-900/20 blur-[120px] mix-blend-screen"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[50vw] h-[50vw] rounded-full bg-cyan-900/10 blur-[150px] mix-blend-screen"></div>
        <div className="absolute top-[40%] left-[50%] w-[30vw] h-[30vw] rounded-full bg-purple-900/10 blur-[120px] mix-blend-screen"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-12 md:pt-24 pb-12 relative z-10">
        
        {/* Navigation */}
        <nav className="flex justify-between items-center mb-16 md:mb-24">
          <div className="font-bold text-xl flex items-center gap-2">
            <Sparkles className="text-cyan-400" size={20} /> osama.dev
          </div>
          <div className="hidden md:flex gap-6 text-sm text-gray-400">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <a href="/#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="/startup" className="text-white font-medium">Startup</a>
            <a href="/#about" className="hover:text-white transition-colors">About</a>
          </div>
        </nav>

        {/* Header */}
        <div className="mb-16">
          <a href="/" className="inline-flex items-center gap-2 text-cyan-400 text-sm hover:underline mb-6">
            <ArrowLeft size={16} /> Back to Portfolio
          </a>
          <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
            Ventures & <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-indigo-400">Leadership.</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
            Beyond AI research, I build cross-border businesses that bridge gaps, optimize industrial supply chains, and create global opportunities.
          </p>
        </div>

        <div className="flex flex-col gap-12">
          
          {/* --- ORBISCHOLAR FEATURE CARD (Indigo Theme) --- */}
          <div className="block bg-[#050505]/80 backdrop-blur-xl border border-white/10 rounded-4xl p-8 md:p-12 hover:border-indigo-500/50 transition-all group relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 blur-3xl rounded-full pointer-events-none group-hover:bg-indigo-500/20 transition-colors duration-700"></div>
            
            <div className="flex flex-col lg:flex-row gap-12 items-start relative z-10">
              
              {/* Left Column: Details */}
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-indigo-500/10 rounded-2xl flex items-center justify-center border border-indigo-500/30 shadow-[0_0_30px_-5px_rgba(99,102,241,0.3)]">
                    <GraduationCap size={32} className="text-indigo-400" />
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white group-hover:text-indigo-400 transition-colors">OrbiScholar</h2>
                    <div className="flex items-center gap-2 mt-2">
                      <Briefcase size={14} className="text-indigo-400" />
                      <span className="text-indigo-300 font-semibold text-sm tracking-wide uppercase">Co-Founder & CEO</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-2xl">
                  An international educational consulting agency empowering students from Bangladesh to achieve their academic dreams in China. We provide free guidance, scholarship assistance, document support, and end-to-end admissions to top-tier universities.
                </p>
                
                {/* Tags */}
                <div className="flex gap-2 mb-10 flex-wrap">
                  <span className="bg-indigo-950/50 text-indigo-300 border border-indigo-500/20 text-xs font-bold px-4 py-2 rounded-lg tracking-wider uppercase">EdTech</span>
                  <span className="bg-blue-950/50 text-blue-300 border border-blue-500/20 text-xs font-bold px-4 py-2 rounded-lg tracking-wider uppercase">Consulting</span>
                  <span className="bg-emerald-950/50 text-emerald-300 border border-emerald-500/20 text-xs font-bold px-4 py-2 rounded-lg tracking-wider uppercase">Global Admissions</span>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  <a href="https://www.orbischolar.com" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl flex items-center gap-2 transition-all font-bold shadow-lg shadow-indigo-900/50">
                    <Globe size={18} /> Visit Website
                  </a>
                  <a href="https://wa.me/8613122133712" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl flex items-center gap-2 transition-all font-bold text-gray-300 hover:text-white">
                    <MessageCircle size={18} className="text-emerald-400" /> WhatsApp Us
                  </a>
                </div>
              </div>

              {/* Right Column: Locations */}
              <div className="w-full lg:w-80 bg-black/50 border border-white/5 rounded-3xl p-8 backdrop-blur-sm">
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                  <MapPin size={16} className="text-indigo-400" /> Our Offices
                </h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-white font-bold flex items-center gap-2 mb-2">
                      <Building2 size={14} className="text-gray-500" /> Shanghai HQ
                    </p>
                    <p className="text-sm text-gray-500 leading-relaxed">Qi Fan Road 199, Pudong New Area<br/>Shanghai City, China</p>
                  </div>
                  <div className="pt-6 border-t border-white/5">
                    <p className="text-white font-bold flex items-center gap-2 mb-2">
                      <Building2 size={14} className="text-gray-500" /> Rajshahi Branch
                    </p>
                    <p className="text-sm text-gray-500 leading-relaxed">Kadirganj, Rajshahi<br/>Bangladesh</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* --- ORBISMEC FEATURE CARD (Cyan Theme) --- */}
          <div className="block bg-[#050505]/80 backdrop-blur-xl border border-white/10 rounded-4xl p-8 md:p-12 hover:border-cyan-500/50 transition-all group relative overflow-hidden shadow-2xl">
            {/* NEW: Cyan Card Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 blur-3xl rounded-full pointer-events-none group-hover:bg-cyan-500/20 transition-colors duration-700"></div>
            
            <div className="flex flex-col lg:flex-row gap-12 items-start relative z-10">
              
              {/* Left Column: Details */}
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-8">
                  {/* NEW: Cyan Icon Styling */}
                  <div className="w-16 h-16 bg-cyan-500/10 rounded-2xl flex items-center justify-center border border-cyan-500/30 shadow-[0_0_30px_-5px_rgba(34,211,238,0.3)]">
                    <Factory size={32} className="text-cyan-400" />
                  </div>
                  <div>
                    {/* NEW: Cyan Title on Hover */}
                    <h2 className="text-3xl md:text-4xl font-bold text-white group-hover:text-cyan-400 transition-colors">OrbisMec</h2>
                    <div className="flex items-center gap-2 mt-2">
                      <Briefcase size={14} className="text-cyan-400" />
                      {/* NEW: Cyan Role title */}
                      <span className="text-cyan-300 font-semibold text-sm tracking-wide uppercase">Co-Founder & Regional Mgr (Asia)</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-2xl">
                  A trusted partner for industrial sourcing and turnkey project execution. From supplier selection and factory audits in China to global logistics and installation, we ensure transparency and reliability across heavy manufacturing sectors.
                </p>
                
                {/* Tags (Now Cyan/Teal/Green progression) */}
                <div className="flex gap-2 mb-10 flex-wrap">
                  <span className="bg-cyan-950/50 text-cyan-300 border border-cyan-500/20 text-xs font-bold px-4 py-2 rounded-lg tracking-wider uppercase">B2B Sourcing</span>
                  <span className="bg-teal-950/50 text-teal-300 border border-teal-500/20 text-xs font-bold px-4 py-2 rounded-lg tracking-wider uppercase">Turnkey Projects</span>
                  <span className="bg-green-950/50 text-green-300 border border-green-500/20 text-xs font-bold px-4 py-2 rounded-lg tracking-wider uppercase">Global Supply Chain</span>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  {/* NEW: Cyan Website Button */}
                  <a href="https://orbismec.com" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl flex items-center gap-2 transition-all font-bold shadow-lg shadow-cyan-900/50">
                    <Globe size={18} /> Visit Website
                  </a>
                  <a href="https://wa.me/8613166409570" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl flex items-center gap-2 transition-all font-bold text-gray-300 hover:text-white">
                    <MessageCircle size={18} className="text-emerald-400" /> WhatsApp Us
                  </a>
                </div>
              </div>

              {/* Right Column: Locations */}
              <div className="w-full lg:w-80 bg-black/50 border border-white/5 rounded-3xl p-8 backdrop-blur-sm">
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                  {/* NEW: Cyan Location Icon */}
                  <MapPin size={16} className="text-cyan-400" /> Global Offices
                </h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-white font-bold flex items-center gap-2 mb-2">
                      <Building2 size={14} className="text-gray-500" /> China Office
                    </p>
                    <p className="text-sm text-gray-500 leading-relaxed">Songjiang District<br/>Shanghai, China</p>
                  </div>
                  <div className="pt-6 border-t border-white/5">
                    <p className="text-white font-bold flex items-center gap-2 mb-2">
                      <Building2 size={14} className="text-gray-500" /> USA Mailing Address
                    </p>
                    <p className="text-sm text-gray-500 leading-relaxed">8206 Louisiana Blvd NE<br/>Ste B #10347<br/>Albuquerque, NM 87113</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}