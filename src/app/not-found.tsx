"use client";

import Link from "next/link";
import { MoveLeft, Home } from "lucide-react";
import { motion } from "framer-motion";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-[var(--color-background)] flex items-center justify-center relative overflow-hidden text-white font-mono">
            {/* Background Gradients */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-accent)]/10 rounded-full blur-[200px]" />
            </div>

            <div className="relative z-10 text-center max-w-2xl px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-[12rem] md:text-[16rem] font-bold leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-[#1F2937] to-[#111827] drop-shadow-[0_2px_2px_rgba(255,255,255,0.1)] select-none">
                        404
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full"
                >
                    <p className="text-[var(--color-accent)] uppercase tracking-[0.2em] text-sm mb-4">
                        System Malfunction
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Signal Lost
                    </h2>
                    <p className="text-[var(--color-secondary)] text-lg mb-10 max-w-md mx-auto">
                        The page you're looking for has drifted into the void or never existed in this timeline.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/"
                            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[var(--color-accent)] text-white text-sm font-bold uppercase tracking-widest hover:bg-[#059669] transition-all"
                        >
                            <Home className="w-4 h-4" />
                            <span>Return Base</span>
                        </Link>
                        <button
                            onClick={() => window.history.back()}
                            className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-white/20 text-white text-sm font-bold uppercase tracking-widest hover:bg-white/5 transition-all"
                        >
                            <MoveLeft className="w-4 h-4" />
                            <span>Go Back</span>
                        </button>
                    </div>
                </motion.div>
            </div>

            <div className="absolute bottom-12 left-0 w-full text-center">
                <p className="text-white/20 text-xs uppercase tracking-widest">
                    Error Code: 404_NOT_FOUND
                </p>
            </div>
        </div>
    );
}
