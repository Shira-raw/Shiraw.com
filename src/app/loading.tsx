"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Sparkles, Zap, Code2, Cpu } from "lucide-react";

const loadingStates = [
    { text: "INITIALIZING CORE", icon: <Cpu className="w-4 h-4" /> },
    { text: "LOADING ASSETS", icon: <Code2 className="w-4 h-4" /> },
    { text: "CONNECTING NODES", icon: <Zap className="w-4 h-4" /> },
    { text: "SYNCHRONIZING REALITY", icon: <Sparkles className="w-4 h-4" /> },
];

export default function Loading() {
    const [progress, setProgress] = useState(0);
    const [currentState, setCurrentState] = useState(0);

    useEffect(() => {
        const totalDuration = 2500; // 2.5 seconds total load time
        const intervalTime = 30;
        const steps = totalDuration / intervalTime;
        let currentStep = 0;

        const timer = setInterval(() => {
            currentStep++;
            const newProgress = Math.min(100, (currentStep / steps) * 100);

            setProgress(newProgress);

            // Cycle through text states based on progress
            const stateIndex = Math.floor((newProgress / 100) * loadingStates.length);
            setCurrentState(Math.min(stateIndex, loadingStates.length - 1));

            if (currentStep >= steps) {
                clearInterval(timer);
            }
        }, intervalTime);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050B14] overflow-hidden font-mono text-white">
            {/* Background Grid & Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--color-accent)]/5 rounded-full blur-[200px]" />

                {/* Scanning Line */}
                <motion.div
                    animate={{ top: ["0%", "100%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--color-accent)]/50 to-transparent blur-[1px]"
                />
            </div>

            <div className="relative z-10 flex flex-col items-center w-full max-w-sm px-6">

                {/* Geometric Loader */}
                <div className="relative w-24 h-24 mb-12 flex items-center justify-center">
                    {/* Ring 1 - Outer Rotating */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 rounded-full border border-white/10 border-t-[var(--color-accent)]"
                    />
                    {/* Ring 2 - Inner Counter-Rotating */}
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-2 rounded-full border border-white/10 border-b-[#8B5CF6]"
                    />
                    {/* Ring 3 - Pulsing Core */}
                    <motion.div
                        animate={{ scale: [0.8, 1, 0.8], opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute inset-8 rounded-full bg-[var(--color-accent)]/20 flex items-center justify-center backdrop-blur-sm shadow-[0_0_20px_rgba(16,185,129,0.4)]"
                    >
                        <Sparkles className="w-6 h-6 text-[var(--color-accent)] fill-current" />
                    </motion.div>
                </div>

                {/* Progress Number */}
                <div className="relative mb-2">
                    <span className="text-6xl font-bold tracking-tighter">
                        {Math.floor(progress).toString().padStart(3, '0')}
                    </span>
                    <span className="absolute top-2 -right-6 text-sm text-[var(--color-accent)]">%</span>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden mb-6">
                    <motion.div
                        style={{ width: `${progress}%` }}
                        className="h-full bg-gradient-to-r from-[var(--color-accent)] via-[#34D399] to-[#8B5CF6] shadow-[0_0_10px_rgba(16,185,129,0.8)]"
                    />
                </div>

                {/* Status Text Cycling */}
                <div className="h-6 overflow-hidden flex flex-col items-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentState}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[var(--color-secondary)]"
                        >
                            <span className="text-[var(--color-accent)]">{loadingStates[currentState].icon}</span>
                            <span>{loadingStates[currentState].text}</span>
                        </motion.div>
                    </AnimatePresence>
                </div>

            </div>

            {/* Corner Data */}
            <div className="absolute bottom-8 left-8 text-[10px] text-white/20 font-mono hidden md:block">
                SYS.V.2.0.4 <br />
                MEM_OK
            </div>
            <div className="absolute bottom-8 right-8 text-[10px] text-white/20 font-mono hidden md:block text-right">
                SECURE_CONN <br />
                LATENCY: 12ms
            </div>
        </div>
    );
}
