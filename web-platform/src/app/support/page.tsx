import Link from 'next/link';
import { FadeIn, FloatingElement } from '@/components/ui/animations';
import { ScribbleUnderline } from '@/components/ui/doodles';
import { Heart, Gift, CreditCard } from 'lucide-react';

export default function SupportPage() {
    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Hero Section - Changed to Blue Brand Theme */}
            <div className="bg-blue-900 py-24 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

                <div className="container mx-auto px-4 text-center relative z-10">
                    <FadeIn>
                        <h1 className="text-4xl md:text-5xl font-black mb-6">Invest in the <span className="text-yellow-400 relative">Next Generation<ScribbleUnderline className="absolute -bottom-2 left-0 w-full text-yellow-400" /></span></h1>
                        <p className="text-blue-100 text-xl max-w-2xl mx-auto leading-relaxed">
                            We are raising <strong>₦50,000,000</strong> to make Innovation Fair Lagos 2026 a reality for every public school student.
                        </p>
                    </FadeIn>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl -mt-16 relative z-20 pb-20">
                <FadeIn delay={0.2}>
                    <div className="grid md:grid-cols-2 gap-8 items-start">
                        {/* Why Funding Matters */}
                        <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 h-full">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                <Gift className="text-blue-600" /> Why Support Us?
                            </h2>
                            <p className="text-gray-600 mb-6 text-lg">
                                We are currently negotiating with the <strong>Lagos State Government</strong> for full partnership, but we need independent support to kickstart operations immediately.
                            </p>
                            <p className="text-gray-600 mb-6 font-medium">
                                Your support allows us to:
                            </p>
                            <ul className="space-y-4 mb-8">
                                {[
                                    "Visit schools directly to mobilize students 🚌",
                                    "Provide Hardware Kits (Arduino/Sensors) for Clubs 🤖",
                                    "Organize regional training workshops 👩‍🏫",
                                    "Secure the venue for the Grand Finale 🏟️"
                                ].map(item => (
                                    <li key={item} className="flex items-center text-gray-700 font-medium p-3 bg-blue-50 rounded-lg">
                                        <span className="h-2 w-2 bg-blue-500 rounded-full mr-3"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <div className="p-5 bg-yellow-50 rounded-xl border border-yellow-200 text-yellow-900">
                                <h3 className="font-bold mb-2 flex items-center gap-2">🎯 Our Vision Target: ₦50 Million</h3>
                                <p className="text-sm">
                                    This fund will cover the entire year-long program for 50+ schools, ensuring no student is left behind due to lack of resources.
                                </p>
                            </div>
                        </div>

                        {/* Bank Details */}
                        <div className="bg-white p-8 rounded-3xl shadow-xl border-l-4 border-l-blue-600 border-gray-100 h-full relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full opacity-50 z-0"></div>
                            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2 relative z-10">
                                <CreditCard className="text-blue-600" /> Bank Transfer Details
                            </h3>

                            <div className="space-y-6 text-sm text-gray-600 bg-slate-50 p-6 rounded-2xl border border-slate-200 relative z-10">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <p className="uppercase text-xs font-bold text-gray-400 mb-1">Account Name</p>
                                        <p className="text-lg font-mono text-gray-900 font-bold break-all">Raenest/Freda Ekara Efod</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="uppercase text-xs font-bold text-gray-400 mb-1">Bank Name</p>
                                        <p className="text-lg text-gray-900 font-medium">Kredi Money Mfb LTD</p>
                                    </div>
                                </div>

                                <div className="pt-4 border-t border-gray-200">
                                    <p className="uppercase text-xs font-bold text-gray-400 mb-2">Account Number</p>
                                    <div className="flex items-center gap-3">
                                        <p className="text-3xl font-mono text-blue-900 tracking-wider font-bold">1844839102</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 text-center relative z-10">
                                <p className="text-sm font-medium text-gray-500 mb-4">Prefer to donate equipment?</p>
                                <a href="mailto:support@innovationfairlagos.com" className="block w-full text-center py-4 border-2 border-dashed border-blue-300 text-blue-700 rounded-xl font-bold hover:bg-blue-50 transition bg-blue-50/30">
                                    Contact Us for Material Donations
                                </a>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </div>
    )
}
