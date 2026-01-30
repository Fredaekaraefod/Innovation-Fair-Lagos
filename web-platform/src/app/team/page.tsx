'use client';

import { ScribbleUnderline, ScribbleCircle } from '@/components/ui/doodles';
import { FadeIn, FloatingElement } from '@/components/ui/animations';
import { User, Briefcase, Users, Handshake, LineChart, Megaphone } from 'lucide-react';
import Image from 'next/image';

// ... (keep teamMembers array as is, but I need to make sure I don't delete it or I need to include it in the replacement if I'm replacing the whole file, which I'm not. I will target specific sections.)

/* Wait, I can't easily import if I don't replace the top of the file. */
/* I will do this in chunks. First imports. */

const teamMembers = [
    {
        role: "Program Director",
        name: "Freda (Ekara) Efod",
        icon: User,
        color: "bg-indigo-100 text-indigo-600",
        image: "/convener.png",
        isLead: true
    },
    {
        role: "Operations Lead",
        name: " Oluwadamilare Odusami",
        icon: Briefcase,
        color: "bg-blue-100 text-blue-600",
        image: "/Dami.jpeg",
        isLead: false
    },
    {
        role: "Mentor & Talent Lead",
        name: "John Fanope",
        icon: Users,
        color: "bg-purple-100 text-purple-600",
        image: "/fanope.jpg",
        isLead: false
    },
    {
        role: "Partnerships Lead",
        name: "Kelvin Ezumezu",
        icon: Handshake,
        color: "bg-pink-100 text-pink-600",
        image: "/kelvin.jpg",
        isLead: false
    },
    {
        role: "Finance & Accountability",
        name: "Stephanie Umoh",
        icon: LineChart,
        color: "bg-green-100 text-green-600",
        image: "/steph.jpeg",
        isLead: false
    },
    {
        role: "Communications Lead",
        name: "David Efod",
        icon: Megaphone,
        color: "bg-yellow-100 text-yellow-600",
        image: "/david-efod.webp",
        isLead: false
    }
];

export default function TeamPage() {
    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Hero */}
            <div className="bg-slate-900 text-white py-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <FadeIn>
                        <span className="text-indigo-400 font-bold tracking-widest uppercase text-sm mb-4 block">Our People</span>
                        <h1 className="text-3xl md:text-5xl font-black mb-6 relative inline-block">
                            Meet the Team
                            <ScribbleUnderline className="absolute -bottom-2 left-0 w-full text-yellow-400 -rotate-2" />
                        </h1>
                        <p className="text-slate-300 text-xl max-w-2xl mx-auto leading-relaxed">
                            The dedicated professionals driving the Innovation Fair Lagos.
                        </p>
                    </FadeIn>
                </div>
            </div>

            {/* Team Grid */}
            <div className="container mx-auto px-4 py-16 max-w-5xl">
                <div className="grid gap-8">
                    {/* Program Director (Featured) */}
                    {teamMembers.filter(m => m.isLead).map((member, i) => (
                        <div key={i} className="flex justify-center mb-12">
                            <FloatingElement delay={0}>
                                <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-indigo-100 max-w-md w-full text-center hover:shadow-2xl transition-all duration-300 transform -rotate-2 hover:rotate-0 hover:scale-105 group relative overflow-hidden">
                                    <div className={`absolute top-0 left-0 w-full h-3 bg-gradient-to-r ${member.color.split(' ')[0].replace('bg-', 'from-')} to-transparent`} />

                                    <div className="relative inline-block mb-6">
                                        <div className="absolute inset-0 animate-spin-slow opacity-20">
                                            <ScribbleCircle className="w-full h-full text-indigo-300 scale-150" />
                                        </div>
                                        <div className={`w-40 h-40 mx-auto ${member.color} rounded-full flex items-center justify-center overflow-hidden relative border-8 border-white shadow-lg ring-4 ring-indigo-50`}>
                                            {member.image ? (
                                                <Image
                                                    src={member.image}
                                                    alt={member.name}
                                                    fill
                                                    className={`object-cover ${member.name.includes('Stephanie') ? 'object-[50%_25%] scale-[2.5]' : 'object-top'}`}
                                                />
                                            ) : (
                                                <member.icon className="w-16 h-16" />
                                            )}
                                        </div>
                                        <div className="absolute -bottom-2 -right-2 bg-yellow-400 text-indigo-900 text-xs font-black px-3 py-1 rounded-full transform rotate-12 border-2 border-white shadow-sm">
                                            LEADER
                                        </div>
                                    </div>
                                    <h2 className="text-3xl font-black text-slate-900 mb-2">{member.name}</h2>
                                    <div className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-700 text-sm font-bold rounded-full border border-indigo-100">{member.role}</div>
                                </div>
                            </FloatingElement>
                        </div>
                    ))}

                    {/* Other Leads */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                        {teamMembers.filter(m => !m.isLead).map((member, i) => (
                            <FloatingElement key={i} delay={i * 0.5}>
                                <div className={`bg-white p-6 rounded-3xl shadow-lg border-2 border-slate-100 text-center hover:shadow-2xl transition-all duration-300 transform ${i % 2 === 0 ? 'rotate-1' : '-rotate-1'} hover:rotate-0 hover:scale-110 group h-full relative overflow-visible`}>
                                    <div className={`w-24 h-24 mx-auto ${member.color} rounded-full flex items-center justify-center mb-4 overflow-hidden relative ring-4 ring-white shadow-md group-hover:scale-110 transition-transform duration-300`}>
                                        {member.image ? (
                                            <Image
                                                src={member.image}
                                                alt={member.name}
                                                fill
                                                className={`object-cover ${member.name.includes('Stephanie') ? 'object-[50%_25%] scale-[2.5]' : 'object-top'}`}
                                            />
                                        ) : (
                                            <member.icon className="w-10 h-10 transform group-hover:rotate-12 transition-transform" />
                                        )}
                                    </div>
                                    <h3 className="text-xl font-black text-slate-900 mb-1">{member.name}</h3>
                                    <div className={`inline-block px-3 py-1 bg-slate-50 text-slate-500 font-bold text-xs rounded-lg uppercase tracking-wider mb-4`}>{member.role}</div>
                                </div>
                            </FloatingElement>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
