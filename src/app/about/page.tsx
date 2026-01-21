"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import {
    ArrowRight,
    Sparkles,
    Target,
    Rocket,
    Users,
    Award,
    Globe,
    Zap,
    Heart,
    Shield,
    Lightbulb,
    TrendingUp
} from "lucide-react";
import Link from "next/link";

const stats = [
    { number: "10+", label: "Projects Delivered", icon: <Rocket className="w-5 h-5" /> },
    { number: "5M+", label: "Users Impacted", icon: <Users className="w-5 h-5" /> },
    { number: "3", label: "Industries Served", icon: <Globe className="w-5 h-5" /> },
    { number: "99%", label: "Client Satisfaction", icon: <Heart className="w-5 h-5" /> },
];

const values = [
    {
        icon: <Lightbulb className="w-8 h-8" />,
        title: "Innovation First",
        description: "We push boundaries and challenge conventions. Every project is an opportunity to pioneer new solutions.",
        color: "#10B981"
    },
    {
        icon: <Shield className="w-8 h-8" />,
        title: "Quality Obsessed",
        description: "Mediocrity is not in our vocabulary. We deliver pixel-perfect, performant solutions that exceed expectations.",
        color: "#8B5CF6"
    },
    {
        icon: <Heart className="w-8 h-8" />,
        title: "Client Partnership",
        description: "Your success is our success. We build lasting relationships through transparency and dedication.",
        color: "#EC4899"
    },
    {
        icon: <TrendingUp className="w-8 h-8" />,
        title: "Results Driven",
        description: "Beautiful design means nothing without impact. We measure success by the value we create for you.",
        color: "#F59E0B"
    },
];

const timeline = [
    { year: "2026", title: "The Beginning", description: "Founded in Andhra Pradesh, India with a vision to transform digital experiences." },
    { year: "2027", title: "First Milestone", description: "Targeting our first major gaming project launch." },
    { year: "2028", title: "Expansion", description: "Growing our team of specialists globally." },
    { year: "2029", title: "Innovation", description: "Pioneering Web3, AI, and immersive tech solutions." },
    { year: "2030", title: "The Future", description: "Building the next generation of digital experiences." },
];

