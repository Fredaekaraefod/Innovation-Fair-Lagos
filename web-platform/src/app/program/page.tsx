import Link from 'next/link';
import { ArrowRight, CheckCircle2, Lightbulb, AlertTriangle } from 'lucide-react';
import { FadeIn, FloatingElement } from '@/components/ui/animations';
import { ScribbleArrow, ScribbleCircle } from '@/components/ui/doodles';

export default function ProgramPage() {
    const steps = [
        {
            title: "1. Registration",
            desc: "Students express interest, and teachers register their school's Tech Club to formalize participation."
        },
        {
            title: "2. The Learning Phase",
            desc: "Registered clubs receive digital curriculums, challenges, and mentorship guides to start building skills."
        },
        {
            title: "3. Ideation & Prototyping",
            desc: "Student teams receive mentorship to build functional prototypes. We select the top 100 projects from across the state."
        },
        {
            title: "4. The State Exhibition",
            desc: "The best 50-100 teams showcase their solutions at the Innovation Fair. Top teams receive scholarships and school equipment grants, supported by our sponsors and the Lagos State Government."
        }
    ];

    return (
        <div className="bg-slate-50 min-h-screen pb-16">
            {/* Header */}
            <div className="relative bg-gradient-to-r from-blue-900 to-indigo-900 py-24 text-white overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                    <div className="absolute -top-10 -right-10 w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                    <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
                </div>

                <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <FadeIn>
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 relative inline-block">
                            The Program Journey
                            <ScribbleCircle className="absolute -top-6 -right-12 w-24 text-yellow-400 rotate-12 opacity-80 hidden md:block" />
                        </h1>
                        <p className="text-blue-100 text-lg max-w-2xl mx-auto mt-6">
                            From classroom curiosity to stage-ready innovation. Here is how it works.
                        </p>
                    </FadeIn>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
                <FadeIn delay={0.2}>
                    <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 mb-12 border border-slate-100">


                        <h2 className="text-2xl font-bold text-gray-900 mb-8">Rigorous Selection Process</h2>
                        <p className="text-gray-600 mb-6 text-lg">
                            To ensure quality and impact, we follow a strict multi-stage selection process.
                            Excellence is the standard.
                        </p>

                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mt-12 relative">
                            {/* Connector Line */}
                            <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gray-100 -z-10"></div>

                            {/* Stage 1 */}
                            <FadeIn delay={0.3} className="relative group bg-white">
                                <div className="mb-6">
                                    <span className="flex items-center justify-center w-14 h-14 rounded-2xl bg-slate-100 text-slate-700 font-black text-xl group-hover:bg-slate-800 group-hover:text-white transition-colors duration-300">
                                        1
                                    </span>
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Open Registration</h3>
                                <div className="inline-block px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-md mb-3">Unlimited Teams</div>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    Schools can register multiple teams. All interested students are welcome to form teams and submit their initial interest.
                                </p>
                            </FadeIn>

                            {/* Stage 2 */}
                            <FadeIn delay={0.4} className="relative group bg-white">
                                <div className="mb-6">
                                    <span className="flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-100 text-blue-700 font-black text-xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                        2
                                    </span>
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">The Shortlist</h3>
                                <div className="inline-block px-2 py-1 bg-yellow-100 text-yellow-700 text-xs font-bold rounded-md mb-3">Top 200 Teams</div>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    We review all applications based on idea merit and potential. Only the best 200 teams are invited to proceed.
                                </p>
                            </FadeIn>

                            {/* Stage 3 */}
                            <FadeIn delay={0.5} className="relative group bg-white">
                                <div className="mb-6">
                                    <span className="flex items-center justify-center w-14 h-14 rounded-2xl bg-purple-100 text-purple-700 font-black text-xl group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
                                        3
                                    </span>
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Enablement</h3>
                                <div className="inline-block px-2 py-1 bg-purple-100 text-purple-700 text-xs font-bold rounded-md mb-3">Top 100 Selection</div>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    Further screening selects the Top 100. These teams receive <strong>hardware equipment, materials, and direct mentorship</strong> to build their prototypes.
                                </p>
                            </FadeIn>

                            {/* Stage 4 */}
                            <FadeIn delay={0.6} className="relative group bg-white">
                                <div className="mb-6">
                                    <span className="flex items-center justify-center w-14 h-14 rounded-2xl bg-indigo-100 text-indigo-700 font-black text-xl group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                                        4
                                    </span>
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">The State Exhibition</h3>
                                <div className="inline-block px-2 py-1 bg-indigo-100 text-indigo-700 text-xs font-bold rounded-md mb-3">Main Contest</div>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    The final showdown. Teams present working prototypes to judges. Winners receive scholarships and recognition.
                                </p>
                            </FadeIn>
                        </div>
                    </div>
                </FadeIn>

                <FadeIn delay={0.4}>
                    <div className="bg-white rounded-2xl shadow-sm border p-8 sm:p-10 relative overflow-hidden">
                        <ScribbleArrow className="absolute -right-4 top-4 w-32 text-gray-100 rotate-45" />
                        <h2 className="text-2xl font-bold text-gray-900 mb-8">What We Provide</h2>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                "Digital Learning Resources",
                                "Mentorship from Industry Pros",
                                "Project Guidance & Templates",
                                "Exposure to Future Careers",
                                "Certificate of Participation"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                                    <CheckCircle2 className="text-green-500 w-6 h-6 flex-shrink-0" />
                                    <span className="text-gray-700 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-10 p-6 bg-yellow-50 text-yellow-900 rounded-xl border border-yellow-200 text-sm flex gap-4 items-start">
                            <div className="text-2xl text-yellow-600">
                                <AlertTriangle className="w-8 h-8" />
                            </div>
                            <div>
                                <strong className="block mb-1 text-base">Important Note</strong>
                                We do not provide cash grants to students directly. Support comes in the form of materials, training, and opportunity.
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </div>
    )
}
