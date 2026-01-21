"use client";

import Navbar from "@/components/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const projects = [
    {
        id: 1,
        title: "Neon Horizon",
        subtitle: "Open-World RPG",
        category: "Game Development",
        year: "2025",
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2670&auto=format&fit=crop",
        color: "#10B981",
        description: "A breathtaking open-world RPG with procedural environments and AI-driven NPCs.",
        tech: ["Unreal Engine 5", "C++", "Houdini"],
        featured: true,
    },
    {
        id: 2,
        title: "Cyber Void",
        subtitle: "VR Training Platform",
        category: "VR Experience",
        year: "2025",
        image: "https://images.unsplash.com/photo-1614726365723-49cfae9734ae?q=80&w=2574&auto=format&fit=crop",
        color: "#8B5CF6",
        description: "Enterprise VR training simulation for Fortune 500 companies with haptic feedback integration.",
        tech: ["Unity", "Oculus SDK", "Azure"],
        featured: true,
    },
    {
        id: 3,
        title: "Aether Lens",
        subtitle: "AR Marketing Suite",
        category: "AR Experience",
        year: "2024",
        image: "https://images.unsplash.com/photo-1633419461186-7d40a2e50594?q=80&w=2669&auto=format&fit=crop",
        color: "#EC4899",
        description: "Mobile AR experience that increased client engagement by 340% during product launches.",
        tech: ["ARKit", "Swift", "Three.js"],
        featured: false,
    },
    {
        id: 4,
        title: "Nexus Core",
        subtitle: "DeFi Protocol",
        category: "Web 3.0 Platform",
        year: "2024",
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2832&auto=format&fit=crop",
        color: "#F59E0B",
        description: "Cross-chain DeFi protocol with $50M+ TVL and innovative yield optimization strategies.",
        tech: ["Solidity", "React", "GraphQL"],
        featured: true,
    },
    {
        id: 5,
        title: "Pulse Health",
        subtitle: "Wellness Companion",
        category: "Mobile App",
        year: "2024",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2670&auto=format&fit=crop",
        color: "#06B6D4",
        description: "AI-powered health tracking app with 2M+ downloads and 4.9★ App Store rating.",
        tech: ["Flutter", "TensorFlow", "Firebase"],
        featured: false,
    },
    {
        id: 6,
        title: "Quantum Commerce",
        subtitle: "E-commerce Platform",
        category: "Web Development",
        year: "2024",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2670&auto=format&fit=crop",
        color: "#10B981",
        description: "Headless e-commerce platform processing $10M+ in monthly transactions with 99.99% uptime.",
        tech: ["Next.js", "Shopify", "Stripe"],
        featured: false,
    },
];

const categories = ["All", "Game Development", "VR Experience", "AR Experience", "Web 3.0 Platform", "Mobile App", "Web Development"];

