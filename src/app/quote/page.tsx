"use client";

import Navbar from "@/components/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
    ArrowRight,
    ArrowLeft,
    Check,
    Gamepad2,
    Smartphone,
    Glasses,
    Coins,
    Globe,
    Palette,
    Sparkles,
    Clock,
    DollarSign,
    Users,
    FileText,
    Send,
    CheckCircle
} from "lucide-react";
import Link from "next/link";

const services = [
    { id: "game", name: "Game Development", icon: <Gamepad2 className="w-8 h-8" />, description: "AAA games, mobile games, multiplayer", color: "#10B981" },
    { id: "app", name: "App Development", icon: <Smartphone className="w-8 h-8" />, description: "iOS, Android, cross-platform", color: "#06B6D4" },
    { id: "arvr", name: "VR / AR Experience", icon: <Glasses className="w-8 h-8" />, description: "Virtual reality, augmented reality", color: "#8B5CF6" },
    { id: "web3", name: "Web 3.0 / Metaverse", icon: <Coins className="w-8 h-8" />, description: "DeFi, NFT, blockchain, metaverse", color: "#F59E0B" },
    { id: "web", name: "Web Development", icon: <Globe className="w-8 h-8" />, description: "Websites, web apps, e-commerce", color: "#EC4899" },
    { id: "design", name: "UI/UX Design", icon: <Palette className="w-8 h-8" />, description: "User interface, experience design", color: "#14B8A6" },
];

const budgetRanges = [
    { id: "sub10k", label: "<$10k", description: "Micro projects" },
    { id: "10k", label: "$10k - $25k", description: "Small projects, MVPs" },
    { id: "25k", label: "$25k - $50k", description: "Medium projects" },
    { id: "50k", label: "$50k - $100k", description: "Large projects" },
    { id: "100k", label: "$100k - $250k", description: "Enterprise solutions" },
    { id: "250k", label: "$250k+", description: "Major initiatives" },
];

const timelines = [
    { id: "asap", label: "ASAP", description: "Rush delivery needed" },
    { id: "1-3", label: "1-3 Months", description: "Short-term project" },
    { id: "3-6", label: "3-6 Months", description: "Standard timeline" },
    { id: "6-12", label: "6-12 Months", description: "Complex project" },
    { id: "flexible", label: "Flexible", description: "No rush, quality first" },
];

const teamSizes = [
    { id: "solo", label: "Just Me", description: "Solo founder" },
    { id: "small", label: "2-10", description: "Small team" },
    { id: "medium", label: "11-50", description: "Growing company" },
    { id: "large", label: "51-200", description: "Established business" },
    { id: "enterprise", label: "200+", description: "Enterprise" },
];

const steps = [
    { id: 1, title: "Service", icon: <Sparkles className="w-5 h-5" /> },
    { id: 2, title: "Details", icon: <FileText className="w-5 h-5" /> },
    { id: 3, title: "Budget", icon: <DollarSign className="w-5 h-5" /> },
    { id: 4, title: "Timeline", icon: <Clock className="w-5 h-5" /> },
    { id: 5, title: "Contact", icon: <Users className="w-5 h-5" /> },
];

