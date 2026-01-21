"use client";

import { motion, useScroll, useTransform, useInView, useSpring } from "framer-motion";
import dynamic from 'next/dynamic';
import Link from "next/link";
import {
    ArrowRight,
    ArrowUpRight,
    Sparkles,
    Zap,
    Code2,
    Gamepad2,
    Smartphone,
    Glasses,
    Globe,
    Palette,
    Play,
    Star,
    ChevronDown
} from "lucide-react";
import { useRef, useMemo } from "react";

const Scene = dynamic(() => import('@/components/canvas/Scene'), { ssr: false });

// Optimized animation variants with GPU-friendly transforms
const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.08, delayChildren: 0.2 }
    }
};

const fadeInUp = {
    hidden: {
        opacity: 0,
        y: 40,
        // Use transform3d for GPU acceleration
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1] as const
        }
    }
};

const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }
    }
};

const services = [
    {
        icon: <Gamepad2 className="w-8 h-8" />,
        name: "Game Dev",
        desc: "AAA & Indie Games",
        color: "#10B981"
    },
    {
        icon: <Glasses className="w-8 h-8" />,
        name: "AR/VR",
        desc: "Immersive Experiences",
        color: "#8B5CF6"
    },
    {
        icon: <Globe className="w-8 h-8" />,
        name: "Web3",
        desc: "Blockchain & DeFi",
        color: "#F59E0B"
    },
    {
        icon: <Smartphone className="w-8 h-8" />,
        name: "Apps",
        desc: "iOS & Android",
        color: "#06B6D4"
    },
    {
        icon: <Code2 className="w-8 h-8" />,
        name: "Web",
        desc: "Modern Platforms",
        color: "#EC4899"
    },
    {
        icon: <Palette className="w-8 h-8" />,
        name: "UI/UX",
        desc: "Design Systems",
        color: "#14B8A6"
    },
];

const stats = [
    { value: "10", label: "Projects Delivered", suffix: "+" },
    { value: "5", label: "Users Impacted", suffix: "M+" },
    { value: "99", label: "Client Satisfaction", suffix: "%" },
    { value: "3", label: "Industries Served", suffix: "" },
];

