import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Binary, Eye, Activity, Database, Zap, Share2, 
  Server, ArrowRightLeft, ShieldCheck, Mail, 
  CheckSquare, Boxes, Cpu, Layers, MessageSquare,
  ArrowRight, Workflow, Globe, Code2
} from 'lucide-react';

// --- Adversarial Autoencoder (AAE) Visualizer ---
const AAEVisualizer = () => {
  return (
    <div className="w-full bg-[#0b0f1a] rounded-3xl p-6 md:p-12 border border-white/5 overflow-hidden relative min-h-[600px] flex flex-col justify-center shadow-2xl">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        <div className="grid grid-cols-1 gap-16">
          
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
            <div className="flex flex-col items-center gap-4 z-20">
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="w-24 h-24 rounded-2xl border-2 border-blue-400/30 bg-blue-500/10 flex items-center justify-center relative shadow-[0_0_20px_rgba(59,130,246,0.1)]">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-500/20 animate-pulse"></div>
                <Database className="text-blue-400" size={32} />
                <div className="absolute -top-3 -right-3 bg-blue-500 text-[10px] font-bold px-2 py-0.5 rounded-full text-white">Input x</div>
              </motion.div>
            </div>

            <div className="flex flex-col items-center flex-1">
              <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1 }} className="h-1 w-full bg-gradient-to-r from-blue-500 to-indigo-500 relative rounded-full">
                <motion.div animate={{ x: ['0%', '100%'], opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "linear" }} className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full blur-sm"></motion.div>
              </motion.div>
              <span className="text-[10px] text-blue-400 font-black uppercase mt-3 tracking-widest bg-blue-500/5 px-3 py-1 rounded-full border border-blue-500/10">Encoder q(z|x)</span>
            </div>

            <div className="flex flex-col items-center gap-4 z-20 relative">
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5, type: "spring" }} className="w-32 h-32 rounded-full border-4 border-dashed border-indigo-500/50 flex items-center justify-center relative bg-indigo-500/10 shadow-[0_0_40px_rgba(99,102,241,0.2)]">
                <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 15, ease: "linear" }} className="absolute inset-0 rounded-full border-t-2 border-indigo-400/30"></motion.div>
                <div className="flex flex-col items-center">
                  <Binary className="text-indigo-400 mb-1" size={32} />
                  <span className="text-xs font-black text-white uppercase tracking-tighter">Latent Z</span>
                </div>
              </motion.div>
              <motion.div initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ delay: 1, duration: 0.8 }} className="absolute top-full h-24 w-0.5 bg-gradient-to-b from-indigo-500 to-red-500 origin-top">
                <motion.div animate={{ y: ['0%', '100%'], opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }} className="absolute left-1/2 -translate-x-1/2 w-2 h-2 bg-red-400 rounded-full blur-[2px]"></motion.div>
              </motion.div>
            </div>

            <div className="flex flex-col items-center flex-1">
              <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 1, duration: 1 }} className="h-1 w-full bg-gradient-to-r from-indigo-500 to-purple-500 relative rounded-full">
                <motion.div animate={{ x: ['0%', '100%'], opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "linear", delay: 1 }} className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full blur-sm"></motion.div>
              </motion.div>
              <span className="text-[10px] text-indigo-400 font-black uppercase mt-3 tracking-widest bg-indigo-500/5 px-3 py-1 rounded-full border border-indigo-500/10">Decoder p(x|z)</span>
            </div>

            <div className="flex flex-col items-center gap-4 z-20">
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.5 }} className="w-24 h-24 rounded-2xl border-2 border-dashed border-purple-400/30 bg-purple-500/10 flex items-center justify-center relative">
                <motion.div animate={{ opacity: [0.1, 0.3, 0.1] }} transition={{ repeat: Infinity, duration: 4 }} className="absolute inset-0 bg-purple-500/20"></motion.div>
                <Database className="text-purple-400/60 blur-[1px]" size={32} />
                <div className="absolute -top-3 -left-3 bg-purple-500 text-[10px] font-bold px-2 py-0.5 rounded-full text-white">Output x'</div>
              </motion.div>
            </div>
          </div>

          <div className="flex flex-col items-center pt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center w-full max-w-4xl">
              <div className="flex flex-col items-center gap-4 order-3 md:order-1">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }} className="w-32 h-24 rounded-2xl border border-emerald-500/30 bg-emerald-500/5 flex flex-col items-center justify-center relative overflow-hidden">
                  <svg viewBox="0 0 100 40" className="w-20 h-10 overflow-visible">
                    <motion.path d="M 0 40 Q 50 -10 100 40" fill="none" stroke="#10b981" strokeWidth="2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 1.5 }} />
                  </svg>
                  <span className="text-[9px] font-black text-emerald-400 uppercase tracking-tighter mt-2">Prior p(z)</span>
                </motion.div>
                <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 1.8, duration: 0.8 }} className="h-0.5 w-24 bg-gradient-to-r from-emerald-500 to-red-500 relative md:rotate-0 rotate-90 origin-left md:mt-0 mt-4">
                   <motion.div animate={{ x: ['0%', '100%'], opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }} className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-emerald-400 rounded-full blur-[2px]"></motion.div>
                </motion.div>
              </div>

              <div className="flex flex-col items-center gap-4 z-30 order-1 md:order-2">
                <motion.div initial={{ scale: 0, rotate: -45 }} animate={{ scale: 1, rotate: 0 }} transition={{ delay: 2, type: "spring" }} className="w-40 h-40 rounded-3xl bg-red-500/10 border-4 border-red-500/40 flex flex-col items-center justify-center relative shadow-[0_0_50px_rgba(239,68,68,0.2)]">
                  <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 2 }}>
                    <Activity size={48} className="text-red-500 mb-2" />
                  </motion.div>
                  <span className="text-xs font-black text-white uppercase tracking-[0.2em]">Discriminator D</span>
                </motion.div>
              </div>

              <div className="flex flex-col items-center gap-4 order-2 md:order-3">
                 <div className="hidden md:block w-24 h-0.5 bg-gray-800"></div>
                 <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }} className="text-center md:text-left">
                    <h4 className="text-xs font-black text-red-400 uppercase mb-2 flex items-center gap-2 justify-center md:justify-start"><Zap size={12} /> Adversarial Loss</h4>
                    <p className="text-[10px] text-gray-500 max-w-[150px] leading-relaxed font-medium italic">Forces the Encoder's aggregated posterior to match the Prior distribution.</p>
                 </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Seamless Upgrade Tool Visualizer ---
