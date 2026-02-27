import type { Auth } from '@/types/auth';

export {};

declare global {
    function route(routeName: string, parameters?: any[] | any, absolute? = true): string
}

declare module '@inertiajs/core' {
    export interface InertiaConfig {
        sharedPageProps: {
            name: string;
            auth: Auth;
            sidebarOpen: boolean;
            [key: string]: unknown;
        };
    }
}
