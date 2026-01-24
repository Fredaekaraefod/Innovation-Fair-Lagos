'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Loader2, LockKeyhole, ArrowRight } from 'lucide-react';
import { adminLogin } from '@/actions/admin-auth';
import { FadeIn } from '@/components/ui/animations';

export default function AdminLoginPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        const formData = new FormData(e.currentTarget);
        const result = await adminLogin(formData);

        if (result.success) {
            router.push('/admin/students'); // Default to students view
        } else {
            setError(result.message || 'Access Denied');
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
            <FadeIn>
                <div className="max-w-md w-full bg-slate-800 rounded-2xl shadow-2xl overflow-hidden border border-slate-700">
                    <div className="p-8 text-center border-b border-slate-700">
                        <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
                            <LockKeyhole className="w-8 h-8 text-indigo-400" />
                        </div>
                        <h1 className="text-2xl font-bold text-white mb-2">Restricted Access</h1>
                        <p className="text-slate-400 text-sm">
                            Innovation Fair Lagos - Administrative Portal
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="p-8 space-y-6">
                        {error && (
                            <div className="p-3 bg-red-900/30 border border-red-500/30 rounded-lg text-red-200 text-sm text-center">
                                {error}
                            </div>
                        )}

                        <div className="space-y-2">
                            <label htmlFor="password" className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                                Entry Code
                            </label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                required
                                className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-white placeholder-slate-600 outline-none transition-all"
                                placeholder="Enter admin password..."
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 px-4 rounded-lg transition-all flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    <span>Verifying...</span>
                                </>
                            ) : (
                                <>
                                    <span>Access Dashboard</span>
                                    <ArrowRight className="w-5 h-5" />
                                </>
                            )}
                        </button>

                        <div className="text-center">
                            <a href="/" className="text-slate-500 text-xs hover:text-slate-300 transition-colors">Return to Website</a>
                        </div>
                    </form>
                </div>
            </FadeIn>
        </div>
    );
}
