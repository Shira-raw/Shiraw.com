"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { RotateCcw, AlertOctagon, Terminal } from "lucide-react";
import Link from "next/link";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        console.error(error);
    }, [error]);

    if (!mounted) return null;

    return (
        <div className="min-h-screen bg-[#030712] flex items-center justify-center relative overflow-hidden font-mono text-red-500 selection:bg-red-500 selection:text-white">
            {/* Glitch Background Layer */}
            <div className="absolute inset-0 z-0 overflow-hidden opacity-20 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[size:100%_4px]" />
                <motion.div
                    animate={{ backgroundPosition: ["0% 0%", "0% 100%"] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-50"
                />
            </div>

            <div className="relative z-10 w-full max-w-4xl px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Left Side: Visual */}
                <div className="relative flex justify-center md:justify-end order-2 md:order-1">
                    <div className="relative w-64 h-64 md:w-80 md:h-80">
                        {/* Rotating Rings */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 border border-red-900/50 rounded-full border-dashed"
                        />
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-8 border border-red-500/30 rounded-full"
                        />

                        {/* Central Icon */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <motion.div
                                animate={{ opacity: [1, 0.5, 1], scale: [1, 1.05, 1] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                className="relative"
                            >
                                <AlertOctagon className="w-32 h-32 text-red-600 drop-shadow-[0_0_15px_rgba(220,38,38,0.8)]" />
                                <AlertOctagon className="w-32 h-32 text-red-500 absolute inset-0 blur-sm opacity-50" />
                            </motion.div>
                        </div>

                        {/* Decorative Data Points */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 text-[10px] bg-[#030712] px-2 text-red-700">ERR_0X84F</div>
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-4 text-[10px] bg-[#030712] px-2 text-red-700">SYSTEM_HALT</div>
                    </div>
                </div>

                {/* Right Side: Content */}
                <div className="text-left order-1 md:order-2">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 border border-red-500/30 bg-red-950/30 text-xs font-bold tracking-widest text-red-400 rounded-sm">
                            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                            CRITICAL ERROR
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-2 glitch-text" data-text="FAILURE">
                            FAILURE
                        </h1>
                        <p className="text-xl text-red-400/80 mb-8 border-l-2 border-red-500/50 pl-4 py-1">
                            An unrecoverable exception has occurred in the main process.
                        </p>

                        {/* Pseudo-Terminal Output */}
                        <div className="mb-8 w-full bg-black/50 border border-red-900/50 p-4 rounded-sm font-mono text-xs md:text-sm text-red-300/80 overflow-hidden relative group hover:border-red-500/50 transition-colors">
                            <div className="absolute top-0 left-0 w-full h-[2px] bg-red-500/20" />
                            <div className="flex items-center gap-2 mb-2 border-b border-red-900/30 pb-2">
                                <Terminal className="w-3 h-3" />
                                <span>stack_trace.log</span>
                            </div>
                            <div className="space-y-1">
                                <p className="opacity-50">&gt; initiating core_dump...</p>
                                <p className="opacity-50">&gt; analyzing heap memory...</p>
                                <p className="text-white font-bold">&gt; Error: {error.message || "Unknown system failure"}</p>
                                {error.digest && <p className="opacity-70">&gt; Digest: {error.digest}</p>}
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={() => reset()}
                                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-red-600 text-white font-bold uppercase tracking-widest hover:bg-red-500 transition-all overflow-hidden"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    <RotateCcw className="w-4 h-4" />
                                    Reboot System
                                </span>
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                            </button>

                            <Link
                                href="/"
                                className="group inline-flex items-center justify-center gap-3 px-8 py-4 border border-red-500/30 text-red-400 font-bold uppercase tracking-widest hover:bg-red-500/10 hover:text-white transition-all"
                            >
                                <span>Abort</span>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* CSS for Glitch Text Effect (inline for simplicity or added to globals) */}
            <style jsx global>{`
        .glitch-text {
          position: relative;
        }
        .glitch-text::before,
        .glitch-text::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        .glitch-text::before {
          left: 2px;
          text-shadow: -1px 0 #00ffff;
          clip: rect(44px, 450px, 56px, 0);
          animation: glitch-anim 5s infinite linear alternate-reverse;
        }
        .glitch-text::after {
          left: -2px;
          text-shadow: -1px 0 #ff00ff;
          clip: rect(44px, 450px, 56px, 0);
          animation: glitch-anim2 5s infinite linear alternate-reverse;
        }
        @keyframes glitch-anim {
          0% { clip: rect(15px, 9999px, 81px, 0); }
          20% { clip: rect(98px, 9999px, 5px, 0); }
          40% { clip: rect(61px, 9999px, 57px, 0); }
          60% { clip: rect(84px, 9999px, 3px, 0); }
          80% { clip: rect(47px, 9999px, 35px, 0); }
          100% { clip: rect(2px, 9999px, 83px, 0); }
        }
        @keyframes glitch-anim2 {
          0% { clip: rect(65px, 9999px, 100px, 0); }
          20% { clip: rect(24px, 9999px, 41px, 0); }
          40% { clip: rect(5px, 9999px, 86px, 0); }
          60% { clip: rect(92px, 9999px, 39px, 0); }
          80% { clip: rect(13px, 9999px, 73px, 0); }
          100% { clip: rect(51px, 9999px, 12px, 0); }
        }
      `}</style>
        </div>
    );
}
