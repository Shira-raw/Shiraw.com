"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Lock, Eye, FileText, Server, Database, Globe, UserCheck, AlertTriangle, Terminal, ChevronRight, Cpu } from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicy() {
    const [activeSection, setActiveSection] = useState("manifest");
    const [scrolled, setScrolled] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const sections = [
        { id: "collection", title: "Data Ingestion", icon: <Database className="w-4 h-4" /> },
        { id: "usage", title: "Usage Algorithms", icon: <Cpu className="w-4 h-4" /> },
        { id: "sharing", title: "Information Nexus", icon: <Globe className="w-4 h-4" /> },
        { id: "security", title: "Security Protocols", icon: <Shield className="w-4 h-4" /> },
        { id: "rights", title: "User Overrides", icon: <UserCheck className="w-4 h-4" /> },
        { id: "cookies", title: "Tracker Heuristics", icon: <Eye className="w-4 h-4" /> }
    ];

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 100; // Header offset
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
            setActiveSection(id);
        }
    };

    return (
        <div className="min-h-screen bg-[#0A0F1C] text-slate-300 font-mono selection:bg-[var(--color-accent)] selection:text-white">
            <Navbar />

            {/* Fixed Background Elements */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--color-accent)]/20 to-transparent" />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-accent)]/5 rounded-full blur-[120px] mix-blend-screen" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#3B82F6]/5 rounded-full blur-[120px] mix-blend-screen" />
                <div className="absolute inset-0 opacity-[0.03] bg-grid-xs" />
            </div>

            <main className="relative z-10 pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-12">

                    {/* Left Sidebar Navigation (Sticky) */}
                    <aside className="lg:w-64 flex-shrink-0">
                        <div className="sticky top-32">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                className="mb-8"
                            >
                                <div className="flex items-center gap-2 text-[var(--color-accent)] mb-2">
                                    <Terminal className="w-5 h-5" />
                                    <span className="font-bold tracking-widest text-sm">INDEX_V2.0</span>
                                </div>
                                <div className="h-[2px] w-full bg-gradient-to-r from-[var(--color-accent)] to-transparent opacity-50" />
                            </motion.div>

                            <nav className="space-y-1 relative border-l border-white/10 ml-2">
                                {sections.map((section, index) => (
                                    <button
                                        key={section.id}
                                        onClick={() => scrollToSection(section.id)}
                                        className={`group flex items-center gap-3 w-full text-left px-4 py-2 text-xs uppercase tracking-wider transition-all duration-300 border-l-2 -ml-[1px] ${activeSection === section.id
                                            ? "border-[var(--color-accent)] text-white bg-[var(--color-accent)]/10"
                                            : "border-transparent text-slate-500 hover:text-[var(--color-accent)] hover:border-[var(--color-accent)]/50"
                                            }`}
                                    >
                                        <span className={`transition-opacity duration-300 ${activeSection === section.id ? "opacity-100" : "opacity-0 group-hover:opacity-50"}`}>
                                            {">"}
                                        </span>
                                        {section.title}
                                    </button>
                                ))}
                            </nav>

                            <div className="mt-8 p-4 bg-white/5 border border-white/10 rounded-sm backdrop-blur-sm">
                                <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
                                    <Lock className="w-3 h-3" />
                                    <span>STATUS: ENCRYPTED</span>
                                </div>
                                <div className="text-[10px] text-slate-600 font-mono">
                                    ID: {`SH-${new Date().getFullYear()}-SECURE`}
                                    <br />
                                    LOC: 127.0.0.1
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Main Content Area */}
                    <div className="flex-1 space-y-16">

                        {/* Header */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="relative border-b border-white/10 pb-12"
                        >
                            <div className="absolute -top-10 -left-10 w-20 h-20 border-t-2 border-l-2 border-[var(--color-accent)]/20" />
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 rounded-full text-[var(--color-accent)] text-xs font-bold tracking-widest uppercase mb-6">
                                <Shield className="w-3 h-3" />
                                Privacy Manifest
                            </div>
                            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                                Data <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent)] to-[#34D399]">Protocol</span>
                            </h1>
                            <p className="text-lg text-slate-400 max-w-3xl leading-relaxed">
                                We utilize advanced data heuristics to optimize your neural link to our servers. This document outlines the parameters of our data ingestion, processing algorithms, and security countermeasures.
                            </p>
                        </motion.section>

                        {/* Sections */}
                        <div className="space-y-24">
                            <Section
                                id="collection"
                                title="Data Ingestion"
                                subtitle="Automatic & Voluntary Telemetry"
                                icon={<Database className="w-6 h-6" />}
                                number="01"
                            >
                                <p className="mb-4">We collect specific data points to ensure system integrity and optimize user experience. This ingestion process is categorized into two streams:</p>
                                <ul className="grid md:grid-cols-2 gap-4 mt-6">
                                    <li className="bg-[#111827] border border-white/10 p-4 rounded-sm">
                                        <strong className="block text-[var(--color-accent)] text-sm mb-2 uppercase tracking-wide">Stream A: User Input</strong>
                                        <div className="text-sm opacity-80">Information you voluntarily deploy via contact forms, project inquiries, or career applications (e.g., Name, Email, Neural Handle).</div>
                                    </li>
                                    <li className="bg-[#111827] border border-white/10 p-4 rounded-sm">
                                        <strong className="block text-[#34D399] text-sm mb-2 uppercase tracking-wide">Stream B: Auto-Telemetry</strong>
                                        <div className="text-sm opacity-80">System-generated logs including IP address, browser type, device fingerprints, and navigation patterns.</div>
                                    </li>
                                </ul>
                            </Section>

                            <Section
                                id="usage"
                                title="Usage Algorithms"
                                subtitle="Processing & Optimization"
                                icon={<Cpu className="w-6 h-6" />}
                                number="02"
                            >
                                <p>Your data is processed by our internal algorithms for specific purposes. We strictly prohibit the unauthorized distribution of your digital footprint.</p>
                                <div className="mt-8 border-l-2 border-[var(--color-accent)] pl-6 space-y-4">
                                    <div className="relative">
                                        <div className="absolute -left-[29px] top-1.5 w-3 h-3 bg-[#0A0F1C] border-2 border-[var(--color-accent)] rounded-full" />
                                        <h4 className="text-white font-bold mb-1">Service Optimization</h4>
                                        <p className="text-sm">Refining our digital products and debugging system anomalies.</p>
                                    </div>
                                    <div className="relative">
                                        <div className="absolute -left-[29px] top-1.5 w-3 h-3 bg-[#0A0F1C] border-2 border-[var(--color-accent)] rounded-full" />
                                        <h4 className="text-white font-bold mb-1">Communication Uplink</h4>
                                        <p className="text-sm">Responding to your inquiries and transmitting critical project updates.</p>
                                    </div>
                                    <div className="relative">
                                        <div className="absolute -left-[29px] top-1.5 w-3 h-3 bg-[#0A0F1C] border-2 border-[var(--color-accent)] rounded-full" />
                                        <h4 className="text-white font-bold mb-1">Security Compliance</h4>
                                        <p className="text-sm">Preventing fraudulent activity and ensuring network integrity.</p>
                                    </div>
                                </div>
                            </Section>

                            <Section
                                id="sharing"
                                title="Information Nexus"
                                subtitle="Third-Party Integrations"
                                icon={<Globe className="w-6 h-6" />}
                                number="03"
                            >
                                <p className="mb-6">We do not sell your data. However, we bridge connections with select third-party processors to facilitate operations:</p>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    {["Analytics Providers", "Payment Gateways", "Hosting Infrastructures"].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 p-3 border border-white/5 bg-white/5 rounded-sm">
                                            <Server className="w-4 h-4 text-slate-400" />
                                            <span className="text-sm font-semibold text-slate-200">{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-6 flex items-start gap-3 p-4 bg-yellow-900/10 border border-yellow-500/20 rounded-sm">
                                    <AlertTriangle className="w-5 h-5 text-yellow-500 shrink-0" />
                                    <p className="text-xs text-yellow-200/80">These external entities operate under their own privacy directives. We recommend reviewing their protocols before establishing a deep connection.</p>
                                </div>
                            </Section>

                            <Section
                                id="security"
                                title="Security Protocols"
                                subtitle="Encryption & Defense"
                                icon={<Shield className="w-6 h-6" />}
                                number="04"
                            >
                                <div className="relative overflow-hidden rounded-sm border border-white/10 bg-[#111827]">
                                    <div className="absolute top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent animate-pulse" />
                                    <div className="p-8">
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center">
                                                <Lock className="w-6 h-6 text-[var(--color-accent)]" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-white">Military-Grade Encryption</h3>
                                                <p className="text-xs text-[var(--color-accent)] font-mono mt-1">AES-256 STANDARD ACTIVE</p>
                                            </div>
                                        </div>
                                        <p className="text-sm leading-relaxed mb-4">
                                            We employ end-to-end encryption for data at rest and in transit. Access to sensitive terminals is restricted to authorized personnel with multi-factor authentication clearances.
                                        </p>
                                        <div className="w-full bg-black/50 h-2 rounded-full overflow-hidden">
                                            <div className="h-full w-[98%] bg-[var(--color-accent)] shadow-[0_0_10px_var(--color-accent)]" />
                                        </div>
                                        <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-2">
                                            <span>SYSTEM INTEGRITY</span>
                                            <span>98.9% SECURE</span>
                                        </div>
                                    </div>
                                </div>
                            </Section>

                            <Section
                                id="rights"
                                title="User Overrides"
                                subtitle="Your Control Panel"
                                icon={<UserCheck className="w-6 h-6" />}
                                number="05"
                            >
                                <p className="mb-6">You retain full sovereignty over your digital footprint. Currently supported overrides include:</p>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {[
                                        { l: "Access Request", d: "Retrieve a copy of your stored data." },
                                        { l: "Deletion Protocol", d: "Permanently purge your records from our servers." },
                                        { l: "Correction Patch", d: "Update or rectify inaccurate information." },
                                        { l: "Consent Withdrawal", d: "Revoke previously granted permissions." }
                                    ].map((item, i) => (
                                        <div key={i} className="group p-4 border border-white/10 hover:border-[var(--color-accent)]/50 transition-colors rounded-sm cursor-default">
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="text-sm font-bold text-white group-hover:text-[var(--color-accent)] transition-colors">{item.l}</span>
                                                <ChevronRight className="w-4 h-4 text-slate-600 group-hover:translate-x-1 transition-transform" />
                                            </div>
                                            <p className="text-xs text-slate-500">{item.d}</p>
                                        </div>
                                    ))}
                                </div>
                            </Section>

                            <Section
                                id="cookies"
                                title="Tracker Heuristics"
                                subtitle="Local Storage & Sessions"
                                icon={<Eye className="w-6 h-6" />}
                                number="06"
                            >
                                <p>Our interface utilizes &quot;cookies&quot; and local storage to maintain session continuity and analyze user behavior. These small data packets are vital for the seamless operation of the neural link.</p>
                                <div className="mt-6 flex flex-col md:flex-row gap-4">
                                    <div className="flex-1 p-4 bg-white/5 border border-white/10 rounded-sm">
                                        <h4 className="text-white text-sm font-bold mb-2">Essential</h4>
                                        <p className="text-xs text-slate-400">Required for core system functions.</p>
                                    </div>
                                    <div className="flex-1 p-4 bg-white/5 border border-white/10 rounded-sm">
                                        <h4 className="text-white text-sm font-bold mb-2">Analytical</h4>
                                        <p className="text-xs text-slate-400">Used to optimize system performance.</p>
                                    </div>
                                    <div className="flex-1 p-4 bg-white/5 border border-white/10 rounded-sm">
                                        <h4 className="text-white text-sm font-bold mb-2">Functional</h4>
                                        <p className="text-xs text-slate-400">Stores your interface preferences.</p>
                                    </div>
                                </div>
                            </Section>
                        </div>

                        {/* Contact CTA */}
                        <div className="pt-12 border-t border-white/10">
                            <h3 className="text-2xl font-bold text-white mb-4">Questions? Initiate Uplink.</h3>
                            <p className="text-slate-400 mb-6">If you have concerns regarding these protocols, contact our Data Protection Officer directly.</p>
                            <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-sm font-bold tracking-wide hover:bg-[var(--color-accent)] hover:text-white transition-all duration-300">
                                <Terminal className="w-4 h-4" />
                                OPEN CHANNEL
                            </Link>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}

function Section({ id, title, subtitle, icon, number, children }: { id: string, title: string, subtitle: string, icon: any, number: string, children: React.ReactNode }) {
    return (
        <section id={id} className="scroll-mt-32 group">
            <div className="flex items-end gap-4 mb-6 border-b border-white/10 pb-4">
                <span className="text-4xl font-bold text-[var(--color-accent)]/20 font-mono">{number}</span>
                <div className="flex-1">
                    <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                        <span className="p-2 bg-[var(--color-accent)]/10 rounded text-[var(--color-accent)] group-hover:scale-110 transition-transform duration-300">
                            {icon}
                        </span>
                        {title}
                    </h2>
                    <p className="text-xs text-[var(--color-accent)] uppercase tracking-widest mt-1 font-mono">{subtitle}</p>
                </div>
            </div>
            <div className="text-slate-400 leading-relaxed text-sm md:text-base">
                {children}
            </div>
        </section>
    );
}
