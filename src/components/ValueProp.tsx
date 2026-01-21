"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, useMemo } from "react";
import {
    Zap,
    Diamond,
    Target,
    ArrowRight,
    Shield,
    Rocket,
    Users,
    Award,
    Clock,
    Heart,
    CheckCircle,
    Sparkles
} from "lucide-react";
import Link from "next/link";

const coreValues = [
    {
        icon: <Zap className="w-7 h-7" />,
        title: "Lightning Fast",
        description: "Production timelines measured in days, not months. We ship fast without breaking things.",
        color: "#10B981",
        stat: "2x",
        statLabel: "Faster Delivery"
    },
    {
        icon: <Diamond className="w-7 h-7" />,
        title: "Pixel Perfect",
        description: "Obsessive attention to detail. Every animation, interaction, and layout is crafted to perfection.",
        color: "#8B5CF6",
        stat: "100%",
        statLabel: "Design Accuracy"
    },
    {
        icon: <Target className="w-7 h-7" />,
        title: "Results Driven",
        description: "Data-driven, aesthetic-first designs that convert. We build digital assets that actually work.",
        color: "#F59E0B",
        stat: "10x",
        statLabel: "ROI Average"
    },
    {
        icon: <Shield className="w-7 h-7" />,
        title: "Battle Tested",
        description: "Production-grade code that scales. Built with modern tech stacks and best practices.",
        color: "#06B6D4",
        stat: "99.9%",
        statLabel: "Uptime"
    },
];

const differentiators = [
    { icon: <Rocket className="w-5 h-5" />, text: "Startup Agility" },
    { icon: <Award className="w-5 h-5" />, text: "Luxury Polish" },
    { icon: <Clock className="w-5 h-5" />, text: "24/7 Support" },
    { icon: <Heart className="w-5 h-5" />, text: "Passionate Team" },
];

const testimonial = {
    quote: "SHIRAW transformed our vision into a reality that exceeded all expectations. Their attention to detail is unmatched.",
    author: "Product Lead",
    company: "Tech Startup",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
};

const benefits = [
    "End-to-end project ownership",
    "Transparent communication",
    "No hidden costs or surprises",
    "Post-launch support included",
    "Dedicated project manager",
    "Weekly progress updates"
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: {
        opacity: 0,
        y: 20,
        scale: 0.98
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.4,
            ease: [0.25, 0.1, 0.25, 1] as const
        }
    }
};

