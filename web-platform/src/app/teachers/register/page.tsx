'use client';

import { useState, useMemo } from 'react';
import { Loader2, Check, Sparkles } from 'lucide-react';
import Link from 'next/link';
import schoolsByLGA from '@/data/schools-by-lga.json';
import { FadeIn, FloatingElement } from '@/components/ui/animations';
import { ScribbleUnderline } from '@/components/ui/doodles';

const lgas = Object.keys(schoolsByLGA).sort();

export default function TeacherRegisterPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    // Form state
    const [formData, setFormData] = useState({
        fullName: '',
        schoolName: '',
        subject: '',
        lga: '',
        techClubName: '',
        estStudents: '',
        facilities: [] as string[],
        contactEmail: '',
        contactPhone: '',
        commitment: false
    });

    const schoolOptions = useMemo(() => {
        if (!formData.lga || formData.lga === 'other') return [];
        return schoolsByLGA[formData.lga as keyof typeof schoolsByLGA] || [];
    }, [formData.lga]);

    const handleFacilityChange = (facility: string) => {
        setFormData(prev => {
            const facilities = prev.facilities.includes(facility)
                ? prev.facilities.filter(f => f !== facility)
                : [...prev.facilities, facility];
            return { ...prev, facilities };
        });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        // Reset school when LGA changes
        if (name === 'lga') {
            setFormData(prev => ({ ...prev, schoolName: '' }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsLoading(false);
        setIsSuccess(true);
    };

    if (isSuccess) {
        return (
            <div className="container mx-auto px-4 py-32 max-w-lg text-center">
                <FloatingElement>
                    <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                        <Check className="w-12 h-12" />
                    </div>
                </FloatingElement>
                <FadeIn>
                    <h2 className="text-3xl font-black text-gray-900 mb-4">You&apos;re Awesome! 🌟</h2>
                    <p className="text-gray-600 mb-8 text-lg">
                        Thank you for leading the way, sir/ma. We will contact you shortly with the <strong>Tech Club Starter Pack</strong>.
                    </p>
                    <Link href="/" className="inline-block bg-indigo-600 text-white font-bold py-3 px-8 rounded-full hover:bg-indigo-700 transition hover:shadow-lg">
                        Return to Home
                    </Link>
                </FadeIn>
            </div>
        );
    }

    return (
        <div className="bg-slate-50 min-h-screen py-20 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
                <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
            </div>

            <div className="container mx-auto px-4 max-w-4xl relative z-10">
                <FadeIn>
                    <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
                        <div className="bg-gradient-to-r from-indigo-700 to-purple-800 py-12 px-8 text-white text-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                            <h1 className="text-3xl md:text-4xl font-black mb-4 relative z-10">
                                Teacher & Tech Club Registration
                            </h1>
                            <p className="text-indigo-100 text-lg max-w-2xl mx-auto relative z-10">
                                Teachers are the multipliers. Register your school&apos;s club to access resources and competitions.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">Teacher&apos;s Full Name</label>
                                    <input
                                        required
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500 transition-all font-medium"
                                        placeholder="Sir/Ma's Full Name"
                                    />
                                </div>

                                <div className="space-y-3">
                                    <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">Subject Taught</label>
                                    <input
                                        required
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500 transition-all font-medium"
                                        placeholder="e.g. Physics, Basic Tech"
                                    />
                                </div>

                                <div className="space-y-3">
                                    <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">LGA</label>
                                    <select
                                        required
                                        name="lga"
                                        value={formData.lga}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500 transition-all font-medium"
                                    >
                                        <option value="">Select School LGA</option>
                                        {lgas.map(lga => <option key={lga} value={lga}>{lga}</option>)}
                                        <option value="other">Other / Not Listed</option>
                                    </select>
                                </div>

                                <div className="space-y-3">
                                    <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">School Name</label>
                                    <select
                                        required
                                        name="schoolName"
                                        value={formData.schoolName}
                                        onChange={handleChange}
                                        disabled={!formData.lga}
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500 transition-all font-medium disabled:opacity-50"
                                    >
                                        <option value="">
                                            {formData.lga ? "Select School" : "Select LGA first"}
                                        </option>
                                        {schoolOptions.map(s => <option key={s} value={s}>{s}</option>)}
                                        <option value="other">School not listed</option>
                                    </select>
                                </div>

                                <div className="space-y-3">
                                    <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">Tech Club Name</label>
                                    <input
                                        name="techClubName"
                                        value={formData.techClubName}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500 transition-all font-medium"
                                        placeholder="Leave empty if creating new"
                                    />
                                </div>

                                <div className="space-y-3">
                                    <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">Approx. No. of Interested Students</label>
                                    <select
                                        name="estStudents"
                                        value={formData.estStudents}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500 transition-all font-medium"
                                    >
                                        <option value="">Select range</option>
                                        <option value="1-10">1-10 Students</option>
                                        <option value="11-30">11-30 Students</option>
                                        <option value="31-50">31-50 Students</option>
                                        <option value="50+">50+ Students</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-4 pt-6 border-t border-gray-100">
                                <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">Available Facilities (Check all that apply)</label>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {['Computer Lab 💻', 'Stable Electricity ⚡', 'Internet Access 🌐', 'Projector/Screen 📽️', 'Science Lab 🧪', 'None'].map(Facility => (
                                        <label key={Facility} className="flex items-center space-x-3 p-3 rounded-lg border border-gray-100 bg-gray-50 hover:bg-white hover:border-indigo-200 hover:shadow-sm transition-all cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={formData.facilities.includes(Facility)}
                                                onChange={() => handleFacilityChange(Facility)}
                                                className="h-5 w-5 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500"
                                            />
                                            <span className="text-sm font-medium text-gray-700">{Facility}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-gray-100">
                                <div className="space-y-3">
                                    <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">Phone Number (WhatsApp)</label>
                                    <input
                                        required
                                        name="contactPhone"
                                        value={formData.contactPhone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500 transition-all font-medium"
                                        placeholder="080..."
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">Email Address</label>
                                    <input
                                        required
                                        type="email"
                                        name="contactEmail"
                                        value={formData.contactEmail}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500 transition-all font-medium"
                                        placeholder="email@example.com"
                                    />
                                </div>
                            </div>

                            <div className="flex items-start space-x-3 pt-4 bg-indigo-50 p-6 rounded-xl border border-indigo-100">
                                <input
                                    required
                                    type="checkbox"
                                    id="commitment"
                                    checked={formData.commitment}
                                    onChange={(e) => setFormData(p => ({ ...p, commitment: e.target.checked }))}
                                    className="mt-1 h-5 w-5 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500"
                                />
                                <label htmlFor="commitment" className="text-sm text-gray-700 leading-relaxed font-medium">
                                    I commit to supervising interested students, organizing tech club meetings, and acting as the primary point of contact for my school.
                                </label>
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-black text-lg py-4 px-6 rounded-xl hover:shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center disabled:opacity-70 disabled:hover:scale-100"
                            >
                                {isLoading ? <Loader2 className="animate-spin h-6 w-6 mr-2" /> : <Sparkles className="h-5 w-5 mr-2" />}
                                {isLoading ? 'Processing...' : 'Register as Tech Club Coordinator'}
                            </button>
                        </form>
                    </div>
                </FadeIn>
            </div>
        </div>
    )
}