const SeamlessUpgradeVisualizer = () => {
  return (
    <div className="w-full bg-[#0b0f1a] rounded-3xl p-8 md:p-12 border border-white/5 overflow-hidden relative min-h-[500px] flex flex-col justify-center shadow-2xl">
      <div className="absolute top-0 right-0 p-8 opacity-10">
        <Server size={120} className="text-emerald-500" />
      </div>
      
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12 items-center max-w-4xl mx-auto w-full">
        {/* Node 1: Upgrading */}
        <div className="flex flex-col items-center gap-6">
          <motion.div 
            animate={{ 
              borderColor: ['rgba(16,185,129,0.3)', 'rgba(239,68,68,0.5)', 'rgba(16,185,129,0.3)'],
              backgroundColor: ['rgba(16,185,129,0.05)', 'rgba(239,68,68,0.1)', 'rgba(16,185,129,0.05)']
            }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="w-32 h-40 rounded-2xl border-2 flex flex-col items-center justify-center relative bg-white/5"
          >
            <Server className="text-gray-400 mb-2" size={32} />
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-tighter">Node 01</span>
            
            {/* Shard Migration Animation */}
            <motion.div 
              animate={{ 
                x: [0, 150], 
                opacity: [0, 1, 1, 0],
                scale: [0.5, 1, 1, 0.5]
              }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="absolute w-6 h-6 bg-emerald-500 rounded-lg shadow-[0_0_15px_rgba(16,185,129,0.5)] flex items-center justify-center z-20"
            >
              <Boxes size={12} className="text-white" />
            </motion.div>
            
            <div className="mt-4 flex flex-col items-center">
              <span className="text-[8px] font-black text-red-400 uppercase bg-red-500/10 px-2 py-0.5 rounded">Upgrading...</span>
            </div>
          </motion.div>
          <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Draining Shards</p>
        </div>

        {/* Central Orchestrator */}
        <div className="flex flex-col items-center gap-4">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="w-48 h-48 rounded-full border-2 border-dashed border-emerald-500/30 flex items-center justify-center relative"
          >
            <motion.div 
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-24 h-24 rounded-3xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.2)]"
            >
              <Zap className="text-emerald-400" size={40} />
            </motion.div>
          </motion.div>
          <div className="text-center">
            <h4 className="text-xs font-black text-white uppercase tracking-widest">Orchestrator</h4>
            <p className="text-[9px] text-emerald-500 font-bold mt-1">Ansible + Spring Boot</p>
          </div>
        </div>

        {/* Node 2: Healthy */}
        <div className="flex flex-col items-center gap-6">
          <div className="w-32 h-40 rounded-2xl border-2 border-emerald-500/30 bg-emerald-500/5 flex flex-col items-center justify-center relative">
            <Server className="text-emerald-400 mb-2" size={32} />
            <span className="text-[10px] font-bold text-emerald-300 uppercase tracking-tighter">Node 02</span>
            
            <div className="mt-4 flex flex-col items-center gap-1">
              <div className="flex gap-1">
                {[1, 2, 3, 4].map(i => (
                  <motion.div 
                    key={i}
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ delay: i * 0.2, repeat: Infinity, duration: 1 }}
                    className="w-2 h-2 bg-emerald-500 rounded-sm" 
                  />
                ))}
              </div>
              <span className="text-[8px] font-black text-emerald-400 uppercase bg-emerald-500/10 px-2 py-0.5 rounded">Active</span>
            </div>
          </div>
          <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Receiving Traffic</p>
        </div>
      </div>
    </div>
  );
};

