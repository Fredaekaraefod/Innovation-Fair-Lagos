'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, ChevronDown, Heart, Users, GraduationCap, School, Building2, Newspaper, LineChart } from 'lucide-react';
import { cn } from '@/lib/utils';
import { FloatingElement } from '../ui/animations';

const navItems = [
    { name: 'Program', href: '/program' },
    { name: 'Eligible Schools', href: '/schools' },
    // About is now a dropdown handled in the component
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    const toggleDropdown = (name: string) => {
        if (openDropdown === name) {
            setOpenDropdown(null);
        } else {
            setOpenDropdown(name);
        }
    };

    return (
        <nav className="fixed w-full z-50 transition-all duration-300 bg-white/80 backdrop-blur-md border-b border-white/20 shadow-sm">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    <div className="flex-shrink-0 flex items-center gap-2">
                        <Link href="/" className="text-2xl font-black tracking-tighter text-indigo-900 hover:text-indigo-700 transition">
                            Innovation<span className="text-yellow-500">Fair</span>Lagos
                        </Link>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-8">
                            {/* About Dropdown */}
                            <div className="relative group">
                                <button className="flex items-center text-sm font-bold text-gray-600 hover:text-indigo-600 transition-colors uppercase tracking-wide">
                                    About <ChevronDown className="ml-1 w-4 h-4" />
                                </button>
                                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                    <div className="bg-white rounded-xl shadow-xl border border-indigo-50 p-4 w-56 grid gap-2">
                                        <Link href="/about" className="flex items-center p-3 rounded-lg hover:bg-slate-50 transition-colors">
                                            <div className="bg-blue-100 p-2 rounded-full mr-3 text-blue-600"><Users className="w-5 h-5" /></div>
                                            <div>
                                                <div className="font-bold text-gray-900">The Project</div>
                                            </div>
                                        </Link>
                                        <Link href="/team" className="flex items-center p-3 rounded-lg hover:bg-slate-50 transition-colors">
                                            <div className="bg-purple-100 p-2 rounded-full mr-3 text-purple-600"><Users className="w-5 h-5" /></div>
                                            <div>
                                                <div className="font-bold text-gray-900">The Team</div>
                                            </div>
                                        </Link>
                                        <Link href="/convener" className="flex items-center p-3 rounded-lg hover:bg-slate-50 transition-colors">
                                            <div className="bg-indigo-100 p-2 rounded-full mr-3 text-indigo-600"><Heart className="w-5 h-5" /></div>
                                            <div>
                                                <div className="font-bold text-gray-900">The Convener</div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-sm font-bold text-gray-600 hover:text-indigo-600 transition-colors uppercase tracking-wide"
                                >
                                    {item.name}
                                </Link>
                            ))}

                            {/* Partnerships Dropdown */}
                            <div className="relative group">
                                <button className="flex items-center text-sm font-bold text-gray-600 hover:text-indigo-600 transition-colors uppercase tracking-wide">
                                    Partnerships <ChevronDown className="ml-1 w-4 h-4" />
                                </button>
                                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                    <div className="bg-white rounded-xl shadow-xl border border-indigo-50 p-4 w-64 grid gap-2">
                                        <Link href="/partnerships/government" className="flex items-center p-3 rounded-lg hover:bg-slate-50 transition-colors">
                                            <div className="bg-blue-100 p-2 rounded-full mr-3 text-blue-600"><Building2 className="w-5 h-5" /></div>
                                            <div>
                                                <div className="font-bold text-gray-900">Government</div>
                                                <div className="text-xs text-gray-500">Alignment & Oversight</div>
                                            </div>
                                        </Link>
                                        <Link href="/partnerships/media" className="flex items-center p-3 rounded-lg hover:bg-slate-50 transition-colors">
                                            <div className="bg-pink-100 p-2 rounded-full mr-3 text-pink-600"><Newspaper className="w-5 h-5" /></div>
                                            <div>
                                                <div className="font-bold text-gray-900">Media</div>
                                                <div className="text-xs text-gray-500">Story & Narrative</div>
                                            </div>
                                        </Link>
                                        <Link href="/partnerships/financial" className="flex items-center p-3 rounded-lg hover:bg-slate-50 transition-colors">
                                            <div className="bg-green-100 p-2 rounded-full mr-3 text-green-600"><LineChart className="w-5 h-5" /></div>
                                            <div>
                                                <div className="font-bold text-gray-900">Financial</div>
                                                <div className="text-xs text-gray-500">Impact & Audit</div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Get Involved Dropdown */}
                            <div className="relative group">
                                <button className="flex items-center text-sm font-bold text-gray-600 hover:text-indigo-600 transition-colors uppercase tracking-wide">
                                    Get Involved <ChevronDown className="ml-1 w-4 h-4" />
                                </button>
                                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                    <div className="bg-white rounded-xl shadow-xl border border-indigo-50 p-4 w-64 grid gap-2">
                                        <Link href="/volunteers" className="flex items-center p-3 rounded-lg hover:bg-slate-50 transition-colors">
                                            <div className="bg-blue-100 p-2 rounded-full mr-3 text-blue-600"><Users className="w-5 h-5" /></div>
                                            <div>
                                                <div className="font-bold text-gray-900">Volunteers</div>
                                                <div className="text-xs text-gray-500">Join the team</div>
                                            </div>
                                        </Link>

                                        <Link href="/support" className="flex items-center p-3 rounded-lg hover:bg-slate-50 transition-colors">
                                            <div className="bg-green-100 p-2 rounded-full mr-3 text-green-600"><Heart className="w-5 h-5" /></div>
                                            <div>
                                                <div className="font-bold text-gray-900">Support</div>
                                                <div className="text-xs text-gray-500">Donate & Partner</div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Register Dropdown */}
                            <div className="relative group">
                                <button
                                    className="rounded-full bg-indigo-600 px-6 py-2.5 text-sm font-bold text-white hover:bg-indigo-700 shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center"
                                >
                                    Register Now <ChevronDown className="ml-1 w-4 h-4" />
                                </button>
                                <div className="absolute right-0 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                    <div className="bg-white rounded-xl shadow-xl border border-indigo-50 p-4 w-64 grid gap-2">
                                        <Link href="/students/register" className="flex items-center p-3 rounded-lg hover:bg-slate-50 transition-colors">
                                            <div className="bg-yellow-100 p-2 rounded-full mr-3 text-yellow-600"><GraduationCap className="w-5 h-5" /></div>
                                            <div>
                                                <div className="font-bold text-gray-900">Students</div>
                                                <div className="text-xs text-gray-500">Exhibit your project</div>
                                            </div>
                                        </Link>
                                        <Link href="/teachers/register" className="flex items-center p-3 rounded-lg hover:bg-slate-50 transition-colors">
                                            <div className="bg-indigo-100 p-2 rounded-full mr-3 text-indigo-600"><School className="w-5 h-5" /></div>
                                            <div>
                                                <div className="font-bold text-gray-900">Teachers</div>
                                                <div className="text-xs text-gray-500">Register your club</div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t">
                    <div className="space-y-1 px-4 pb-6 pt-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="block rounded-lg px-3 py-3 text-base font-bold text-gray-600 hover:bg-slate-50 hover:text-indigo-600 border-b border-gray-50"
                            >
                                {item.name}
                            </Link>
                        ))}

                        <div className="pt-2 pb-2">
                            <h3 className="text-xs font-black text-gray-400 uppercase tracking-wider mb-2">About</h3>
                            <Link href="/about" onClick={() => setIsOpen(false)} className="block py-2 text-gray-600 font-medium pl-2 border-l-2 border-transparent hover:border-indigo-500 hover:text-indigo-600">The Project</Link>
                            <Link href="/team" onClick={() => setIsOpen(false)} className="block py-2 text-gray-600 font-medium pl-2 border-l-2 border-transparent hover:border-indigo-500 hover:text-indigo-600">The Team</Link>
                            <Link href="/convener" onClick={() => setIsOpen(false)} className="block py-2 text-gray-600 font-medium pl-2 border-l-2 border-transparent hover:border-indigo-500 hover:text-indigo-600">The Convener</Link>
                        </div>

                        <div className="pt-2 pb-2">
                            <h3 className="text-xs font-black text-gray-400 uppercase tracking-wider mb-2">Partnerships</h3>
                            <Link href="/partnerships/government" onClick={() => setIsOpen(false)} className="block py-2 text-gray-600 font-medium pl-2 border-l-2 border-transparent hover:border-indigo-500 hover:text-indigo-600">Government</Link>
                            <Link href="/partnerships/media" onClick={() => setIsOpen(false)} className="block py-2 text-gray-600 font-medium pl-2 border-l-2 border-transparent hover:border-indigo-500 hover:text-indigo-600">Media</Link>
                            <Link href="/partnerships/financial" onClick={() => setIsOpen(false)} className="block py-2 text-gray-600 font-medium pl-2 border-l-2 border-transparent hover:border-indigo-500 hover:text-indigo-600">Financial</Link>
                        </div>

                        <div className="pt-4 pb-2">
                            <h3 className="text-xs font-black text-gray-400 uppercase tracking-wider mb-2">Get Involved</h3>
                            <Link href="/volunteers" onClick={() => setIsOpen(false)} className="block py-2 text-gray-600 font-medium pl-2 border-l-2 border-transparent hover:border-indigo-500 hover:text-indigo-600">Volunteers</Link>

                            <Link href="/support" onClick={() => setIsOpen(false)} className="block py-2 text-gray-600 font-medium pl-2 border-l-2 border-transparent hover:border-indigo-500 hover:text-indigo-600">Support</Link>
                        </div>

                        <div className="pt-4">
                            <h3 className="text-xs font-black text-gray-400 uppercase tracking-wider mb-2">Register</h3>
                            <div className="grid grid-cols-2 gap-3">
                                <Link
                                    href="/students/register"
                                    onClick={() => setIsOpen(false)}
                                    className="flex flex-col items-center justify-center rounded-lg bg-yellow-50 border border-yellow-100 p-4 text-center hover:bg-yellow-100"
                                >
                                    <GraduationCap className="w-6 h-6 text-yellow-600 mb-2" />
                                    <span className="font-bold text-gray-900 text-sm">Students</span>
                                </Link>
                                <Link
                                    href="/teachers/register"
                                    onClick={() => setIsOpen(false)}
                                    className="flex flex-col items-center justify-center rounded-lg bg-indigo-50 border border-indigo-100 p-4 text-center hover:bg-indigo-100"
                                >
                                    <School className="w-6 h-6 text-indigo-600 mb-2" />
                                    <span className="font-bold text-gray-900 text-sm">Teachers</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
