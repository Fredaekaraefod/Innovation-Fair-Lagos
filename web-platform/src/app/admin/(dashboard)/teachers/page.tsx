import { prisma } from '@/lib/prisma';
import { Download, Mail, Phone, MapPin } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default async function AdminTeachersPage() {
    const teachers = await prisma.teacher.findMany({
        orderBy: { createdAt: 'desc' },
        include: { school: true }
    });

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-black text-slate-900">Registered Teachers</h1>
                    <p className="text-slate-500 mt-1">Total Count: {teachers.length}</p>
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
                                <th className="px-6 py-4">Teacher Name</th>
                                <th className="px-6 py-4">Contact</th>
                                <th className="px-6 py-4">School & Location</th>
                                <th className="px-6 py-4">Club Details</th>
                                <th className="px-6 py-4">Joined</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {teachers.length === 0 ? (
                                <tr>
                                    <td colSpan={5} className="px-6 py-12 text-center text-slate-400">
                                        No teachers registered yet.
                                    </td>
                                </tr>
                            ) : (
                                teachers.map((teacher) => (
                                    <tr key={teacher.id} className="hover:bg-slate-50 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="font-bold text-slate-900">{teacher.fullName}</div>
                                            <div className="text-xs text-indigo-600 font-medium mt-0.5">
                                                {teacher.subjects}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center space-x-2 text-slate-600 mb-1">
                                                <Mail className="w-3 h-3 text-slate-400" />
                                                <span>{teacher.email}</span>
                                            </div>
                                            <div className="flex items-center space-x-2 text-slate-600">
                                                <Phone className="w-3 h-3 text-slate-400" />
                                                <span>{teacher.phone}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="font-medium text-slate-700">{teacher.school.name}</div>
                                            <div className="flex items-center space-x-1 text-xs text-slate-500 mt-0.5">
                                                <MapPin className="w-3 h-3" />
                                                <span>{teacher.school.lga}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 max-w-xs">
                                            <div className="text-xs space-y-1">
                                                <div><span className="font-medium text-slate-700">Size:</span> {teacher.estStudents || 'N/A'}</div>
                                                <div><span className="font-medium text-slate-700">Facilities:</span> {teacher.facilities || 'None'}</div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                                Active
                                            </span>
                                            <div className="text-xs text-slate-400 mt-1">
                                                {new Date(teacher.createdAt).toLocaleDateString()}
                                            </div>
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
