import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { cn } from '@/lib/utils';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Innovation Fair Lagos - Public Secondary Schools',
  description: 'Empowering students in Lagos public secondary schools through technology and innovation.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={cn(inter.className, "flex flex-col min-h-screen text-slate-900 bg-white")}>
        <Navbar />
        <main className="flex-grow pt-20">{children}</main>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}

