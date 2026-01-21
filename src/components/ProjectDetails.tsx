"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Calendar, Users, Clock, ExternalLink, CheckCircle } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

type Project = typeof projects[0];

export default function ProjectDetails({ project }: { project: Project }) {
    if (!project) return null;

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-[var(--color-background)] selection:bg-[var(--color-accent)] selection:text-white">
                {/* Hero Section */}
                <section className="relative min-h-[70vh] flex items-end overflow-hidden">
                    {/* Background Image */}
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-[image:var(--bg-image)]"
                        style={{ '--bg-image': `url(${project.image})` } as React.CSSProperties}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-background)] via-[var(--color-background)]/60 to-transparent" />
                    <div
                        className="absolute inset-0 opacity-30 mix-blend-overlay bg-[var(--overlay-color)]"
                        style={{ '--overlay-color': project.color } as React.CSSProperties}
                    />

                    {/* Back Button */}
                    <Link
                        href="/projects"
                        className="absolute top-32 left-6 md:left-12 flex items-center gap-2 text-white/70 hover:text-white transition-colors z-10"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        <span className="text-sm font-mono uppercase tracking-widest">Back to Projects</span>
                    </Link>

                    {/* Content */}
                    <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-16 w-full">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span
                                className="inline-block px-4 py-1.5 text-xs font-mono uppercase tracking-widest mb-6 bg-[var(--tag-bg)] text-[var(--tag-color)]"
                                style={{ '--tag-bg': `${project.color}30`, '--tag-color': project.color } as React.CSSProperties}
                            >
                                {project.category}
                            </span>

                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-mono text-white tracking-tighter mb-4">
                                {project.title}
                            </h1>

                            <p className="text-2xl text-[var(--color-secondary)] mb-8">
                                {project.subtitle}
                            </p>

                            {/* Quick Stats */}
                            <div className="flex flex-wrap gap-8">
                                <div className="flex items-center gap-3">
                                    <Calendar className="w-5 h-5 text-[var(--icon-color)]" style={{ '--icon-color': project.color } as React.CSSProperties} />
                                    <span className="text-white">{project.year}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Clock className="w-5 h-5 text-[var(--icon-color)]" style={{ '--icon-color': project.color } as React.CSSProperties} />
                                    <span className="text-white">{project.duration}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Users className="w-5 h-5 text-[var(--icon-color)]" style={{ '--icon-color': project.color } as React.CSSProperties} />
                                    <span className="text-white">{project.team}</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Content Section */}
                <section className="py-24 px-6 md:px-12">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                            {/* Main Content */}
                            <div className="lg:col-span-8">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                >
                                    <h2 className="text-3xl font-bold font-mono text-white mb-6">Overview</h2>
                                    <p className="text-lg text-[var(--color-secondary)] leading-relaxed mb-12">
                                        {project.fullDescription}
                                    </p>

                                    {/* Challenges */}
                                    <h3 className="text-2xl font-bold font-mono text-white mb-6">Challenges</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                                        {project.challenges.map((challenge, idx) => (
                                            <div
                                                key={idx}
                                                className="flex items-start gap-3 p-4 border border-white/10 bg-white/[0.02]"
                                            >
                                                <div
                                                    className="w-2 h-2 rounded-full mt-2 flex-shrink-0 bg-[var(--dot-color)]"
                                                    style={{ '--dot-color': project.color } as React.CSSProperties}
                                                />
                                                <span className="text-[var(--color-secondary)]">{challenge}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Results */}
                                    <h3 className="text-2xl font-bold font-mono text-white mb-6">Results</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {project.results.map((result, idx) => (
                                            <div
                                                key={idx}
                                                className="flex items-start gap-3 p-4 border border-white/10 bg-white/[0.02]"
                                            >
                                                <CheckCircle
                                                    className="w-5 h-5 mt-0.5 flex-shrink-0 text-[var(--check-color)]"
                                                    style={{ '--check-color': project.color } as React.CSSProperties}
                                                />
                                                <span className="text-white font-medium">{result}</span>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>

                            {/* Sidebar */}
                            <div className="lg:col-span-4">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 }}
                                    className="sticky top-32 space-y-8"
                                >
                                    {/* Client */}
                                    <div className="p-6 border border-white/10 bg-[#111827]/50">
                                        <p className="text-xs font-mono uppercase tracking-widest text-[var(--color-secondary)] mb-2">Client</p>
                                        <p className="text-xl font-bold text-white">{project.client}</p>
                                    </div>

                                    {/* Tech Stack */}
                                    <div className="p-6 border border-white/10 bg-[#111827]/50">
                                        <p className="text-xs font-mono uppercase tracking-widest text-[var(--color-secondary)] mb-4">Tech Stack</p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.map((tech, idx) => (
                                                <span
                                                    key={idx}
                                                    className="px-3 py-1.5 text-xs font-mono border border-white/10 text-white"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* CTA */}
                                    <Link
                                        href="/contact"
                                        className="flex items-center justify-center gap-3 w-full py-4 text-sm font-bold uppercase tracking-widest text-white transition-all bg-[var(--btn-bg)]"
                                        style={{ '--btn-bg': project.color } as React.CSSProperties}
                                    >
                                        <span>Start a Similar Project</span>
                                        <ArrowUpRight className="w-4 h-4" />
                                    </Link>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Next Project */}
                <section className="py-16 px-6 md:px-12 border-t border-white/10">
                    <div className="max-w-7xl mx-auto">
                        <Link
                            href={`/projects/${project.id === projects.length ? 1 : project.id + 1}`}
                            className="group flex items-center justify-between"
                        >
                            <div>
                                <p className="text-sm font-mono uppercase tracking-widest text-[var(--color-secondary)] mb-2">Next Project</p>
                                <p className="text-3xl md:text-4xl font-bold font-mono text-white group-hover:text-[var(--color-accent)] transition-colors">
                                    {projects.find(p => p.id === (project.id === projects.length ? 1 : project.id + 1))?.title}
                                </p>
                            </div>
                            <ArrowUpRight className="w-8 h-8 text-[var(--color-secondary)] group-hover:text-[var(--color-accent)] transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                        </Link>
                    </div>
                </section>
            </main>
        </>
    );
}
