import Link from 'next/link';

export function Footer() {
    return (
        <footer className="bg-slate-900 border-t border-slate-800 mt-auto text-white py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <h3 className="font-bold text-xl mb-2 text-yellow-500">Innovation Fair Lagos</h3>
                        <p className="text-sm text-slate-400">
                            &copy; {new Date().getFullYear()} All rights reserved.
                        </p>
                        <p className="text-xs text-slate-500 mt-1">
                            Built with ❤️ for the students of Lagos State.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-6 justify-center">
                        <Link href="/about" className="text-sm text-slate-400 hover:text-white transition">About</Link>
                        <Link href="/program" className="text-sm text-slate-400 hover:text-white transition">Program</Link>
                        <Link href="/schools" className="text-sm text-slate-400 hover:text-white transition">Schools</Link>
                        <Link href="/volunteers" className="text-sm text-slate-400 hover:text-white transition">Volunteers</Link>
                        <Link href="/mentors" className="text-sm text-slate-400 hover:text-white transition">Mentors</Link>
                        <Link href="/teachers/register" className="text-sm text-slate-400 hover:text-white transition">Teachers</Link>
                        <Link href="/contact" className="text-sm text-slate-400 hover:text-white transition">Contact</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
