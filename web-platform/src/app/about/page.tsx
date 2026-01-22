import Link from 'next/link';
import { FadeIn, FloatingElement } from '@/components/ui/animations';
import { ScribbleArrow, ScribbleUnderline } from '@/components/ui/doodles';

export default function AboutPage() {
    return (
        <div className="bg-slate-50 min-h-screen">
            <div className="bg-blue-900 text-white py-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <FadeIn>
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
                            About the <span className="text-yellow-400 relative">Initiative<ScribbleUnderline className="absolute -bottom-2 left-0 w-full text-yellow-400" /></span>
                        </h1>
                        <p className="text-blue-100 text-lg max-w-2xl mx-auto mt-6">
                            Unlocking the creative potential of Lagos State public secondary schools.
                        </p>
                    </FadeIn>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 max-w-4xl">
                <FadeIn delay={0.2}>
                    <div className="prose prose-lg prose-indigo mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100 relative">
                        <FloatingElement delay={1}>
                            <div className="hidden md:block absolute -right-10 top-10 text-6xl">🚀</div>
                        </FloatingElement>

                        <p className="lead text-xl font-medium text-slate-700">
                            Public schools house the majority of our youth, yet often lack access to the same technological
                            resources and innovation platforms available to private institutions.
                        </p>
                        <p>
                            We believe that talent is distributed equally, but opportunity is not. This initiative aims to level the playing field.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 flex items-center">
                            The Role of Teachers <span className="ml-3 text-2xl">👩‍🏫</span>
                        </h2>
                        <p>
                            We recognize that we cannot reach every student directly without the support of dedicated teachers.
                            Teachers are the backbone of this program. By registering a Tech Club, teachers act as:
                        </p>
                        <ul className="list-none pl-0 mt-4 space-y-3">
                            <li className="flex items-center"><span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span><strong>Coordinators:</strong> Organizing student meetings and activities.</li>
                            <li className="flex items-center"><span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span><strong>Mobilizers:</strong> Identifying talent and encouraging participation.</li>
                            <li className="flex items-center"><span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span><strong>Supervisors:</strong> Ensuring safety and guidance during projects.</li>
                        </ul>

                        <div className="mt-12 bg-blue-50 p-6 rounded-xl border border-blue-100 relative overflow-hidden">
                            <div className="relative z-10">
                                <h2 className="text-2xl font-bold text-blue-900 mb-4">Vision 2026: The Grand Finale</h2>
                                <p className="text-blue-800">
                                    The journey culminates in the Innovation Fair Lagos 2026, a grand exhibition where the
                                    <strong> top 50-100 student teams</strong> will pitch their solutions to industry leaders,
                                    investors, and government officials.
                                </p>
                                <p className="mt-4 text-blue-800">
                                    We are negotiating with the <strong>Lagos State Government</strong> for full endorsement.
                                    Winners will walk away with <strong>cash prizes and funding</strong>.
                                </p>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </div>
    )
}
