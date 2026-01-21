"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { Gamepad2, Smartphone, Glasses, Globe, Box, PenTool, ArrowRight, Sparkles, Zap, Shield, Users } from "lucide-react";
import Link from "next/link";

const servicesData = [
    {
        id: "game-dev",
        category: "Game Development",
        tagline: "Worlds Built to Immerse",
        icon: <Gamepad2 className="w-10 h-10" />,
        color: "#10B981",
        description: "From concept to launch, we craft gaming experiences that captivate millions. Our team masters Unity, Unreal Engine, and custom engines to deliver AAA-quality games across all platforms.",
        items: [
            "Game Development (Unity/Unreal)",
            "Game Design & Level Logic",
            "Art Production (2D/3D)",
            "Mobile Porting (iOS/Android)",
            "Multiplayer & Backend Systems",
            "Game Analytics & Live Ops"
        ],
        stats: { projects: "50+", platforms: "6", players: "10M+" }
    },
    {
        id: "web3",
        category: "Web 3.0 & Metaverse",
        tagline: "The Future, Decentralized",
        icon: <Box className="w-10 h-10" />,
        color: "#F59E0B",
        description: "Pioneer the next frontier of digital ownership. We build immersive metaverse experiences, NFT ecosystems, and decentralized applications that redefine how users interact with digital assets.",
        items: [
            "Sandbox Game Asset Creation",
            "Land Development & Virtual Real Estate",
            "NFT Integration & Smart Contracts",
            "Decentralized App (dApp) Building",
            "Token Economics & Governance",
            "Cross-chain Interoperability"
        ],
        stats: { nfts: "100K+", tvl: "$50M+", chains: "12" }
    },
    {
        id: "app-dev",
        category: "App Development",
        tagline: "Pocket-Sized Perfection",
        icon: <Smartphone className="w-10 h-10" />,
        color: "#10B981",
        description: "Native performance meets stunning design. We engineer mobile applications that users love, with silky-smooth animations and intuitive interfaces that feel natural on every device.",
        items: [
            "Native Development (Swift/Kotlin)",
            "Cross-Platform (Flutter/React Native)",
            "App UI/UX Design",
            "Backend & API Integration",
            "App Store Optimization",
            "Performance & Security Audits"
        ],
        stats: { downloads: "5M+", rating: "4.8★", apps: "30+" }
    },
    {
        id: "vr-ar",
        category: "VR & AR Experiences",
        tagline: "Reality, Reimagined",
        icon: <Glasses className="w-10 h-10" />,
        color: "#8B5CF6",
        description: "Step into new dimensions. Our immersive solutions blend physical and digital realms, creating training simulations, marketing experiences, and entertainment that push the boundaries of perception.",
        items: [
            "Immersive Training Simulations",
            "Augmented Reality Marketing",
            "Apple Vision Pro Adaptation",
            "Meta Quest Development",
            "WebXR & Browser-Based AR",
            "Spatial Computing Solutions"
        ],
        stats: { experiences: "25+", industries: "8", users: "500K+" }
    },
    {
        id: "ui-ux",
        category: "UI/UX Design",
        tagline: "Beauty Meets Function",
        icon: <PenTool className="w-10 h-10" />,
        color: "#EC4899",
        description: "Every pixel matters. We design interfaces that don't just look premium—they feel intuitive. From user research to high-fidelity prototypes, we create experiences that convert.",
        items: [
            "User Journey Mapping",
            "High-Fidelity Prototyping",
            "Design Systems",
            "Usability Testing",
            "Brand Identity Design",
            "Motion & Interaction Design"
        ],
        stats: { designs: "200+", conversion: "+45%", clients: "80+" }
    },
    {
        id: "web-dev",
        category: "Web 2.0 Development",
        tagline: "Performance at Scale",
        icon: <Globe className="w-10 h-10" />,
        color: "#06B6D4",
        description: "Lightning-fast, SEO-optimized, and built to scale. We engineer web experiences using cutting-edge frameworks that deliver sub-second load times and seamless user experiences.",
        items: [
            "Full Stack Development",
            "Technical SEO & Performance",
            "CMS Solutions",
            "E-commerce Platforms",
            "Progressive Web Apps",
            "Cloud Infrastructure & DevOps"
        ],
        stats: { websites: "100+", uptime: "99.9%", speed: "<1s" }
    },
];

