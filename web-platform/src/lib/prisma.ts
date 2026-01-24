
// 'use server' imports or logic that rely on @prisma/client are failing.
// We are mocking the Prisma Client here to allow the UI to function without a DB setup.

const storedStudents: any[] = [
    {
        id: '1',
        createdAt: new Date(),
        fullName: 'Jane Doe',
        age: 12,
        gender: 'Female',
        classLevel: 'JSS 2',
        schoolId: 'school-1',
        isTeam: false,
        projectTitle: 'Smart Solar Tracker',
        sdg: '7',
        conceptNotePath: '#',
        school: { name: 'Lagos Model College', lga: 'Ikorodu' }
    }
];

const storedTeachers: any[] = [
    {
        id: '1',
        createdAt: new Date(),
        fullName: 'Mr. Emmanuel',
        email: 'emmanuel@school.com',
        phone: '08012345678',
        subjects: 'Physics',
        estStudents: '11-30',
        facilities: 'Computer Lab 💻, Internet Access 🌐',
        school: { name: 'Lagos Model College', lga: 'Ikorodu' }
    }
];

// Mock Implementation
const prismaMock = {
    student: {
        findMany: async () => storedStudents,
        create: async ({ data }: any) => {
            const newStudent = { id: Math.random().toString(), createdAt: new Date(), ...data };
            storedStudents.unshift(newStudent);
            return newStudent;
        }
    },
    teacher: {
        findMany: async () => storedTeachers,
        create: async ({ data }: any) => {
            const newTeacher = { id: Math.random().toString(), createdAt: new Date(), ...data };
            storedTeachers.unshift(newTeacher);
            return newTeacher;
        },
        findUnique: async () => null // Always return null so registration succeeds
    },
    school: {
        findFirst: async ({ where }: any) => ({ id: 'mock-school-id', name: where.name, lga: 'Mock LGA' }),
    }
};

// Export as if it were the real prisma client
// We deliberately use 'any' to bypass missing type definitions from @prisma/client
export const prisma = prismaMock as any;
