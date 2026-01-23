import Link from 'next/link';
import { FadeIn, FloatingElement } from '@/components/ui/animations';
import { ScribbleArrow, ScribbleUnderline } from '@/components/ui/doodles';

export default function AboutPage() {
    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Hero Section */}
            <div className="bg-slate-900 text-white py-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

                <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
                    <FadeIn>
                        <div className="inline-block px-4 py-1.5 bg-white/10 rounded-full border border-white/20 text-blue-200 text-sm font-bold mb-6 tracking-wide uppercase">
                            The Initiative
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
                            Unlocking the <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">Creative Potential</span> of Lagos Public Schools
                        </h1>
                        <p className="text-slate-300 text-xl leading-relaxed">
                            We believe that talent is distributed equally, but opportunity is not.
                            <br className="hidden md:block" /> This initiative is here to close that gap.
                        </p>
                    </FadeIn>
                </div>
            </div>

            {/* The Gap Section */}
            <div className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <FadeIn delay={0.2} className="relative">
                            <div className="absolute -left-4 -top-4 w-24 h-24 bg-red-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
                            <div className="relative bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm">
                                <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                                    <span className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3 text-xl">📉</span>
                                    The Challenge
                                </h3>
                                <p className="text-slate-600 text-lg leading-relaxed">
                                    Public schools house the majority of our youth, yet they often lack access to the technological resources, mentorship, and innovation platforms that are readily available to private institutions.
                                    <br /><br />
                                    This creates a divide where brilliant minds are left dormant simply because they lack the platform to express themselves.
                                </p>
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.4} className="relative">
                            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
                            <div className="relative bg-blue-50 p-8 rounded-3xl border border-blue-100 shadow-sm">
                                <h3 className="text-2xl font-bold text-blue-900 mb-4 flex items-center">
                                    <span className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center mr-3 text-xl">💡</span>
                                    Our Solution
                                </h3>
                                <p className="text-blue-800 text-lg leading-relaxed">
                                    A dedicated platform designed specifically for public secondary schools. We provide the <strong>structure, mentorship, and stage</strong> for students to solve real problems.
                                    <br /><br />
                                    We don't just teach code; we empower students to believe their ideas matter and have the power to change their communities.
                                </p>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </div>

            {/* The Pillars / How it Works */}
            <div className="py-20 bg-slate-50 relative overflow-hidden">
                <ScribbleArrow className="absolute top-10 left-10 w-32 h-32 text-slate-200 rotate-12" />
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-black text-slate-900 mb-4">How We Make It Happen</h2>
                        <div className="w-24 h-1.5 bg-yellow-400 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-6">
                                <span className="text-2xl">👩‍🏫</span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Empowered Teachers</h3>
                            <p className="text-slate-600">
                                Teachers are the backbone. They serve as <strong>Coordinators</strong> to organize meetings, <strong>Mobilizers</strong> to identify talent, and <strong>Supervisors</strong> to guide projects. We support them every step of the way.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center text-yellow-600 mb-6">
                                <span className="text-2xl">🚀</span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Student Tech Clubs</h3>
                            <p className="text-slate-600">
                                We help schools establish or revitalize Tech Clubs (Jets, Robotics, Coding). These clubs become the "incubators" where students collaborate on their projects.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 mb-6">
                                <span className="text-2xl">🤝</span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Mentorship Pipeline</h3>
                            <p className="text-slate-600">
                                Connecting students with industry professionals who provide guidance, technical support, and career advice, bridging the gap between classroom and industry.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center text-pink-600 mb-6">
                                <span className="text-2xl">🏆</span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">The Grand Finale</h3>
                            <p className="text-slate-600">
                                A state-wide exhibition where the top student teams pitch their prototypes to government officials, investors, and tech leaders for funding and scholarships.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Vision 2026 CTE */}
            <div className="py-20 bg-blue-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                <div className="container mx-auto px-4 text-center max-w-3xl relative z-10">
                    <FadeIn>
                        <h2 className="text-3xl md:text-5xl font-black mb-6">The Road to 2026</h2>
                        <p className="text-blue-200 text-lg mb-10 leading-relaxed">
                            We are currently negotiating with the <strong>Lagos State Government</strong> for full endorsement.
                            Our vision is to have every public school represented at the Innovation Fair Lagos 2026.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/support" className="inline-flex items-center justify-center px-8 py-4 bg-yellow-400 text-blue-900 font-bold rounded-full hover:bg-yellow-300 transition-transform hover:scale-105 shadow-lg shadow-yellow-400/20">
                                Partner With Us
                            </Link>
                            <Link href="/program" className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-bold rounded-full border border-white/20 hover:bg-white/20 transition-all">
                                See the Roadmap
                            </Link>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </div>
    )
}
