import Link from 'next/link';
import { Briefcase, LineChart, ShieldCheck, ArrowRight } from 'lucide-react';
import { FadeIn } from '@/components/ui/animations';

export default function FinancialPartnersPage() {
    return (
        <div className="bg-slate-50 min-h-screen">
            <div className="bg-slate-900 text-white py-20">
                <div className="container mx-auto px-4 max-w-4xl">
                    <FadeIn>
                        <span className="text-green-400 font-bold tracking-widest uppercase text-sm mb-4 inline-block">Partnerships</span>
                        <h1 className="text-3xl md:text-5xl font-black mb-6">Financial & Resource</h1>
                        <p className="text-slate-300 text-xl max-w-2xl leading-relaxed">
                            Investing in a transparent, audited supply chain for technical talent. We verify that every resource deployed yields measurable educational outcomes.
                        </p>
                    </FadeIn>
                </div>
            </div>

            <div className="container mx-auto px-4 max-w-4xl py-16">
                <FadeIn delay={0.2}>
                    <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100 mb-12">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6">Who This Is For</h2>
                        <ul className="space-y-3 text-slate-700 mb-8">
                            <li className="flex items-start gap-3">
                                <Briefcase className="w-5 h-5 text-green-600 mt-1 shrink-0" />
                                <span>Corporate CSR & Foundations</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <LineChart className="w-5 h-5 text-green-600 mt-1 shrink-0" />
                                <span>Development Finance Institutions</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <ShieldCheck className="w-5 h-5 text-green-600 mt-1 shrink-0" />
                                <span>Hardware & Tech OEMs</span>
                            </li>
                        </ul>

                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            <div>
                                <h3 className="font-bold text-slate-900 mb-2">Role of Partners</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    Underwrite the cost of Innovation Kits (hardware) and program logistics. Provide equipment and technical resources directly to school units for verifiable impact.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 mb-2">Value Delivered</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    Full audit trail of resource deployment. Direct contribution to the SDG Education goals. Early access to a pipeline of technical talent for future workforce needs.
                                </p>
                            </div>
                        </div>

                        <div className="bg-green-50 p-8 rounded-xl border border-green-100 text-center">
                            <h3 className="font-bold text-green-900 mb-4">Discuss Investment Impact</h3>
                            <div className="flex flex-col items-center gap-4">
                                <a
                                    href="/whitepaper.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-green-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-green-700 transition flex items-center gap-2"
                                >
                                    Download Whitepaper <ArrowRight className="w-4 h-4" />
                                </a>
                                <p className="text-green-800 text-sm">
                                    Interested? Email us at <a href="mailto:fredaefod@gmail.com" className="font-bold underline">fredaefod@gmail.com</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </div>
    );
}