const team = [
    { name: "Alex Chen", role: "CEO & Founder", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" },
    { name: "Sarah Kim", role: "Creative Director", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop" },
    { name: "Marcus Johnson", role: "Tech Lead", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop" },
    { name: "Emily Zhang", role: "Design Lead", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop" },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] as const }
    }
};

export default function AgencyPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-[var(--color-background)] selection:bg-[var(--color-accent)] selection:text-white">

                {/* Hero Section */}
                <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
                    {/* Background Elements */}
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute inset-0 opacity-[0.03] bg-grid" />
                        <motion.div
                            animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                            className="absolute top-0 right-0 w-[800px] h-[800px] bg-[var(--color-accent)]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"
                        />
                        <motion.div
                            animate={{ rotate: -360, scale: [1, 1.2, 1] }}
                            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                            className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#8B5CF6]/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"
                        />
                    </div>

                    <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                className="text-left"
                            >
                                {/* Badge */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/5 backdrop-blur-md mb-8"
                                >
                                    <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse" />
                                    <span className="text-xs font-mono uppercase tracking-widest text-[var(--color-accent)]">Est. 2024 :: Hyderabad</span>
                                </motion.div>

                                {/* Main Headline */}
                                <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold font-mono tracking-tighter mb-8 leading-[0.9]">
                                    THE <br />
                                    ALCHEMY <br />
                                    OF <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent)] via-[#34D399] to-[#8B5CF6]">CODE</span>
                                </h1>

                                {/* Subheadline */}
                                <p className="text-lg md:text-xl text-[var(--color-secondary)] max-w-xl mb-12 leading-relaxed border-l-2 border-[var(--color-accent)]/20 pl-6">
                                    We don&apos;t just build software; we transmute <span className="text-white font-bold">ideas</span> into <span className="text-white font-bold">digital gold</span>.
                                    Merging artistic vision with engineering precision to define the next era of the web.
                                </p>

                                {/* CTA */}
                                <div className="flex flex-wrap gap-6">
                                    <Link
                                        href="/contact"
                                        className="px-8 py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-[var(--color-accent)] hover:text-white transition-all flex items-center gap-2"
                                    >
                                        Initiate Protocol <ArrowRight className="w-4 h-4" />
                                    </Link>
                                    <div className="flex items-center gap-4 text-sm font-mono text-[var(--color-secondary)]">
                                        <div className="w-12 h-[1px] bg-white/20" />
                                        <span>System Ready</span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Right Side Stats / Visuals */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="relative hidden lg:block"
                            >
                                <div className="grid grid-cols-2 gap-4">
                                    {stats.map((stat, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.4 + (index * 0.1) }}
                                            className="p-8 border border-white/10 bg-white/[0.02] backdrop-blur-sm hover:border-[var(--color-accent)]/50 transition-colors group"
                                        >
                                            <div className="mb-4 text-[var(--color-accent)] opacity-50 group-hover:opacity-100 transition-opacity">
                                                {stat.icon}
                                            </div>
                                            <h3 className="text-4xl font-bold font-mono text-white mb-1 group-hover:text-[var(--color-accent)] transition-colors">
                                                {stat.number}
                                            </h3>
                                            <p className="text-xs font-mono uppercase tracking-widest text-[var(--color-secondary)]">
                                                {stat.label}
                                            </p>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Abstract Lines */}
                                <svg className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-20 text-[var(--color-accent)] pointer-events-none" viewBox="0 0 100 100">
                                    <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.2" fill="none" />
                                    <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="0.2" fill="none" />
                                    <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="0.2" fill="none" />
                                </svg>
                            </motion.div>
                        </div>
                    </div>

                    {/* Scroll Indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                    >
                        <div className="w-[1px] h-12 bg-gradient-to-b from-[var(--color-accent)] to-transparent" />
                        <span className="text-[10px] font-mono uppercase text-[#6B7280]">Scroll to Explore</span>
                    </motion.div>
                </section>

                {/* Mission Section */}
                <section className="py-32 px-6 md:px-12 relative">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            {/* Left: Content */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <Target className="w-5 h-5 text-[var(--color-accent)]" />
                                    <span className="text-[var(--color-accent)] font-mono uppercase tracking-widest text-sm">Our Mission</span>
                                </div>

                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-mono text-white tracking-tighter mb-8">
                                    Bridging the Gap Between
                                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent)] to-[#F59E0B]">
                                        &quot;What If?&quot; and &quot;What Is.&quot;
                                    </span>
                                </h2>

                                <div className="space-y-6 text-lg text-[var(--color-secondary)] leading-relaxed">
                                    <p>
                                        In a digital universe filled with noise, raw potential is often lost in translation.
                                        <span className="text-white font-semibold"> SHIRAW</span> was born from a simple obsession:
                                        transforming the impossible into the inevitable.
                                    </p>
                                    <p>
                                        We don&apos;t just write software; we refine chaos. Like a diamond cutter approaching
                                        a rough stone, we take your rawest, wildest concepts and polish them into
                                        multifaceted digital realities.
                                    </p>
                                </div>

                                <div className="mt-10">
                                    <Link
                                        href="/services"
                                        className="inline-flex items-center gap-3 text-white font-bold uppercase tracking-widest text-sm group"
                                    >
                                        <span className="group-hover:text-[var(--color-accent)] transition-colors">Explore Our Services</span>
                                        <ArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform text-[var(--color-accent)]" />
                                    </Link>
                                </div>
                            </motion.div>

                            {/* Right: Visual */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="relative"
                            >
                                <div className="aspect-square relative">
                                    {/* Decorative Elements */}
                                    <div className="absolute inset-0 border border-white/10 rotate-6" />
                                    <div className="absolute inset-0 border border-white/10 -rotate-6" />
                                    <div className="absolute inset-8 bg-gradient-to-br from-[var(--color-accent)]/20 to-[#8B5CF6]/20 backdrop-blur-sm border border-white/10" />

                                    {/* Center Content */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-center">
                                            <Zap className="w-16 h-16 text-[var(--color-accent)] mx-auto mb-4" />
                                            <p className="text-3xl font-bold font-mono text-white">We Are</p>
                                            <p className="text-5xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent)] to-[#F59E0B]">
                                                SHIRAW
                                            </p>
                                        </div>
                                    </div>

                                    {/* Floating Orbs */}
                                    <motion.div
                                        animate={{ y: [0, -20, 0] }}
                                        transition={{ repeat: Infinity, duration: 5 }}
                                        className="absolute -top-10 -right-10 w-24 h-24 bg-[var(--color-accent)]/20 rounded-full blur-xl"
                                    />
                                    <motion.div
                                        animate={{ y: [0, 20, 0] }}
                                        transition={{ repeat: Infinity, duration: 7, delay: 1 }}
                                        className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#8B5CF6]/20 rounded-full blur-xl"
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="py-32 px-6 md:px-12 bg-[#111827]/50 border-y border-white/5">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-20"
                        >
                            <span className="text-[var(--color-accent)] font-mono uppercase tracking-widest text-sm">Our Values</span>
                            <h2 className="text-4xl md:text-6xl font-bold font-mono text-white tracking-tighter mt-4">
                                What We <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent)] to-[#F59E0B]">Stand For</span>
                            </h2>
                        </motion.div>

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                        >
                            {values.map((value, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className="group p-8 border border-white/10 bg-[#1F2937]/30 hover:border-white/20 transition-all duration-500 relative overflow-hidden"
                                >
                                    <div
                                        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-[var(--icon-bg)] text-[var(--icon-color)]"
                                        style={{ '--icon-bg': `${value.color}15`, '--icon-color': value.color } as React.CSSProperties}
                                    >
                                        {value.icon}
                                    </div>
                                    <h3 className="text-xl font-bold font-mono text-white mb-3">{value.title}</h3>
                                    <p className="text-[var(--color-secondary)] text-sm leading-relaxed">{value.description}</p>

                                    {/* Hover Glow */}
                                    <div
                                        className="absolute -inset-1 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none blur-3xl bg-[image:radial-gradient(circle_at_50%_50%,var(--glow-color),transparent_70%)]"
                                        style={{ '--glow-color': `${value.color}10` } as React.CSSProperties}
                                    />
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* Timeline Section */}
                <section className="py-32 px-6 md:px-12">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-20"
                        >
                            <span className="text-[var(--color-accent)] font-mono uppercase tracking-widest text-sm">Our Journey</span>
                            <h2 className="text-4xl md:text-6xl font-bold font-mono text-white tracking-tighter mt-4">
                                From Vision to <span className="text-[var(--color-secondary)]">Victory</span>
                            </h2>
                        </motion.div>

                        <div className="relative">
                            {/* Timeline Line */}
                            <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[var(--color-accent)] via-white/20 to-transparent hidden lg:block" />

                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="space-y-12 lg:space-y-0"
                            >
                                {timeline.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        variants={itemVariants}
                                        className={`lg:flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                                    >
                                        <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-20 lg:text-right' : 'lg:pl-20'}`}>
                                            <div className="p-6 border border-white/10 bg-[#111827]/50 hover:border-[var(--color-accent)]/30 transition-all">
                                                <span className="text-4xl font-bold font-mono text-[var(--color-accent)]">{item.year}</span>
                                                <h3 className="text-xl font-bold font-mono text-white mt-2">{item.title}</h3>
                                                <p className="text-[var(--color-secondary)] mt-2">{item.description}</p>
                                            </div>
                                        </div>

                                        {/* Timeline Dot */}
                                        <div className="hidden lg:flex items-center justify-center relative z-10">
                                            <div className="w-4 h-4 rounded-full bg-[var(--color-accent)] border-4 border-[var(--color-background)]" />
                                        </div>

                                        <div className="lg:w-1/2" />
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="py-32 px-6 md:px-12 bg-[#111827]/30 border-y border-white/5">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-20"
                        >
                            <span className="text-[var(--color-accent)] font-mono uppercase tracking-widest text-sm">The Team</span>
                            <h2 className="text-4xl md:text-6xl font-bold font-mono text-white tracking-tighter mt-4">
                                Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent)] to-[#F59E0B]">Alchemists</span>
                            </h2>
                            <p className="text-[var(--color-secondary)] text-lg mt-6 max-w-2xl mx-auto">
                                A diverse collective of dreamers, builders, and innovators united by a shared passion for digital excellence.
                            </p>
                        </motion.div>

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                        >
                            {team.map((member, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className="group relative overflow-hidden"
                                >
                                    <div className="aspect-[3/4] relative overflow-hidden border border-white/10">
                                        <div
                                            className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110 bg-[image:var(--bg-image)]"
                                            style={{ '--bg-image': `url(${member.image})` } as React.CSSProperties}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent" />

                                        {/* Info */}
                                        <div className="absolute bottom-0 left-0 right-0 p-6">
                                            <h3 className="text-xl font-bold font-mono text-white">{member.name}</h3>
                                            <p className="text-[var(--color-accent)] text-sm font-mono">{member.role}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mt-16"
                        >
                            <Link
                                href="/careers"
                                className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-widest text-sm hover:bg-white/5 hover:border-white/40 transition-all"
                            >
                                <span>Join Our Team</span>
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </motion.div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-32 px-6 md:px-12 relative overflow-hidden">
                    {/* Background Effects */}
                    <div className="absolute inset-0">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--color-accent)]/10 rounded-full blur-[200px]" />
                    </div>

                    <div className="max-w-4xl mx-auto text-center relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <Award className="w-16 h-16 text-[var(--color-accent)] mx-auto mb-8" />

                            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold font-mono text-white tracking-tighter mb-8">
                                Ready to Create
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent)] to-[#F59E0B]">
                                    Something Extraordinary?
                                </span>
                            </h2>

                            <p className="text-lg md:text-xl text-[var(--color-secondary)] mb-12 max-w-2xl mx-auto">
                                Let&apos;s transform your vision into reality. Our team is ready to embark on this journey with you.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[var(--color-accent)] text-white text-sm font-bold uppercase tracking-widest hover:bg-[#059669] transition-all shadow-[0_0_40px_rgba(16,185,129,0.3)]"
                                >
                                    <span>Start a Project</span>
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                                <Link
                                    href="/projects"
                                    className="inline-flex items-center justify-center gap-3 px-10 py-5 border border-white/20 text-white text-sm font-bold uppercase tracking-widest hover:bg-white/5 transition-all"
                                >
                                    <span>View Our Work</span>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>
        </>
    );
}