const processSteps = [
    { icon: <Sparkles className="w-6 h-6" />, title: "Discovery", description: "We dive deep into your vision, goals, and audience." },
    { icon: <PenTool className="w-6 h-6" />, title: "Design", description: "Concepts become high-fidelity, interactive prototypes." },
    { icon: <Zap className="w-6 h-6" />, title: "Develop", description: "Clean code, rigorous testing, pixel-perfect execution." },
    { icon: <Shield className="w-6 h-6" />, title: "Deploy", description: "Launch with confidence. We handle the infrastructure." },
    { icon: <Users className="w-6 h-6" />, title: "Support", description: "Ongoing optimization, updates, and growth strategy." },
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

export default function ServicesPage() {
    const serviceIcons = [
        { icon: <Gamepad2 className="w-6 h-6" />, color: "#10B981", label: "Games" },
        { icon: <Box className="w-6 h-6" />, color: "#F59E0B", label: "Web3" },
        { icon: <Glasses className="w-6 h-6" />, color: "#8B5CF6", label: "VR/AR" },
        { icon: <Smartphone className="w-6 h-6" />, color: "#06B6D4", label: "Apps" },
        { icon: <PenTool className="w-6 h-6" />, color: "#EC4899", label: "Design" },
        { icon: <Globe className="w-6 h-6" />, color: "#10B981", label: "Web" },
    ];

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-[var(--color-background)] selection:bg-[var(--color-accent)] selection:text-white">

                {/* Hero Section - Full Screen */}
                <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
                    {/* Background Elements */}
                    <div className="absolute inset-0">
                        {/* Grid Pattern */}
                        <div className="absolute inset-0 opacity-[0.02] bg-grid" />

                        {/* Gradient Orbs */}
                        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[var(--color-accent)]/10 rounded-full blur-[200px] animate-pulse" />
                        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#F59E0B]/10 rounded-full blur-[180px]" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#8B5CF6]/5 rounded-full blur-[250px]" />
                    </div>

                    {/* Floating Service Icons */}
                    <div className="absolute inset-0 pointer-events-none">
                        {serviceIcons.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                                className="absolute hidden lg:flex items-center gap-2 top-[var(--float-top)] left-[var(--float-left)] right-[var(--float-right)]"
                                style={{
                                    '--float-top': `${20 + (index % 3) * 25}%`,
                                    '--float-left': index < 3 ? `${5 + index * 3}%` : 'auto',
                                    '--float-right': index >= 3 ? `${5 + (index - 3) * 3}%` : 'auto',
                                } as React.CSSProperties}
                            >
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ repeat: Infinity, duration: 3 + index * 0.5, ease: "easeInOut" }}
                                    className="w-12 h-12 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/10 bg-[var(--icon-bg)] text-[var(--icon-color)]"
                                    style={{ '--icon-bg': `${item.color}15`, '--icon-color': item.color } as React.CSSProperties}
                                >
                                    {item.icon}
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Main Content */}
                    <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            {/* Badge */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3 }}
                                className="inline-flex items-center gap-3 mb-8 px-5 py-2.5 border border-white/10 bg-white/[0.02] backdrop-blur-sm"
                            >
                                <Sparkles className="w-4 h-4 text-[var(--color-accent)]" />
                                <span className="text-xs font-mono uppercase tracking-widest text-[var(--color-secondary)]">What We Do</span>
                                <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse" />
                            </motion.div>

                            {/* Main Headline */}
                            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold font-mono tracking-tighter mb-6">
                                <span className="text-white">Holistic Digital</span>
                                <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent)] via-[#34D399] to-[#F59E0B] animate-gradient">
                                    Excellence.
                                </span>
                            </h1>

                            {/* Subheadline */}
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="text-lg md:text-xl lg:text-2xl text-[var(--color-secondary)] max-w-3xl mx-auto mb-12 leading-relaxed"
                            >
                                We don&apos;t just build products—we architect <span className="text-white">digital experiences</span> that define industries.
                            </motion.p>

                            {/* Service Pills */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 }}
                                className="flex flex-wrap justify-center gap-3 mb-12"
                            >
                                {servicesData.map((service, index) => (
                                    <a
                                        key={service.id}
                                        href={`#${service.id}`}
                                        className="group flex items-center gap-2 px-4 py-2 border border-white/10 hover:border-white/30 bg-white/[0.02] hover:bg-white/[0.05] backdrop-blur-sm transition-all"
                                    >
                                        <div
                                            className="w-2 h-2 rounded-full bg-[var(--pill-color)]"
                                            style={{ '--pill-color': service.color } as React.CSSProperties}
                                        />
                                        <span className="text-xs font-mono uppercase tracking-widest text-[var(--color-secondary)] group-hover:text-white transition-colors">
                                            {service.category}
                                        </span>
                                    </a>
                                ))}
                            </motion.div>

                            {/* CTAs */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.9 }}
                                className="flex flex-col sm:flex-row gap-4 justify-center"
                            >
                                <Link
                                    href="/contact"
                                    className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[var(--color-accent)] text-white text-sm font-bold uppercase tracking-widest hover:bg-[#059669] transition-all shadow-[0_0_30px_rgba(16,185,129,0.3)]"
                                >
                                    <span>Start a Project</span>
                                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link
                                    href="/projects"
                                    className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-white/20 text-white text-sm font-bold uppercase tracking-widest hover:bg-white/5 transition-all"
                                >
                                    <span>View Our Work</span>
                                </Link>
                            </motion.div>
                        </motion.div>

                        {/* Scroll Indicator */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5 }}
                            className="absolute -bottom-24 left-1/2 -translate-x-1/2"
                        >
                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ repeat: Infinity, duration: 2 }}
                                className="flex flex-col items-center gap-3"
                            >
                                <div className="w-[1px] h-16 bg-gradient-to-b from-[var(--color-accent)] to-transparent" />
                                <span className="text-[10px] uppercase tracking-widest text-[var(--color-secondary)]">Explore Services</span>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* Services Grid */}
                <section className="py-24 px-6 md:px-12">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            {servicesData.map((service, index) => (
                                <motion.div
                                    key={service.id}
                                    variants={itemVariants}
                                    id={service.id}
                                    className="group relative overflow-hidden border border-white/10 bg-[#111827]/50 backdrop-blur-md hover:border-white/20 transition-all duration-500"
                                >
                                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 md:p-12">
                                        {/* Left: Icon & Title */}
                                        <div className="lg:col-span-4 flex flex-col justify-between">
                                            <div>
                                                <div
                                                    className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 bg-[var(--box-bg)] text-[var(--box-color)]"
                                                    style={{
                                                        '--box-bg': `${service.color}15`,
                                                        '--box-color': service.color
                                                    } as React.CSSProperties}
                                                >
                                                    {service.icon}
                                                </div>
                                                <p className="text-xs font-mono uppercase tracking-widest mb-2 text-[var(--title-color)]" style={{ '--title-color': service.color } as React.CSSProperties}>
                                                    {service.tagline}
                                                </p>
                                                <h2 className="text-3xl md:text-4xl font-bold font-mono text-white tracking-tight mb-4">
                                                    {service.category}
                                                </h2>
                                                <p className="text-[var(--color-secondary)] leading-relaxed">
                                                    {service.description}
                                                </p>
                                            </div>

                                            {/* Stats */}
                                            <div className="hidden lg:flex gap-8 mt-8 pt-8 border-t border-white/10">
                                                {Object.entries(service.stats).map(([key, value]) => (
                                                    <div key={key}>
                                                        <p className="text-2xl font-bold text-white">{value}</p>
                                                        <p className="text-xs uppercase tracking-widest text-[var(--color-secondary)]">{key}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Right: Capabilities List */}
                                        <div className="lg:col-span-8 flex flex-col justify-between">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {service.items.map((item, idx) => (
                                                    <div
                                                        key={idx}
                                                        className="flex items-center gap-3 p-4 bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all group/item"
                                                    >
                                                        <div
                                                            className="w-2 h-2 rounded-full opacity-50 group-hover/item:opacity-100 transition-opacity bg-[var(--dot-color)]"
                                                            style={{ '--dot-color': service.color } as React.CSSProperties}
                                                        />
                                                        <span className="text-[var(--color-secondary)] group-hover/item:text-white transition-colors">
                                                            {item}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* CTA */}
                                            <div className="mt-8 flex justify-end">
                                                <Link
                                                    href="/contact"
                                                    className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest group/cta text-[var(--link-color)]"
                                                    style={{ '--link-color': service.color } as React.CSSProperties}
                                                >
                                                    <span>Discuss Your Project</span>
                                                    <ArrowRight className="w-4 h-4 transform group-hover/cta:translate-x-1 transition-transform" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Index Number */}
                                    <div className="absolute top-8 right-8 text-8xl font-bold font-mono text-white/[0.03] pointer-events-none">
                                        {String(index + 1).padStart(2, '0')}
                                    </div>

                                    {/* Hover Glow Effect */}
                                    <div
                                        className="absolute -inset-1 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none blur-3xl bg-[image:radial-gradient(circle_at_50%_50%,var(--glow-color),transparent_70%)]"
                                        style={{ '--glow-color': `${service.color}10` } as React.CSSProperties}
                                    />
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* Process Section */}
                <section className="py-24 px-6 md:px-12 bg-[#111827]/50 border-y border-white/5">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-sm font-mono text-[var(--color-accent)] uppercase tracking-widest mb-4">Our Process</h2>
                            <h3 className="text-4xl md:text-6xl font-bold font-mono text-white tracking-tighter">
                                From Vision to <span className="text-[var(--color-secondary)]">Victory.</span>
                            </h3>
                        </motion.div>

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="grid grid-cols-1 md:grid-cols-5 gap-6"
                        >
                            {processSteps.map((step, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className="relative group"
                                >
                                    <div className="p-6 border border-white/10 bg-[#1F2937]/50 hover:border-[var(--color-accent)]/30 transition-all h-full">
                                        <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center text-[var(--color-accent)] mb-4">
                                            {step.icon}
                                        </div>
                                        <p className="text-xs font-mono text-[var(--color-accent)] mb-2">0{index + 1}</p>
                                        <h4 className="text-xl font-bold font-mono text-white mb-2">{step.title}</h4>
                                        <p className="text-sm text-[var(--color-secondary)]">{step.description}</p>
                                    </div>

                                    {/* Connector Line */}
                                    {index < processSteps.length - 1 && (
                                        <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-[1px] bg-white/10" />
                                    )}
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24 px-6 md:px-12">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-4xl md:text-6xl font-bold font-mono text-white tracking-tighter mb-6">
                                Ready to Build<br />Something <span className="text-[var(--color-accent)]">Extraordinary?</span>
                            </h2>
                            <p className="text-[var(--color-secondary)] text-lg mb-10 max-w-2xl mx-auto">
                                Let&apos;s turn your vision into reality. Our team of digital alchemists is ready to craft your next masterpiece.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href="/contact"
                                    className="px-10 py-5 bg-[var(--color-accent)] text-white text-sm font-bold uppercase tracking-widest hover:bg-[#059669] transition-all"
                                >
                                    Start a Project
                                </Link>
                                <Link
                                    href="/projects"
                                    className="px-10 py-5 border border-white/20 text-white text-sm font-bold uppercase tracking-widest hover:bg-white/5 transition-all"
                                >
                                    View Our Work
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>
        </>
    );
}