// --- Actionly AI Visualizer ---
const ActionlyVisualizer = () => {
  return (
    <div className="w-full bg-[#0b0f1a] rounded-3xl p-8 md:p-12 border border-white/5 overflow-hidden relative min-h-[500px] flex flex-col justify-center shadow-2xl">
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 max-w-5xl mx-auto w-full">
        
        {/* Source: Gmail */}
        <div className="flex flex-col items-center gap-6">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="w-24 h-24 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center relative shadow-xl"
          >
            <Mail className="text-red-400" size={40} />
            <div className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-lg shadow-lg">New Email</div>
          </motion.div>
          <div className="text-center">
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Source</span>
            <p className="text-xs text-white font-bold">Gmail Inbox</p>
          </div>
        </div>

        {/* Process: Gemini AI */}
        <div className="flex-1 flex flex-col items-center relative">
          <div className="flex items-center w-full">
            <div className="h-0.5 flex-1 bg-gradient-to-r from-red-500/20 to-blue-500 relative">
              <motion.div 
                animate={{ x: ['0%', '100%'], opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full blur-md"
              />
            </div>
            
            <motion.div 
              animate={{ 
                boxShadow: ['0 0 20px rgba(59,130,246,0.2)', '0 0 50px rgba(59,130,246,0.4)', '0 0 20px rgba(59,130,246,0.2)'],
                scale: [1, 1.1, 1]
              }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="w-32 h-32 rounded-3xl bg-blue-600/10 border-2 border-blue-500/40 flex flex-col items-center justify-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 animate-pulse" />
              <Zap className="text-blue-400 mb-2" size={40} />
              <span className="text-[10px] font-black text-white uppercase tracking-widest">Gemini 2.0</span>
            </motion.div>

            <div className="h-0.5 flex-1 bg-gradient-to-r from-blue-500 to-emerald-500/20 relative">
              <motion.div 
                animate={{ x: ['0%', '100%'], opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "linear", delay: 0.7 }}
                className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full blur-md"
              />
            </div>
          </div>
          
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="bg-white/5 border border-white/10 px-3 py-2 rounded-xl flex items-center gap-2">
              <ShieldCheck className="text-blue-400" size={14} />
              <span className="text-[10px] text-gray-400 font-bold uppercase">Triage</span>
            </div>
            <div className="bg-white/5 border border-white/10 px-3 py-2 rounded-xl flex items-center gap-2">
              <Activity className="text-purple-400" size={14} />
              <span className="text-[10px] text-gray-400 font-bold uppercase">Extract</span>
            </div>
          </div>
        </div>

        {/* Output: Task Card */}
        <div className="flex flex-col items-center gap-6">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="w-32 h-44 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-blue-500/10 border border-white/10 p-4 shadow-2xl relative"
          >
            <div className="w-full h-2 bg-emerald-500/40 rounded-full mb-3" />
            <div className="space-y-2">
              <div className="w-full h-1.5 bg-white/10 rounded-full" />
              <div className="w-4/5 h-1.5 bg-white/10 rounded-full" />
              <div className="w-full h-1.5 bg-white/10 rounded-full" />
            </div>
            <div className="absolute bottom-4 left-4 right-4 flex gap-2">
              <div className="w-4 h-4 rounded bg-emerald-500/20 border border-emerald-500/40" />
              <div className="w-4 h-4 rounded bg-emerald-500/20 border border-emerald-500/40" />
            </div>
            <CheckSquare className="absolute -bottom-2 -right-2 text-emerald-400 bg-[#0b0f1a] rounded-full" size={24} />
          </motion.div>
          <div className="text-center">
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Output</span>
            <p className="text-xs text-white font-bold">Actionable Task</p>
          </div>
        </div>

      </div>
    </div>
  );
};

// --- Online Coding Platform (OCP) Visualizer ---
const OCPVisualizer = () => {
  return (
    <div className="w-full bg-[#0b0f1a] rounded-3xl p-8 md:p-12 border border-white/5 overflow-hidden relative min-h-[550px] flex flex-col justify-center shadow-2xl">
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-8 items-center max-w-5xl mx-auto w-full">
        
        {/* User Submission */}
        <div className="flex flex-col items-center gap-4">
          <div className="w-24 h-24 rounded-2xl bg-indigo-600/10 border border-indigo-500/30 flex items-center justify-center relative group">
            <Code2 className="text-indigo-400" size={32} />
            <motion.div animate={{ opacity: [0, 1, 0], scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute inset-0 bg-indigo-500/20 rounded-2xl" />
          </div>
          <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest text-center">User<br/>Submission</span>
        </div>

        {/* RabbitMQ Queue */}
        <div className="flex flex-col items-center gap-4">
          <div className="w-full h-16 bg-white/5 border border-white/10 rounded-xl relative overflow-hidden flex items-center px-4 gap-2">
            {[1, 2, 3, 4, 5].map(i => (
              <motion.div 
                key={i}
                animate={{ x: [0, 200] }}
                transition={{ repeat: Infinity, duration: 3, delay: i * 0.6, ease: "linear" }}
                className="w-8 h-8 rounded-lg bg-orange-500/20 border border-orange-500/40 flex items-center justify-center shrink-0"
              >
                <Database size={12} className="text-orange-400" />
              </motion.div>
            ))}
            <div className="absolute top-0 right-0 h-full w-12 bg-gradient-to-l from-[#0b0f1a] to-transparent z-10" />
          </div>
          <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">RabbitMQ Queue</span>
        </div>

        {/* Compiler Worker */}
        <div className="flex flex-col items-center gap-4">
          <motion.div 
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-32 h-32 rounded-3xl bg-emerald-600/10 border-2 border-emerald-500/40 flex flex-col items-center justify-center relative shadow-[0_0_40px_rgba(16,185,129,0.1)]"
          >
            <Cpu className="text-emerald-400 mb-2" size={32} />
            <span className="text-[8px] font-black text-white uppercase tracking-tighter">Isolated Worker</span>
            <div className="mt-2 flex gap-1">
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping delay-75" />
            </div>
          </motion.div>
          <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Compiler</span>
        </div>

        {/* Redis Polling */}
        <div className="flex flex-col items-center gap-4">
          <div className="w-24 h-24 rounded-full border-4 border-dashed border-red-500/30 flex items-center justify-center relative">
            <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 10, ease: "linear" }} className="absolute inset-0 rounded-full border-t-4 border-red-500/60" />
            <div className="flex flex-col items-center">
              <Zap className="text-red-400 mb-1" size={24} />
              <span className="text-[8px] font-black text-white uppercase">Redis Cache</span>
            </div>
          </div>
          <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest text-center">Real-time<br/>Polling</span>
        </div>

      </div>

      <div className="mt-16 flex flex-wrap justify-center gap-12 border-t border-white/5 pt-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-400">
            <Workflow size={20} />
          </div>
          <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Async Processing</div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
            <ShieldCheck size={20} />
          </div>
          <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Docker Isolation</div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center text-red-400">
            <Zap size={20} />
          </div>
          <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Sub-second Latency</div>
        </div>
      </div>
    </div>
  );
};

// --- GPT From Scratch Visualizer ---
const GPTVisualizer = () => {
  return (
    <div className="w-full bg-[#0b0f1a] rounded-3xl p-8 md:p-12 border border-white/5 overflow-hidden relative min-h-[550px] flex flex-col justify-center shadow-2xl">
      <div className="relative z-10 max-w-4xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Transformer Block */}
          <div className="space-y-6">
            <h4 className="text-xs font-black text-indigo-400 uppercase tracking-[0.2em] mb-4">Decoder-Only Block</h4>
            
            <div className="space-y-3">
              {[
                { name: 'Self-Attention', color: 'bg-indigo-500/20', border: 'border-indigo-500/40', icon: <Share2 size={14} className="text-indigo-400" /> },
                { name: 'Layer Norm', color: 'bg-white/5', border: 'border-white/10', icon: <Layers size={14} className="text-gray-400" /> },
                { name: 'Feed Forward (GELU)', color: 'bg-purple-500/20', border: 'border-purple-500/40', icon: <Zap size={14} className="text-purple-400" /> },
                { name: 'Residual Connection', color: 'bg-emerald-500/20', border: 'border-emerald-500/40', icon: <Workflow size={14} className="text-emerald-400" /> }
              ].map((item, idx) => (
                <motion.div 
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className={`${item.color} ${item.border} border p-4 rounded-2xl flex items-center justify-between group cursor-pointer hover:scale-[1.02] transition-transform`}
                >
                  <div className="flex items-center gap-3">
                    {item.icon}
                    <span className="text-xs font-black text-white uppercase tracking-wider">{item.name}</span>
                  </div>
                  <ArrowRight size={14} className="text-gray-600 group-hover:text-white transition-colors" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Attention Visualization */}
          <div className="relative flex flex-col items-center">
            <div className="grid grid-cols-4 gap-4 w-full aspect-square relative">
               {Array.from({ length: 16 }).map((_, i) => (
                 <motion.div 
                   key={i}
                   animate={{ 
                     opacity: [0.1, 0.4, 0.1],
                     backgroundColor: i % 5 === 0 ? 'rgba(99,102,241,0.4)' : 'rgba(255,255,255,0.05)'
                   }}
                   transition={{ repeat: Infinity, duration: 3, delay: i * 0.1 }}
                   className="rounded-lg border border-white/5"
                 />
               ))}
               
               {/* Connections */}
               <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
                  <motion.path 
                    d="M 20 20 L 80 80 M 80 20 L 20 80" 
                    stroke="rgba(99,102,241,0.2)" 
                    strokeWidth="1"
                    strokeDasharray="4 4"
                    animate={{ strokeDashoffset: [0, -20] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                  />
               </svg>
            </div>
            
            <div className="mt-8 text-center">
              <h5 className="text-[10px] font-black text-white uppercase tracking-widest mb-2">Scaled Dot-Product Attention</h5>
              <div className="flex gap-2 justify-center">
                 {['Query', 'Key', 'Value'].map(t => (
                   <span key={t} className="text-[8px] font-bold text-gray-500 bg-white/5 px-2 py-1 rounded-md border border-white/10 uppercase">{t}</span>
                 ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

// --- Blog The Change Visualizer ---
const BlogTheChangeVisualizer = () => {
  return (
    <div className="w-full bg-[#0b0f1a] rounded-3xl p-8 md:p-12 border border-white/5 overflow-hidden relative min-h-[500px] flex flex-col justify-center shadow-2xl">
       <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 max-w-5xl mx-auto w-full">
         
         {/* Git Diff */}
         <div className="flex flex-col items-center gap-6">
            <div className="w-28 h-36 rounded-2xl bg-white/5 border border-white/10 p-4 space-y-3 relative overflow-hidden">
               <div className="w-full h-2 bg-emerald-500/20 rounded-full" />
               <div className="w-3/4 h-2 bg-red-500/20 rounded-full" />
               <div className="w-full h-2 bg-emerald-500/20 rounded-full" />
               <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0b0f1a]/80" />
               <Code2 className="absolute bottom-4 left-1/2 -translate-x-1/2 text-gray-400" size={24} />
            </div>
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Git Diff</span>
         </div>

         {/* Transformation */}
         <div className="flex-1 flex flex-col items-center">
            <div className="flex items-center w-full gap-4">
               <div className="h-0.5 flex-1 bg-gradient-to-r from-emerald-500/20 to-indigo-500" />
               <motion.div 
                 animate={{ rotate: 360 }}
                 transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                 className="w-20 h-20 rounded-2xl bg-indigo-500/10 border-2 border-indigo-500/40 flex items-center justify-center shadow-[0_0_30px_rgba(99,102,241,0.2)]"
               >
                  <Workflow size={32} className="text-indigo-400" />
               </motion.div>
               <div className="h-0.5 flex-1 bg-gradient-to-r from-indigo-500 to-purple-500/20" />
            </div>
            <div className="mt-6 flex gap-4">
               <div className="flex flex-col items-center">
                  <Globe size={16} className="text-gray-500 mb-1" />
                  <span className="text-[8px] font-bold text-gray-500 uppercase">Octokit</span>
               </div>
               <div className="flex flex-col items-center">
                  <Zap size={16} className="text-indigo-400 mb-1" />
                  <span className="text-[8px] font-bold text-indigo-400 uppercase">Gemini AI</span>
               </div>
               <div className="flex flex-col items-center">
                  <Share2 size={16} className="text-gray-500 mb-1" />
                  <span className="text-[8px] font-bold text-gray-500 uppercase">Hashnode</span>
               </div>
            </div>
         </div>

         {/* Blog Post */}
         <div className="flex flex-col items-center gap-6">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              className="w-32 h-44 rounded-2xl bg-white/5 border border-white/10 p-5 shadow-2xl relative"
            >
               <div className="w-12 h-12 rounded-xl bg-indigo-500/10 mb-4 flex items-center justify-center">
                  <MessageSquare size={20} className="text-indigo-400" />
               </div>
               <div className="space-y-2">
                  <div className="w-full h-1.5 bg-white/20 rounded-full" />
                  <div className="w-full h-1.5 bg-white/10 rounded-full" />
                  <div className="w-2/3 h-1.5 bg-white/10 rounded-full" />
               </div>
               <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute top-4 right-4 w-2 h-2 bg-indigo-500 rounded-full" />
            </motion.div>
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Blog Post</span>
         </div>

       </div>
    </div>
  );
};

// --- Main ProjectVisualizer Component ---
const ProjectVisualizer = ({ projectSlug }) => {
  const slug = projectSlug?.toLowerCase() || '';

  const visualizers = {
    'aae': { component: <AAEVisualizer />, title: 'Adversarial Architecture', desc: 'Mapping the internal mechanics of the Generalized Adversarial Autoencoder.' },
    'adversarial': { component: <AAEVisualizer />, title: 'Adversarial Architecture', desc: 'Mapping the internal mechanics of the Generalized Adversarial Autoencoder.' },
    'seamless': { component: <SeamlessUpgradeVisualizer />, title: 'Upgrade Orchestration', desc: 'Visualizing zero-downtime shard migration and node upgrade workflows.' },
    'actionly': { component: <ActionlyVisualizer />, title: 'AI Agent Workflow', desc: 'The journey from an unread email to a structured actionable task.' },
    'ocp': { component: <OCPVisualizer />, title: 'Distributed Execution', desc: 'How submissions move through queues and isolated workers at scale.' },
    'coding-platform': { component: <OCPVisualizer />, title: 'Distributed Execution', desc: 'How submissions move through queues and isolated workers at scale.' },
    'gpt': { component: <GPTVisualizer />, title: 'Transformer Internals', desc: 'Deconstructing the decoder-only architecture and attention mechanisms.' },
    'transformer': { component: <GPTVisualizer />, title: 'Transformer Internals', desc: 'Deconstructing the decoder-only architecture and attention mechanisms.' },
    'blog-the-change': { component: <BlogTheChangeVisualizer />, title: 'Automation Flow', desc: 'Converting raw code diffs into rich context-aware technical blog posts.' }
  };

  const activeKey = Object.keys(visualizers).find(key => slug.includes(key));
  const activeVisualizer = activeKey ? visualizers[activeKey] : null;

  if (!activeVisualizer) return null;

  return (
    <section className="py-24 border-t border-gray-100/5 bg-[#0b0f1a]/50">
      <div className="container mx-auto max-w-6xl px-4">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col items-center text-center mb-16">
            <motion.div 
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="w-16 h-16 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-6 border border-indigo-500/20"
            >
               <Zap size={32} />
            </motion.div>
            <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">{activeVisualizer.title}</h2>
            <p className="text-gray-500 text-lg max-w-2xl font-medium">
              {activeVisualizer.desc}
            </p>
          </div>
          {activeVisualizer.component}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectVisualizer;
