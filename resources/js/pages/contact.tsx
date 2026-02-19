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
            <Head title="Contact" />
            <div className="flex h-full flex-1 flex-col justify-center gap-4 overflow-x-auto rounded-xl p-4">
                {/* Header / Hero Section */}
                <section className="relative overflow-hidden bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 pt-16 pb-20 text-white md:pt-20 md:pb-28">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.2)_0%,transparent_50%)]"></div>
                    </div>

                    <div className="relative mx-auto max-w-7xl px-5 text-center sm:px-8 lg:px-12">
                        <h1 className="mb-5 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                            Get in Touch
                        </h1>
                        <p className="mx-auto max-w-3xl text-lg leading-relaxed text-emerald-50/90 md:text-xl">
                            Have a waste issue to report or need help with our
                            platform? We're here to help keep our city clean and
                            beautiful.
                        </p>
                    </div>
                </section>
                {/* Main Content  */}
                <section className="py-16 md:py-24">
                    <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
                        <div className="grid items-start gap-12 lg:grid-cols-2 xl:gap-16">
                            {/* Contact Information and Form  */}
                            <div className="space-y-12">
                                {/* Contact Cards */}
                                <div className="grid gap-6 sm:grid-cols-2">
                                    <div className="group rounded-2xl border border-gray-100 bg-white p-7 shadow-lg shadow-emerald-100/40 transition-all duration-300 hover:border-emerald-200">
                                        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 transition-colors group-hover:bg-emerald-600 group-hover:text-white">
                                            <i className="fas fa-phone-volume text-2xl"></i>
                                        </div>
                                        <h3 className="mb-2 text-xl font-semibold text-gray-800">
                                            Call Us
                                        </h3>
                                        <p className="text-gray-600">
                                            Mon–Fri 8:00–18:00
                                        </p>
                                        <a
                                            href="tel:+421248112233"
                                            className="mt-1 block font-medium text-emerald-600 hover:text-emerald-700"
                                        >
                                            +421 2 4811 2233
                                        </a>
                                    </div>

                                    <div className="group rounded-2xl border border-gray-100 bg-white p-7 shadow-lg shadow-emerald-100/40 transition-all duration-300 hover:border-emerald-200">
                                        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 transition-colors group-hover:bg-emerald-600 group-hover:text-white">
                                            <i className="fas fa-envelope text-2xl"></i>
                                        </div>
                                        <h3 className="mb-2 text-xl font-semibold text-gray-800">
                                            Email
                                        </h3>
                                        <p className="text-gray-600">
                                            We reply within 24 hours
                                        </p>
                                        <a
                                            href="mailto:support@cleancity.report"
                                            className="mt-1 block font-medium text-emerald-600 hover:text-emerald-700"
                                        >
                                            support@cleancity.report
                                        </a>
                                    </div>
                                </div>

                                {/* Contact Form  */}
                                <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-xl shadow-gray-200/30 lg:p-10">
                                    <h2 className="mb-7 text-2xl font-bold text-gray-800">
                                        Send us a message
                                    </h2>

                                    <form className="space-y-6">
                                        <div className="grid gap-6 sm:grid-cols-2">
                                            <div>
                                                <label className="mb-2 block text-sm font-medium text-gray-700">
                                                    Full Name
                                                </label>
                                                <input
                                                    type="text"
                                                    className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-all outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500"
                                                    placeholder="John Doe"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label className="mb-2 block text-sm font-medium text-gray-700">
                                                    Email
                                                </label>
                                                <input
                                                    type="email"
                                                    className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-all outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500"
                                                    placeholder="you@example.com"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="mb-2 block text-sm font-medium text-gray-700">
                                                Subject
                                            </label>
                                            <select className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 transition-all outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500">
                                                <option>
                                                    General Question
                                                </option>
                                                <option>
                                                    Problem with reporting
                                                </option>
                                                <option>
                                                    Urgent waste incident
                                                </option>
                                                <option>
                                                    Partnership / Media
                                                </option>
                                                <option>Other</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label className="mb-2 block text-sm font-medium text-gray-700">
                                                Message
                                            </label>
                                            <textarea
                                                className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 transition-all outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500"
                                                placeholder="Describe the issue or your question..."
                                            ></textarea>
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full transform rounded-xl bg-emerald-600 px-8 py-4 font-medium text-white shadow-lg shadow-emerald-200/40 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-emerald-300/50"
                                        >
                                            Send Message →
                                        </button>
                                    </form>
                                </div>
                            </div>

                            {/* Map  */}
                            <div className="space-y-8 lg:sticky lg:top-8">
                                <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xl shadow-gray-200/40">
                                    <div className="border-b border-gray-100 p-6">
                                        <h3 className="text-xl font-semibold text-gray-800">
                                            Our Office
                                        </h3>
                                        <p className="mt-1 text-gray-600">
                                            Municipal Waste Management Center
                                        </p>
                                    </div>
                                    <div className="map-container h-96 lg:h-[480px]">
                                        <iframe
                                            className="h-full w-full border-0"
                                            loading="lazy"
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.991625678456!2d2.352221776712955!3d48.85661410000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C%20France!5e0!3m2!1sen!2sus!4v1698765432100!5m2!1sen!2sus"
                                        ></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </AppLayout>
    );
}
