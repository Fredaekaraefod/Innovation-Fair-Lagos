'use client';

import { useState, useEffect } from 'react';
import { Search, School, MapPin, Sparkles, SearchX } from 'lucide-react';
import schoolsByLGA from '@/data/schools-by-lga.json';
import { FadeIn, FloatingElement } from '@/components/ui/animations';
import { ScribbleUnderline } from '@/components/ui/doodles';
import { cn } from '@/lib/utils';

// Get all LGAs
const lgas = Object.keys(schoolsByLGA).sort();
const allSchoolsFlat = Object.values(schoolsByLGA).flat();

export default function SchoolsPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedLGA, setSelectedLGA] = useState<string>('');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Filter logic
    const displayedSchools = selectedLGA && selectedLGA !== 'All'
        ? schoolsByLGA[selectedLGA as keyof typeof schoolsByLGA] || []
        : selectedLGA === 'All' ? allSchoolsFlat : [];

    const filteredSchools = displayedSchools.filter(school =>
        school.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Hero with Search */}
            <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 pt-32 pb-16 text-white relative overflow-hidden">
                <FloatingElement delay={0}><div className="absolute top-10 left-10 opacity-20"><School className="w-20 h-20 text-white" /></div></FloatingElement>
                <FloatingElement delay={1.5}><div className="absolute bottom-10 right-10 opacity-20"><Sparkles className="w-20 h-20 text-yellow-300" /></div></FloatingElement>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <FadeIn>
                        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">
                            Eligible <span className="relative inline-block text-yellow-400">Schools <ScribbleUnderline className="absolute -bottom-2 right-0 w-full text-white/50" /></span>
                        </h1>
                        <p className="text-blue-200 text-lg mb-8 max-w-xl mx-auto">
                            Check if your school is already in our database of Lagos Public Secondary Schools.
                        </p>

                        <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
                            <div className="relative min-w-[200px]">
                                <select
                                    value={selectedLGA}
                                    onChange={(e) => setSelectedLGA(e.target.value)}
                                    className="appearance-none block w-full px-4 py-4 rounded-xl md:rounded-l-2xl md:rounded-r-none text-gray-900 font-bold shadow-xl focus:ring-4 focus:ring-blue-500/50 focus:outline-none transition-all cursor-pointer bg-white border-r border-gray-100"
                                >
                                    <option value="" disabled>Select LGA</option>
                                    <option value="All">All LGAs</option>
                                    {lgas.map(lga => (
                                        <option key={lga} value={lga}>{lga}</option>
                                    ))}
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                                    <MapPin className="h-5 w-5" />
                                </div>
                            </div>

                            <div className="relative flex-1 group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <Search className="h-6 w-6 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                                </div>
                                <input
                                    type="text"
                                    className="block w-full pl-12 pr-4 py-4 rounded-xl md:rounded-l-none md:rounded-r-2xl text-gray-900 font-medium shadow-xl focus:ring-4 focus:ring-blue-500/50 focus:outline-none transition-all bg-white placeholder:text-gray-400"
                                    placeholder="Search school name..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    disabled={!selectedLGA}
                                />
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {mounted ? (
                    selectedLGA ? (
                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {filteredSchools.slice(0, 100).map((school, index) => (
                                <FadeIn key={index} delay={Math.min(index * 0.05, 0.5)} className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all cursor-default group">
                                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                        <School className="w-5 h-5 text-blue-500 group-hover:text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-sm font-bold text-gray-900 leading-tight group-hover:text-blue-700 transition-colors">{school}</h3>
                                        <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400">
                                            {selectedLGA !== 'All' ? selectedLGA : 'Lagos State'} Public School
                                        </span>
                                    </div>
                                </FadeIn>
                            ))}
                            {filteredSchools.length === 0 && (
                                <div className="col-span-full py-20 text-center">
                                    <SearchX className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                                    <p className="text-xl text-gray-400 font-medium">No schools found matching &quot;{searchTerm}&quot;</p>
                                    <button className="mt-4 text-blue-600 font-bold hover:underline">Can&apos;t find your school? Contact Support</button>
                                </div>
                            )}
                            {filteredSchools.length > 100 && (
                                <div className="col-span-full py-8 text-center">
                                    <span className="inline-block px-4 py-1 rounded-full bg-gray-100 text-gray-500 text-sm font-medium">
                                        Showing first 100 results... keep typing to search specific schools
                                    </span>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="py-20 text-center flex flex-col items-center justify-center opacity-50">
                            <MapPin className="w-24 h-24 text-gray-200 mb-6" />
                            <h3 className="text-2xl font-bold text-gray-400 mb-2">Select an LGA</h3>
                            <p className="text-gray-400 max-w-md">Please select a Local Government Area from the dropdown above to view eligible schools.</p>
                        </div>
                    )
                ) : (
                    <div className="py-20 text-center">
                        <div className="animate-spin w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-4"></div>
                        <p className="text-gray-400">Loading schools directory...</p>
                    </div>
                )}
            </div>
        </div>
    )
}
