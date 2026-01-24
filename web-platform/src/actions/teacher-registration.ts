'use server';

import { prisma } from '@/lib/prisma';

export async function registerTeacher(formData: FormData) {
    try {
        const fullName = formData.get('fullName') as string;
        const email = formData.get('contactEmail') as string;
        const phone = formData.get('contactPhone') as string;
        const schoolName = formData.get('schoolName') as string;
        const subjects = formData.get('subject') as string;
        const estStudents = formData.get('estStudents') as string;

        // Facilities might be passed as multiple same-name keys or a JSON string or handled in the component
        // Let's assume the component joins it, OR we pull it differently.
        // If we use standard FormData, multiple checkboxes with same name 'facilities' work.
        const facilities = formData.getAll('facilities').join(', ');
        // Wait, if the component sends it as individual entries, getAll works.

        // Find School ID
        const school = await prisma.school.findFirst({
            where: { name: schoolName }
        });

        if (!school) {
            return { success: false, message: 'Invalid School selected' };
        }

        // Check if teacher already exists
        const existingTeacher = await prisma.teacher.findUnique({
            where: { email }
        });

        if (existingTeacher) {
            return { success: false, message: 'A teacher with this email is already registered.' };
        }

        // Create Teacher
        await prisma.teacher.create({
            data: {
                fullName,
                email,
                phone,
                subjects,
                estStudents,
                facilities,
                schoolId: school.id
            }
        });

        return { success: true, message: 'Teacher registration successful!' };

    } catch (error) {
        console.error('Teacher Registration Error:', error);
        return { success: false, message: 'Failed to register. Please try again.' };
    }
}
