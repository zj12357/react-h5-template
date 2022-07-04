/// <reference types="react-scripts" />
declare module 'react-helmet-async';

interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: any;
}

declare module '*.bmp' {
    const src: string;
    export default src;
}

declare module '*.gif' {
    const src: string;
    export default src;
}

declare module '*.jpg' {
    const src: string;
    export default src;
}

declare module '*.jpeg' {
    const src: string;
    export default src;
}

declare module '*.png' {
    const src: string;
    export default src;
}

declare module '*.webp' {
    const src: string;
    export default src;
}

declare module '*.svg' {
    import * as React from 'react';

    export const ReactComponent: React.FunctionComponent<
        React.SVGProps<SVGSVGElement> & { title?: string }
    >;

    const src: string;
    export default src;
}

declare module '*.mp4' {
    const src: string;
    export default src;
}
declare module '*.mp3' {
    const src: string;
    export default src;
}

declare module '*.css' {
    const classes: { readonly [key: string]: string };
    export default classes;
}

declare module '*.scss' {
    const classes: { readonly [key: string]: string };
    export default classes;
}
declare module '*.scoped.scss' {
    const classes: { readonly [key: string]: string };
    export default classes;
}

declare module '*.less' {
    const classes: { readonly [key: string]: string };
    export default classes;
}

declare module 'swiper/js/swiper.js';
