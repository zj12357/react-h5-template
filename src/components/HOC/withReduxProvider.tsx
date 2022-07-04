import React from 'react';
import { ComponentType } from 'react';
import { Provider } from 'react-redux';
import { AnyAction, Store } from '@reduxjs/toolkit';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from '@/store';

export default function withReduxProvider<Props, Action = AnyAction>(
    store: Store<Action>,
) {
    return (WrappedComponent: ComponentType<Props>) => {
        const Component: ComponentType<Props> = (props) => (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <WrappedComponent {...props} />
                </PersistGate>
            </Provider>
        );

        Component.displayName = `withReduxProvider(${
            WrappedComponent.displayName || WrappedComponent.name
        })`;

        return Component;
    };
}
