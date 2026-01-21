"use client";

import { useEffect } from "react";
import { Inter } from "next/font/google"; // Simplified font import
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <html lang="en">
            <body className={`${inter.className} bg-black text-white overflow-hidden`}>
                <div className="min-h-screen flex flex-col items-center justify-center p-4 relative">

                    {/* Background Static */}
                    <div className="absolute inset-0 z-0 opacity-10 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>

                    <div className="relative z-10 max-w-lg w-full text-center border border-red-900/50 p-8 md:p-12 bg-black/80 backdrop-blur-md shadow-[0_0_50px_rgba(220,38,38,0.2)]">

                        {/* Icon */}
                        <div className="w-20 h-20 bg-red-600/10 border border-red-500 rounded-full mx-auto mb-8 flex items-center justify-center animate-pulse">
                            <span className="text-4xl font-bold text-red-500">!</span>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tighter text-white">
                            Fatal System Error
                        </h2>

                        <p className="text-red-400/80 mb-8 font-mono text-sm">
                            The application encountered a critical failure and cannot continue.
                        </p>

                        {/* Error Box */}
                        <div className="bg-red-950/30 border border-red-900/50 p-4 rounded mb-8 text-left font-mono text-xs text-red-300 overflow-auto max-h-32 shadow-inner">
                            <p className="opacity-50 mb-2">&gt; diagnosing_crash_dump...</p>
                            <span className="text-red-200">{error.message || "Unknown Error"}</span>
                        </div>

                        <button
                            onClick={() => reset()}
                            className="w-full py-4 bg-red-600 hover:bg-red-500 text-white font-bold uppercase tracking-widest transition-all duration-300 shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:shadow-[0_0_30px_rgba(220,38,38,0.6)]"
                        >
                            Hard Reset
                        </button>
                    </div>

                    {/* Footer */}
                    <div className="absolute bottom-6 text-center w-full">
                        <p className="text-red-900 font-mono text-[10px] tracking-[0.3em]">
                            SYSTEM_HALTED_SAFELY
                        </p>
                    </div>
                </div>
            </body>
        </html>
    );
}
