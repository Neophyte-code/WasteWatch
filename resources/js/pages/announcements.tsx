import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';
import { dashboard } from '@/routes';
import { useState, useMemo } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
];

const gradients = [
    'from-green-600 to-emerald-500',
    'from-blue-600 to-indigo-500',
    'from-amber-500 to-orange-500',
    'from-rose-500 to-red-600',
    'from-purple-500 to-violet-600',
];

interface Announcemnt {
    id: number;
    what: string;
    to: string;
    date: string;
    time: string;
    location: string;
    message: string;
}

interface Props {
    announcements: Announcemnt[];
}

export default function Announcement({ announcements }: Props) {
    // logic for search filter
    const [searchQuery, setSearchQuery] = useState('');

    const query = searchQuery.toLowerCase();

    const filteredAnnouncements = announcements.filter((item) => {
        return (
            item.what.toLowerCase().includes(query) ||
            item.location.toLowerCase().includes(query) ||
            item.message.toLowerCase().includes(query)
        );
    });

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Announcement" />
            <div className="flex h-full flex-1 gap-4 overflow-x-auto rounded-xl p-4">
                <div className="flex h-full flex-1 flex-col gap-6 overflow-x-auto rounded-xl p-4 md:p-6 lg:p-8">
                    {/* Header Section  */}
                    <div className="flex flex-col gap-4 rounded-xl bg-linear-to-r from-green-700 to-emerald-600 p-6 text-white shadow-md md:flex-row md:items-center md:justify-between">
                        <div>
                            <h1 className="text-2xl font-bold md:text-3xl">
                                MENRO Announcements
                            </h1>
                            <p className="mt-1 text-green-100 opacity-90">
                                Latest updates, seminars, reminders, and
                                environmental compliance notices
                            </p>
                        </div>

                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                            <div className="relative w-full min-w-60 sm:w-64">
                                <input
                                    type="text"
                                    placeholder="Search announcements..."
                                    value={searchQuery}
                                    onChange={(e) =>
                                        setSearchQuery(e.target.value)
                                    }
                                    className="w-full rounded-lg bg-white/20 px-4 py-2.5 pl-10 text-white placeholder-green-100 focus:bg-white/30 focus:ring-2 focus:ring-green-300 focus:outline-none"
                                />
                                <svg
                                    className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 text-green-100"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
                        {/* Card 1 */}
                        {filteredAnnouncements.map((announcement, i) => {
                            const selectedGradient =
                                gradients[i % gradients.length];
                            return (
                                <div
                                    key={announcement.id}
                                    className="group relative flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md hover:shadow-green-100/50 dark:border dark:border-white/20 dark:bg-gray-900"
                                >
                                    <div
                                        className={`h-2 bg-linear-to-r ${selectedGradient}`}
                                    ></div>

                                    <div className="flex flex-1 flex-col p-5 md:p-6">
                                        <h3 className="mb-3 line-clamp-2 text-xl font-semibold text-gray-900 dark:text-white">
                                            {announcement.what}
                                        </h3>

                                        <div className="mb-4 space-y-2 text-sm text-gray-900 dark:text-gray-300">
                                            <div className="flex items-center gap-2">
                                                <span className="font-bold">
                                                    Date:
                                                </span>
                                                <span>{announcement.date}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="font-bold">
                                                    Time:
                                                </span>
                                                <span>{announcement.time}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="font-bold">
                                                    Venue:
                                                </span>
                                                <span className="line-clamp-1">
                                                    {announcement.location}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="font-bold">
                                                    For:
                                                </span>
                                                <span>{announcement.to}</span>
                                            </div>
                                        </div>
                                        <div className="ddark:border-gray-600 mt-5 rounded bg-gray-200 p-2 dark:bg-gray-800">
                                            <p className="mb-6 text-justify indent-10 text-gray-900 dark:text-white">
                                                {announcement.message}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
