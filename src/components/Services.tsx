"use client";

import { motion } from "framer-motion";
import { Gamepad2, Smartphone, Glasses, Globe, Box, PenTool } from "lucide-react";

const servicesData = [
    {
        category: "Game Services",
        icon: <Gamepad2 className="w-8 h-8 text-[var(--color-accent)]" />,
        items: ["Game Development (Unity/Unreal)", "Game Design & Level Logic", "Art Production (2D/3D)", "Mobile Porting (iOS/Android)"],
        colSpan: "md:col-span-1",
    },
    {
        category: "Web 3.0 & Metaverse",
        icon: <Box className="w-8 h-8 text-[#F59E0B]" />, // Gold accent for high value
        items: ["Sandbox Game Asset Creation", "Land Development & Virtual Real Estate", "NFT Integration & Smart Contracts", "Decentralized App (dApp) Building"],
        colSpan: "md:col-span-2", // Feature this one wider
    },
    {
        category: "App Services",
        icon: <Smartphone className="w-8 h-8 text-[var(--color-accent)]" />,
        items: ["Native Development (Swift/Kotlin)", "Cross-Platform (Flutter/React Native)", "App UI/UX Design"],
        colSpan: "md:col-span-1",
    },
    {
        category: "UI/UX Services",
        icon: <PenTool className="w-8 h-8 text-white" />,
        items: ["User Journey Mapping", "High-Fidelity Prototyping", "Design Systems"],
        colSpan: "md:col-span-1",
    },
    {
        category: "VR & AR Services",
        icon: <Glasses className="w-8 h-8 text-[var(--color-accent)]" />,
        items: ["Immersive Training Simulations", "Augmented Reality Marketing", "Apple Vision Pro Adaptation"],
        colSpan: "md:col-span-1",
    },
    {
        category: "Web 2.0 Services",
        icon: <Globe className="w-8 h-8 text-white" />,
        items: ["Full Stack Development", "Technical SEO & Performance", "CMS Solutions"],
        colSpan: "md:col-span-1",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: [0, 0, 0.2, 1] as const }
    }
};

export default function Services() {
    return (
        <section id="services" className="min-h-screen w-full bg-[#111827] py-24 px-6 relative snap-center flex items-center">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-accent)]/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#F59E0B]/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto w-full relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center md:text-left"
                >
                    <h2 className="text-sm font-mono text-[var(--color-accent)] uppercase tracking-widest mb-4">Our Expertise</h2>
                    <h3 className="text-4xl md:text-6xl font-bold font-mono text-white tracking-tighter">
                        Holistic Digital <span className="text-[var(--color-secondary)]">Excellence.</span>
                    </h3>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                    {servicesData.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            className={`${service.colSpan} group relative overflow-hidden rounded-2xl border border-white/10 bg-[#1F2937]/90 backdrop-blur-md p-8 hover:border-[var(--color-accent)]/30 transition-colors duration-500`}
                        >
                            <div className="flex flex-col h-full justify-between">
                                <div className="mb-6">
                                    <div className="mb-6 p-4 bg-white/5 w-fit rounded-xl group-hover:bg-white/10 transition-colors">
                                        {service.icon}
                                    </div>
                                    <h4 className="text-2xl font-bold font-mono text-white mb-2">{service.category}</h4>
                                    <div className="w-12 h-[1px] bg-[var(--color-accent)] mb-6 opacity-50 group-hover:w-full transition-all duration-700" />
                                </div>

                                <ul className="space-y-3">
                                    {service.items.map((item, idx) => (
                                        <li key={idx} className="flex items-center text-[var(--color-secondary)] text-sm group-hover:text-white transition-colors">
                                            <span className="w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Hover Glow Effect */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none opacity-50" />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
