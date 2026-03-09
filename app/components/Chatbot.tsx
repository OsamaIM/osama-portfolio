"use client";

import { useState, useEffect, useRef } from "react";
import { CreateMLCEngine } from "@mlc-ai/web-llm";
import { Bot, X, Send, User, Loader2 } from "lucide-react";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [engine, setEngine] = useState<any>(null);
  const [isInitializing, setIsInitializing] = useState(false);
  const [loadingText, setLoadingText] = useState("AI Offline");
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hi! I am OIM, Osama's on-device AI. I run completely locally on your GPU. What would you like to know about his research, projects, or startup?" }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const initializeAI = async () => {
    if (engine || isInitializing) return;
    setIsInitializing(true);

    try {
      if (!(navigator as any)?.gpu) {
        setLoadingText("WebGPU not supported on this browser.");
        setIsInitializing(false);
        return;
      }

      const initProgressCallback = (progress: any) => {
        setLoadingText(`Downloading Neural Weights: ${Math.round(progress.progress * 100)}%`);
      };

      const selectedModel = "Llama-3.2-1B-Instruct-q4f16_1-MLC";
      
      const newEngine = await CreateMLCEngine(selectedModel, {
        initProgressCallback,
      });

      setEngine(newEngine);
      setLoadingText("OIM Online (Local GPU)");
    } catch (error) {
      console.error("WebLLM Init Error:", error);
      setLoadingText("Failed to boot local AI.");
    } finally {
      setIsInitializing(false);
    }
  };

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || !engine) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    try {
      // The "Few-Shot" Anti-Hallucination Prompt
      const systemPrompt = {
        role: "system",
        content: `You are OIM, the AI assistant for Osama Ibn Mahfuz. 
RULES:
1. Answer in 1 to 2 short sentences. Be extremely brief and conversational.
2. NEVER invent facts, dates, or locations. 
3. If asked something not in the facts below, say "I don't have that information."

OSAMA'S FACTS:
- Background: From Chittagong, Bangladesh.
- Education: Undergraduate at Shanghai University of Engineering Science.
- Skills: Swarm Intelligence, Deep Learning, CNNs, Computer Vision.
- Projects: 1. Brain Tumor MRI (Deep Learning/CNNs), 2. HiveMind (Swarm AI), 3. Edge Vision Analytics.
- Startup: Founder of OrbiScholar (EdTech agency helping students from Bangladesh study in China).
- Contact: Email at osamaibnmahfuz@gmail.com or WhatsApp at +8615618459539.`
      };

      setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

      const chunks = await engine.chat.completions.create({
        messages: [systemPrompt, ...messages, userMessage],
        stream: true,
        temperature: 0.1, 
        max_tokens: 100, 
      });

      let currentReply = "";
      for await (const chunk of chunks) {
        const textDelta = chunk.choices[0]?.delta?.content || "";
        currentReply += textDelta;
        
        // Manual Kill Switch
        if (currentReply.includes("user:") || currentReply.includes("User:") || currentReply.includes("<|user|>")) {
          currentReply = currentReply.split(/user:|User:|<\|user\|>/i)[0].trim();
          setMessages((prev) => {
            const newMessages = [...prev];
            newMessages[newMessages.length - 1].content = currentReply;
            return newMessages;
          });
          break; 
        }
        
        setMessages((prev) => {
          const newMessages = [...prev];
          newMessages[newMessages.length - 1].content = currentReply;
          return newMessages;
        });
      }
    } catch (error) {
      console.error("WebLLM Inference Error:", error);
      setMessages((prev) => [...prev, { role: "assistant", content: "Matrix malfunction. I encountered an error running the inference." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {/* Floating Robot Button */}
      {!isOpen && (
        <button
          onClick={() => { setIsOpen(true); initializeAI(); }}
          className="w-14 h-14 bg-cyan-600 hover:bg-cyan-500 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all group"
        >
          <Bot size={24} className="text-white group-hover:scale-110 transition-transform" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-80 md:w-96 bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-5">
          {/* Header */}
          <div className="bg-white/5 p-4 border-b border-white/10 flex justify-between items-center">
            <div>
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Bot size={16} className="text-cyan-400" /> OIM Assistant
              </h3>
              <p className="text-[10px] text-gray-400 mt-1 flex items-center gap-1">
                {isInitializing && <Loader2 size={10} className="animate-spin" />}
                {loadingText}
              </p>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
              <X size={18} />
            </button>
          </div>

          {/* Chat History */}
          <div className="h-80 p-4 overflow-y-auto flex flex-col gap-3 bg-black/50">
            {messages.map((msg, i) => (
              <div key={i} className={`flex gap-2 text-sm ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === "user" ? "bg-cyan-900/50" : "bg-cyan-900/20 border border-cyan-500/30"}`}>
                  {msg.role === "user" ? <User size={14} className="text-cyan-400" /> : <Bot size={16} className="text-cyan-400" />}
                </div>
                <div className={`p-3 rounded-2xl max-w-[80%] ${msg.role === "user" ? "bg-cyan-900/20 text-cyan-100 border border-cyan-500/20 rounded-tr-sm" : "bg-white/5 text-gray-300 border border-white/5 rounded-tl-sm leading-relaxed"}`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex gap-2 text-sm">
                <div className="w-8 h-8 rounded-full bg-cyan-900/20 border border-cyan-500/30 flex items-center justify-center shrink-0"><Bot size={16} className="text-cyan-400" /></div>
                <div className="p-3 bg-white/5 text-gray-400 rounded-2xl border border-white/5 rounded-tl-sm flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={sendMessage} className="p-3 bg-white/5 border-t border-white/10 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={!engine || isInitializing}
              placeholder={engine ? "Ask OIM anything..." : "Booting local AI..."}
              className="flex-1 bg-black/50 border border-white/10 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-500/50 disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={!engine || !input.trim() || isInitializing}
              className="w-10 h-10 bg-cyan-600 hover:bg-cyan-500 disabled:bg-white/10 disabled:text-gray-500 rounded-xl flex items-center justify-center text-white transition-colors"
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}