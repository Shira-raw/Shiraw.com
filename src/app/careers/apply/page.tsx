"use client";

import Navbar from "@/components/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import {
    ArrowRight,
    ArrowLeft,
    Check,
    Upload,
    User,
    Mail,
    Phone,
    Linkedin,
    Globe,
    FileText,
    Send,
    CheckCircle,
    Briefcase
} from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

const steps = [
    { id: 1, title: "Identity", icon: <User className="w-5 h-5" /> },
    { id: 2, title: "Profile", icon: <Linkedin className="w-5 h-5" /> },
    { id: 3, title: "Credentials", icon: <FileText className="w-5 h-5" /> },
    { id: 4, title: "Transmission", icon: <Send className="w-5 h-5" /> },
];

function ApplyForm() {
    const searchParams = useSearchParams();
    const roleId = searchParams.get("role");
    const type = searchParams.get("type");

    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        linkedin: "",
        portfolio: "",
        github: "",
        role: roleId || (type === "open" ? "Open Application" : ""),
        resume: null as File | null,
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    useEffect(() => {
        if (roleId) {
            setFormData(prev => ({ ...prev, role: roleId }));
        } else if (type === "open") {
            setFormData(prev => ({ ...prev, role: "Open Application" }));
        }
    }, [roleId, type]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFormData({ ...formData, resume: e.target.files[0] });
        }
    };

    const nextStep = () => {
        if (currentStep < 4) setCurrentStep(currentStep + 1);
    };

    const prevStep = () => {
        if (currentStep > 1) setCurrentStep(currentStep - 1);
    };

    const canProceed = () => {
        switch (currentStep) {
            case 1: return formData.firstName && formData.lastName && formData.email;
            case 2: return formData.linkedin; // Portfolio/Github optional
            case 3: return formData.resume || formData.portfolio; // Need at least one proof of work
            case 4: return true;
            default: return false;
        }
    };

    const handleSubmit = async () => {
        setStatus("loading");
        // Simulate API call
        setTimeout(() => {
            setStatus("success");
            window.scrollTo(0, 0);
        }, 2000);
    };

    return (
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
                    <h2 className="text-3xl md:text-4xl font-bold font-mono text-white mb-4">Transmission Received</h2>
                    <p className="text-[var(--color-secondary)] text-lg max-w-lg mx-auto mb-8">
                        Your application data has been encrypted and sent to our central command. If your profile matches our current directives, we will initiate contact.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/careers"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-widest text-sm hover:bg-white/5 transition-all"
                        >
                            Return to Mission Logs
                        </Link>
                        <Link
                            href="/"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--color-accent)] text-white font-bold uppercase tracking-widest text-sm hover:bg-[#059669] transition-all"
                        >
                            Return to Base
                        </Link>
                    </div>
                </motion.div>
            ) : (
                <>
                    {/* Progress Steps */}
                    <div className="flex items-center justify-between mb-12 px-4 md:px-0">
                        {steps.map((step, index) => (
                            <div key={step.id} className="flex items-center">
                                <div className={`flex flex-col items-center ${index !== steps.length - 1 ? 'flex-1' : ''}`}>
                                    <div
                                        className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center border-2 transition-all ${currentStep > step.id
                                            ? 'bg-[var(--color-accent)] border-[var(--color-accent)] text-white'
                                            : currentStep === step.id
                                                ? 'border-[var(--color-accent)] text-[var(--color-accent)]'
                                                : 'border-white/20 text-[var(--color-secondary)]'
                                            }`}
                                    >
                                        {currentStep > step.id ? <Check className="w-5 h-5" /> : step.icon}
                                    </div>
                                    <span className={`text-[10px] md:text-xs font-mono uppercase tracking-widest mt-2 ${currentStep >= step.id ? 'text-white' : 'text-[var(--color-secondary)]'
                                        }`}>
                                        {step.title}
                                    </span>
                                </div>
                                {index !== steps.length - 1 && (
                                    <div className={`h-[2px] w-8 md:w-full max-w-[100px] mx-2 transition-colors duration-300 ${currentStep > step.id ? 'bg-[var(--color-accent)]' : 'bg-white/10'
                                        }`} />
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="p-8 md:p-12 border border-white/10 bg-[#1F2937]/30 backdrop-blur-sm">
                        <AnimatePresence mode="wait">
                            {/* Step 1: Identity */}
                            {currentStep === 1 && (
                                <motion.div
                                    key="step1"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-6"
                                >
                                    <h2 className="text-2xl font-bold font-mono text-white mb-2 flex items-center gap-2">
                                        <User className="text-[var(--color-accent)]" /> Identify Yourself
                                    </h2>
                                    <p className="text-[var(--color-secondary)] mb-8">Basic contact protocols.</p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-xs font-mono uppercase tracking-widest text-[var(--color-secondary)] mb-2">First Name *</label>
                                            <input
                                                type="text"
                                                name="firstName"
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                className="w-full bg-black/30 border border-white/10 p-4 text-white focus:border-[var(--color-accent)] outline-none transition-colors"
                                                placeholder="Enter first name"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-mono uppercase tracking-widest text-[var(--color-secondary)] mb-2">Last Name *</label>
                                            <input
                                                type="text"
                                                name="lastName"
                                                value={formData.lastName}
                                                onChange={handleChange}
                                                className="w-full bg-black/30 border border-white/10 p-4 text-white focus:border-[var(--color-accent)] outline-none transition-colors"
                                                placeholder="Enter last name"
                                            />
                                        </div>
                                        <div className="md:col-span-2">
                                            <label className="block text-xs font-mono uppercase tracking-widest text-[var(--color-secondary)] mb-2">Email Address *</label>
                                            <div className="relative">
                                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--color-secondary)]" />
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className="w-full bg-black/30 border border-white/10 p-4 pl-12 text-white focus:border-[var(--color-accent)] outline-none transition-colors"
                                                    placeholder="name@example.com"
                                                />
                                            </div>
                                        </div>
                                        <div className="md:col-span-2">
                                            <label className="block text-xs font-mono uppercase tracking-widest text-[var(--color-secondary)] mb-2">Phone Number</label>
                                            <div className="relative">
                                                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--color-secondary)]" />
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    className="w-full bg-black/30 border border-white/10 p-4 pl-12 text-white focus:border-[var(--color-accent)] outline-none transition-colors"
                                                    placeholder="+91 (888) 000-000"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {/* Step 2: Profile */}
                            {currentStep === 2 && (
                                <motion.div
                                    key="step2"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-6"
                                >
                                    <h2 className="text-2xl font-bold font-mono text-white mb-2 flex items-center gap-2">
                                        <Globe className="text-[var(--color-accent)]" /> Digital Presence
                                    </h2>
                                    <p className="text-[var(--color-secondary)] mb-8">Where can we verify your capabilities?</p>

                                    <div className="space-y-6">
                                        <div>
                                            <label className="block text-xs font-mono uppercase tracking-widest text-[var(--color-secondary)] mb-2">LinkedIn Profile *</label>
                                            <div className="relative">
                                                <Linkedin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--color-secondary)]" />
                                                <input
                                                    type="url"
                                                    name="linkedin"
                                                    value={formData.linkedin}
                                                    onChange={handleChange}
                                                    className="w-full bg-black/30 border border-white/10 p-4 pl-12 text-white focus:border-[var(--color-accent)] outline-none transition-colors"
                                                    placeholder="https://linkedin.com/in/..."
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-xs font-mono uppercase tracking-widest text-[var(--color-secondary)] mb-2">Portfolio / Personal Website</label>
                                            <div className="relative">
                                                <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--color-secondary)]" />
                                                <input
                                                    type="url"
                                                    name="portfolio"
                                                    value={formData.portfolio}
                                                    onChange={handleChange}
                                                    className="w-full bg-black/30 border border-white/10 p-4 pl-12 text-white focus:border-[var(--color-accent)] outline-none transition-colors"
                                                    placeholder="https://yourportfolio.com"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-xs font-mono uppercase tracking-widest text-[var(--color-secondary)] mb-2">GitHub / Dribbble / Behance</label>
                                            <div className="relative">
                                                <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--color-secondary)]" />
                                                <input
                                                    type="url"
                                                    name="github"
                                                    value={formData.github}
                                                    onChange={handleChange}
                                                    className="w-full bg-black/30 border border-white/10 p-4 pl-12 text-white focus:border-[var(--color-accent)] outline-none transition-colors"
                                                    placeholder="URL to your work repository"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {/* Step 3: Credentials */}
                            {currentStep === 3 && (
                                <motion.div
                                    key="step3"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-6"
                                >
                                    <h2 className="text-2xl font-bold font-mono text-white mb-2 flex items-center gap-2">
                                        <FileText className="text-[var(--color-accent)]" /> Credentials
                                    </h2>
                                    <p className="text-[var(--color-secondary)] mb-8">Upload your CV and tell us your story.</p>

                                    <div className="bg-black/30 border border-dashed border-white/20 rounded-lg p-8 text-center hover:border-[var(--color-accent)] transition-colors group cursor-pointer relative">
                                        <input
                                            type="file"
                                            onChange={handleFileChange}
                                            accept=".pdf,.doc,.docx"
                                            aria-label="Upload Resume"
                                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                        />
                                        <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[var(--color-accent)]/10 text-[var(--color-secondary)] group-hover:text-[var(--color-accent)] transition-colors">
                                            <Upload className="w-8 h-8" />
                                        </div>
                                        <h3 className="text-white font-bold mb-2">
                                            {formData.resume ? formData.resume.name : "Upload Resume / CV"}
                                        </h3>
                                        <p className="text-[var(--color-secondary)] text-sm">
                                            {formData.resume ? "Click to replace" : "Drag & drop or click to browse (PDF, DOCX)"}
                                        </p>
                                    </div>

                                    <div className="mt-6">
                                        <label className="block text-xs font-mono uppercase tracking-widest text-[var(--color-secondary)] mb-2">Why SHIRAW? (Cover Letter)</label>
                                        <textarea
                                            name="message"
                                            rows={6}
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="w-full bg-black/30 border border-white/10 p-4 text-white focus:border-[var(--color-accent)] outline-none transition-colors resize-none"
                                            placeholder="Tell us what drives you and why you want to join the collective..."
                                        />
                                    </div>
                                </motion.div>
                            )}

                            {/* Step 4: Transmission */}
                            {currentStep === 4 && (
                                <motion.div
                                    key="step4"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                >
                                    <h2 className="text-2xl font-bold font-mono text-white mb-6">Review Transmission</h2>

                                    <div className="bg-black/20 border border-white/10 p-6 space-y-4 mb-8">
                                        <div className="flex justify-between border-b border-white/5 pb-2">
                                            <span className="text-[var(--color-secondary)]">Role:</span>
                                            <span className="text-[var(--color-accent)] font-bold">{formData.role}</span>
                                        </div>
                                        <div className="flex justify-between border-b border-white/5 pb-2">
                                            <span className="text-[var(--color-secondary)]">Name:</span>
                                            <span className="text-white">{formData.firstName} {formData.lastName}</span>
                                        </div>
                                        <div className="flex justify-between border-b border-white/5 pb-2">
                                            <span className="text-[var(--color-secondary)]">Email:</span>
                                            <span className="text-white">{formData.email}</span>
                                        </div>
                                        <div className="flex justify-between border-b border-white/5 pb-2">
                                            <span className="text-[var(--color-secondary)]">LinkedIn:</span>
                                            <span className="text-white truncate max-w-[200px]">{formData.linkedin}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-[var(--color-secondary)]">Resume:</span>
                                            <span className="text-white">{formData.resume ? "Attached" : "Not Provided"}</span>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3 p-4 bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 text-sm text-[var(--color-secondary)]">
                                        <CheckCircle className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                                        <p>By clicking Submit, I confirm that all provided information is accurate and I agree to SHIRAW&apos;s data processing protocols.</p>
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

                            {currentStep < 4 ? (
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
                                    disabled={status === "loading"}
                                    className="flex items-center gap-3 px-8 py-4 bg-[var(--color-accent)] text-white font-bold uppercase tracking-widest text-sm hover:bg-[#059669] transition-all disabled:opacity-30 disabled:cursor-not-allowed shadow-[0_0_30px_rgba(16,185,129,0.3)]"
                                >
                                    {status === "loading" ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                            <span>Transmitting...</span>
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-5 h-5" />
                                            <span>Transmit Application</span>
                                        </>
                                    )}
                                </button>
                            )}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default function ApplyPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-[#1F2937] text-white selection:bg-[var(--color-accent)] selection:text-white overflow-hidden pb-24">
                <section className="pt-32 pb-12 px-6 md:px-12 relative">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-accent)]/10 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />
                    </div>
                    <div className="container mx-auto px-6 relative z-10 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
                                <span className="text-xs font-mono uppercase tracking-widest text-[#D1D5DB]">Secure Uplink Established</span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold font-mono tracking-tighter mb-6">
                                INITIALIZE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent)] to-[#34D399]">APPLICATION</span>
                            </h1>
                            <p className="text-center text-[var(--color-secondary)] max-w-2xl mx-auto">
                                Join the elite. Your data will be encrypted and transmitted directly to our recruitment sector.
                            </p>
                        </motion.div>
                    </div>
                </section>

                <div className="container mx-auto px-6">
                    <Suspense fallback={<div className="text-center py-20">Loading interface...</div>}>
                        <ApplyForm />
                    </Suspense>
                </div>
            </main>
        </>
    );
}
