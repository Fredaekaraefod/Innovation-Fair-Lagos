'use client';

import Link from 'next/link';
import { ArrowRight, BookOpen, Users, Lightbulb, Sparkles, Rocket, UserPlus } from 'lucide-react';
import { FadeIn, FloatingElement } from '@/components/ui/animations';
import { ScribbleArrow, ScribbleUnderline, ScribbleCircle } from '@/components/ui/doodles';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 text-white py-24 lg:py-40 overflow-hidden">
        {/* Animated Background Blobs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute top-20 right-10 w-72 h-72 bg-yellow-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-32 left-1/4 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FloatingElement delay={0}>
            <div className="inline-flex items-center mb-4 px-4 py-1.5 rounded-full border border-purple-300 bg-purple-900/30 backdrop-blur-sm text-purple-200 font-semibold text-sm tracking-wide">
              <Rocket className="w-4 h-4 mr-2 text-yellow-400" /> Lagos Innovation Fair 2026
            </div>
          </FloatingElement>

          <FadeIn direction="up" delay={0.2}>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8 leading-tight">
              Future Innovators <br />
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                of Lagos
                <ScribbleUnderline className="absolute -bottom-4 left-0 w-full text-yellow-400/80 -rotate-2" />
              </span>
            </h1>
          </FadeIn>

          <FadeIn direction="up" delay={0.4}>
            <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto mb-10 font-medium">
              Igniting <span className="font-bold text-white">creativity</span> and <span className="font-bold text-white">tech skills</span> in every Public Secondary School student.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.6} className="flex flex-col sm:flex-row justify-center gap-6 items-center relative">
            <ScribbleArrow className="absolute hidden lg:block -left-24 top-2 text-white/40 w-24 rotate-12" />

            <Link
              href="/students/register"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-indigo-900 bg-white rounded-full shadow-lg hover:bg-yellow-300 transition-all hover:scale-110 active:scale-95 overflow-hidden"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:animate-shimmer" />
              <UserPlus className="w-5 h-5 mr-2 text-yellow-600" />
              Join as Student / Team
            </Link>

            <Link
              href="/teachers/register"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white border-2 border-white/30 rounded-full hover:bg-white/10 hover:border-white transition-all"
            >
              For Teachers & Schools
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 relative">
            <FloatingElement delay={1}>
              <ScribbleCircle className="absolute -top-10 right-1/4 w-20 h-20 text-blue-200 rotate-12 opacity-50" />
            </FloatingElement>

            <FadeIn>
              <h2 className="text-4xl font-extrabold text-gray-900">Why are we doing this?</h2>
              <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
                We bridge the gap between classroom theory and real-world magic.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: Lightbulb,
                color: "text-yellow-500",
                bg: "bg-yellow-50",
                title: "Creativity First",
                desc: "We don't just teach code; we teach how to DREAM big and solve problems."
              },
              {
                icon: Users,
                color: "text-purple-500",
                bg: "bg-purple-50",
                title: "Teacher Power",
                desc: "Teachers are the superheroes here, guiding the next generation of genius."
              },
              {
                icon: BookOpen,
                color: "text-green-500",
                bg: "bg-green-50",
                title: "Public School Focus",
                desc: "Talent is everywhere. We are bringing the opportunity to your doorstep."
              }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.2}>
                <div className="group relative p-8 bg-white rounded-3xl border-2 border-transparent hover:border-black/5 hover:shadow-xl transition-all hover:-translate-y-2">
                  <div className={`w-16 h-16 mx-auto ${item.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform`}>
                    <item.icon className={`w-8 h-8 ${item.color}`} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-center text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 text-center font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-10 opacity-10">
          <ScribbleCircle className="w-64 h-64 text-white rotate-45" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-black mb-8">Ready to make noise?</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/support" className="inline-flex items-center justify-center text-yellow-400 hover:text-yellow-300 font-bold text-xl hover:underline decoration-wavy underline-offset-8 transition-all">
                Support the Project <ArrowRight className="ml-2 w-6 h-6" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
