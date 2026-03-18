"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Terminal, Database, FileText, Bot, Cpu, GitBranch, Github } from "lucide-react";

export default function OfflineRAGPage() {
  const [activeTab, setActiveTab] = useState("ingest");

  return (
    <main className="min-h-screen bg-[#050505] text-white p-6 md:p-12 font-sans selection:bg-cyan-900 selection:text-cyan-50">
      
      {/* Navigation */}
      <div className="max-w-5xl mx-auto mb-12 flex justify-between items-center">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors">
          <ArrowLeft size={20} /> Back to Portfolio
        </Link>
        <a 
          href="https://github.com/OsamaIM/offline-rag-agent" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white px-4 py-2 rounded-full transition-all text-sm font-medium"
        >
          <Github size={18} />
          View Repository
        </a>
      </div>

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-16 border-b border-white/10 pb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/30 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-6">
            <Database size={14} /> Backend Architecture
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
            Offline <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">RAG Pipeline.</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
            A 100% local, privacy-first Retrieval-Augmented Generation system. Built with LangChain LCEL, ChromaDB, and Ollama (Phi-3) to allow secure chatting with technical PDFs without internet access or data leaks.
          </p>
        </div>

        {/* System Architecture Diagram (CSS-based) */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <Cpu className="text-cyan-400" /> Pipeline Architecture
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            {/* Step 1 */}
            <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 relative">
              <div className="w-12 h-12 bg-blue-950/50 rounded-xl flex items-center justify-center mx-auto mb-4 border border-blue-500/30 text-blue-400">
                <FileText size={24} />
              </div>
              <h4 className="font-bold text-white mb-2">1. Ingestion</h4>
              <p className="text-sm text-gray-400">PyPDFLoader extracts text, splits into 500-char chunks with overlap.</p>
            </div>
            
            {/* Step 2 */}
            <div className="bg-[#0a0a0a] border border-cyan-500/30 rounded-2xl p-6 relative shadow-[0_0_30px_-5px_rgba(6,182,212,0.15)]">
              <div className="w-12 h-12 bg-cyan-950/50 rounded-xl flex items-center justify-center mx-auto mb-4 border border-cyan-500/30 text-cyan-400">
                <Database size={24} />
              </div>
              <h4 className="font-bold text-white mb-2">2. Vectorization</h4>
              <p className="text-sm text-gray-400">HuggingFace 'all-MiniLM-L6-v2' embeds chunks into a local ChromaDB.</p>
            </div>

            {/* Step 3 */}
            <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 relative">
              <div className="w-12 h-12 bg-purple-950/50 rounded-xl flex items-center justify-center mx-auto mb-4 border border-purple-500/30 text-purple-400">
                <Bot size={24} />
              </div>
              <h4 className="font-bold text-white mb-2">3. LCEL Inference</h4>
              <p className="text-sm text-gray-400">Ollama (Phi-3) retrieves top 5 chunks and synthesizes a local response.</p>
            </div>
          </div>
        </div>

        {/* Code Showcase Window */}
        <div>
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <Terminal className="text-cyan-400" /> Core Implementation
          </h3>
          
          <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#0d1117] shadow-2xl">
            {/* IDE Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#161b22] border-b border-white/5">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="flex gap-1 bg-[#0d1117] rounded-lg p-1 border border-white/5">
                <button 
                  onClick={() => setActiveTab("ingest")}
                  className={`px-4 py-1.5 text-xs font-mono rounded-md transition-all ${activeTab === "ingest" ? "bg-white/10 text-cyan-400" : "text-gray-500 hover:text-gray-300"}`}
                >
                  ingest.py
                </button>
                <button 
                  onClick={() => setActiveTab("chat")}
                  className={`px-4 py-1.5 text-xs font-mono rounded-md transition-all ${activeTab === "chat" ? "bg-white/10 text-cyan-400" : "text-gray-500 hover:text-gray-300"}`}
                >
                  chat.py
                </button>
              </div>
            </div>

            {/* Code Content */}
            <div className="p-6 overflow-x-auto">
              {activeTab === "ingest" ? (
                <pre className="text-sm font-mono leading-relaxed text-gray-300">
                  <span className="text-purple-400">import</span> os{"\n"}
                  <span className="text-purple-400">from</span> langchain_community.document_loaders <span className="text-purple-400">import</span> PyPDFLoader{"\n"}
                  <span className="text-purple-400">from</span> langchain_text_splitters <span className="text-purple-400">import</span> RecursiveCharacterTextSplitter{"\n"}
                  <span className="text-purple-400">from</span> langchain_chroma <span className="text-purple-400">import</span> Chroma{"\n"}
                  <span className="text-purple-400">from</span> langchain_community.embeddings <span className="text-purple-400">import</span> HuggingFaceEmbeddings{"\n\n"}
                  <span className="text-gray-500"># 1. Settings</span>{"\n"}
                  PDF_PATH = <span className="text-green-400">"data.pdf"</span>{"\n"}
                  DB_PATH = <span className="text-green-400">"my_vector_db"</span>{"\n\n"}
                  <span className="text-blue-400">print</span>(<span className="text-green-400">"--- STARTED: Loading PDF ---"</span>){"\n\n"}
                  <span className="text-gray-500"># 2. Load the PDF</span>{"\n"}
                  loader = PyPDFLoader(PDF_PATH){"\n"}
                  docs = loader.load(){"\n\n"}
                  <span className="text-gray-500"># 3. Split text into chunks</span>{"\n"}
                  text_splitter = RecursiveCharacterTextSplitter({"\n"}
                  {"    "}chunk_size=<span className="text-orange-400">500</span>,  <span className="text-gray-500"># Characters per chunk</span>{"\n"}
                  {"    "}chunk_overlap=<span className="text-orange-400">50</span>{"\n"}
                  ){"\n"}
                  splits = text_splitter.split_documents(docs){"\n\n"}
                  <span className="text-gray-500"># 4. Create the Vector Database</span>{"\n"}
                  embedding_function = HuggingFaceEmbeddings(model_name=<span className="text-green-400">"all-MiniLM-L6-v2"</span>){"\n\n"}
                  vector_db = Chroma.from_documents({"\n"}
                  {"    "}documents=splits,{"\n"}
                  {"    "}embedding=embedding_function,{"\n"}
                  {"    "}persist_directory=DB_PATH{"\n"}
                  ){"\n"}
                </pre>
              ) : (
                <pre className="text-sm font-mono leading-relaxed text-gray-300">
                  <span className="text-purple-400">from</span> langchain_core.output_parsers <span className="text-purple-400">import</span> StrOutputParser{"\n"}
                  <span className="text-purple-400">from</span> langchain_core.runnables <span className="text-purple-400">import</span> RunnablePassthrough{"\n"}
                  <span className="text-purple-400">from</span> langchain_core.prompts <span className="text-purple-400">import</span> ChatPromptTemplate{"\n\n"}
                  <span className="text-gray-500"># 1. Load Database & Embeddings</span>{"\n"}
                  embedding_function = HuggingFaceEmbeddings(model_name=<span className="text-green-400">"all-MiniLM-L6-v2"</span>){"\n"}
                  vector_db = Chroma(persist_directory=<span className="text-green-400">"my_vector_db"</span>, embedding_function=embedding_function){"\n"}
                  retriever = vector_db.as_retriever(search_kwargs=&#123;<span className="text-green-400">"k"</span>: <span className="text-orange-400">5</span>&#125;){"\n\n"}
                  <span className="text-gray-500"># 2. Setup the Local Brain</span>{"\n"}
                  llm = Ollama(model=<span className="text-green-400">"phi3"</span>){"\n\n"}
                  <span className="text-gray-500"># 3. Create Modern LCEL Pipeline</span>{"\n"}
                  <span className="text-purple-400">def</span> <span className="text-blue-400">format_docs</span>(docs):{"\n"}
                  {"    "}<span className="text-purple-400">return</span> <span className="text-green-400">"\\n\\n"</span>.join([d.page_content <span className="text-purple-400">for</span> d <span className="text-purple-400">in</span> docs]){"\n\n"}
                  rag_chain = ({"\n"}
                  {"    "}&#123;<span className="text-green-400">"context"</span>: retriever | format_docs, <span className="text-green-400">"question"</span>: RunnablePassthrough()&#125;{"\n"}
                  {"    "}| prompt{"\n"}
                  {"    "}| llm{"\n"}
                  {"    "}| StrOutputParser(){"\n"}
                  ){"\n\n"}
                  answer = rag_chain.invoke(query){"\n"}
                </pre>
              )}
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}