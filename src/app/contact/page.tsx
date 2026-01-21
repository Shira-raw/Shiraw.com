"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { useState } from "react";
import {
    Send,
    Mail,
    MapPin,
    Phone,
    Clock,
    MessageSquare,
    ArrowRight,
    Sparkles,
    CheckCircle,
    Linkedin,
    Twitter,
    Instagram,
    Github
} from "lucide-react";
import Link from "next/link";

const services = [
    "Game Development",
    "App Development",
    "VR / AR Experience",
    "Web 3.0 / Metaverse",
    "Web Development",
    "UI/UX Design"
];

const budgets = [
    "$10k - $50k",
    "$50k - $100k",
    "$100k - $250k",
    "$250k+"
];

const contactMethods = [
    {
        icon: <Mail className="w-6 h-6" />,
        title: "Email Us",
        value: "hello@shiraw.xyz",
        link: "mailto:hello@shiraw.xyz",
        description: "For project inquiries"
    },
    {
        icon: <Phone className="w-6 h-6" />,
        title: "Call Us",
        value: "+91 1234567890",
        link: "tel:+911234567890",
        description: "Mon-Fri, 9am-6pm EST"
    },
    {
        icon: <MapPin className="w-6 h-6" />,
        title: "Visit Us",
        value: "Andhra Pradesh, India",
        link: "#",
        description: "By appointment only"
    },
    {
        icon: <Clock className="w-6 h-6" />,
        title: "Response Time",
        value: "Within 24 Hours",
        link: "#",
        description: "We value your time"
    },
];

const socials = [
    { icon: <Linkedin className="w-5 h-5" />, name: "LinkedIn", link: "#" },
    { icon: <Twitter className="w-5 h-5" />, name: "Twitter", link: "#" },
    { icon: <Instagram className="w-5 h-5" />, name: "Instagram", link: "#" },
    { icon: <Github className="w-5 h-5" />, name: "GitHub", link: "#" },
];

