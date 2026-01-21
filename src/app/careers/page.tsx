"use client";

import Navbar from "@/components/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import {
    ArrowUpRight,
    Check,
    Sparkles,
    MapPin,
    Briefcase,
    Shield,
    Rocket,
    Users,
    ChevronDown,
    Cpu,
    Code
} from "lucide-react";
import { useState } from "react";

const roles = [
    {
        id: "R-001",
        title: "Lead Game Architect",
        type: "Full-time",
        location: "Remote",
        department: "Game Development",
        color: "#10B981",
        description: "Lead the technical architecture of our next-generation gaming projects. You will define coding standards, mentor junior developers, and architect systems that support millions of concurrent players.",
        responsibilities: [
            "Architect and implement scalable game systems using C++ and Unreal Engine 5.",
            "Drive technical decision-making and define engineering standards for the team.",
            "Lead performance profiling, memory management, and optimization efforts.",
            "Mentor the engineering team, conducting code reviews and fostering technical excellence.",
            "Collaborate with game designers to translate creative vision into technical reality."
        ],
        requirements: [
            "8+ years in game development (AAA preferred)",
            "Expert mastery of C++ and Unreal Engine 5",
            "Experience with multiplayer networking & replication",
            "Proven track record of shipping console/PC titles"
        ]
    },
    {
        id: "R-002",
        title: "Metaverse World Builder",
        type: "Contract",
        location: "Remote",
        department: "Web 3.0 & Metaverse",
        color: "#8B5CF6",
        description: "Architect the spatial web. You will design and build immersive metaverse experiences, from procedural terrain generation to interactive social hubs.",
        responsibilities: [
            "Design and construct immersive 3D environments optimized for social platforms.",
            "Create high-fidelity assets while maintaining strict polygon and texture budgets for WebGL.",
            "Implement dynamic lighting, shaders, and procedural generation systems.",
            "Collaborate with developers to integrate assets into the spatial web infrastructure.",
            "Prototype and iterate on environmental storytelling elements."
        ],
        requirements: [
            "5+ years in 3D environment art or technical art",
            "Proficiency in Unity, Blender, and WebGL",
            "Understanding of decentralized asset ownership",
            "Strong portfolio of immersive environments"
        ]
    },
    {
        id: "R-003",
        title: "Senior React Engineer",
        type: "Full-time",
        location: "Remote",
        department: "Web 2.0",
        color: "#06B6D4",
        description: "Push the boundaries of the browser. We're looking for a frontend wizard to build silky-smooth, WebGL-infused interfaces using Next.js and React Three Fiber.",
        responsibilities: [
            "Build high-performance, interactive UIs using Next.js, React, and TypeScript.",
            "Integrate immersive WebGL experiences using React Three Fiber and Three.js.",
            "Ensure 60fps performance and responsiveness across all supported devices and browsers.",
            "Contribute to our internal component library and atomic design system.",
            "Collaborate with the design team to implement pixel-perfect, motion-rich interfaces."
        ],
        requirements: [
            "6+ years with React/Next.js ecosystem",
            "Deep understanding of DOM performance (60fps targets)",
            "Experience with WebGL/Three.js/R3F is a huge plus",
            "Obsession with pixel-perfect UI implementation"
        ]
    },
    {
        id: "R-004",
        title: "3D Motion Designer",
        type: "Freelance",
        location: "Remote",
        department: "VR & AR",
        color: "#EC4899",
        description: "Breathe life into the digital. Create stunning 3D motion graphics, kinetic typography, and visual effects for our high-profile client projects.",
        responsibilities: [
            "Create stunning 3D motion assets for marketing campaigns and product interfaces.",
            "Handle end-to-end production from concept and storyboarding to final render.",
            "Experiment with new visual styles, rendering techniques, and simulation tools.",
            "Collaborate with the development team to export assets for web implementation (Lottie, Rive, glTF).",
            "Maintain consistent brand aesthetics across all visual outputs."
        ],
        requirements: [
            "4+ years in motion design",
            "Expert in Cinema 4D, Redshift/Octane, and After Effects",
            "Ability to tell compelling stories through motion",
            "Demo reel showing high-end commercial work"
        ]
    },
    {
        id: "R-005",
        title: "Smart Contract Engineer",
        type: "Full-time",
        location: "Remote",
        department: "Web 3.0",
        color: "#F59E0B",
        description: "Code the law of the future. Develop secure, gas-optimized smart contracts for DeFi protocols, NFT marketplaces, and DAO governance systems.",
        responsibilities: [
            "Develop and audit secure, gas-optimized smart contracts for Ethereum and L2 networks.",
            "Implement standard and custom token protocols (ERC20, ERC721, ERC1155).",
            "Architect decentralized protocols, governance mechanisms, and staking systems.",
            "Ensure rigorous security best practices and coordinate with external auditors.",
            "Research and integrate emerging blockchain technologies and standards."
        ],
        requirements: [
            "3+ years Solidity/Rust development",
            "Deep understanding of EVM and L2 scaling solutions",
            "Experience auditing contracts or working with auditors",
            "Knowledge of DeFi primitives and tokenomics"
        ]
    },
    {
        id: "R-006",
        title: "XR Gameplay Programmer",
        type: "Full-time",
        location: "Remote",
        department: "VR & AR",
        color: "#8B5CF6",
        description: "Define the mechanics of mixed reality. Build intuitive interaction systems for Apple Vision Pro and Meta Quest applications.",
        responsibilities: [
            "Implement data-driven gameplay mechanics for AR and VR experiences.",
            "Develop intuitive interaction systems including hand tracking and eye tracking.",
            "Optimize rendering pipelines and physics simulations for standalone VR headsets.",
            "Prototype and iterate on spatial UI/UX concepts unique to mixed reality.",
            "Integrate spatial audio and haptic feedback to enhance immersion."
        ],
        requirements: [
            "4+ years in Unity/C# development",
            "Experience with ARKit, ARCore, or OpenXR",
            "Strong 3D math and physics understanding",
            "Passion for spatial computing UI/UX"
        ]
    },
    {
        id: "R-007",
        title: "Lead iOS Engineer",
        type: "Full-time",
        location: "Remote",
        department: "App Development",
        color: "#3B82F6",
        description: "Craft native masterpieces. We need a Swift expert to build pixel-perfect, fluidly animated iOS applications that set new standards for mobile UX.",
        responsibilities: [
            "Architect and build advanced iOS applications using Swift and SwiftUI.",
            "Implement complex custom animations and transitions using Core Animation and Metal.",
            "Ensure application performance, quality, and responsiveness.",
            "Collaborate with the design team to define and ship new features.",
            "Mentor junior developers and establish mobile engineering best practices."
        ],
        requirements: [
            "6+ years of iOS development experience",
            "Deep expertise in Swift, SwiftUI, and Combine",
            "Experience with Metal or low-level graphics programming is a plus",
            "Published multiple high-quality apps on the App Store"
        ]
    },
    {
        id: "R-008",
        title: "Senior Flutter Developer",
        type: "Contract",
        location: "Remote",
        department: "App Development",
        color: "#0EA5E9",
        description: "One codebase, zero compromise. Build beautiful, high-performance cross-platform applications that feel native on every device.",
        responsibilities: [
            "Develop highly performant mobile apps for iOS and Android using Flutter.",
            "Create custom plugins and modify native code (Swift/Kotlin) when necessary.",
            "Optimize application start-up time and frame rates (targeting 60fps+).",
            "Integrate complex third-party SDKs and APIs.",
            "Participate in code reviews and architecture discussions."
        ],
        requirements: [
            "4+ years of mobile development, 2+ years with Flutter",
            "Strong proficiency in Dart and state management (Riverpod/Bloc)",
            "Experience with native platform channels (MethodChannels)",
            "Eye for design and animation details"
        ]
    },
];

