'use client';

import { FadeIn, FloatingElement } from '@/components/ui/animations';
import { Mail, MapPin, Phone, Linkedin, Instagram, Twitter } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Hero Section */}
            <div className="bg-slate-900 text-white relative overflow-hidden py-24">
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <FadeIn>
                        <h1 className="text-4xl md:text-6xl font-black mb-6">
                            Get in <span className="text-blue-400">Touch</span>
                        </h1>
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                            Have questions about the Innovation Fair? We'd love to hear from you.
                        </p>
                    </FadeIn>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16 -mt-10 relative z-20">
                <FadeIn delay={0.2}>
                    <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
                        <div className="grid md:grid-cols-2">
                            {/* Contact Info */}
                            <div className="p-10 bg-blue-600 text-white flex flex-col justify-between">
                                <div>
                                    <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                                    <p className="text-blue-100 mb-8 leading-relaxed">
                                        Reach out to us directly for partnerships, school registrations, or general inquiries.
                                    </p>

                                    <div className="space-y-6">
                                        <div className="flex items-start gap-4">
                                            <Mail className="w-6 h-6 text-white mt-1" />
                                            <div>
                                                <p className="font-bold text-sm text-blue-200 uppercase tracking-wider mb-1">Email Us</p>
                                                <a href="mailto:fredaefod@gmail.com" className="text-lg font-medium hover:text-blue-200 transition">
                                                    fredaefod@gmail.com
                                                </a>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4">
                                            <MapPin className="w-6 h-6 text-white mt-1" />
                                            <div>
                                                <p className="font-bold text-sm text-blue-200 uppercase tracking-wider mb-1">Location</p>
                                                <p className="text-lg font-medium">Lagos, Nigeria</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-12">
                                    <p className="font-bold text-sm text-blue-200 uppercase tracking-wider mb-4">Connect with us</p>
                                    <div className="flex gap-4">
                                        <a href="https://www.linkedin.com/in/freda-efod/" target="_blank" rel="noopener noreferrer" className="p-2 bg-blue-500 rounded-full hover:bg-white hover:text-blue-600 transition-all">
                                            <Linkedin className="w-5 h-5" />
                                        </a>
                                        <a href="https://www.instagram.com/mindsofrida/" target="_blank" rel="noopener noreferrer" className="p-2 bg-blue-500 rounded-full hover:bg-white hover:text-blue-600 transition-all">
                                            <Instagram className="w-5 h-5" />
                                        </a>
                                        {/* Add Twitter if available, otherwise just these two imply social presence */}
                                    </div>
                                </div>
                            </div>

                            {/* FAQ / Direct Action */}
                            <div className="p-10 bg-white flex flex-col justify-center">
                                <h3 className="text-2xl font-bold text-slate-900 mb-6">Common Inquiries</h3>

                                <div className="space-y-6">
                                    <div className="group">
                                        <Link href="/schools" className="block p-4 rounded-xl border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all">
                                            <h4 className="font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">Is my school eligible?</h4>
                                            <p className="text-sm text-slate-500">Check our database of eligible Lagos public schools.</p>
                                        </Link>
                                    </div>

                                    <div className="group">
                                        <Link href="/partnerships/financial" className="block p-4 rounded-xl border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all">
                                            <h4 className="font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">Want to sponsor?</h4>
                                            <p className="text-sm text-slate-500">View our partnership opportunities and download the whitepaper.</p>
                                        </Link>
                                    </div>

                                    <div className="group">
                                        <Link href="/volunteers" className="block p-4 rounded-xl border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all">
                                            <h4 className="font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">Want to volunteer?</h4>
                                            <p className="text-sm text-slate-500">Apply to be a mentor or operations volunteer.</p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </div>
    );
}
