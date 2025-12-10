import React from 'react';

export const SplashScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[100] bg-[#020617] flex flex-col items-center justify-center text-white overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-900 via-[#020617] to-[#020617]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)]"></div>
        
        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px] animate-float-delayed"></div>

        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center animate-in zoom-in-95 fade-in duration-1000">
            
            {/* Logo Container */}
            <div className="relative mb-8 group">
                <div className="absolute inset-0 bg-emerald-500/30 blur-2xl rounded-full group-hover:bg-emerald-500/50 transition-all duration-500"></div>
                <div className="relative h-28 w-28 bg-gradient-to-br from-slate-800 to-slate-950 border border-slate-700/50 rounded-3xl flex items-center justify-center shadow-2xl animate-float">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-transparent rounded-3xl opacity-50"></div>
                    <span className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-emerald-400 to-teal-200 drop-shadow-lg">D</span>
                </div>
            </div>

            {/* App Name */}
            <h1 className="text-6xl md:text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-400 mb-4 drop-shadow-xl">
                Dolphin
            </h1>

            {/* Tagline */}
            <div className="flex items-center gap-3">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-emerald-500/50"></div>
                <span className="text-emerald-400/80 text-sm font-semibold tracking-[0.3em] uppercase">Marketplace</span>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-emerald-500/50"></div>
            </div>
        </div>

        {/* Loading Indicator */}
        <div className="absolute bottom-32 flex gap-1">
            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce"></div>
        </div>

        {/* Company Footer */}
        <div className="absolute bottom-8 flex flex-col items-center opacity-70">
             <div className="flex items-center gap-2 mb-1">
                <div className="h-5 w-5 rounded bg-slate-800 flex items-center justify-center text-[10px] font-bold text-slate-400 border border-slate-700">G</div>
                <p className="text-xs font-semibold text-slate-400 tracking-wide">Gwalvanshi Private Limited</p>
             </div>
             <p className="text-[10px] text-slate-600 font-mono">EST. 2025</p>
        </div>
    </div>
  );
};