export default function ValueProp() {
    const sectionRef = useRef<HTMLElement>(null);
    const prefersReducedMotion = useReducedMotion();
    const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

    // Memoize animation states for performance
    const shouldAnimate = useMemo(() => isInView && !prefersReducedMotion, [isInView, prefersReducedMotion]);

    return (
        <section ref={sectionRef} className="relative py-32 bg-[#0F172A] overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Gradient Orbs */}
                <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-[var(--color-accent)]/10 rounded-full blur-[200px]" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#8B5CF6]/10 rounded-full blur-[200px]" />

                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-[0.02] bg-grid-sm" />
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={shouldAnimate ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                    className="text-center mb-20 will-change-transform"
                >
                    <div className="inline-flex items-center gap-3 mb-6 px-5 py-2.5 border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/5 rounded-full">
                        <Sparkles className="w-4 h-4 text-[var(--color-accent)]" />
                        <span className="text-sm font-mono uppercase tracking-widest text-[var(--color-accent)]">
                            Why Choose Us
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold font-mono text-white tracking-tighter mb-6">
                        Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent)] to-[#34D399]">SHIRAW</span>?
                    </h2>

                    <p className="text-lg md:text-xl text-[var(--color-secondary)] max-w-2xl mx-auto">
                        Traditional agencies are slow and expensive. We combine the agility of a startup
                        with the polish of a luxury brand.
                    </p>
                </motion.div>

                {/* Core Values Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={shouldAnimate ? "visible" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24"
                >
                    {coreValues.map((value, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{
                                y: -4,
                                transition: { type: "spring", stiffness: 400, damping: 25 }
                            }}
                            className="group relative p-8 border border-white/10 bg-[#1E293B]/50 backdrop-blur-sm hover:border-white/20 transition-colors duration-150 transform-gpu will-change-transform"
                        >
                            {/* Hover Glow */}
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none bg-[image:radial-gradient(circle_at_50%_0%,var(--hover-color),transparent_50%)]"
                                style={{ '--hover-color': `${value.color}15` } as React.CSSProperties}
                            />

                            <div className="relative z-10">
                                <div
                                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all group-hover:scale-110 bg-[var(--icon-bg)] text-[var(--icon-color)]"
                                    style={{ '--icon-bg': `${value.color}15`, '--icon-color': value.color } as React.CSSProperties}
                                >
                                    {value.icon}
                                </div>

                                <h3 className="text-xl font-bold font-mono text-white mb-3">{value.title}</h3>
                                <p className="text-[var(--color-secondary)] text-sm leading-relaxed mb-6">
                                    {value.description}
                                </p>

                                {/* Stat */}
                                <div className="pt-4 border-t border-white/10">
                                    <span className="text-2xl font-bold font-mono text-[var(--stat-color)]" style={{ '--stat-color': value.color } as React.CSSProperties}>
                                        {value.stat}
                                    </span>
                                    <span className="text-xs text-[var(--color-secondary)] ml-2 uppercase tracking-widest">
                                        {value.statLabel}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Split Section: Benefits + Testimonial */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
                    {/* Benefits List */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={shouldAnimate ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.2, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                        className="p-10 border border-white/10 bg-[#1E293B]/30 transform-gpu will-change-transform"
                    >
                        <h3 className="text-2xl font-bold font-mono text-white mb-8">
                            What You Get
                        </h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0" />
                                    <span className="text-[var(--color-secondary)] text-sm">{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Testimonial */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={shouldAnimate ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.25, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                        className="p-10 border border-[var(--color-accent)]/20 bg-gradient-to-br from-[var(--color-accent)]/5 to-transparent transform-gpu will-change-transform"
                    >
                        <div className="flex gap-1 mb-6">
                            {[...Array(5)].map((_, i) => (
                                <div key={i} className="w-5 h-5 text-[#F59E0B]">★</div>
                            ))}
                        </div>

                        <blockquote className="text-xl md:text-2xl text-white font-light italic mb-8 leading-relaxed">
                            &ldquo;{testimonial.quote}&rdquo;
                        </blockquote>

                        <div className="flex items-center gap-4">
                            <img
                                src={testimonial.avatar}
                                alt={testimonial.author}
                                className="w-12 h-12 rounded-full object-cover"
                            />
                            <div>
                                <p className="text-white font-bold">{testimonial.author}</p>
                                <p className="text-[var(--color-secondary)] text-sm">{testimonial.company}</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Differentiators Row */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={shouldAnimate ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3, duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                    className="flex flex-wrap justify-center gap-6 mb-16 transform-gpu"
                >
                    {differentiators.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-3 px-6 py-3 border border-white/10 bg-white/[0.02]"
                        >
                            <span className="text-[var(--color-accent)]">{item.icon}</span>
                            <span className="text-sm font-mono uppercase tracking-widest text-white">{item.text}</span>
                        </div>
                    ))}
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={shouldAnimate ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.35, duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                    className="text-center transform-gpu"
                >
                    <Link
                        href="/quote"
                        className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[var(--color-accent)] text-white text-sm font-bold uppercase tracking-widest hover:bg-[#059669] transition-all shadow-[0_0_40px_rgba(16,185,129,0.3)] hover:shadow-[0_0_60px_rgba(16,185,129,0.5)]"
                    >
                        <span>Start Your Project</span>
                        <ArrowRight className="w-5 h-5" />
                    </Link>

                    <p className="mt-6 text-[var(--color-secondary)] text-sm">
                        Free consultation · No commitment required
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
