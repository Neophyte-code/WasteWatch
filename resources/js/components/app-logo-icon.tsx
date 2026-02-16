import type { ImgHTMLAttributes } from 'react';

export default function AppLogoIcon(
    props: ImgHTMLAttributes<HTMLImageElement>,
) {
    return (
        <img
            {...props}
            src="/images/logo.png"
            alt="Logo"
            className={props.className || 'h-8 w-8'}
        />
    );
}
