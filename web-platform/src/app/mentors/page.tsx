import Link from 'next/link';
import { FadeIn, FloatingElement } from '@/components/ui/animations';
import { ScribbleUnderline } from '@/components/ui/doodles';
import { ArrowRight } from 'lucide-react';

export default function MentorsPage() {
    return (
        <div className="bg-slate-50 min-h-screen">
            <div className="bg-gray-900 py-20 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/circuit.png')] opacity-10"></div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <FadeIn>
                        <span className="text-yellow-400 font-bold tracking-widest uppercase text-sm mb-4 inline-block">Impact the Next Gen</span>
                        <h1 className="text-4xl md:text-5xl font-black mb-6">Become a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">Mentor</span></h1>
                    </FadeIn>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl -mt-10 relative z-20">
                <FadeIn>
                    <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
                        <p className="text-gray-600 mb-10 text-xl leading-relaxed">
                            We are looking for professionals in <strong>Software Engineering, Hardware, Product Design, and Business Development</strong> to mentor these young innovators.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                                <div className="text-4xl mb-4">💻</div>
                                <h3 className="font-bold text-gray-900 text-lg mb-2">Virtual Mentorship</h3>
                                <p className="text-gray-600">Review project pitches and provide feedback via video calls (1-2 hours/month).</p>
                            </div>
                            <div className="bg-green-50 p-6 rounded-2xl border border-green-100">
                                <div className="text-4xl mb-4">🛠️</div>
                                <h3 className="font-bold text-gray-900 text-lg mb-2">Physical Mentorship</h3>
                                <p className="text-gray-600">Visit selected school clubs to conduct workshops or guide prototype building.</p>
                            </div>
                        </div>

                        <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="https://forms.google.com/example"
                                target="_blank"
                                className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-lg font-bold rounded-full text-white bg-gray-900 hover:bg-gray-800 transition transform hover:scale-105 shadow-lg"
                            >
                                Apply as a Mentor <ArrowRight className="ml-2 w-5 h-5" />
                            </a>
                            <Link
                                href="/volunteers"
                                className="inline-flex justify-center items-center px-8 py-4 border border-gray-200 text-lg font-bold rounded-full text-gray-700 bg-white hover:bg-gray-50 transition"
                            >
                                View other Roles
                            </Link>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </div>
    )
}
