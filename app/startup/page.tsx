import { Sparkles, Globe, GraduationCap, ArrowLeft } from 'lucide-react';

export default function Startup() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white font-sans relative overflow-x-hidden">
      {/* Subtle Tech Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="max-w-6xl mx-auto px-6 pt-12 md:pt-24 pb-12 relative z-10">
        
        {/* Navigation - Notice the links route back to the homepage ("/") */}
        <nav className="flex justify-between items-center mb-16 md:mb-24">
          <div className="font-bold text-xl flex items-center gap-2">
            <Sparkles className="text-cyan-400" size={20} /> OsamaIM
          </div>
          <div className="hidden md:flex gap-6 text-sm text-gray-400">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <a href="/#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="/startup" className="text-white font-medium">Startup</a>
            <a href="/#about" className="hover:text-white transition-colors">About</a>
          </div>
        </nav>

        {/* Startup Header */}
        <div className="mb-16">
          <a href="/" className="inline-flex items-center gap-2 text-cyan-400 text-sm hover:underline mb-6">
            <ArrowLeft size={16} /> Back to Portfolio
          </a>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Ventures & <span className="text-cyan-400">Startups.</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
            Beyond engineering, I am passionate about building businesses that bridge gaps and create cross-border opportunities.
          </p>
        </div>

        {/* --- VENTURES GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Venture 1: OrbiScholar */}
          <div className="block bg-[#0a0a0a] border border-white/10 rounded-2xl p-3 hover:border-white/20 transition-all group">
            {/* Image Container */}
            <div className="w-full h-48 bg-gradient-to-br from-indigo-900/40 to-black rounded-xl mb-4 overflow-hidden relative flex items-center justify-center">
               <GraduationCap size={48} className="text-indigo-500/50 group-hover:scale-110 transition-transform duration-500" />
            </div>
            {/* Colorful Tags */}
            <div className="flex gap-2 mb-3 px-1 flex-wrap">
              <span className="bg-indigo-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-md">EdTech</span>
              <span className="bg-blue-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-md">Consulting</span>
              <span className="bg-emerald-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-md">Global</span>
            </div>
            {/* Text */}
            <div className="px-1 pb-2">
              <h3 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">OrbiScholar</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                An educational consulting agency bridging Bangladesh and China. We facilitate university admissions, scholarship securement, and complete transition support for ambitious students seeking higher education abroad.
              </p>
            </div>
          </div>

          {/* Placeholder for future ventures (like e-commerce!) */}
          <div className="block bg-white/5 border border-dashed border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center text-center opacity-50">
            <Globe size={32} className="text-gray-500 mb-4" />
            <h3 className="text-lg font-bold text-gray-300 mb-2">Next Venture</h3>
            <p className="text-sm text-gray-500">Currently exploring new cross-border business opportunities.</p>
          </div>

        </div>
      </div>
    </main>
  );
}