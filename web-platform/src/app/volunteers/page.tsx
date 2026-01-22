import Link from 'next/link';
import { Heart, Users, LineChart, Truck, Sparkles } from 'lucide-react';
import { FadeIn, FloatingElement } from '@/components/ui/animations';
import { ScribbleUnderline } from '@/components/ui/doodles';

export default function VolunteersPage() {
    const roles = [
        {
            title: 'School Outreach',
            icon: Users,
            desc: 'Help us visit schools, distribute materials, and onboard teachers in your LGA.',
            color: 'bg-blue-100 text-blue-600'
        },
        {
            title: 'Mentorship',
            icon: Heart,
            desc: 'Guide student teams through their projects. Technical and non-technical mentors needed.',
            color: 'bg-pink-100 text-pink-600'
        },
        {
            title: 'Data & Research',
            icon: LineChart,
            desc: 'Verify school data, track impact metrics, and help us tell the story with facts.',
            color: 'bg-green-100 text-green-600'
        },
        {
            title: 'Logistics & Events',
            icon: Truck,
            desc: 'Support the organization of local meetups and the grand Innovation Fair.',
            color: 'bg-orange-100 text-orange-600'
        }
    ];

    return (
        <div className="bg-slate-50 min-h-screen">
            <div className="bg-gradient-to-r from-blue-900 to-indigo-900 py-20 text-white relative overflow-hidden">
                <FloatingElement><div className="absolute top-10 right-10 text-8xl opacity-10">🤝</div></FloatingElement>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <FadeIn>
                        <h1 className="text-4xl md:text-6xl font-black mb-6">
                            Volunteer with <span className="text-yellow-400 relative">Us <ScribbleUnderline className="absolute -bottom-4 w-full text-white/40" /></span>
                        </h1>
                        <p className="text-xl text-blue-200 max-w-2xl mx-auto">
                            This movement runs on the passion of people like you. Join the team that makes it happen.
                        </p>
                    </FadeIn>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-10 relative z-20">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-16">
                    {roles.map((role, idx) => (
                        <FadeIn key={role.title} delay={idx * 0.1}>
                            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-all border border-slate-100 h-full flex flex-col items-center group">
                                <div className={`w-16 h-16 rounded-full ${role.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                    <role.icon className="h-8 w-8" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{role.title}</h3>
                                <p className="text-gray-500 leading-relaxed">{role.desc}</p>
                            </div>
                        </FadeIn>
                    ))}
                </div>

                <FadeIn delay={0.4}>
                    <div className="bg-blue-600 rounded-3xl p-8 sm:p-16 text-center text-white max-w-4xl mx-auto relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-20 -mt-20"></div>
                        <div className="absolute bottom-0 left-0 w-40 h-40 bg-white opacity-5 rounded-full -ml-10 -mb-10"></div>

                        <h2 className="text-3xl font-bold mb-4">Ready to serve?</h2>
                        <p className="mb-8 text-blue-100 text-lg max-w-xl mx-auto">
                            Fill out our volunteer application form to get started. We will match you with a role that fits your skills and schedule.
                        </p>
                        <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition transform hover:scale-105 shadow-lg flex items-center gap-2 mx-auto">
                            <Sparkles className="w-5 h-5" /> Apply to Volunteer
                        </button>
                    </div>
                </FadeIn>
            </div>
        </div>
    )
}
