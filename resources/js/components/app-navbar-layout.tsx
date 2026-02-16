import { Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';

export default function AppNavbarLayout({ children }: PropsWithChildren) {
    return (
        <div className="min-h-screen bg-gray-100">
            {/* The Navbar */}
            <nav className="bg-white border-b border-gray-100 p-4 shadow-sm">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div className="flex gap-6">
                        <Link href="/" className="font-bold text-xl">Brand</Link>
                        <Link href="/about">about</Link>
                    </div>
                    <div>
                        {/* User Dropdown / Profile logic here */}
                        <button className="text-sm font-medium">Profile</button>
                    </div>
                </div>
            </nav>

            {/* Page Content */}
            <main className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {children}
                </div>
            </main>
        </div>
    );
}