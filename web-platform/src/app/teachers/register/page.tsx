'use client';

import Link from 'next/link';
import { ArrowLeft, Sparkles, Lightbulb } from 'lucide-react';
import { FadeIn, FloatingElement } from '@/components/ui/animations';
import { ScribbleCircle } from '@/components/ui/doodles';

export default function TeacherRegisterPage() {


    return (
        <div className="bg-slate-50 min-h-screen py-20 relative overflow-hidden flex flex-col items-center justify-center">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
                <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
            </div>

            <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center">
                <FadeIn>
                    <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden p-10 md:p-16">
                        <div className="relative z-10">
                            <ScribbleCircle className="absolute -top-6 -right-6 w-32 h-32 text-indigo-400 rotate-12 opacity-20" />

                            <div className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100 shadow-sm mb-8 transform hover:scale-105 transition-transform duration-300">
                                <span className="w-2 h-2 rounded-full bg-indigo-500 mr-2 animate-pulse"></span>
                                <span className="text-indigo-600 font-bold uppercase tracking-widest text-xs">Coming Soon</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl font-black mb-6 text-slate-900">
                                Teacher Registration
                            </h1>

                            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-12">
                                We are finalizing the curriculum and resource kits for this year&apos;s cohort. Be the first to lead your school&apos;s innovation journey.
                            </p>



                            <Link
                                href="/"
                                className="inline-flex items-center text-slate-500 hover:text-indigo-600 font-bold transition-colors"
                            >
                                <ArrowLeft className="w-5 h-5 mr-2" /> Back to Home
                            </Link>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </div>
    )
}
