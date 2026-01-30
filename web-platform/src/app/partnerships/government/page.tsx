import Link from 'next/link';
import { Building2, FileCheck, Users, ArrowRight } from 'lucide-react';
import { FadeIn } from '@/components/ui/animations';

export default function GovernmentPartnersPage() {
    return (
        <div className="bg-slate-50 min-h-screen">
            <div className="bg-slate-900 text-white py-20">
                <div className="container mx-auto px-4 max-w-4xl">
                    <FadeIn>
                        <span className="text-blue-400 font-bold tracking-widest uppercase text-sm mb-4 inline-block">Partnerships</span>
                        <h1 className="text-3xl md:text-5xl font-black mb-6">Government & Education</h1>
                        <p className="text-slate-300 text-xl max-w-2xl leading-relaxed">
                            Aligning innovation discovery with state workforce development goals. We provide a structured pipeline for identifying high-potential STEM talent in the public sector.
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
                                <Building2 className="w-5 h-5 text-blue-600 mt-1 shrink-0" />
                                <span>Ministry of Education & District Administrators</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <FileCheck className="w-5 h-5 text-blue-600 mt-1 shrink-0" />
                                <span>State Science & Technology Boards</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Users className="w-5 h-5 text-blue-600 mt-1 shrink-0" />
                                <span>Public School Administrations</span>
                            </li>
                        </ul>

                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            <div>
                                <h3 className="font-bold text-slate-900 mb-2">Role of Partners</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    Provide endorsement, facilitate access to schools, and ensure program alignment with the state curriculum. Monitor compliance and educational standards throughout the pilot execution.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 mb-2">Value Delivered</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    Access to verified data on student competency in hardware/IoT. A scalable framework for technical talent discovery that can be institutionalized by the state.
                                </p>
                            </div>
                        </div>

                        <div className="bg-blue-50 p-8 rounded-xl border border-blue-100 text-center">
                            <h3 className="font-bold text-blue-900 mb-4">Formalize the Partnership</h3>
                            <div className="flex flex-col items-center gap-4">
                                <a
                                    href="/whitepaper.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition flex items-center gap-2"
                                >
                                    Download Whitepaper <ArrowRight className="w-4 h-4" />
                                </a>
                                <p className="text-blue-800 text-sm">
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
