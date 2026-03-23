'use client';

import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, Send, User, Terminal } from 'lucide-react';
import { addComment, getComments } from '@/app/actions';

export default function Guestbook() {
  const [comments, setComments] = useState<any[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  // Load comments from the database when the page loads
  useEffect(() => {
    getComments().then((data) => setComments(data || []));
  }, []);

  // Handle form submission
  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true);
    await addComment(formData);
    
    // Refresh the comments list instantly
    const freshComments = await getComments();
    setComments(freshComments || []);
    
    // Clear the form and reset button state
    formRef.current?.reset();
    setIsSubmitting(false);
  }

  return (
    <section className="py-16 relative z-10 max-w-4xl mx-auto px-6 w-full">
      <div className="flex items-center gap-3 mb-8">
        <Terminal className="text-cyan-400" size={24} />
        <h3 className="text-2xl font-bold text-white tracking-tight">Leave a Comment <span className="text-gray-500 font-mono text-sm uppercase tracking-widest ml-2">// Guestbook</span></h3>
      </div>

      <div className="bg-[#05050a] border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden group hover:border-cyan-500/30 transition-colors">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 blur-[80px] rounded-full pointer-events-none"></div>

        {/* Input Form */}
        <form ref={formRef} action={handleSubmit} className="relative z-10 mb-12">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            {/* Name Input Container - Brightened */}
            <div className="flex-1 bg-white/5 border border-white/10 hover:border-white/20 rounded-xl flex items-center px-4 focus-within:border-cyan-500/50 focus-within:bg-white/10 transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
              <User size={16} className="text-cyan-400/70 mr-3 shrink-0" />
              <input 
                type="text" 
                name="name" 
                placeholder="Name / Alias" 
                maxLength={50}
                required
                className="w-full bg-transparent text-white placeholder-gray-400 py-3 outline-none text-sm font-medium"
              />
            </div>
            
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="bg-cyan-600 hover:bg-cyan-500 disabled:bg-cyan-900 disabled:text-gray-400 text-white px-8 py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-[0_0_15px_rgba(34,211,238,0.2)] hover:shadow-[0_0_25px_rgba(34,211,238,0.4)] shrink-0"
            >
              {isSubmitting ? 'Transmitting...' : <>Send <Send size={16} /></>}
            </button>
          </div>
          
          {/* Message Input Container - Brightened */}
          <div className="bg-white/5 border border-white/10 hover:border-white/20 rounded-xl flex items-start px-4 py-3 focus-within:border-cyan-500/50 focus-within:bg-white/10 transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
            <MessageSquare size={16} className="text-cyan-400/70 mr-3 mt-1 shrink-0" />
            <textarea 
              name="message" 
              placeholder="Leave a message, feedback, or say hello..." 
              maxLength={500}
              required
              rows={3}
              className="w-full bg-transparent text-white placeholder-gray-400 outline-none text-sm resize-none"
            ></textarea>
          </div>
        </form>

        {/* Display Comments Feed */}
        <div className="space-y-4 relative z-10 max-h-100 overflow-y-auto pr-2 custom-scrollbar">
          {comments.length === 0 ? (
            <p className="text-gray-500 text-sm font-mono text-center py-8 border border-dashed border-white/10 rounded-xl">
              No entries found. Be the first to initialize the log.
            </p>
          ) : (
            comments.map((comment, i) => (
              <div key={i} className="bg-white/5 border border-white/5 rounded-2xl p-4 hover:bg-white/10 transition-colors flex gap-4">
                <div className="w-10 h-10 rounded-full bg-linear-to-br from-cyan-900 to-purple-900 flex items-center justify-center border border-white/10 shrink-0 text-white font-bold text-sm">
                  {comment.name?.charAt(0).toUpperCase() || '?'}
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="font-bold text-gray-200 text-sm">{comment.name}</span>
                    <span className="text-[10px] font-mono text-gray-600">{new Date(comment.timestamp).toLocaleDateString()}</span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{comment.message}</p>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </section>
  );
}