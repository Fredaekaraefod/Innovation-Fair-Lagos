import Link from 'next/link';
import { Heart, Users, LineChart, Truck, Sparkles, Handshake, Megaphone, Calculator, GraduationCap, Clock, MessageCircle, Shield } from 'lucide-react';
import { FadeIn, FloatingElement } from '@/components/ui/animations';
import { CountdownTimer } from '@/components/ui/countdown-timer';
import { ScribbleUnderline } from '@/components/ui/doodles';

export default function VolunteersPage() {
    const roleCategories = [
        {
            category: 'Operations',
            icon: Truck,
            color: 'bg-blue-100 text-blue-600',
            roles: [
                'School Liaison Volunteers',
                'Logistics & Distribution',
                'Program Coordination'
            ],
            desc: 'The engine room. You will support school visits, track attendance, and manage the logistics of events and materials.'
        },
        {
            category: 'Mentorship & Talent',
            icon: GraduationCap,
            color: 'bg-pink-100 text-pink-600',
            roles: [
                'Mentors (Tech & Non-Tech)',
                'Mentor Coordinators',
                'Learning Support'
            ],
            desc: 'The heart of impact. You will guide student teams, review project pitches, and support learning sessions.'
        },
        {
            category: 'Partnerships & External Relations',
            icon: Handshake,
            color: 'bg-purple-100 text-purple-600',
            roles: [
                'Outreach Volunteers',
                'Partner Research Assistants',
                'Event Support'
            ],
            desc: 'The connectors. You will research potential partners, manage outreach lists, and support engagement events.'
        },
        {
            category: 'Finance & Accountability',
            icon: Calculator,
            color: 'bg-green-100 text-green-600',
            roles: [
                'Procurement Support',
                'Records & Documentation'
            ],
            desc: 'The guardians. You will assist with vendor comparisons, maintain inventory logs, and support financial reporting.'
        },
        {
            category: 'Communications & Documentation',
            icon: Megaphone,
            color: 'bg-orange-100 text-orange-600',
            roles: [
                'Content Writers',
                'Social Media Support',
                'Photo & Video Volunteers',
                'Web/Admin Support'
            ],
            desc: 'The storytellers. You will create content, manage posts, capture memories, and keep our digital presence alive.'
        },
    ];

    const onboardingSteps = [
        { title: 'Application', desc: 'Fill the intake form with your details and preference.' },
        { title: 'Selection', desc: 'We review your skills and match you to a role.' },
        { title: 'Orientation', desc: 'Attend a mandatory session on our culture and tools.' },
        { title: 'Deployment', desc: 'Get access to tools and meet your team lead.' },
    ];

    const expectations = [
        { title: 'Commitment', icon: Clock, text: 'Consistent weekly hours committed in advance.' },
        { title: 'Communication', icon: MessageCircle, text: 'Work happens on official channels. No silos.' },
        { title: 'Conduct', icon: Shield, text: 'Professional, respectful, and safety-first behavior.' },
    ];

    return (
        <div className="bg-slate-50 min-h-screen">
            <div className="bg-gradient-to-r from-blue-900 to-indigo-900 py-20 text-white relative overflow-hidden">
                <FloatingElement><div className="absolute top-10 right-10 text-white/5"><Handshake className="w-32 h-32" /></div></FloatingElement>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <FadeIn>
                        <h1 className="text-4xl md:text-6xl font-black mb-6">
                            Volunteer with <span className="text-yellow-400 relative">Us <ScribbleUnderline className="absolute -bottom-4 w-full text-white/40" /></span>
                        </h1>
                        <p className="text-xl text-blue-200 max-w-2xl mx-auto">
                            Join the team driving innovation in Lagos schools. From mentorship to operations, there is a place for you.
                        </p>
                    </FadeIn>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-10 relative z-20">

                {/* Roles Grid */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-20">
                    {roleCategories.map((cat, idx) => (
                        <FadeIn key={cat.category} delay={idx * 0.1}>
                            <div className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all border border-slate-100 h-full flex flex-col group relative overflow-hidden">
                                <div className={`absolute top-0 right-0 w-24 h-24 ${cat.color} opacity-10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150`}></div>

                                <div className={`w-14 h-14 rounded-full ${cat.color} flex items-center justify-center mb-6`}>
                                    <cat.icon className="h-7 w-7" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{cat.category}</h3>
                                <p className="text-gray-500 text-sm mb-6 leading-relaxed">{cat.desc}</p>

                                <div className="mt-auto">
                                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Roles Include:</h4>
                                    <ul className="space-y-2">
                                        {cat.roles.map(role => (
                                            <li key={role} className="flex items-center text-sm text-gray-700 font-medium">
                                                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mr-2"></span>
                                                {role}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>

                {/* Process & Expectations */}
                <div className="grid md:grid-cols-2 gap-12 mb-20">
                    <FadeIn delay={0.2}>
                        <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
                            <h3 className="text-2xl font-bold text-gray-900 mb-8">How to Join</h3>
                            <div className="space-y-8">
                                {onboardingSteps.map((step, i) => (
                                    <div key={step.title} className="flex gap-4 relative">
                                        {i !== onboardingSteps.length - 1 && (
                                            <div className="absolute left-6 top-10 bottom-[-20px] w-0.5 bg-slate-100"></div>
                                        )}
                                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-indigo-50 border-4 border-white shadow-sm flex items-center justify-center font-bold text-indigo-600 z-10">
                                            {i + 1}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 text-lg">{step.title}</h4>
                                            <p className="text-gray-500 text-sm">{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.4}>
                        <div className="bg-slate-900 rounded-3xl p-8 text-white h-full flex flex-col justify-center relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500 opacity-20 rounded-full blur-3xl -mr-20 -mt-20"></div>

                            <h3 className="text-2xl font-bold mb-8 relative z-10">Our Standards</h3>
                            <div className="space-y-6 relative z-10">
                                {expectations.map((exp) => (
                                    <div key={exp.title} className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                                        <exp.icon className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-bold text-lg mb-1">{exp.title}</h4>
                                            <p className="text-indigo-200 text-sm leading-relaxed">{exp.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </FadeIn>
                </div>

                {/* CTA */}
                <FadeIn delay={0.6}>
                    <div className="bg-blue-600 rounded-3xl p-8 sm:p-16 text-center text-white max-w-4xl mx-auto relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-20 -mt-20"></div>
                        <div className="absolute bottom-0 left-0 w-40 h-40 bg-white opacity-5 rounded-full -ml-10 -mb-10"></div>

                        <h2 className="text-3xl font-bold mb-4">Ready to make an impact?</h2>
                        <p className="mb-8 text-blue-100 text-lg max-w-xl mx-auto">
                            Whether you're a student, professional, or enthusiast, your skills can shape the future of these young innovators.
                        </p>

                        <div className="mb-8">
                            <p className="text-blue-200 uppercase tracking-widest text-sm font-bold mb-4">Applications Open In</p>
                            <div className="transform scale-90 sm:scale-100">
                                <CountdownTimer targetDate="2026-02-14T09:00:00" />
                            </div>
                        </div>

                        <Link
                            href="https://forms.gle/Z2Szs1rUrRokAymo6"
                            target="_blank"
                            className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition transform hover:scale-105 shadow-lg flex items-center gap-2 mx-auto inline-flex"
                        >
                            <Sparkles className="w-5 h-5" /> Apply Now
                        </Link>
                    </div>
                </FadeIn>
            </div>
        </div>
    )
}
