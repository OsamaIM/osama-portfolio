import { Sparkles, GraduationCap, MapPin, MessageCircle, ArrowLeft, Globe } from 'lucide-react';

export default function Startup() {
  return (
    <main className="min-h-screen bg-black text-white font-sans relative overflow-x-hidden selection:bg-cyan-900 selection:text-cyan-50">
      
      {/* Futuristic AI Glowing Aurora Background (Matching Homepage) */}
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Ventures & <span className="text-cyan-400">Startups.</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
            Beyond AI research, I build cross-border businesses that bridge gaps and create global opportunities.
          </p>
        </div>

        {/* --- ORBISCHOLAR FEATURE CARD --- */}
        <div className="grid grid-cols-1 gap-6">
          
          <div className="block bg-white/5 border border-white/10 rounded-3xl p-6 md:p-10 hover:border-indigo-500/50 transition-all group relative overflow-hidden">
            {/* Subtle background glow for the card */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-3xl rounded-full pointer-events-none group-hover:bg-indigo-500/20 transition-colors duration-700"></div>
            
            <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
              
              {/* Left Column: Icon & Details */}
              <div className="flex-1">
                <div className="w-16 h-16 bg-indigo-500/20 rounded-2xl flex items-center justify-center mb-6 border border-indigo-500/30">
                  <GraduationCap size={32} className="text-indigo-400" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">OrbiScholar</h2>
                <p className="text-gray-400 leading-relaxed mb-6 max-w-lg">
                  An international educational consulting agency empowering students from Bangladesh to achieve their academic dreams in China. We provide free guidance, scholarship assistance, document support, and end-to-end admissions to top universities.
                </p>
                
                {/* Tags */}
                <div className="flex gap-2 mb-8 flex-wrap">
                  <span className="bg-indigo-600/30 text-indigo-300 border border-indigo-500/30 text-xs font-semibold px-3 py-1.5 rounded-full">EdTech</span>
                  <span className="bg-blue-600/30 text-blue-300 border border-blue-500/30 text-xs font-semibold px-3 py-1.5 rounded-full">Consulting</span>
                  <span className="bg-emerald-600/30 text-emerald-300 border border-emerald-500/30 text-xs font-semibold px-3 py-1.5 rounded-full">Global Admissions</span>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  <a href="https://www.orbischolar.com" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl flex items-center gap-2 transition-all text-sm font-medium">
                    <Globe size={16} /> Visit Website
                  </a>
                  {/* WhatsApp API Link */}
                  <a href="https://wa.me/8613122133712" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl flex items-center gap-2 transition-all text-sm font-medium">
                    <MessageCircle size={16} className="text-green-400" /> WhatsApp Us
                  </a>
                </div>
              </div>

              {/* Right Column: Locations */}
              <div className="w-full md:w-80 bg-black/40 border border-white/5 rounded-2xl p-6">
                <h3 className="text-sm font-bold text-gray-300 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <MapPin size={16} className="text-cyan-400" /> Our Offices
                </h3>
                
                <div className="space-y-6">
                  {/* Shanghai HQ */}
                  <div>
                    <p className="text-white font-medium mb-1">Shanghai HQ (China)</p>
                    <p className="text-sm text-gray-500">Qi Fan Road 199, Pudong New Area<br/>Shanghai City</p>
                  </div>
                  
                  {/* Rajshahi Branch */}
                  <div className="pt-6 border-t border-white/5">
                    <p className="text-white font-medium mb-1">Rajshahi Branch (Bangladesh)</p>
                    <p className="text-sm text-gray-500">Kadirganj, Rajshahi</p>
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