"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Check, Lock } from "lucide-react";
import Link from "next/link";

export default function PrivacyConsent() {
    const [showConsent, setShowConsent] = useState(false);

    useEffect(() => {
        // Check if user has already made a choice
        const consent = localStorage.getItem("shiraw-privacy-consent");
        if (!consent) {
            // Small delay to allow the loading animation to finish if it's running
            const timer = setTimeout(() => setShowConsent(true), 3000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("shiraw-privacy-consent", "accepted");
        setShowConsent(false);
    };



    return (
        <AnimatePresence>
            {showConsent && (
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 50, scale: 0.95 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="fixed bottom-6 right-6 z-[200] max-w-md w-full md:w-auto"
                >
                    <div className="bg-[#0F172A]/90 backdrop-blur-xl border border-white/10 p-6 shadow-[0_0_50px_rgba(0,0,0,0.5)] rounded-sm relative overflow-hidden group">

                        {/* Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent)]/5 to-transparent pointer-events-none" />
                        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--color-accent)]/50 to-transparent" />

                        <div className="relative z-10">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="w-10 h-10 bg-[var(--color-accent)]/10 rounded-full flex items-center justify-center flex-shrink-0 animate-pulse">
                                    <Shield className="w-5 h-5 text-[var(--color-accent)]" />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold font-mono tracking-wide mb-1 flex items-center gap-2">
                                        PROTOCOL INITIATION
                                        <Lock className="w-3 h-3 text-[var(--color-secondary)]" />
                                    </h3>
                                    <p className="text-[var(--color-secondary)] text-sm leading-relaxed">
                                        We utilize data heuristics to optimize your neural link to our servers.
                                        Review our <Link href="/privacy" className="text-[var(--color-accent)] underline underline-offset-2 hover:text-white transition-colors">Privacy Protocols</Link> for detailed parameters.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <button
                                    onClick={handleAccept}
                                    className="flex-1 bg-[var(--color-accent)] hover:bg-[#059669] text-white text-xs font-bold uppercase tracking-widest py-3 px-4 flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:shadow-[0_0_30px_rgba(16,185,129,0.4)]"
                                >
                                    <Check className="w-4 h-4" />
                                    Initialize
                                </button>

                            </div>
                        </div>

                        {/* Decorative Corner */}
                        <div className="absolute bottom-0 right-0 w-4 h-4 border-r border-b border-[var(--color-accent)]/30" />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
