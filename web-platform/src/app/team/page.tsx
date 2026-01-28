'use client';

import { FadeIn } from '@/components/ui/animations';
import { User, Briefcase, Users, Handshake, LineChart, Megaphone } from 'lucide-react';
import Image from 'next/image';

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
        name: "Odusami Oluwadamilare",
        icon: Briefcase,
        color: "bg-blue-100 text-blue-600",
        isLead: false
    },
    {
        role: "Mentor & Talent Lead",
        name: "John Fanope",
        icon: Users,
        color: "bg-purple-100 text-purple-600",
        isLead: false
    },
    {
        role: "Partnerships Lead",
        name: "[Partnership Name]",
        icon: Handshake,
        color: "bg-pink-100 text-pink-600",
        isLead: false
    },
    {
        role: "Finance & Accountability",
        name: "Umoh Stephanie",
        icon: LineChart,
        color: "bg-green-100 text-green-600",
        isLead: false
    },
    {
        role: "Communications Lead",
        name: "David Efod",
        icon: Megaphone,
        color: "bg-yellow-100 text-yellow-600",
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
                        <span className="text-indigo-400 font-bold tracking-widest uppercase text-sm mb-4 inline-block">Our People</span>
                        <h1 className="text-3xl md:text-5xl font-black mb-6">Meet the Team</h1>
                        <p className="text-slate-300 text-xl max-w-2xl mx-auto leading-relaxed">
                            The dedicated professionals driving the Lagos State CTE Initiative.
                        </p>
                    </FadeIn>
                </div>
            </div>

            {/* Team Grid */}
            <div className="container mx-auto px-4 py-16 max-w-5xl">
                <div className="grid gap-8">
                    {/* Program Director (Featured) */}
                    {teamMembers.filter(m => m.isLead).map((member, i) => (
                        <FadeIn key={i} delay={0.1} className="flex justify-center mb-8">
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 max-w-md w-full text-center hover:shadow-md transition-shadow">
                                <div className={`w-32 h-32 mx-auto ${member.color} rounded-full flex items-center justify-center mb-6 overflow-hidden relative border-4 border-slate-50 shadow-inner`}>
                                    {member.image ? (
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            fill
                                            className="object-cover"
                                        />
                                    ) : (
                                        <member.icon className="w-12 h-12" />
                                    )}
                                </div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-1">{member.name}</h2>
                                <div className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-sm font-bold rounded-full">{member.role}</div>
                            </div>
                        </FadeIn>
                    ))}

                    {/* Other Leads */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {teamMembers.filter(m => !m.isLead).map((member, i) => (
                            <FadeIn key={i} delay={0.2 + (i * 0.1)}>
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 text-center hover:shadow-md transition-shadow h-full">
                                    <div className={`w-16 h-16 mx-auto ${member.color} rounded-full flex items-center justify-center mb-4`}>
                                        <member.icon className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-1">{member.name}</h3>
                                    <div className="text-slate-500 text-sm font-medium">{member.role}</div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
