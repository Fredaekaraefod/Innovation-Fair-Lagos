import Link from 'next/link';
import { Newspaper, Radio, Share2, ArrowRight } from 'lucide-react';
import { FadeIn } from '@/components/ui/animations';

export default function MediaPartnersPage() {
    return (
        <div className="bg-slate-50 min-h-screen">
            <div className="bg-slate-900 text-white py-20">
                <div className="container mx-auto px-4 max-w-4xl">
                    <FadeIn>
                        <span className="text-pink-400 font-bold tracking-widest uppercase text-sm mb-4 inline-block">Partnerships</span>
                        <h1 className="text-3xl md:text-5xl font-black mb-6">Media & Storytelling</h1>
                        <p className="text-slate-300 text-xl max-w-2xl leading-relaxed">
                            Documenting the emergence of Lagos State's next generation of technical innovators. We provide exclusive access to data-driven stories of youth capacity.
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
                                <Newspaper className="w-5 h-5 text-pink-600 mt-1 shrink-0" />
                                <span>Broadcast & Digital News Media</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Radio className="w-5 h-5 text-pink-600 mt-1 shrink-0" />
                                <span>Technology & Education Blogs</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Share2 className="w-5 h-5 text-pink-600 mt-1 shrink-0" />
                                <span>Documentary Filmmakers</span>
                            </li>
                        </ul>

                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            <div>
                                <h3 className="font-bold text-slate-900 mb-2">Role of Partners</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    Amplify the narrative of public sector excellence. Track the progress of student teams from ideation to prototype, providing consistent coverage of the pilot phases.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 mb-2">Value Delivered</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    Exclusive interviews with breakthrough student teams. Access to impact metrics and primary data on STEM education outcomes in Lagos.
                                </p>
                            </div>
                        </div>

                        <div className="bg-pink-50 p-8 rounded-xl border border-pink-100 text-center">
                            <h3 className="font-bold text-pink-900 mb-4">Request Media Pack</h3>
                            <button className="bg-pink-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-pink-700 transition flex items-center gap-2 mx-auto">
                                Contact Comms Team <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </div>
    );
}
