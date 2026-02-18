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
            <div className="flex h-full flex-1 flex-col justify-center gap-4 overflow-x-auto rounded-xl border-2 border-gray-400 p-4">
                <section className="relative px-5 pt-24 pb-20 sm:px-8 md:pt-32 md:pb-32">
                    <div className="relative z-10 mx-auto max-w-6xl text-center">
                        <div className="bg-glass mb-10 inline-flex items-center gap-3 rounded-full border border-white/20 px-7 py-4 shadow-2xl backdrop-blur-lg">
                            <span className="text-sm font-semibold tracking-widest uppercase">
                                Municipality of Daanbantayan
                            </span>
                        </div>

                        <h1 className="mb-8 text-5xl leading-none font-extrabold tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
                            <span className="bg-gradient-to-r from-green-500 to-yellow-600 bg-clip-text text-transparent">
                                WasteWatch
                            </span>
                        </h1>

                        <p className="mx-auto max-w-3xl text-lg leading-relaxed font-light text-slate-700 sm:text-xl md:text-2xl">
                            Real-time waste reporting for the Municipality of
                            Daanbantayan — simple, transparent, and direct to
                            the municipal team.
                        </p>
                    </div>
                </section>

                {/* Mission / Purpose  */}
                <section className="relative py-24 md:py-32">
                    <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-2">
                        <div className="space-y-10">
                            <h2 className="from-primaryDark bg-gradient-to-r to-primary bg-clip-text text-4xl leading-tight font-extrabold text-transparent sm:text-5xl lg:text-6xl">
                                A cleaner Daanbantayan — together.
                            </h2>

                            <p className="text-lg leading-relaxed font-light text-slate-700 md:text-xl">
                                WasteWatch allows every resident to report
                                garbage piles, illegal dumpsites, clogged
                                drainage, and other environmental concerns
                                directly to the municipal environment and
                                engineering offices — with public status
                                tracking visible to all.
                            </p>

                            <div className="grid grid-cols-2 gap-10 pt-8">
                                <div className="text-center">
                                    <div className="text-6xl font-black text-primary">
                                        12,000+
                                    </div>
                                    <div className="mt-2 text-lg text-slate-600">
                                        Reports submitted
                                    </div>
                                </div>
                                <div className="text-center">
                                    <div className="text-6xl font-black text-primary">
                                        81%
                                    </div>
                                    <div className="mt-2 text-lg text-slate-600">
                                        Resolution rate
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-glass relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/15 shadow-2xl backdrop-blur-2xl lg:aspect-square">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/15"></div>
                            <div className="absolute inset-0 flex items-center justify-center px-10 text-center text-white">
                                <div>
                                    <div className="mb-5 text-5xl font-black drop-shadow-2xl sm:text-6xl">
                                        Visible Change
                                    </div>
                                    <p className="text-xl font-light opacity-90 sm:text-2xl">
                                        Transparent · Fast · Community-powered
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Values  */}
                <section className="relative bg-gradient-to-b from-transparent via-white/15 to-transparent py-24 md:py-32">
                    <div className="mx-auto max-w-6xl px-6">
                        <h2 className="via-primaryDark mb-16 bg-gradient-to-r from-slate-900 to-primary bg-clip-text text-center text-4xl font-extrabold text-transparent sm:text-5xl lg:text-6xl">
                            Core Values
                        </h2>

                        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                            <div className="bg-glass rounded-3xl border border-white/20 p-8 shadow-xl backdrop-blur-xl">
                                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10 text-5xl">
                                    ⚡
                                </div>
                                <h3 className="mb-4 text-2xl font-bold">
                                    Speed
                                </h3>
                                <p className="font-light text-slate-700">
                                    Instant reporting → rapid municipal response
                                </p>
                            </div>

                            <div className="bg-glass rounded-3xl border border-white/20 p-8 shadow-xl backdrop-blur-xl">
                                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10 text-5xl">
                                    🔍
                                </div>
                                <h3 className="mb-4 text-2xl font-bold">
                                    Transparency
                                </h3>
                                <p className="font-light text-slate-700">
                                    Public status updates for every report
                                </p>
                            </div>

                            <div className="bg-glass rounded-3xl border border-white/20 p-8 shadow-xl backdrop-blur-xl">
                                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10 text-5xl">
                                    🤝
                                </div>
                                <h3 className="mb-4 text-2xl font-bold">
                                    Community
                                </h3>
                                <p className="font-light text-slate-700">
                                    Designed with and for Daanbantayan residents
                                </p>
                            </div>

                            <div className="bg-glass rounded-3xl border border-white/20 p-8 shadow-xl backdrop-blur-xl">
                                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10 text-5xl">
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
                        <p className="text-xl leading-relaxed font-light text-slate-700 md:text-2xl">
                            WasteWatch — because every report helps keep
                            Daanbantayan clean, safe, and beautiful.
                        </p>
                    </div>
                </section>
            </div>
        </AppLayout>
    );
}