const faqs = [
    {
        question: "What's your typical project timeline?",
        answer: "Project timelines vary based on scope. Simple websites take 4-8 weeks, while complex applications or games can take 6-18 months. We'll provide a detailed timeline during our discovery phase."
    },
    {
        question: "Do you work with startups?",
        answer: "Absolutely! We love working with ambitious startups. We offer flexible engagement models and can help you build an MVP or scale your existing product."
    },
    {
        question: "What's your development process?",
        answer: "We follow an agile methodology with 2-week sprints, regular demos, and continuous communication. You'll have visibility into progress at every stage."
    },
    {
        question: "Do you provide ongoing support?",
        answer: "Yes, we offer maintenance and support packages. Most clients continue working with us post-launch for updates, new features, and optimization."
    },
];

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        service: "",
        budget: "",
        timeline: "",
        message: ""
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        // Simulate API call for static export
        setTimeout(() => {
            setStatus("success");
            setFormData({ name: "", email: "", company: "", service: "", budget: "", timeline: "", message: "" });
        }, 2000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-[var(--color-background)] selection:bg-[var(--color-accent)] selection:text-white">

                {/* Hero Section */}
                <section className="pt-32 pb-16 px-6 md:px-12 relative overflow-hidden">
                    {/* Background Elements */}
                    <div className="absolute inset-0">
                        <div className="absolute inset-0 opacity-[0.02] bg-grid" />
                        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[var(--color-accent)]/10 rounded-full blur-[200px]" />
                    </div>

                    <div className="max-w-7xl mx-auto relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center mb-16"
                        >
                            {/* Badge */}
                            <div className="inline-flex items-center gap-3 mb-8 px-5 py-2.5 border border-white/10 bg-white/[0.02] backdrop-blur-sm">
                                <MessageSquare className="w-4 h-4 text-[var(--color-accent)]" />
                                <span className="text-xs font-mono uppercase tracking-widest text-[var(--color-secondary)]">Get in Touch</span>
                            </div>

                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-mono text-white tracking-tighter mb-6">
                                Let&apos;s Create
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent)] via-[#34D399] to-[#8B5CF6]">
                                    Magic Together.
                                </span>
                            </h1>

                            <p className="text-lg md:text-xl text-[var(--color-secondary)] max-w-2xl mx-auto">
                                Have a project in mind? We&apos;d love to hear about it.
                                Tell us your vision and let&apos;s build something extraordinary.
                            </p>
                        </motion.div>

                        {/* Contact Methods */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20"
                        >
                            {contactMethods.map((method, index) => (
                                <a
                                    key={index}
                                    href={method.link}
                                    className="group p-6 border border-white/10 bg-[#111827]/50 hover:border-[var(--color-accent)]/30 transition-all"
                                >
                                    <div className="text-[var(--color-accent)] mb-4 group-hover:scale-110 transition-transform">
                                        {method.icon}
                                    </div>
                                    <h3 className="text-white font-bold font-mono mb-1">{method.title}</h3>
                                    <p className="text-[var(--color-accent)] text-sm mb-1">{method.value}</p>
                                    <p className="text-[var(--color-secondary)] text-xs">{method.description}</p>
                                </a>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* Main Form Section */}
                <section className="py-16 px-6 md:px-12">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

                            {/* Form */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="lg:col-span-3"
                            >
                                <div className="p-8 md:p-12 border border-white/10 bg-[#111827]/50">
                                    <div className="flex items-center gap-3 mb-8">
                                        <Sparkles className="w-5 h-5 text-[var(--color-accent)]" />
                                        <h2 className="text-2xl font-bold font-mono text-white">Start a Project</h2>
                                    </div>

                                    {status === "success" ? (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="text-center py-16"
                                        >
                                            <div className="w-20 h-20 bg-[var(--color-accent)] rounded-full flex items-center justify-center mx-auto mb-6">
                                                <CheckCircle className="w-10 h-10 text-white" />
                                            </div>
                                            <h3 className="text-3xl text-white font-bold font-mono mb-4">Message Received!</h3>
                                            <p className="text-[var(--color-secondary)] max-w-md mx-auto mb-8">
                                                Our alchemists are analyzing your request. Expect a response within 24 hours.
                                            </p>
                                            <button
                                                onClick={() => setStatus("idle")}
                                                className="text-[var(--color-accent)] underline underline-offset-4 hover:text-white transition-colors"
                                            >
                                                Send another message
                                            </button>
                                        </motion.div>
                                    ) : (
                                        <form onSubmit={handleSubmit} className="space-y-6">
                                            {/* Name & Email Row */}
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div>
                                                    <label className="block text-xs font-mono uppercase tracking-widest text-[var(--color-secondary)] mb-2">
                                                        Full Name *
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        required
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
                                                        required
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        className="w-full bg-black/30 border border-white/10 p-4 text-white placeholder:text-white/30 focus:border-[var(--color-accent)] outline-none transition-colors"
                                                        placeholder="john@company.com"
                                                    />
                                                </div>
                                            </div>

                                            {/* Company */}
                                            <div>
                                                <label className="block text-xs font-mono uppercase tracking-widest text-[var(--color-secondary)] mb-2">
                                                    Company / Organization
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

                                            {/* Service & Budget Row */}
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div>
                                                    <label className="block text-xs font-mono uppercase tracking-widest text-[var(--color-secondary)] mb-2">
                                                        Service Interest *
                                                    </label>
                                                    <select
                                                        name="service"
                                                        required
                                                        aria-label="Service Interest"
                                                        value={formData.service}
                                                        onChange={handleChange}
                                                        className="w-full bg-[#1a1f2e] border border-[var(--color-accent)]/30 p-4 text-white focus:border-[var(--color-accent)] outline-none transition-colors appearance-none cursor-pointer hover:border-[var(--color-accent)]/50"
                                                    >
                                                        <option value="" disabled>Select a service</option>
                                                        {services.map((service) => (
                                                            <option key={service} value={service}>{service}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                                <div>
                                                    <label className="block text-xs font-mono uppercase tracking-widest text-[var(--color-secondary)] mb-2">
                                                        Budget Range *
                                                    </label>
                                                    <select
                                                        name="budget"
                                                        required
                                                        aria-label="Budget Range"
                                                        value={formData.budget}
                                                        onChange={handleChange}
                                                        className="w-full bg-[#1a1f2e] border border-[var(--color-accent)]/30 p-4 text-white focus:border-[var(--color-accent)] outline-none transition-colors appearance-none cursor-pointer hover:border-[var(--color-accent)]/50"
                                                    >
                                                        <option value="" disabled>Select budget</option>
                                                        {budgets.map((budget) => (
                                                            <option key={budget} value={budget}>{budget}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>

                                            {/* Timeline */}
                                            <div>
                                                <label className="block text-xs font-mono uppercase tracking-widest text-[var(--color-secondary)] mb-2">
                                                    Project Timeline
                                                </label>
                                                <input
                                                    type="text"
                                                    name="timeline"
                                                    value={formData.timeline}
                                                    onChange={handleChange}
                                                    className="w-full bg-black/30 border border-white/10 p-4 text-white placeholder:text-white/30 focus:border-[var(--color-accent)] outline-none transition-colors"
                                                    placeholder="e.g., 3 months, Q2 2025, ASAP"
                                                />
                                            </div>

                                            {/* Message */}
                                            <div>
                                                <label className="block text-xs font-mono uppercase tracking-widest text-[var(--color-secondary)] mb-2">
                                                    Project Details *
                                                </label>
                                                <textarea
                                                    name="message"
                                                    rows={5}
                                                    required
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    className="w-full bg-black/30 border border-white/10 p-4 text-white placeholder:text-white/30 focus:border-[var(--color-accent)] outline-none transition-colors resize-none"
                                                    placeholder="Tell us about your vision, goals, and any specific requirements..."
                                                />
                                            </div>

                                            {/* Error Message */}
                                            {status === "error" && (
                                                <div className="p-4 border border-red-500/30 bg-red-500/10 text-red-400 text-sm">
                                                    Something went wrong. Please try again or email us directly.
                                                </div>
                                            )}

                                            {/* Submit Button */}
                                            <button
                                                type="submit"
                                                disabled={status === "loading"}
                                                className="w-full py-5 bg-[var(--color-accent)] text-white font-bold uppercase tracking-widest hover:bg-[#059669] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(16,185,129,0.2)]"
                                            >
                                                {status === "loading" ? (
                                                    <>
                                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                        <span>Sending...</span>
                                                    </>
                                                ) : (
                                                    <>
                                                        <Send className="w-5 h-5" />
                                                        <span>Send Message</span>
                                                    </>
                                                )}
                                            </button>
                                        </form>
                                    )}
                                </div>
                            </motion.div>

                            {/* Sidebar */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="lg:col-span-2 space-y-8"
                            >
                                {/* Quick Info */}
                                <div className="p-8 border border-white/10 bg-[#111827]/50">
                                    <h3 className="text-xl font-bold font-mono text-white mb-6">What Happens Next?</h3>
                                    <div className="space-y-6">
                                        <div className="flex gap-4">
                                            <div className="w-8 h-8 rounded-full bg-[var(--color-accent)]/20 text-[var(--color-accent)] flex items-center justify-center flex-shrink-0 text-sm font-bold">1</div>
                                            <div>
                                                <h4 className="text-white font-bold mb-1">Discovery Call</h4>
                                                <p className="text-[var(--color-secondary)] text-sm">We&apos;ll schedule a 30-min call to understand your vision.</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <div className="w-8 h-8 rounded-full bg-[var(--color-accent)]/20 text-[var(--color-accent)] flex items-center justify-center flex-shrink-0 text-sm font-bold">2</div>
                                            <div>
                                                <h4 className="text-white font-bold mb-1">Proposal</h4>
                                                <p className="text-[var(--color-secondary)] text-sm">Receive a detailed proposal with scope, timeline, and pricing.</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <div className="w-8 h-8 rounded-full bg-[var(--color-accent)]/20 text-[var(--color-accent)] flex items-center justify-center flex-shrink-0 text-sm font-bold">3</div>
                                            <div>
                                                <h4 className="text-white font-bold mb-1">Kickoff</h4>
                                                <p className="text-[var(--color-secondary)] text-sm">We begin transforming your vision into reality.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Social Links */}
                                <div className="p-8 border border-white/10 bg-[#111827]/50">
                                    <h3 className="text-xl font-bold font-mono text-white mb-6">Follow Us</h3>
                                    <div className="flex gap-3">
                                        {socials.map((social, index) => (
                                            <a
                                                key={index}
                                                href={social.link}
                                                className="w-12 h-12 border border-white/10 flex items-center justify-center text-[var(--color-secondary)] hover:text-white hover:border-[var(--color-accent)] transition-all"
                                                aria-label={social.name}
                                            >
                                                {social.icon}
                                            </a>
                                        ))}
                                    </div>
                                </div>

                                {/* Careers CTA */}
                                <div className="p-8 border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/5">
                                    <h3 className="text-xl font-bold font-mono text-white mb-2">Want to Join Us?</h3>
                                    <p className="text-[var(--color-secondary)] text-sm mb-6">
                                        We&apos;re always looking for talented individuals to join our team.
                                    </p>
                                    <Link
                                        href="/careers"
                                        className="inline-flex items-center gap-2 text-[var(--color-accent)] font-bold uppercase tracking-widest text-sm hover:text-white transition-colors"
                                    >
                                        <span>View Open Roles</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-24 px-6 md:px-12 bg-[#111827]/30 border-y border-white/5">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <span className="text-[var(--color-accent)] font-mono uppercase tracking-widest text-sm">FAQ</span>
                            <h2 className="text-4xl md:text-5xl font-bold font-mono text-white tracking-tighter mt-4">
                                Common Questions
                            </h2>
                        </motion.div>

                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="border border-white/10"
                                >
                                    <button
                                        onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                                        className="w-full p-6 flex items-center justify-between text-left"
                                    >
                                        <span className="text-white font-bold pr-4">{faq.question}</span>
                                        <div className={`w-6 h-6 border border-white/20 flex items-center justify-center transition-transform ${expandedFaq === index ? 'rotate-45' : ''}`}>
                                            <span className="text-white">+</span>
                                        </div>
                                    </button>
                                    {expandedFaq === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            className="px-6 pb-6"
                                        >
                                            <p className="text-[var(--color-secondary)] leading-relaxed">{faq.answer}</p>
                                        </motion.div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Map / Location CTA */}
                <section className="py-24 px-6 md:px-12">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="relative overflow-hidden border border-white/10"
                        >
                            {/* Map Background */}
                            <div className="absolute inset-0 bg-gradient-to-r from-[#111827] via-[#111827]/80 to-transparent z-10" />
                            <div
                                className="absolute inset-0 bg-cover bg-center opacity-30 bg-[image:var(--map-bg)]"
                                style={{ '--map-bg': 'url(https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1920)' } as React.CSSProperties}
                            />

                            <div className="relative z-20 p-12 md:p-20">
                                <div className="max-w-xl">
                                    <h2 className="text-4xl md:text-5xl font-bold font-mono text-white tracking-tighter mb-6">
                                        Let&apos;s Build the
                                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent)] to-[#F59E0B]">
                                            Future Together.
                                        </span>
                                    </h2>
                                    <p className="text-lg text-[var(--color-secondary)] mb-8">
                                        Whether you&apos;re a startup with a bold vision or an enterprise seeking digital transformation,
                                        we&apos;re here to help.
                                    </p>
                                    <a
                                        href="mailto:hello@shiraw.xyz"
                                        className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--color-accent)] text-white text-sm font-bold uppercase tracking-widest hover:bg-[#059669] transition-all"
                                    >
                                        <Mail className="w-5 h-5" />
                                        <span>hello@shiraw.xyz</span>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>
        </>
    );
}