const departments = ["All", "Game Development", "Web 3.0 & Metaverse", "App Development", "VR & AR", "Web 2.0"];

const values = [
    {
        title: "Radical Ownership",
        desc: "We don't have managers; we have leaders. You own your output from concept to deploy.",
        icon: <Shield className="w-8 h-8" />,
        color: "#10B981"
    },
    {
        title: "Velocity & Precision",
        desc: "We move fast, but we never break things. Quality is the only metric that matters.",
        icon: <Rocket className="w-8 h-8" />,
        color: "#F59E0B"
    },
    {
        title: "No Ego, Just Data",
        desc: "Best idea wins. We debate passionately, back it up with data, and commit fully.",
        icon: <Cpu className="w-8 h-8" />,
        color: "#8B5CF6"
    },
    {
        title: "Always Day One",
        desc: "We are constantly learning. If it's not cutting edge, it's already obsolete.",
        icon: <Code className="w-8 h-8" />,
        color: "#EC4899"
    },
];

export default function CareersPage() {
    const [activeDepartment, setActiveDepartment] = useState("All");
    const [expandedRole, setExpandedRole] = useState<string | null>(null);

    const filteredRoles = activeDepartment === "All"
        ? roles
        : roles.filter(r => r.department === activeDepartment);

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-[#1F2937] text-white selection:bg-[var(--color-accent)] selection:text-white overflow-hidden">

                {/* Hero Section */}
                <section className="relative min-h-[90vh] flex items-center justify-center pt-20">
                    {/* Abstract Background */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className="absolute inset-0 bg-grid opacity-[0.03]" />
                        <motion.div
                            animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute top-0 right-0 w-[800px] h-[800px] bg-[var(--color-accent)]/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2"
                        />
                        <motion.div
                            animate={{ rotate: -360, scale: [1, 1.2, 1] }}
                            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                            className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#8B5CF6]/5 rounded-full blur-[150px] translate-y-1/2 -translate-x-1/2"
                        />
                    </div>

                    <div className="container mx-auto px-6 relative z-10 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-accent)] opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-accent)]"></span>
                                </span>
                                <span className="text-xs font-mono uppercase tracking-widest text-[#D1D5DB]">Recruiting Protocols Active</span>
                            </div>

                            <h1 className="text-6xl md:text-8xl font-bold font-mono tracking-tighter mb-8">
                                JOIN THE <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent)] via-[#34D399] to-[#8B5CF6]">
                                    COLLECTIVE
                                </span>
                            </h1>

                            <p className="text-xl md:text-2xl text-[#9CA3AF] max-w-2xl mx-auto mb-12 leading-relaxed">
                                We are the architects of the new digital reality.
                                <span className="text-white"> SHIRAW</span> seeks visionaries ready to build the impossible.
                            </p>

                            <div className="flex flex-col md:flex-row gap-6 justify-center">
                                <a
                                    href="#roles"
                                    className="group relative px-8 py-4 bg-[var(--color-accent)] text-white font-bold uppercase tracking-widest overflow-hidden"
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        View Mission Logs <ArrowUpRight className="w-4 h-4" />
                                    </span>
                                    <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    {/* Scroll Indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                    >
                        <div className="w-[1px] h-12 bg-gradient-to-b from-[var(--color-accent)] to-transparent" />
                        <span className="text-[10px] font-mono uppercase text-[#6B7280]">Scroll to Explore</span>
                    </motion.div>
                </section>

                {/* Values Section */}
                <section className="py-24 relative border-y border-white/5 bg-[#111827]/50">
                    <div className="container mx-auto px-6">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-sm font-mono text-[var(--color-accent)] uppercase tracking-widest mb-4">Core Directives</h2>
                            <h3 className="text-4xl md:text-5xl font-bold font-mono">The Code We Live By</h3>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {values.map((val, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="p-8 border border-white/10 bg-[#1F2937]/50 hover:border-[var(--color-accent)]/50 transition-colors group relative overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <div className="relative z-10">
                                        <div
                                            className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 bg-[var(--icon-bg)] text-[var(--icon-color)]"
                                            style={{ '--icon-bg': `${val.color}15`, '--icon-color': val.color } as React.CSSProperties}
                                        >
                                            {val.icon}
                                        </div>
                                        <h4 className="text-xl font-bold font-mono mb-3">{val.title}</h4>
                                        <p className="text-[#9CA3AF] text-sm leading-relaxed">{val.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>


                {/* Main Roles Section */}
                <section id="roles" className="py-32 bg-[#111827] relative scroll-mt-20">
                    {/* Decorative Data Streams */}
                    <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-white/5" />
                    <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-white/5" />

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-16 gap-8">
                            <div>
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="w-2 h-2 bg-[var(--color-accent)] animate-pulse" />
                                    <span className="text-xs font-mono uppercase tracking-widest text-[var(--color-accent)]">Live Feed</span>
                                </div>
                                <h2 className="text-4xl md:text-6xl font-bold font-mono tracking-tighter">Mission Logs</h2>
                            </div>

                            {/* Filter Pills */}
                            <div className="flex flex-wrap gap-2 items-center">
                                {departments.map(dept => (
                                    <button
                                        key={dept}
                                        onClick={() => setActiveDepartment(dept)}
                                        className={`px-4 py-2 text-xs font-mono uppercase tracking-widest border transition-all ${activeDepartment === dept
                                            ? "bg-white text-black border-white"
                                            : "border-white/20 text-[#9CA3AF] hover:border-white/40 hover:text-white"
                                            }`}
                                    >
                                        [{dept}]
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Roles List */}
                        <div className="space-y-4 min-h-[400px]">
                            <AnimatePresence mode="popLayout">
                                {filteredRoles.map((role) => (
                                    <motion.div
                                        key={role.id}
                                        layout
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        className={`group border ${expandedRole === role.id ? 'border-[var(--color-accent)] bg-[var(--color-accent)]/5' : 'border-white/10 bg-[#1F2937]/30'} transition-colors overflow-hidden`}
                                    >
                                        <button
                                            onClick={() => setExpandedRole(expandedRole === role.id ? null : role.id)}
                                            className="w-full p-6 md:p-8 flex flex-col md:flex-row gap-6 md:items-center justify-between text-left"
                                        >
                                            <div className="flex-1">
                                                <div className="flex items-center gap-3 mb-2 text-xs font-mono uppercase tracking-widest">
                                                    <span style={{ color: role.color }}>// {role.id}</span>
                                                    <span className="text-[#6B7280]">::</span>
                                                    <span className="text-[#9CA3AF]">{role.department}</span>
                                                </div>
                                                <h3 className="text-2xl md:text-3xl font-bold font-mono text-white group-hover:text-[var(--color-accent)] transition-colors">
                                                    {role.title}
                                                </h3>
                                            </div>

                                            <div className="flex items-center gap-6 text-sm font-mono text-[#9CA3AF]">
                                                <span className="flex items-center gap-2">
                                                    <MapPin className="w-4 h-4" /> {role.location}
                                                </span>
                                                <span className="flex items-center gap-2">
                                                    <Briefcase className="w-4 h-4" /> {role.type}
                                                </span>
                                                <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${expandedRole === role.id ? 'rotate-180 text-[var(--color-accent)]' : ''}`} />
                                            </div>
                                        </button>

                                        <AnimatePresence>
                                            {expandedRole === role.id && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="px-6 md:px-8 pb-8 pt-2 border-t border-white/5">
                                                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                                                            <div className="lg:col-span-2 space-y-10">
                                                                <div>
                                                                    <h4 className="text-sm font-mono uppercase tracking-widest text-[var(--color-accent)] mb-4">Role Overview</h4>
                                                                    <p className="text-[#D1D5DB] leading-relaxed text-lg">{role.description}</p>
                                                                </div>

                                                                <div>
                                                                    <h4 className="text-sm font-mono uppercase tracking-widest text-[var(--color-accent)] mb-4">Job Description</h4>
                                                                    <ul className="space-y-3">
                                                                        {role.responsibilities.map((resp, i) => (
                                                                            <li key={i} className="flex items-start gap-3 text-[#D1D5DB]">
                                                                                <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] mt-2 shrink-0" />
                                                                                <span className="leading-relaxed">{resp}</span>
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                </div>

                                                                <div>
                                                                    <h4 className="text-sm font-mono uppercase tracking-widest text-[var(--color-accent)] mb-4">Tactical Requirements</h4>
                                                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                                        {role.requirements.map((req, i) => (
                                                                            <li key={i} className="flex items-start gap-3 text-[#D1D5DB]">
                                                                                <Check className="w-5 h-5 text-[var(--color-accent)] shrink-0" />
                                                                                <span>{req}</span>
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                </div>
                                                            </div>

                                                            <div className="lg:col-span-1 bg-white/[0.03] p-6 border border-white/10 h-fit">
                                                                <h4 className="text-sm font-mono uppercase tracking-widest text-white mb-6">Initialize Application</h4>
                                                                <p className="text-xs text-[#9CA3AF] mb-6">Send your portfolio and encrypted transmission (resume) directly to command at <span className="text-[var(--color-accent)] font-bold">careers@shiraw.xyz</span>.</p>
                                                                <a
                                                                    href={`/careers/apply?role=${role.id}`}
                                                                    className="flex items-center justify-center gap-2 w-full py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-[var(--color-accent)] hover:text-white transition-colors"

                                                                >
                                                                    Apply Now <ArrowUpRight className="w-4 h-4" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                ))}
                            </AnimatePresence>

                            {filteredRoles.length === 0 && (
                                <div className="py-20 text-center border border-dashed border-white/10">
                                    <p className="text-[#9CA3AF] font-mono">No active missions in this sector.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                {/* Team Spotlight / CTA */}
                <section className="py-32 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[#06B6D4]/5" />
                    <div className="container mx-auto px-6 relative z-10 text-center">
                        <Users className="w-16 h-16 mx-auto text-[var(--color-accent)] mb-6" />
                        <h2 className="text-4xl md:text-5xl font-bold font-mono tracking-tighter mb-6">
                            Don't See Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent)] to-[#06B6D4]">Class</span>?
                        </h2>
                        <p className="text-xl text-[#9CA3AF] mb-12 max-w-2xl mx-auto">
                            We are always scouting for outlier talent. If you believe you belong in the alchemy, force your way in.
                            <br />
                            <span className="text-[var(--color-accent)] block mt-4 text-lg font-bold font-mono">careers@shiraw.xyz</span>
                        </p>
                        <a
                            href="/careers/apply?type=open"
                            className="inline-flex items-center gap-3 px-10 py-5 border border-white/30 hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)]/10 text-white font-bold uppercase tracking-widest transition-all"
                        >
                            <Sparkles className="w-5 h-5" />
                            Submit Open Application
                        </a>
                    </div>
                </section>

            </main>
        </>
    );
}
