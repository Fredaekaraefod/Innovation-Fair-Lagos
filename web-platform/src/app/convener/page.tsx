'use client';

import { FadeIn, FloatingElement } from '@/components/ui/animations';
import { ScribbleUnderline, ScribbleCircle } from '@/components/ui/doodles';
import { Quote, Mail, Linkedin, Instagram, Code, Cpu, Sparkles } from 'lucide-react';
import Image from 'next/image';

export default function ConvenerPage() {
    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Hero Section */}
            <div className="bg-slate-900 text-white relative overflow-hidden py-24">
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <FadeIn className="md:w-1/2 text-center md:text-left">
                            <div className="inline-block px-3 py-1 bg-blue-900/50 border border-blue-500/30 rounded-full text-blue-200 text-sm font-bold mb-4">
                                The Visionary
                            </div>
                            <h1 className="text-4xl md:text-6xl font-black mb-4 leading-tight">
                                Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Convener</span>
                            </h1>
                            <p className="text-xl text-slate-300 max-w-lg mx-auto md:mx-0">
                                Driving the future of innovation in Lagos State public schools, one student at a time.
                            </p>
                        </FadeIn>

                        <FadeIn delay={0.2} className="md:w-1/2 flex justify-center">
                            <div className="relative w-72 h-72 md:w-96 md:h-96">
                                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-full animate-pulse opacity-20 blur-xl"></div>
                                <div className="relative w-full h-full rounded-full border-4 border-white/10 overflow-hidden bg-slate-800 flex items-center justify-center group relative">
                                    <Image
                                        src="/convener.png"
                                        alt="Freda (Ekara) Efod"
                                        fill
                                        className="object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>

                                {/* Innovation Scribbles */}
                                <FloatingElement delay={0.5} className="absolute -top-6 -right-6 text-yellow-400">
                                    <Sparkles className="w-12 h-12" />
                                </FloatingElement>
                                <FloatingElement delay={0.8} className="absolute top-1/2 -left-12 text-blue-400">
                                    <Code className="w-10 h-10 -rotate-12" />
                                </FloatingElement>
                                <FloatingElement delay={1.2} className="absolute -bottom-8 left-0 text-purple-400">
                                    <Cpu className="w-10 h-10 rotate-12" />
                                </FloatingElement>
                                <FloatingElement delay={1.5} className="absolute top-0 -left-4 text-green-400">
                                    <div className="font-mono text-sm font-bold bg-slate-900/80 px-2 py-1 rounded border border-green-500/50">{'<Innovate />'}</div>
                                </FloatingElement>

                                <FloatingElement delay={1}>
                                    <div className="absolute -bottom-4 -right-4 bg-white text-slate-900 p-4 rounded-2xl shadow-xl border border-slate-100 max-w-[240px]">
                                        <p className="text-xs font-bold text-blue-600 uppercase mb-1">Impact</p>
                                        <p className="text-sm font-bold leading-tight">“Innovation is not a luxury. It’s the difference between exclusion and opportunity.”</p>
                                    </div>
                                </FloatingElement>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </div>

            {/* Biography Section */}
            <div className="container mx-auto px-4 py-20 max-w-4xl">
                <FadeIn delay={0.3}>
                    <div className="prose prose-lg mx-auto text-slate-600">
                        <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                            <span className="w-12 h-1 bg-blue-600 rounded-full"></span>
                            About the Convener — Freda (Ekara) Efod
                        </h2>

                        <p className="lead text-xl text-slate-800 font-medium mb-6">
                            Freda Efod is a technology advocate, creative strategist, and community builder focused on expanding access to innovation for public school students across Lagos State.
                        </p>

                        <p className="mb-6">
                            With a background spanning data analytics, artificial intelligence, and digital storytelling, Freda has worked at the intersection of technology, education, and community development. Her experience across financial institutions, global tech communities, and early-stage startups revealed a consistent reality: <strong>talent exists everywhere, but access does not.</strong>
                        </p>

                        <p className="mb-6">
                            This insight led to the creation of <strong>Innovation Fair Lagos</strong> — a platform designed to expose public school students to innovation, problem-solving, and emerging technologies traditionally limited to private institutions.
                        </p>

                        <p className="mb-6">
                            Innovation Fair Lagos equips students not just to consume technology, but to build, question, and imagine with it — fostering confidence, curiosity, and future-ready skills.
                        </p>

                        <div className="my-12 p-8 bg-blue-50 rounded-3xl border border-blue-100 relative">
                            <Quote className="absolute top-8 left-8 text-blue-200 w-16 h-16 -z-10" />
                            <blockquote className="text-xl font-serif italic text-blue-900 relative z-10 pl-4 border-l-4 border-blue-400">
                                “When students see what’s possible early enough, they stop waiting for permission to dream.”
                            </blockquote>
                        </div>

                        <h3 className="text-2xl font-bold text-slate-900 mb-4">Professional Milestones</h3>
                        <ul className="space-y-4 list-none pl-0 mb-12">
                            {[
                                'Led and scaled multiple technology and student-focused innovation communities',
                                'Designed and executed hands-on workshops, hackathons, and mentorship programs',
                                'Worked on data-driven and AI-enabled projects with measurable outcomes',
                                'Advocate for inclusive innovation and public-school technology access'
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <div className="mt-1.5 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></div>
                                    <span className="font-medium text-slate-700">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <h3 className="text-2xl font-bold text-slate-900 mb-6">Honors & Recognition</h3>
                        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-6">
                            <p className="text-slate-600 mb-2">
                                Freda’s work and academic excellence have been recognized across innovation, technology, and education communities:
                            </p>
                            {[
                                {
                                    title: "Winner, Bells University Hackathon (2025)",
                                    desc: "Awarded by Bells University of Technology Engineering Students’ Association for an AI-driven solution developed with Valor AI."
                                },
                                {
                                    title: "Certificate of Achievement, AI for Impact Hackathon (2024)",
                                    desc: "Issued by A2SV for innovative problem-solving and impactful use of artificial intelligence."
                                },
                                {
                                    title: "NNPC/Chevron National University Scholarship Award (2023)",
                                    desc: "Awarded by NNPC & Chevron in recognition of academic excellence."
                                },
                                {
                                    title: "Commendation for Academic Performance",
                                    desc: "Issued by Prof. Nosa Owens-Ibie for maintaining a CGPA above 4.50 across multiple academic sessions."
                                },
                                {
                                    title: "Dr. Akintoye Akindele Scholarship Award",
                                    desc: "Awarded by Caleb University Lagos for outstanding academic performance in first year."
                                }
                            ].map((item, i) => (
                                <div key={i} className="border-l-2 border-yellow-400 pl-4">
                                    <h4 className="font-bold text-slate-900">{item.title}</h4>
                                    <p className="text-sm text-slate-600">{item.desc}</p>
                                </div>
                            ))}
                            <p className="text-sm text-slate-500 italic mt-4 pt-4 border-t border-slate-200">
                                These recognitions reflect a consistent commitment to excellence, innovation, and impact — values that underpin Innovation Fair Lagos.
                            </p>
                        </div>
                    </div>

                    <div className="mt-16 flex justify-center gap-6">
                        <a href="https://www.linkedin.com/in/freda-efod/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full text-slate-500 hover:text-blue-600 hover:shadow-lg transition-all border border-slate-200">
                            <Linkedin className="w-6 h-6" />
                        </a>
                        <a href="https://www.instagram.com/mindsofrida/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full text-slate-500 hover:text-pink-600 hover:shadow-lg transition-all border border-slate-200">
                            <Instagram className="w-6 h-6" />
                        </a>
                        <a href="mailto:fredaefod@gmail.com" className="p-3 bg-white rounded-full text-slate-500 hover:text-red-500 hover:shadow-lg transition-all border border-slate-200">
                            <Mail className="w-6 h-6" />
                        </a>
                    </div>
                </FadeIn>
            </div>
        </div>
    )
}
