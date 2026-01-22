import Link from 'next/link';
import { FadeIn, FloatingElement } from '@/components/ui/animations';
import { ScribbleUnderline } from '@/components/ui/doodles';
import { Heart, Gift, CreditCard } from 'lucide-react';

export default function SupportPage() {
    return (
        <div className="bg-slate-50 min-h-screen">
            <div className="bg-green-700 py-20 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl -mr-10 -mt-10"></div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <FadeIn>
                        <h1 className="text-4xl md:text-5xl font-black mb-4">Support the <span className="text-green-200">Future</span></h1>
                        <p className="text-green-100 text-xl max-w-2xl mx-auto">
                            Every naira goes directly into empowering a student to create something amazing.
                        </p>
                    </FadeIn>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl -mt-10 relative z-20 pb-20">
                <FadeIn>
                    <div className="grid md:grid-cols-2 gap-8 items-start">
                        <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                <Gift className="text-green-600" /> Why Funding Matters
                            </h2>
                            <p className="text-gray-600 mb-6 text-lg">
                                While we run lean, innovation requires tools. Your donations go directly towards:
                            </p>
                            <ul className="space-y-4 mb-8">
                                {[
                                    "Arduino Starter Kits for School Clubs 🤖",
                                    "Solar Panels & Batteries for Hardware Projects ☀️",
                                    "Internet Data for Research 📶",
                                    "Logistics for School Visits 🚌"
                                ].map(item => (
                                    <li key={item} className="flex items-center text-gray-700 font-medium p-3 bg-green-50 rounded-lg">
                                        <span className="h-2 w-2 bg-green-500 rounded-full mr-3"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <div className="p-4 bg-yellow-50 rounded-xl border border-yellow-200 text-sm text-yellow-800 font-medium">
                                <strong>Transparency Policy:</strong> We do not give cash to students. All funds are used to procure materials centrally or reimburse verified logistical costs.
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-3xl shadow-xl border-l-4 border-l-green-600 border-gray-100">
                            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                <CreditCard className="text-green-600" /> Bank Transfer Details
                            </h3>
                            <div className="space-y-6 text-sm text-gray-600 bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                <div>
                                    <p className="uppercase text-xs font-bold text-gray-400 mb-1">Account Name</p>
                                    <p className="text-xl font-mono text-gray-900 font-bold">INNOVATION FAIR LAGOS</p>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <p className="uppercase text-xs font-bold text-gray-400 mb-1">Bank Name</p>
                                        <p className="text-lg text-gray-900 font-medium">GTBank</p>
                                    </div>
                                    <div>
                                        <p className="uppercase text-xs font-bold text-gray-400 mb-1">Account Number</p>
                                        <p className="text-2xl font-mono text-gray-900 tracking-widest font-bold">0123456789</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 text-center">
                                <p className="text-sm font-medium text-gray-500 mb-4">Have materials or equipment to donate?</p>
                                <Link
                                    href="/contact"
                                    className="block w-full text-center py-4 border-2 border-dashed border-green-300 text-green-700 rounded-xl font-bold hover:bg-green-50 transition bg-green-50/50"
                                >
                                    Contact Us for Material Donations
                                </Link>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </div>
    )
}
