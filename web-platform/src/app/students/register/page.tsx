'use client';

import { useState, useMemo, useRef } from 'react';
import Link from 'next/link';
import schoolsByLGA from '@/data/schools-by-lga.json';
import { sdgs } from '@/data/sdgs';
import { Check, Loader2, Sparkles, UploadCloud, FileText } from 'lucide-react';
import { FadeIn, FloatingElement } from '@/components/ui/animations';
import { ScribbleCircle } from '@/components/ui/doodles';
import { registerStudent } from '@/actions/student-registration';

const lgas = Object.keys(schoolsByLGA).sort();

export default function StudentRegisterPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [file, setFile] = useState<File | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [errorMessage, setErrorMessage] = useState('');

    // Form state
    const [formData, setFormData] = useState({
        isTeam: false,
        teamName: '',
        teamMembers: '',
        fullName: '',
        age: '',
        schoolName: '',
        lga: '',
        techClubName: '',
        teacherName: '',
        teacherContact: '',
        areaOfInterest: 'IoT & Hardware Innovation',
        projectTitle: '',
        sdg: '',
        projectDescription: '',
        motivation: '',
        consent: false
    });

    const schoolOptions = useMemo(() => {
        if (!formData.lga || formData.lga === 'other') return [];
        return schoolsByLGA[formData.lga as keyof typeof schoolsByLGA] || [];
    }, [formData.lga]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setErrorMessage('');

        const submissionData = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
            submissionData.append(key, String(value));
        });

        if (file) {
            submissionData.append('conceptNote', file);
        }

        const result = await registerStudent(submissionData);

        if (result.success) {
            setIsSuccess(true);
        } else {
            setErrorMessage(result.message);
        }
        setIsLoading(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        // Reset school when LGA changes
        if (name === 'lga') {
            setFormData(prev => ({ ...prev, schoolName: '' }));
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
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
                    <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Registration Successful! 🚀</h2>
                    <p className="text-gray-600 mb-8 text-lg">
                        <strong>Great job {formData.fullName.split(' ')[0]}!</strong> We have received your details.
                        <br />Please inform your teacher that you have registered.
                    </p>
                    <Link href="/" className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition transform hover:scale-105">
                        Return to Home
                    </Link>
                </FadeIn>
            </div>
        );
    }

    return (
        <div className="bg-slate-50 min-h-screen py-20 relative overflow-hidden">
            {/* Background Scribbles */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-50">
                <FloatingElement delay={0}><div className="absolute top-20 left-10 text-6xl text-blue-200">✨</div></FloatingElement>
                <FloatingElement delay={1}><div className="absolute bottom-20 right-10 text-6xl text-purple-200">💡</div></FloatingElement>
            </div>

            <div className="container mx-auto px-4 max-w-4xl relative z-10">
                <FadeIn>
                    <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
                        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-10 px-8 text-white text-center relative">
                            <ScribbleCircle className="absolute -top-12 -left-12 w-32 h-32 text-white/10" />
                            <h1 className="text-3xl md:text-4xl font-black mb-2">Student IoT & Innovation Portal</h1>
                            <p className="text-blue-100 text-lg">
                                Ready to build the future with Hardware & Code? Join now!
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-8">
                            {errorMessage && (
                                <div className="p-4 bg-red-50 text-red-600 border border-red-100 rounded-xl mb-6">
                                    {errorMessage}
                                </div>
                            )}
                            <div className="flex justify-center mb-8">
                                <div className="bg-gray-100 p-1 rounded-xl inline-flex relative">
                                    <div className={`absolute top-1 bottom-1 w-1/2 bg-white rounded-lg shadow-sm transition-all duration-300 ${formData.isTeam ? 'translate-x-full left-auto right-1' : 'left-1'}`}></div>
                                    <button
                                        type="button"
                                        onClick={() => setFormData(p => ({ ...p, isTeam: false }))}
                                        className={`relative z-10 px-8 py-3 text-sm font-bold rounded-lg transition-colors ${!formData.isTeam ? 'text-blue-900' : 'text-gray-500 hover:text-gray-900'}`}
                                    >
                                        Individual 👤
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setFormData(p => ({ ...p, isTeam: true }))}
                                        className={`relative z-10 px-8 py-3 text-sm font-bold rounded-lg transition-colors ${formData.isTeam ? 'text-blue-900' : 'text-gray-500 hover:text-gray-900'}`}
                                    >
                                        Team 👥
                                    </button>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {formData.isTeam && (
                                    <div className="md:col-span-2 space-y-3">
                                        <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">Team Name</label>
                                        <input
                                            required
                                            name="teamName"
                                            value={formData.teamName}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all font-medium"
                                            placeholder="e.g. The Future Builders"
                                        />
                                    </div>
                                )}

                                <div className="space-y-3">
                                    <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">
                                        {formData.isTeam ? 'Team Lead Full Name' : 'Full Name'}
                                    </label>
                                    <input
                                        required
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all font-medium"
                                        placeholder={formData.isTeam ? "Team Lead's Name" : "Your Name"}
                                    />
                                </div>

                                <div className="space-y-3">
                                    <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">Age {formData.isTeam && '(Team Lead)'}</label>
                                    <input
                                        required
                                        type="number"
                                        name="age"
                                        value={formData.age}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all font-medium"
                                        placeholder="e.g. 15"
                                    />
                                </div>

                                <div className="space-y-3">
                                    <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">Local Government Area (LGA)</label>
                                    <select
                                        required
                                        name="lga"
                                        value={formData.lga}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all font-medium"
                                    >
                                        <option value="">Select your LGA</option>
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
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all font-medium disabled:opacity-50"
                                    >
                                        <option value="">
                                            {formData.lga ? "Select your school" : "Select LGA first"}
                                        </option>
                                        {schoolOptions.map(s => <option key={s} value={s}>{s}</option>)}
                                        <option value="other">My school is not listed</option>
                                    </select>
                                </div>

                                {formData.isTeam && (
                                    <div className="md:col-span-2 space-y-3">
                                        <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">Team Members (Names)</label>
                                        <textarea
                                            name="teamMembers"
                                            value={formData.teamMembers}
                                            onChange={handleChange}
                                            rows={2}
                                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all font-medium"
                                            placeholder="List other team members here..."
                                        />
                                    </div>
                                )}

                                <div className="space-y-3">
                                    <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">Tech Club Name (Optional)</label>
                                    <input
                                        name="techClubName"
                                        value={formData.techClubName}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all font-medium"
                                        placeholder="e.g. Jets Club, Robotics Club"
                                    />
                                </div>

                                <div className="space-y-3">
                                    <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">Area of Interest</label>
                                    <select
                                        name="areaOfInterest"
                                        value={formData.areaOfInterest}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all font-medium"
                                    >
                                        <option>IoT & Hardware Innovation 🔌</option>
                                        <option>Robotics 🤖</option>
                                        <option>Software / Coding 💻</option>
                                        <option>Design / Creative Arts 🎨</option>
                                        <option>Science & Research 🔬</option>
                                    </select>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-gray-100">
                                <div className="space-y-3">
                                    <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">Teacher Lead (Name)</label>
                                    <input
                                        required
                                        name="teacherName"
                                        value={formData.teacherName}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all font-medium"
                                        placeholder="Who is coordinating?"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">Teacher&apos;s Phone</label>
                                    <input
                                        required
                                        name="teacherContact"
                                        value={formData.teacherContact}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all font-medium"
                                        placeholder="Phone number"
                                    />
                                </div>
                            </div>

                            <div className="space-y-3 pt-2">
                                <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">Why do you want to join? </label>
                                <textarea
                                    required
                                    name="motivation"
                                    value={formData.motivation}
                                    onChange={handleChange}
                                    rows={3}
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all font-medium"
                                    placeholder="I love building things... Tell us your story!"
                                />
                            </div>

                            {/* New Project Section */}
                            <div className="pt-8 border-t border-gray-100">
                                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                    <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">💡</span>
                                    Project Idea (Optional but Recommended)
                                </h3>

                                <div className="grid grid-cols-1 gap-6">
                                    <div className="space-y-3">
                                        <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">Project Title</label>
                                        <input
                                            name="projectTitle"
                                            value={formData.projectTitle}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all font-medium"
                                            placeholder="e.g. Smart Irrigation System"
                                        />
                                    </div>

                                    <div className="space-y-3">
                                        <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">Which SDG does it solve?</label>
                                        <select
                                            name="sdg"
                                            value={formData.sdg}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all font-medium"
                                        >
                                            <option value="">Select an SDG Goal</option>
                                            {sdgs.map(goal => (
                                                <option key={goal.number} value={goal.number}>
                                                    Goal {goal.number}: {goal.title}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="space-y-3">
                                        <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">Project Description</label>
                                        <textarea
                                            name="projectDescription"
                                            value={formData.projectDescription}
                                            onChange={handleChange}
                                            rows={4}
                                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all font-medium"
                                            placeholder="Briefly describe what you want to build and how it uses hardware/IoT..."
                                        />
                                    </div>

                                    <div className="space-y-3">
                                        <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">Upload Concept Note / Sketch (PDF/Image)</label>
                                        <div
                                            onClick={() => fileInputRef.current?.click()}
                                            className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center hover:bg-gray-50 transition-colors cursor-pointer group"
                                        >
                                            <div className="bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-100 transition-colors">
                                                {file ? <FileText className="text-blue-600 w-6 h-6" /> : <UploadCloud className="text-blue-600 w-6 h-6" />}
                                            </div>
                                            <div className="text-gray-900 font-bold mb-1">{file ? file.name : "Click to upload document"}</div>
                                            <div className="text-sm text-gray-500">{file ? "Click to change" : "or drag and drop (PDF, PNG, JPG)"}</div>
                                            <div className="text-xs text-gray-400 mt-2">Maximum size: 5MB</div>
                                            <input
                                                ref={fileInputRef}
                                                type="file"
                                                onChange={handleFileChange}
                                                className="hidden"
                                                accept=".pdf,.png,.jpg,.jpeg,.doc,.docx"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center space-x-3 pt-4 bg-blue-50 p-4 rounded-xl border border-blue-100">
                                <input
                                    required
                                    type="checkbox"
                                    id="consent"
                                    checked={formData.consent}
                                    onChange={(e) => setFormData(p => ({ ...p, consent: e.target.checked }))}
                                    className="h-5 w-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                                />
                                <label htmlFor="consent" className="text-sm font-medium text-gray-700">
                                    I promise to be committed and have my guardian&apos;s permission.
                                </label>
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-black text-lg py-4 px-6 rounded-xl hover:shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center disabled:opacity-70 disabled:hover:scale-100"
                            >
                                {isLoading ? <Loader2 className="animate-spin h-6 w-6 mr-2" /> : <Sparkles className="w-5 h-5 mr-2" />}
                                {isLoading ? 'Submitting...' : 'Submit Registration'}
                            </button>
                        </form>
                    </div>
                </FadeIn>
            </div>
        </div>
    )
}