const testimonials = [
    { quote: "SHIRAW transformed our vision into reality.", author: "Tech Startup CEO" },
    { quote: "Exceptional quality and attention to detail.", author: "Gaming Studio Director" },
    { quote: "The best development partner we've ever had.", author: "Enterprise CTO" },
];

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const servicesRef = useRef<HTMLDivElement>(null);
    const isServicesInView = useInView(servicesRef, { once: true, margin: "-100px" });

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    // Spring-based scroll transforms for smoother animation
    const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };

    const heroYRaw = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const heroOpacityRaw = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
    const textYRaw = useTransform(scrollYProgress, [0, 0.5], [0, 80]);

    // Apply spring physics for buttery smooth scrolling
    const heroY = useSpring(heroYRaw, springConfig);
    const heroOpacity = useSpring(heroOpacityRaw, springConfig);
    const textY = useSpring(textYRaw, springConfig);

    return (
        <div ref={containerRef} className="relative">
            {/* ===== HERO SECTION ===== */}
            <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
                {/* 3D Background - GPU accelerated */}
                <motion.div
                    style={{
                        y: heroY,
                        willChange: 'transform',
                    }}
                    className="absolute inset-0 z-0 transform-gpu"
                >
                    <Scene />
                </motion.div>

                {/* Gradient Overlays */}
                <div className="absolute inset-0 z-[1] pointer-events-none">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(16,185,129,0.25),transparent)]" />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_50%,rgba(139,92,246,0.15),transparent)]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/50 to-transparent" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#0F172A_80%)]" />
                </div>

                {/* Animated Particles/Grid */}
                <div className="absolute inset-0 z-[2] pointer-events-none">
                    <div className="absolute inset-0 opacity-[0.015] bg-grid" />
                </div>

                {/* Hero Content - GPU accelerated */}
                <motion.div
                    style={{
                        y: textY,
                        opacity: heroOpacity,
                        willChange: 'transform, opacity',
                    }}
                    className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 text-center transform-gpu"
                >
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                    >

                        {/* Main Headline */}
                        <motion.div variants={fadeInUp} className="mb-8">
                            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-bold font-mono tracking-tighter leading-[0.85]">
                                <span className="text-white block">We Craft</span>
                                <span className="relative inline-block">
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent)] via-[#34D399] to-[#8B5CF6] animate-gradient-x">
                                        Digital
                                    </span>
                                </span>
                                <span className="text-white block">
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F59E0B] via-[#EC4899] to-[#8B5CF6]">
                                        Masterpieces
                                    </span>
                                </span>
                            </h1>
                        </motion.div>

                        {/* Subheadline */}
                        <motion.p
                            variants={fadeInUp}
                            className="text-lg md:text-xl lg:text-2xl text-[var(--color-secondary)] max-w-3xl mx-auto mb-12 leading-relaxed"
                        >
                            A premium digital studio from <span className="text-white">India</span> crafting
                            world-class <span className="text-white">games</span>, <span className="text-white">apps</span>,
                            <span className="text-white"> AR/VR</span>, and <span className="text-white">Web3</span> experiences.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            variants={fadeInUp}
                            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
                        >
                            <Link
                                href="/quote"
                                className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-[var(--color-accent)] to-[#059669] text-white text-sm font-bold uppercase tracking-widest overflow-hidden transition-all duration-500 hover:scale-[1.02] shadow-[0_0_60px_rgba(16,185,129,0.4)] hover:shadow-[0_0_80px_rgba(16,185,129,0.6)] rounded-sm"
                            >
                                <span className="relative z-10">Start Your Project</span>
                                <ArrowRight className="w-5 h-5 relative z-10 transform group-hover:translate-x-2 transition-transform duration-300" />
                                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                            </Link>

                            <Link
                                href="/projects"
                                className="group inline-flex items-center justify-center gap-3 px-10 py-5 border border-white/20 text-white text-sm font-bold uppercase tracking-widest hover:border-white/50 hover:bg-white/5 transition-all duration-300 rounded-sm backdrop-blur-sm"
                            >
                                <Play className="w-4 h-4 fill-current" />
                                <span>View Our Work</span>
                            </Link>
                        </motion.div>

                        {/* Stats Row */}
                        <motion.div
                            variants={fadeInUp}
                            className="flex flex-wrap justify-center gap-8 md:gap-16"
                        >
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center group">
                                    <p className="text-4xl md:text-5xl font-bold font-mono text-white group-hover:text-[var(--color-accent)] transition-colors">
                                        {stat.value}<span className="text-[var(--color-accent)]">{stat.suffix}</span>
                                    </p>
                                    <p className="text-xs uppercase tracking-widest text-[var(--color-secondary)] mt-1">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
                >
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                        className="flex flex-col items-center gap-2 cursor-pointer"
                    >
                        <ChevronDown className="w-6 h-6 text-[var(--color-accent)]" />
                        <span className="text-[10px] uppercase tracking-widest text-[var(--color-secondary)]">
                            Discover More
                        </span>
                    </motion.div>
                </motion.div>
            </section>

            {/* ===== SERVICES SHOWCASE ===== */}
            <section ref={servicesRef} className="relative py-32 px-6 md:px-12 bg-[#0F172A] overflow-hidden">
                {/* Background Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[var(--color-accent)]/5 rounded-full blur-[200px] pointer-events-none" />

                <div className="max-w-7xl mx-auto relative z-10">
                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-20"
                    >
                        <span className="text-[var(--color-accent)] font-mono uppercase tracking-widest text-sm">
                            What We Build
                        </span>
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold font-mono text-white tracking-tighter mt-4">
                            Expertise That
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent)] to-[#F59E0B]">
                                Delivers Impact
                            </span>
                        </h2>
                    </motion.div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
                                transition={{
                                    delay: index * 0.08,
                                    duration: 0.5,
                                    ease: [0.22, 1, 0.36, 1]
                                }}
                                whileHover={{
                                    y: -6,
                                    scale: 1.02,
                                    transition: { duration: 0.2, ease: "easeOut" }
                                }}
                                className="group relative p-6 border border-white/10 bg-[#1E293B]/50 backdrop-blur-sm hover:border-white/20 transition-colors duration-200 cursor-pointer overflow-hidden transform-gpu"
                            >
                                {/* Hover Glow */}
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[image:radial-gradient(circle_at_50%_50%,var(--glow-color),transparent_70%)]"
                                    style={{ '--glow-color': `${service.color}15` } as React.CSSProperties}
                                />

                                <div className="relative z-10">
                                    <div
                                        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-200 group-hover:scale-105 bg-[var(--icon-bg)] text-[var(--icon-color)]"
                                        style={{ '--icon-bg': `${service.color}15`, '--icon-color': service.color } as React.CSSProperties}
                                    >
                                        {service.icon}
                                    </div>
                                    <h3 className="text-white font-bold font-mono mb-1">{service.name}</h3>
                                    <p className="text-[var(--color-secondary)] text-xs">{service.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.8, duration: 0.6 }}
                        className="text-center mt-16"
                    >
                        <Link
                            href="/services"
                            className="inline-flex items-center gap-3 text-[var(--color-accent)] font-bold uppercase tracking-widest text-sm hover:text-white transition-colors group"
                        >
                            <span>Explore All Services</span>
                            <ArrowUpRight className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* ===== TESTIMONIAL MARQUEE - CSS Animation for smoother performance ===== */}
            <section className="py-16 bg-[#0F172A] border-y border-white/5 overflow-hidden">
                <div className="relative marquee-container">
                    <div className="marquee-content">
                        {[...testimonials, ...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
                            <div key={index} className="flex items-center gap-8 px-8 flex-shrink-0">
                                <Star className="w-6 h-6 text-[#F59E0B] fill-current flex-shrink-0" />
                                <span className="text-xl md:text-2xl text-white font-light italic whitespace-nowrap">
                                    &ldquo;{testimonial.quote}&rdquo;
                                </span>
                                <span className="text-sm text-[var(--color-secondary)] whitespace-nowrap">
                                    — {testimonial.author}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== CTA SECTION ===== */}
            <section className="py-32 px-6 md:px-12 bg-[#0F172A] relative overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[var(--color-accent)]/20 to-[#8B5CF6]/20 rounded-full blur-[200px]" />
                </div>

                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 border border-white/10 bg-white/[0.02] rounded-full">
                            <Zap className="w-4 h-4 text-[var(--color-accent)]" />
                            <span className="text-xs font-mono uppercase tracking-widest text-[var(--color-secondary)]">
                                Ready to Start?
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold font-mono text-white tracking-tighter mb-6">
                            Let&apos;s Build
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent)] via-[#34D399] to-[#F59E0B]">
                                Something Epic
                            </span>
                        </h2>

                        <p className="text-lg md:text-xl text-[var(--color-secondary)] max-w-2xl mx-auto mb-12">
                            Whether you&apos;re a startup with a bold vision or an enterprise seeking innovation,
                            we&apos;re here to transform your ideas into digital masterpieces.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/quote"
                                className="inline-flex items-center justify-center gap-3 px-12 py-6 bg-[var(--color-accent)] text-white text-sm font-bold uppercase tracking-widest hover:bg-[#059669] transition-all shadow-[0_0_60px_rgba(16,185,129,0.4)] hover:shadow-[0_0_80px_rgba(16,185,129,0.6)]"
                            >
                                <span>Get Free Quote</span>
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-3 px-12 py-6 border border-white/20 text-white text-sm font-bold uppercase tracking-widest hover:bg-white/5 hover:border-white/40 transition-all"
                            >
                                <span>Contact Us</span>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
