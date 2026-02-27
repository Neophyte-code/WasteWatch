import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../css/app.css';
import { initializeTheme } from './hooks/use-appearance';
import { createSystem, defaultConfig, ChakraProvider } from '@chakra-ui/react';
import 'leaflet/dist/leaflet.css';
import { route } from 'ziggy-js';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

const customSystem = createSystem(defaultConfig, {
    preflight: false,

    globalCss: {
        'html, body': {
            margin: 0,
            padding: 0,
        },
    },
});
createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),
    resolve: (name) =>
        resolvePageComponent(
            `./pages/${name}.tsx`,
            import.meta.glob('./pages/**/*.tsx'),
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        (window as any).route = (
            name: any,
            params: any,
            absolute: any,
            config: any = props.initialPage.props.ziggy,
        ) => route(name, params, absolute, config) as unknown as string;

        root.render(
            <StrictMode>
                <ChakraProvider value={customSystem}>
                    <App {...props} />
                </ChakraProvider>
            </StrictMode>,
        );
    },
    progress: {
        color: '#4B5563',
    },
});

// This will set light / dark mode on load...
initializeTheme();