export default function WorkPage() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects = activeCategory === "All"
        ? projects
        : projects.filter(p => p.category === activeCategory);

    const featuredProjects = filteredProjects.filter(p => p.featured);
    const otherProjects = filteredProjects.filter(p => !p.featured);

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-[var(--color-background)] selection:bg-[var(--color-accent)] selection:text-white">

                {/* Hero Section */}
                <section className="pt-32 pb-16 px-6 md:px-12 max-w-[1800px] mx-auto relative">
                    {/* Background Elements */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-accent)]/5 rounded-full blur-[150px] pointer-events-none" />

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative z-10"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <span className="h-[1px] w-12 bg-[var(--color-accent)]"></span>
                            <span className="text-[var(--color-accent)] font-mono uppercase tracking-widest text-sm">Portfolio</span>
                        </div>

                        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
                            <div>
                                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-mono text-white tracking-tighter mb-4">
                                    Selected<br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent)] to-[#F59E0B]">
                                        Work.
                                    </span>
                                </h1>
                                <p className="text-[var(--color-secondary)] text-lg max-w-lg">
                                    A curated showcase of digital experiences that push boundaries and deliver results.
                                </p>
                            </div>

                            {/* Stats */}
                            <div className="flex gap-12">
                                <div>
                                    <p className="text-4xl md:text-5xl font-bold font-mono text-white">10+</p>
                                    <p className="text-xs uppercase tracking-widest text-[var(--color-secondary)] mt-1">Projects Delivered</p>
                                </div>
                                <div>
                                    <p className="text-4xl md:text-5xl font-bold font-mono text-white">5M+</p>
                                    <p className="text-xs uppercase tracking-widest text-[var(--color-secondary)] mt-1">Users Impacted</p>
                                </div>
                                <div>
                                    <p className="text-4xl md:text-5xl font-bold font-mono text-white">3</p>
                                    <p className="text-xs uppercase tracking-widest text-[var(--color-secondary)] mt-1">Industries Served</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Category Filter */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="mt-16 flex flex-wrap gap-3"
                    >
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-5 py-2 text-xs font-mono uppercase tracking-widest border transition-all duration-300 ${activeCategory === category
                                    ? "bg-white text-black border-white"
                                    : "border-white/20 text-[var(--color-secondary)] hover:border-white/40 hover:text-white"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </motion.div>
                </section>

                {/* Featured Projects - Large Format */}
                <section className="px-6 md:px-12 max-w-[1800px] mx-auto mb-24">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`featured-${activeCategory}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-8"
                        >
                            {featuredProjects.length > 0 ? (
                                featuredProjects.map((project, index) => (
                                    <motion.div
                                        key={project.id}
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1, duration: 0.5 }}
                                        className="group relative"
                                    >
                                        <Link href={`/projects/${project.id}`} className="block">
                                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-500">

                                                {/* Image Side */}
                                                <div className={`lg:col-span-7 relative h-[400px] lg:h-[600px] overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                                                    <div
                                                        className="absolute inset-0 bg-cover bg-center transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105 bg-[image:var(--bg-image)]"
                                                        style={{ '--bg-image': `url(${project.image})` } as React.CSSProperties}
                                                    />
                                                    {/* Color Overlay */}
                                                    <div
                                                        className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 mix-blend-overlay bg-[var(--overlay-color)]"
                                                        style={{ '--overlay-color': project.color } as React.CSSProperties}
                                                    />
                                                    {/* Gradient Overlay */}
                                                    <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-[#111827] opacity-60" />

                                                    {/* Project Number */}
                                                    <div className="absolute top-8 left-8 text-8xl font-bold font-mono text-white/10">
                                                        {String(index + 1).padStart(2, '0')}
                                                    </div>
                                                </div>

                                                {/* Content Side */}
                                                <div className={`lg:col-span-5 bg-[#111827] p-8 lg:p-12 flex flex-col justify-between ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                                                    <div>
                                                        {/* Category & Year */}
                                                        <div className="flex items-center gap-4 mb-6">
                                                            <span
                                                                className="px-3 py-1 text-xs font-mono uppercase tracking-widest bg-[var(--tag-bg)] text-[var(--tag-color)]"
                                                                style={{ '--tag-bg': `${project.color}20`, '--tag-color': project.color } as React.CSSProperties}
                                                            >
                                                                {project.category}
                                                            </span>
                                                            <span className="text-[var(--color-secondary)] text-sm">{project.year}</span>
                                                        </div>

                                                        {/* Title */}
                                                        <h2 className="text-4xl lg:text-5xl font-bold font-mono text-white tracking-tight mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                                                            {project.title}
                                                        </h2>
                                                        <p className="text-xl text-[var(--color-secondary)] mb-6">{project.subtitle}</p>

                                                        {/* Description */}
                                                        <p className="text-[var(--color-secondary)] leading-relaxed mb-8">
                                                            {project.description}
                                                        </p>

                                                        {/* Tech Stack */}
                                                        <div className="flex flex-wrap gap-2">
                                                            {project.tech.map((tech, idx) => (
                                                                <span
                                                                    key={idx}
                                                                    className="px-3 py-1 text-xs font-mono border border-white/10 text-[var(--color-secondary)]"
                                                                >
                                                                    {tech}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    {/* CTA */}
                                                    <div className="mt-12 flex items-center gap-4 text-white font-bold uppercase tracking-widest text-sm group/cta">
                                                        <span className="group-hover/cta:text-[var(--color-accent)] transition-colors">View Case Study</span>
                                                        <ArrowUpRight className="w-5 h-5 transform group-hover/cta:translate-x-1 group-hover/cta:-translate-y-1 transition-transform text-[var(--cta-color)]" style={{ '--cta-color': project.color } as React.CSSProperties} />
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </motion.div>
                                ))
                            ) : (
                                <div className="text-center py-16">
                                    <p className="text-[var(--color-secondary)] text-lg">No featured projects in this category.</p>
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </section>

                {/* Other Projects - Grid Format */}
                <section className="px-6 md:px-12 max-w-[1800px] mx-auto pb-24">
                    {otherProjects.length > 0 && (
                        <>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="mb-12"
                            >
                                <h2 className="text-3xl font-bold font-mono text-white">More Projects</h2>
                            </motion.div>

                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={`other-${activeCategory}`}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                                >
                                    {otherProjects.map((project, index) => (
                                        <motion.div
                                            key={project.id}
                                            initial={{ opacity: 0, y: 30 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.1, duration: 0.5 }}
                                            className="group"
                                        >
                                            <Link href={`/projects/${project.id}`} className="block">
                                                <div className="relative h-[350px] overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500">
                                                    {/* Image */}
                                                    <div
                                                        className="absolute inset-0 bg-cover bg-center transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-110 bg-[image:var(--bg-image)]"
                                                        style={{ '--bg-image': `url(${project.image})` } as React.CSSProperties}
                                                    />

                                                    {/* Overlays */}
                                                    <div
                                                        className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 bg-[var(--overlay-color)]"
                                                        style={{ '--overlay-color': project.color } as React.CSSProperties}
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/50 to-transparent" />

                                                    {/* Content */}
                                                    <div className="absolute inset-0 p-6 flex flex-col justify-end">
                                                        <span
                                                            className="self-start px-2 py-1 text-[10px] font-mono uppercase tracking-widest mb-3 bg-[var(--tag-bg)] text-[var(--tag-color)]"
                                                            style={{ '--tag-bg': `${project.color}30`, '--tag-color': project.color } as React.CSSProperties}
                                                        >
                                                            {project.category}
                                                        </span>
                                                        <h3 className="text-2xl font-bold font-mono text-white group-hover:text-[var(--color-accent)] transition-colors">
                                                            {project.title}
                                                        </h3>
                                                        <p className="text-sm text-[var(--color-secondary)]">{project.subtitle}</p>
                                                    </div>

                                                    {/* Hover Arrow */}
                                                    <div className="absolute top-6 right-6 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                                        <ExternalLink className="w-4 h-4 text-white" />
                                                    </div>
                                                </div>
                                            </Link>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </AnimatePresence>
                        </>
                    )}
                </section>

                {/* CTA Section */}
                <section className="py-32 px-6 md:px-12 relative overflow-hidden">
                    {/* Background Effects */}
                    <div className="absolute inset-0">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--color-accent)]/5 to-transparent" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--color-accent)]/10 rounded-full blur-[200px]" />
                        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                    </div>

                    <div className="max-w-6xl mx-auto text-center relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 border border-white/10 bg-white/[0.02] backdrop-blur-sm">
                                <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse" />
                                <span className="text-xs font-mono uppercase tracking-widest text-[var(--color-secondary)]">Let&apos;s Collaborate</span>
                            </div>

                            {/* Main Headline */}
                            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold font-mono tracking-tighter mb-8">
                                <span className="text-white">Have a </span>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent)] via-[#34D399] to-[#F59E0B]">
                                    Project
                                </span>
                                <br />
                                <span className="text-white">in </span>
                                <span className="relative inline-block">
                                    <span className="text-white">Mind</span>
                                    <span className="text-[var(--color-accent)]">?</span>
                                    <motion.span
                                        className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[var(--color-accent)] to-[#F59E0B]"
                                        initial={{ scaleX: 0 }}
                                        whileInView={{ scaleX: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.5, duration: 0.6 }}
                                    />
                                </span>
                            </h2>

                            <p className="text-lg md:text-xl text-[var(--color-secondary)] mb-12 max-w-2xl mx-auto leading-relaxed">
                                Let&apos;s create something <span className="text-white">extraordinary</span> together.
                                Our team of digital alchemists is ready to bring your vision to life.
                            </p>

                            {/* CTAs */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href="/contact"
                                    className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-[var(--color-accent)] text-white text-sm font-bold uppercase tracking-widest hover:bg-[#059669] transition-all shadow-[0_0_40px_rgba(16,185,129,0.3)] hover:shadow-[0_0_60px_rgba(16,185,129,0.4)]"
                                >
                                    <span>Start a Conversation</span>
                                    <ArrowUpRight className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </Link>
                                <Link
                                    href="/services"
                                    className="inline-flex items-center justify-center gap-3 px-10 py-5 border border-white/20 text-white text-sm font-bold uppercase tracking-widest hover:bg-white/5 hover:border-white/40 transition-all"
                                >
                                    <span>Explore Services</span>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>
        </>
    );
}
