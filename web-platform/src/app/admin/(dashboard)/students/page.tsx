import { prisma } from '@/lib/prisma';
import { Download } from 'lucide-react';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default async function AdminStudentsPage() {
    const students = await prisma.student.findMany({
        orderBy: { createdAt: 'desc' },
        include: { school: true }
    });

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-black text-slate-900">Registered Students</h1>
                    <p className="text-slate-500 mt-1">Total Count: {students.length}</p>
                </div>
                <button className="bg-white border border-slate-200 text-slate-700 font-medium py-2 px-4 rounded-lg hover:bg-slate-50 flex items-center shadow-sm">
                    <Download className="w-4 h-4 mr-2" />
                    Export CSV
                </button>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-slate-50 text-slate-500 font-bold uppercase tracking-wider text-xs border-b border-slate-200">
                            <tr>
                                <th className="px-6 py-4">Name / Team</th>
                                <th className="px-6 py-4">School</th>
                                <th className="px-6 py-4">Project</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {students.length === 0 ? (
                                <tr>
                                    <td colSpan={5} className="px-6 py-12 text-center text-slate-400">
                                        No students registered yet.
                                    </td>
                                </tr>
                            ) : (
                                students.map((student) => (
                                    <tr key={student.id} className="hover:bg-slate-50 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="font-bold text-slate-900">{student.fullName}</div>
                                            {student.isTeam && (
                                                <div className="text-xs text-indigo-600 font-medium mt-0.5">
                                                    👥 {student.teamName}
                                                </div>
                                            )}
                                            <div className="text-xs text-slate-400 mt-0.5">
                                                {student.age} yrs • {student.gender || 'N/A'} • {student.classLevel || 'N/A'}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="font-medium text-slate-700">{student.school.name}</div>
                                            <div className="text-xs text-slate-500">{student.school.lga}</div>
                                        </td>
                                        <td className="px-6 py-4 max-w-xs">
                                            {student.projectTitle ? (
                                                <>
                                                    <div className="font-medium text-slate-900 truncate" title={student.projectTitle}>
                                                        {student.projectTitle}
                                                    </div>
                                                    <div className="inline-flex mt-1 items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                                                        SDG {student.sdg}
                                                    </div>
                                                </>
                                            ) : (
                                                <span className="text-slate-400 italic">No Project</span>
                                            )}
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                                Registered
                                            </span>
                                            <div className="text-xs text-slate-400 mt-1">
                                                {new Date(student.createdAt).toLocaleDateString()}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            {student.conceptNotePath ? (
                                                <a
                                                    href={student.conceptNotePath}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-indigo-600 hover:text-indigo-900 font-medium text-xs hover:underline"
                                                >
                                                    View Note ↗
                                                </a>
                                            ) : (
                                                <span className="text-slate-300 text-xs">No File</span>
                                            )}
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
