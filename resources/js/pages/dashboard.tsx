import { Head } from '@inertiajs/react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';
import { dashboard } from '@/routes';
import { Button } from '@/components/ui/button';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 gap-4 overflow-x-auto rounded-xl border-2 border-gray-400 p-4">
                <div className="relative flex min-h-[100vh] flex-2 flex-col justify-center overflow-hidden rounded-xl border border-sidebar-border/70 text-base/8 md:min-h-min dark:border-sidebar-border">
                    {/* <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" /> */}
                    <h2 className="text-4xl font-bold">
                        Welcome to Waste
                        <span className="text-green-600">Watch</span>
                    </h2>
                    <h2 className="text-3xl">Earn by reporting waste</h2>
                    <p className="mt-4 text-xl">
                        WasteWatch is a user-friendly system designed to help
                        individuals and communities report waste effectively.
                        Our platform enables users to easily log and track
                        waste, providing valuable insights into waste management
                        practices and identifying areas for improvement. By
                        promoting transparency and accountability, WasteWatch
                        aims to contribute to a more sustainable future for our
                        planet.
                    </p>
                    <div className="mt-4 flex gap-4">
                        <Button className="bg-green-600">Report Waste</Button>
                        <Button className="border-2 border-green-600 bg-transparent text-black">
                            Report Litterer
                        </Button>
                    </div>
                </div>
                <div className="relative flex min-h-[100vh] flex-1 items-center justify-center overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                    <img
                        src="/images/logo.png"
                        alt="logo"
                        className="absolute"
                    />
                </div>
            </div>
        </AppLayout>
    );
}
