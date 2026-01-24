import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import AdminSidebar from '@/components/admin/Sidebar';

export default async function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const cookieStore = await cookies();
    const session = cookieStore.get('admin_session');

    // Protect all routes in /admin layout (except /admin/login which has its own page file, but Layout wraps it? 
    // Wait, layout wraps children. Login page is likely NOT inside this layout in a standard setup IF we put layout in /admin root.
    // Actually, Next.js Layouts nest. If Login is /admin/login, it inherits /admin/layout.
    // We should move Login to /login or handle the check carefully.
    // OR, we make this layout ONLY for the dashboard parts, e.g. group route (dashboard).
    // FOR NOW: Let's simple check. If we are on login page, we shouldn't be redirected. 
    // But strictly server-side layout doesn't know pathname easily without header hacks.

    // EASIER PATH: Put this layout in a Route Group (dashboard) inside admin. 
    // /admin/(dashboard)/layout.tsx -> Protected
    // /admin/login/page.tsx -> Unprotected (No layout or Root layout)

    // However, I requested to write to src/app/admin/layout.tsx. 
    // Use middleware? No user request for middleware.
    // Let's assume standard checks: if no session, redirect to login. 
    // BUT if we are making the request to /admin/login, this layout runs. 

    // FIX: We will create the structure:
    // src/app/admin/login/page.tsx
    // src/app/admin/(dashboard)/layout.tsx (The protected one with sidebar)
    // src/app/admin/(dashboard)/page.tsx 
    // src/app/admin/(dashboard)/students/page.tsx

    // This is cleaner. I will write this file to `src/app/admin/(dashboard)/layout.tsx` instead.

    if (!session || session.value !== 'true') {
        redirect('/admin/login');
    }

    return (
        <div className="flex min-h-screen bg-slate-50">
            <AdminSidebar />
            <main className="flex-1 overflow-auto h-screen relative">
                <div className="max-w-7xl mx-auto p-8">
                    {children}
                </div>
            </main>
        </div>
    );
}
