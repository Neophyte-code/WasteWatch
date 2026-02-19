import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';
import { dashboard } from '@/routes';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
];

export default function About() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="About" />
            <div className="flex h-full flex-1 flex-col justify-center gap-4 overflow-x-auto rounded-xl p-4">
                <section className="relative px-5 pt-24 pb-20 sm:px-8 md:pt-32 md:pb-32">
                    <div className="relative z-10 mx-auto max-w-6xl text-center">
                        <div className="bg-glass mb-10 inline-flex items-center gap-3 rounded-full border border-white/20 px-7 py-4 shadow-2xl">
                            <span className="text-sm font-semibold tracking-widest uppercase">
                                Municipality of Daanbantayan
                            </span>
                        </div>

                        <h1 className="mb-8 text-5xl leading-none font-extrabold tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
                            <span className="bg-gradient-to-r from-green-500 to-yellow-500 bg-clip-text text-transparent">
                                WasteWatch
                            </span>
                        </h1>

                        <p className="mx-auto max-w-3xl text-lg leading-relaxed font-light sm:text-xl md:text-2xl">
                            Real-time waste reporting for the Municipality of
                            Daanbantayan. Simple, transparent, and direct to the
                            municipal team.
                        </p>

                        <div className="mt-5 flex flex-wrap justify-center gap-5">
                            <a
                                href="#impact"
                                className="transform rounded-full bg-green-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-green-500 hover:shadow-xl"
                            >
                                See impact
                            </a>
                            <a
                                href="#values"
                                className="rounded-full border-2 border-green-500 px-8 py-4 text-lg font-semibold text-green-600 shadow-lg transition-all duration-300 hover:-translate-y-1"
                            >
                                Core values
                            </a>
                        </div>
                    </div>
                </section>

                {/* Mission / Purpose  */}
                <section id="impact" className="relative py-24 md:py-32">
                    <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-2">
                        <div className="space-y-10">
                            <h2 className="text-4xl leading-tight font-extrabold sm:text-5xl lg:text-6xl">
                                Cleaner Daanbantayan starts with us.
                            </h2>

                            <p className="text-lg leading-relaxed font-light md:text-xl">
                                WasteWatch allows every resident to report
                                garbage piles, illegal dumpsites, clogged
                                drainage, and other environmental concerns
                                directly to the municipal environment and
                                engineering offices.
                            </p>

                            <div className="grid grid-cols-2 gap-10 pt-8">
                                <div className="text-center">
                                    <div className="text-6xl font-black text-green-500">
                                        12,000+
                                    </div>
                                    <div className="mt-2 text-lg">
                                        Reports submitted
                                    </div>
                                </div>
                                <div className="text-center">
                                    <div className="text-6xl font-black text-yellow-500">
                                        81%
                                    </div>
                                    <div className="mt-2 text-lg">
                                        Resolution rate
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/15 shadow-2xl backdrop-blur-2xl lg:aspect-square">
                            <div className="absolute inset-0 flex items-center justify-center bg-[url(/images/seedling.jpg)] bg-cover px-10 text-center text-white"></div>
                        </div>
                    </div>
                </section>

                {/* Values  */}
                <section
                    id="values"
                    className="relative bg-gradient-to-b from-transparent via-white/15 to-transparent py-24 md:py-32"
                >
                    <div className="mx-auto max-w-6xl px-6">
                        <h2 className="mb-16 text-center text-4xl font-extrabold sm:text-5xl lg:text-6xl">
                            Core Values
                        </h2>

                        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                            <div className="flex flex-col items-start rounded-3xl border border-white/20 p-8 shadow-xl">
                                <div className="mb-6 flex h-20 w-20 items-center justify-center self-center rounded-2xl bg-gray-200 text-5xl">
                                    ⚡
                                </div>
                                <h3 className="mb-4 text-2xl font-bold">
                                    Speed
                                </h3>
                                <p className="font-light text-slate-700">
                                    Instant reporting, rapid municipal response
                                </p>
                            </div>

                            <div className="flex flex-col items-start rounded-3xl border border-white/20 p-8 shadow-xl">
                                <div className="mb-6 flex h-20 w-20 items-center justify-center self-center rounded-2xl bg-gray-200 text-5xl">
                                    🔍
                                </div>
                                <h3 className="mb-4 text-2xl font-bold">
                                    Transparency
                                </h3>
                                <p className="font-light text-slate-700">
                                    Public status updates for every report
                                </p>
                            </div>

                            <div className="flex flex-col items-start rounded-3xl border border-white/20 p-8 shadow-xl">
                                <div className="bg-gray-20 mb-6 flex h-20 w-20 items-center justify-center self-center rounded-2xl bg-gray-200 text-5xl">
                                    🤝
                                </div>
                                <h3 className="mb-4 text-2xl font-bold">
                                    Community
                                </h3>
                                <p className="font-light text-slate-700">
                                    Designed with and for Daanbantayan residents
                                </p>
                            </div>

                            <div className="flex flex-col items-start rounded-3xl border border-white/20 p-8 shadow-xl">
                                <div className="bg-gray-20 mb-6 flex h-20 w-20 items-center justify-center self-center rounded-2xl bg-gray-200 text-5xl">
                                    ♻
                                </div>
                                <h3 className="mb-4 text-2xl font-bold">
                                    Sustainability
                                </h3>
                                <p className="font-light text-slate-700">
                                    Building a cleaner, healthier municipality
                                    for the future
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer-like closing note */}
                <section className="relative py-20 text-center md:py-28">
                    <div className="mx-auto max-w-4xl px-6">
                        <p className="text-xl leading-relaxed font-light md:text-2xl">
                            WasteWatch helps keep Daanbantayan clean, safe, and
                            beautiful. Every report makes a difference.
                        </p>
                    </div>
                </section>
            </div>
        </AppLayout>
    );
}
