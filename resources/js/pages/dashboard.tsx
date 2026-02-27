import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <AppLayout>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 gap-4 overflow-x-auto rounded-xl p-4">
                <div className="relative flex min-h-screen flex-2 flex-col justify-center overflow-hidden rounded-xl text-base/8 md:min-h-min">
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
                        <Button
                            asChild
                            className="h-10 border-2 border-green-600 bg-green-600 font-bold hover:bg-transparent hover:text-green-600 dark:text-white"
                        >
                            <Link href="/report-waste">Report Waste</Link>
                        </Button>
                        <Button
                            asChild
                            className="h-10 border-2 border-green-600 bg-transparent font-bold text-green-600 hover:bg-green-600 hover:text-white dark:text-white"
                        >
                            <Link href="/report-litterer">Report Litterer</Link>
                        </Button>
                    </div>
                </div>
                <div className="relative flex min-h-screen flex-1 items-center justify-center overflow-hidden rounded-xl md:min-h-min">
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