export default function QuotePage() {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        services: [] as string[],
        projectName: "",
        projectDescription: "",
        targetAudience: "",
        hasDesign: "",
        budget: "",
        timeline: "",
        teamSize: "",
        name: "",
        email: "",
        company: "",
        phone: "",
        howHeard: "",
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const toggleService = (serviceId: string) => {
        setFormData(prev => ({
            ...prev,
            services: prev.services.includes(serviceId)
                ? prev.services.filter(s => s !== serviceId)
                : [...prev.services, serviceId]
        }));
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const nextStep = () => {
        if (currentStep < 5) setCurrentStep(currentStep + 1);
    };

    const prevStep = () => {
        if (currentStep > 1) setCurrentStep(currentStep - 1);
    };

    const canProceed = () => {
        switch (currentStep) {
            case 1: return formData.services.length > 0;
            case 2: return formData.projectName && formData.projectDescription;
            case 3: return formData.budget;
            case 4: return formData.timeline;
            case 5: return formData.name && formData.email;
            default: return false;
        }
    };

    const handleSubmit = async () => {
        setStatus("loading");
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...formData,
                    type: "quote_request",
                    services: formData.services.join(", "),
                }),
            });

            if (res.ok) {
                setStatus("success");
            } else {
                setStatus("error");
            }
        } catch (error) {
            console.error(error);
            setStatus("error");
        }
    };

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-[var(--color-background)] selection:bg-[var(--color-accent)] selection:text-white">

                {/* Hero Header */}
                <section className="pt-32 pb-8 px-6 md:px-12 relative">
                    <div className="absolute inset-0">
                        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[var(--color-accent)]/10 rounded-full blur-[200px]" />
                    </div>

                    <div className="max-w-4xl mx-auto text-center relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <div className="inline-flex items-center gap-3 mb-6 px-5 py-2.5 border border-white/10 bg-white/[0.02] backdrop-blur-sm">
                                <Sparkles className="w-4 h-4 text-[var(--color-accent)]" />
                                <span className="text-xs font-mono uppercase tracking-widest text-[var(--color-secondary)]">Free Quote</span>
                            </div>

                            <h1 className="text-4xl md:text-6xl font-bold font-mono text-white tracking-tighter mb-4">
                                Get Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent)] to-[#F59E0B]">Custom Quote</span>
                            </h1>
                            <p className="text-[var(--color-secondary)] text-lg max-w-2xl mx-auto">
                                Tell us about your project and receive a detailed estimate within 24 hours.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Progress Steps */}
                <section className="px-6 md:px-12 py-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center justify-between mb-12">
                            {steps.map((step, index) => (
                                <div key={step.id} className="flex items-center">
                                    <div className={`flex flex-col items-center ${index !== steps.length - 1 ? 'flex-1' : ''}`}>
                                        <div
                                            className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all ${currentStep > step.id
                                                ? 'bg-[var(--color-accent)] border-[var(--color-accent)] text-white'
                                                : currentStep === step.id
                                                    ? 'border-[var(--color-accent)] text-[var(--color-accent)]'
                                                    : 'border-white/20 text-[var(--color-secondary)]'
                                                }`}
                                        >
                                            {currentStep > step.id ? <Check className="w-5 h-5" /> : step.icon}
                                        </div>
                                        <span className={`text-xs font-mono uppercase tracking-widest mt-2 hidden md:block ${currentStep >= step.id ? 'text-white' : 'text-[var(--color-secondary)]'
                                            }`}>
                                            {step.title}
                                        </span>
                                    </div>
                                    {index !== steps.length - 1 && (
                                        <div className={`h-[2px] w-full max-w-[100px] mx-2 ${currentStep > step.id ? 'bg-[var(--color-accent)]' : 'bg-white/10'
                                            }`} />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Form Content */}
                <section className="px-6 md:px-12 pb-24">
                    <div className="max-w-4xl mx-auto">
                        {status === "success" ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="p-12 border border-white/10 bg-[#111827]/50 text-center"
                            >
                                <div className="w-24 h-24 bg-[var(--color-accent)] rounded-full flex items-center justify-center mx-auto mb-8">
                                    <CheckCircle className="w-12 h-12 text-white" />
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold font-mono text-white mb-4">Quote Request Received!</h2>
                                <p className="text-[var(--color-secondary)] text-lg max-w-lg mx-auto mb-8">
                                    Thank you for your interest! Our team will analyze your requirements and send you a detailed quote within 24 hours.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Link
                                        href="/projects"
                                        className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-widest text-sm hover:bg-white/5 transition-all"
                                    >
                                        View Our Work
                                    </Link>
                                    <Link
                                        href="/"
                                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--color-accent)] text-white font-bold uppercase tracking-widest text-sm hover:bg-[#059669] transition-all"
                                    >
                                        Back to Home
                                    </Link>
                                </div>
                            </motion.div>
                        ) : (
                            <div className="p-8 md:p-12 border border-white/10 bg-[#111827]/50">
                                <AnimatePresence mode="wait">
                                    {/* Step 1: Service Selection */}
                                    {currentStep === 1 && (
                                        <motion.div
                                            key="step1"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                        >
                                            <h2 className="text-2xl font-bold font-mono text-white mb-2">What do you need?</h2>
                                            <p className="text-[var(--color-secondary)] mb-8">Select one or more services you&apos;re interested in.</p>

                                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                                {services.map((service) => (
                                                    <button
                                                        key={service.id}
                                                        onClick={() => toggleService(service.id)}
                                                        className={`p-6 border text-left transition-all ${formData.services.includes(service.id)
                                                            ? 'border-[var(--color-accent)] bg-[var(--color-accent)]/10'
                                                            : 'border-white/10 hover:border-white/30'
                                                            }`}
                                                    >
                                                        <div
                                                            className={`mb-4 ${formData.services.includes(service.id) ? 'text-[var(--active-color)]' : 'text-[var(--color-secondary)]'}`}
                                                            style={{ '--active-color': service.color } as React.CSSProperties}
                                                        >
                                                            {service.icon}
                                                        </div>
                                                        <h3 className="text-white font-bold mb-1">{service.name}</h3>
                                                        <p className="text-[var(--color-secondary)] text-sm">{service.description}</p>
                                                        {formData.services.includes(service.id) && (
                                                            <div className="absolute top-4 right-4 w-6 h-6 bg-[var(--color-accent)] rounded-full flex items-center justify-center">
                                                                <Check className="w-4 h-4 text-white" />
                                                            </div>
                                                        )}
                                                    </button>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}

                                    {/* Step 2: Project Details */}
                                    {currentStep === 2 && (
                                        <motion.div
                                            key="step2"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            className="space-y-6"
                                        >
                                            <div>
                                                <h2 className="text-2xl font-bold font-mono text-white mb-2">Tell us about your project</h2>
                                                <p className="text-[var(--color-secondary)] mb-8">The more details you provide, the more accurate your quote will be.</p>
                                            </div>

                                            <div>
                                                <label className="block text-xs font-mono uppercase tracking-widest text-[var(--color-secondary)] mb-2">
                                                    Project Name *
                                                </label>
                                                <input
                                                    type="text"
                                                    name="projectName"
                                                    value={formData.projectName}
                                                    onChange={handleChange}
                                                    className="w-full bg-black/30 border border-white/10 p-4 text-white placeholder:text-white/30 focus:border-[var(--color-accent)] outline-none transition-colors"
                                                    placeholder="e.g., My Awesome Game, FinTech App"
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-xs font-mono uppercase tracking-widest text-[var(--color-secondary)] mb-2">
                                                    Project Description *
                                                </label>
                                                <textarea
                                                    name="projectDescription"
                                                    rows={5}
                                                    value={formData.projectDescription}
                                                    onChange={handleChange}
                                                    className="w-full bg-black/30 border border-white/10 p-4 text-white placeholder:text-white/30 focus:border-[var(--color-accent)] outline-none transition-colors resize-none"
                                                    placeholder="Describe your project, goals, and key features you envision..."
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-xs font-mono uppercase tracking-widest text-[var(--color-secondary)] mb-2">
                                                    Target Audience
                                                </label>
                                                <input
                                                    type="text"
                                                    name="targetAudience"
                                                    value={formData.targetAudience}
                                                    onChange={handleChange}
                                                    className="w-full bg-black/30 border border-white/10 p-4 text-white placeholder:text-white/30 focus:border-[var(--color-accent)] outline-none transition-colors"
                                                    placeholder="e.g., Gamers aged 18-35, Enterprise clients"
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-xs font-mono uppercase tracking-widest text-[var(--color-secondary)] mb-2">
                                                    Do you have existing designs?
                                                </label>
                                                <div className="flex gap-4">
                                                    {["Yes, complete designs", "Partial designs", "No designs yet"].map((option) => (
                                                        <button
                                                            key={option}
                                                            type="button"
                                                            onClick={() => setFormData({ ...formData, hasDesign: option })}
                                                            className={`px-4 py-3 border text-sm transition-all ${formData.hasDesign === option
                                                                ? 'border-[var(--color-accent)] bg-[var(--color-accent)]/10 text-white'
                                                                : 'border-white/10 text-[var(--color-secondary)] hover:border-white/30'
                                                                }`}
                                                        >
                                                            {option}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}

                                    {/* Step 3: Budget */}
                                    {currentStep === 3 && (
                                        <motion.div
                                            key="step3"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                        >
                                            <h2 className="text-2xl font-bold font-mono text-white mb-2">What&apos;s your budget?</h2>
                                            <p className="text-[var(--color-secondary)] mb-8">Select the range that best fits your project investment.</p>

                                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                                {budgetRanges.map((range) => (
                                                    <button
                                                        key={range.id}
                                                        onClick={() => setFormData({ ...formData, budget: range.label })}
                                                        className={`p-6 border text-left transition-all ${formData.budget === range.label
                                                            ? 'border-[var(--color-accent)] bg-[var(--color-accent)]/10'
                                                            : 'border-white/10 hover:border-white/30'
                                                            }`}
                                                    >
                                                        <div className="flex items-center justify-between mb-2">
                                                            <span className="text-2xl font-bold text-white">{range.label}</span>
                                                            {formData.budget === range.label && (
                                                                <div className="w-6 h-6 bg-[var(--color-accent)] rounded-full flex items-center justify-center">
                                                                    <Check className="w-4 h-4 text-white" />
                                                                </div>
                                                            )}
                                                        </div>
                                                        <p className="text-[var(--color-secondary)] text-sm">{range.description}</p>
                                                    </button>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}

                                    {/* Step 4: Timeline */}
                                    {currentStep === 4 && (
                                        <motion.div
                                            key="step4"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                        >
                                            <h2 className="text-2xl font-bold font-mono text-white mb-2">When do you need it?</h2>
                                            <p className="text-[var(--color-secondary)] mb-8">Select your preferred project timeline.</p>

                                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                                                {timelines.map((timeline) => (
                                                    <button
                                                        key={timeline.id}
                                                        onClick={() => setFormData({ ...formData, timeline: timeline.label })}
                                                        className={`p-6 border text-left transition-all ${formData.timeline === timeline.label
                                                            ? 'border-[var(--color-accent)] bg-[var(--color-accent)]/10'
                                                            : 'border-white/10 hover:border-white/30'
                                                            }`}
                                                    >
                                                        <div className="flex items-center justify-between mb-2">
                                                            <span className="text-xl font-bold text-white">{timeline.label}</span>
                                                            {formData.timeline === timeline.label && (
                                                                <div className="w-6 h-6 bg-[var(--color-accent)] rounded-full flex items-center justify-center">
                                                                    <Check className="w-4 h-4 text-white" />
                                                                </div>
                                                            )}
                                                        </div>
                                                        <p className="text-[var(--color-secondary)] text-sm">{timeline.description}</p>
                                                    </button>
                                                ))}
                                            </div>

                                            <div>
                                                <label className="block text-xs font-mono uppercase tracking-widest text-[var(--color-secondary)] mb-2">
                                                    Your Team Size
                                                </label>
                                                <div className="flex flex-wrap gap-3">
                                                    {teamSizes.map((size) => (
                                                        <button
                                                            key={size.id}
                                                            onClick={() => setFormData({ ...formData, teamSize: size.label })}
                                                            className={`px-4 py-3 border text-sm transition-all ${formData.teamSize === size.label
                                                                ? 'border-[var(--color-accent)] bg-[var(--color-accent)]/10 text-white'
                                                                : 'border-white/10 text-[var(--color-secondary)] hover:border-white/30'
                                                                }`}
                                                        >
                                                            {size.label}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}

                                    {/* Step 5: Contact Info */}
                                    {currentStep === 5 && (
                                        <motion.div
                                            key="step5"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            className="space-y-6"
                                        >
                                            <div>
                                                <h2 className="text-2xl font-bold font-mono text-white mb-2">Almost there!</h2>
                                                <p className="text-[var(--color-secondary)] mb-8">Tell us how to reach you with your custom quote.</p>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div>
                                                    <label className="block text-xs font-mono uppercase tracking-widest text-[var(--color-secondary)] mb-2">
                                                        Full Name *
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                        className="w-full bg-black/30 border border-white/10 p-4 text-white placeholder:text-white/30 focus:border-[var(--color-accent)] outline-none transition-colors"
                                                        placeholder="John Doe"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-xs font-mono uppercase tracking-widest text-[var(--color-secondary)] mb-2">
                                                        Email Address *
                                                    </label>
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        className="w-full bg-black/30 border border-white/10 p-4 text-white placeholder:text-white/30 focus:border-[var(--color-accent)] outline-none transition-colors"
                                                        placeholder="john@company.com"
                                                    />
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div>
                                                    <label className="block text-xs font-mono uppercase tracking-widest text-[var(--color-secondary)] mb-2">
                                                        Company
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="company"
                                                        value={formData.company}
                                                        onChange={handleChange}
                                                        className="w-full bg-black/30 border border-white/10 p-4 text-white placeholder:text-white/30 focus:border-[var(--color-accent)] outline-none transition-colors"
                                                        placeholder="Acme Inc."
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-xs font-mono uppercase tracking-widest text-[var(--color-secondary)] mb-2">
                                                        Phone Number
                                                    </label>
                                                    <input
                                                        type="tel"
                                                        name="phone"
                                                        value={formData.phone}
                                                        onChange={handleChange}
                                                        className="w-full bg-black/30 border border-white/10 p-4 text-white placeholder:text-white/30 focus:border-[var(--color-accent)] outline-none transition-colors"
                                                        placeholder="+91 1234567890"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <label className="block text-xs font-mono uppercase tracking-widest text-[var(--color-secondary)] mb-2">
                                                    How did you hear about us?
                                                </label>
                                                <select
                                                    name="howHeard"
                                                    aria-label="How did you hear about us"
                                                    value={formData.howHeard}
                                                    onChange={handleChange}
                                                    className="w-full bg-[#1a1f2e] border border-white/10 p-4 text-white focus:border-[var(--color-accent)] outline-none transition-colors appearance-none cursor-pointer"
                                                >
                                                    <option value="">Select an option</option>
                                                    <option value="google">Google Search</option>
                                                    <option value="social">Social Media</option>
                                                    <option value="referral">Friend / Colleague</option>
                                                    <option value="portfolio">Saw Your Work</option>
                                                    <option value="other">Other</option>
                                                </select>
                                            </div>

                                            {/* Summary */}
                                            <div className="p-6 border border-white/10 bg-[#1F2937]/30">
                                                <h3 className="text-lg font-bold font-mono text-white mb-4">Quote Summary</h3>
                                                <div className="space-y-3 text-sm">
                                                    <div className="flex justify-between">
                                                        <span className="text-[var(--color-secondary)]">Services:</span>
                                                        <span className="text-white text-right">
                                                            {formData.services.map(s => services.find(srv => srv.id === s)?.name).join(", ") || "-"}
                                                        </span>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span className="text-[var(--color-secondary)]">Project:</span>
                                                        <span className="text-white">{formData.projectName || "-"}</span>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span className="text-[var(--color-secondary)]">Budget:</span>
                                                        <span className="text-[var(--color-accent)]">{formData.budget || "-"}</span>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span className="text-[var(--color-secondary)]">Timeline:</span>
                                                        <span className="text-white">{formData.timeline || "-"}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {/* Navigation Buttons */}
                                <div className="flex items-center justify-between mt-12 pt-8 border-t border-white/10">
                                    <button
                                        onClick={prevStep}
                                        disabled={currentStep === 1}
                                        className="flex items-center gap-2 text-[var(--color-secondary)] hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                                    >
                                        <ArrowLeft className="w-5 h-5" />
                                        <span className="font-bold uppercase tracking-widest text-sm">Back</span>
                                    </button>

                                    {currentStep < 5 ? (
                                        <button
                                            onClick={nextStep}
                                            disabled={!canProceed()}
                                            className="flex items-center gap-3 px-8 py-4 bg-[var(--color-accent)] text-white font-bold uppercase tracking-widest text-sm hover:bg-[#059669] transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                                        >
                                            <span>Continue</span>
                                            <ArrowRight className="w-5 h-5" />
                                        </button>
                                    ) : (
                                        <button
                                            onClick={handleSubmit}
                                            disabled={!canProceed() || status === "loading"}
                                            className="flex items-center gap-3 px-8 py-4 bg-[var(--color-accent)] text-white font-bold uppercase tracking-widest text-sm hover:bg-[#059669] transition-all disabled:opacity-30 disabled:cursor-not-allowed shadow-[0_0_30px_rgba(16,185,129,0.3)]"
                                        >
                                            {status === "loading" ? (
                                                <>
                                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                    <span>Submitting...</span>
                                                </>
                                            ) : (
                                                <>
                                                    <Send className="w-5 h-5" />
                                                    <span>Get My Quote</span>
                                                </>
                                            )}
                                        </button>
                                    )}
                                </div>

                                {status === "error" && (
                                    <div className="mt-6 p-4 border border-red-500/30 bg-red-500/10 text-red-400 text-sm text-center">
                                        Something went wrong. Please try again or contact us directly at hello@shiraw.xyz
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </section>
            </main>
        </>
    );
}
