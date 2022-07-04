import React, { ComponentType, FC } from 'react';
import { HelmetProvider } from 'react-helmet-async';

// seo 优化
export default function withHelmet<Props>(
    WrappedComponent: ComponentType<Props>,
) {
    const Component: FC<Props> = (props) => (
        <HelmetProvider>
            <WrappedComponent {...props} />
        </HelmetProvider>
    );

    Component.displayName = `withHelmet(${
        WrappedComponent.displayName || WrappedComponent.name
    })`;

    return Component;
}
