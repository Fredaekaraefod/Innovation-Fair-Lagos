'use server';

import { prisma } from '@/lib/prisma';
import { writeFile } from 'fs/promises';
import { join } from 'path';
import { randomUUID } from 'crypto';

export async function registerStudent(formData: FormData) {
    try {
        // Extract basic fields
        const fullName = formData.get('fullName') as string;
        const age = parseInt(formData.get('age') as string);
        const gender = formData.get('gender') as string;
        const schoolName = formData.get('schoolName') as string; // Matching by name or ID? Ideally ID.
        const lga = formData.get('lga') as string;
        const classLevel = formData.get('class') as string || 'SS2'; // Default or from form?

        // Team fields
        const isTeam = formData.get('isTeam') === 'true';
        const teamName = formData.get('teamName') as string;
        const teamMembers = formData.get('teamMembers') as string;

        // Project fields
        const projectTitle = formData.get('projectTitle') as string;
        const sdg = formData.get('sdg') as string;
        const projectDescription = formData.get('projectDescription') as string;
        const motivation = formData.get('motivation') as string;

        // File upload
        const file = formData.get('conceptNote') as File | null;
        let conceptNotePath = null;

        if (file && file.size > 0) {
            const bytes = await file.arrayBuffer();
            const buffer = Buffer.from(bytes);

            // Create unique filename
            const originalName = file.name;
            const extension = originalName.split('.').pop();
            const filename = `${randomUUID()}.${extension}`;

            // Save to public/uploads
            // Note: In production (Vercel), persistent file storage is not supported on the filesystem.
            // For this project, we assume a local-like environment or we'd need Blob storage (Vercel Blob/AWS S3).
            // Since the request is for a standard web app, we'll implement local FS storage and later advise on Blob.
            const uploadDir = join(process.cwd(), 'public', 'uploads');
            const filePath = join(uploadDir, filename);

            await writeFile(filePath, buffer);
            conceptNotePath = `/uploads/${filename}`;
        }

        // Find School ID
        const school = await prisma.school.findFirst({
            where: { name: schoolName }
        });

        if (!school) {
            // Fallback: Create school if not exists? Or Fail?
            // Ideally fail, but for robustness let's create a temporary record if allowed, or just error.
            // For now, let's assume valid school name from dropdown.
            return { success: false, message: 'Invalid School selected' };
        }

        // Create Student Record
        await prisma.student.create({
            data: {
                fullName,
                age,
                gender,
                classLevel,
                schoolId: school.id,
                isTeam,
                teamName: isTeam ? teamName : null,
                teamMembers: isTeam ? teamMembers : null,
                projectTitle,
                sdg,
                projectDescription,
                motivation,
                conceptNotePath
            }
        });

        return { success: true, message: 'Registration successful!' };

    } catch (error) {
        console.error('Registration Error:', error);
        return { success: false, message: 'Failed to register. Please try again.' };
    }
}
