import React from 'react';
import { Github, Linkedin, Mail, Brain, Bug, Building2, Terminal } from 'lucide-react';

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white p-6 md:p-12 font-sans">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Header Section */}
        <header className="md:col-span-3 mb-8">
          <p className="text-cyan-400 text-sm font-mono mb-2 flex items-center gap-2">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span> PORTFOLIO
          </p>
          <h1 className="text-5xl font-bold mb-4">Osama Ibn Mahfuz</h1>
          <p className="text-xl text-gray-400">
            Student at <span className="text-cyan-400">Shanghai University of Engineering Science</span>
          </p>
          <div className="flex gap-3 mt-4">
            {['AI Engineering', 'Deep Learning', 'Computer Vision'].map((tag) => (
              <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-400">
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Project 1: MRI Analysis (Clickable Card) */}
        <a 
          href="https://github.com/OsamaIM/BRAIN_MRI_PROJECT" 
          target="_blank" 
          rel="noopener noreferrer"
          className="md:col-span-2 block bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-cyan-400/50 transition-all group cursor-pointer"
        >
          <Brain className="text-cyan-400 mb-6 group-hover:scale-110 transition-transform" size={32} />
          <h2 className="text-2xl font-bold mb-4 group-hover:text-cyan-400 transition-colors">Brain Tumor MRI Analysis</h2>
          <p className="text-gray-400 leading-relaxed mb-6">
            Deep learning pipeline leveraging CNNs for automated brain tumor detection. Designed and trained custom models directly on the Kaggle MRI dataset using data augmentation and transfer learning.
          </p>
          <div className="flex gap-2 flex-wrap">
            {['CNN', 'Medical AI', 'PyTorch'].map(t => (
              <span key={t} className="text-[10px] uppercase tracking-widest bg-white/10 px-2 py-1 rounded text-white">{t}</span>
            ))}
          </div>
        </a>

        {/* Project 2: Swarm Intelligence */}
        <section className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-cyan-400/50 transition-all group">
          <Bug className="text-cyan-400 mb-6 group-hover:scale-110 transition-transform" size={32} />
          <h2 className="text-2xl font-bold mb-4">Swarm Intelligence</h2>
          <p className="text-gray-400 text-sm mb-6">
            Optimizing referee positioning using bio-inspired algorithms. Exploring PSO for accuracy and energy efficiency.
          </p>
          <div className="flex gap-2">
            <span className="text-[10px] uppercase bg-white/10 px-2 py-1 rounded">Optimization</span>
            <span className="text-[10px] uppercase bg-white/10 px-2 py-1 rounded">PSO</span>
          </div>
        </section>

        {/* Flagship Project 1: HiveMind Swarm AI */}
        <section className="md:col-span-2 bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-cyan-400/50 transition-all group">
          <Brain className="text-cyan-400 mb-6 group-hover:scale-110 transition-transform" size={32} />
          <h2 className="text-2xl font-bold mb-4">HiveMind: LLM-Driven Swarm Intelligence</h2>
          <p className="text-gray-400 leading-relaxed mb-6">
            Real-time multi-agent physics simulation bridging classical Boids algorithms with a local neural network Overmind. Engineered a multi-threaded architecture to query a quantized Phi-3 model without dropping the 60 FPS physics engine. The foundation for optimizing sports referee line-of-sight.
          </p>
          <div className="flex gap-2 flex-wrap mb-6">
            {['PyGame', 'Vector Math', 'Local LLMs', 'Multi-Threading'].map(t => (
              <span key={t} className="text-[10px] uppercase tracking-widest bg-white/10 px-2 py-1 rounded">{t}</span>
            ))}
          </div>
          {/* GitHub Link */}
          <a href="https://github.com/OsamaIM/HiveMind-Swarm" target="_blank" rel="noopener noreferrer" className="text-cyan-400 text-sm hover:underline flex items-center gap-2 w-fit">
            <Github size={16} /> View Code on GitHub <span>-&gt;</span>
          </a>
        </section>

        {/* Project 2: Edge Vision Analytics */}
        <section className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-cyan-400/50 transition-all group">
          <Terminal className="text-cyan-400 mb-6 group-hover:scale-110 transition-transform" size={32} />
          <h2 className="text-2xl font-bold mb-4">Edge Vision</h2>
          <p className="text-gray-400 text-sm mb-6">
            Real-time object detection paired with semantic scene understanding, running entirely on local consumer hardware.
          </p>
          <div className="flex gap-2 flex-wrap">
            <span className="text-[10px] uppercase bg-white/10 px-2 py-1 rounded">YOLOv8</span>
            <span className="text-[10px] uppercase bg-white/10 px-2 py-1 rounded">Moondream2</span>
          </div>
        </section>

        {/* Project 3: MRI Analysis (Updated) */}
        <section className="md:col-span-2 bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-cyan-400/50 transition-all group">
          <Bug className="text-cyan-400 mb-6 group-hover:scale-110 transition-transform" size={32} />
          <h2 className="text-2xl font-bold mb-4">Brain Tumor MRI Analysis</h2>
          <p className="text-gray-400 leading-relaxed mb-6">
            Deep learning pipeline leveraging CNNs for automated brain tumor detection. Designed and trained custom models directly on the Kaggle MRI dataset using data augmentation and transfer learning.
          </p>
          <div className="flex gap-2 flex-wrap">
            {['CNN', 'Medical AI', 'PyTorch'].map(t => (
              <span key={t} className="text-[10px] uppercase tracking-widest bg-white/10 px-2 py-1 rounded">{t}</span>
            ))}
          </div>
        </section>

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
