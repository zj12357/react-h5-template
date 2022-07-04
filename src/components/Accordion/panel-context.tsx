/* eslint-disable react/forbid-prop-types, no-unused-vars, import/no-unresolved, import/extensions */
import React, { useState } from 'react';
import {
    PanelClickFn,
    PanelContextProps,
    PanelProviderProps,
} from './types/index';

const PanelContext = React.createContext<PanelContextProps>({
    activePanel: '-1',
    panelClick: (itemId) => null,
});

export const PanelContextProvider: React.FC<PanelProviderProps> = ({
    children,
}) => {
    const [activePanel, setActivePanel] = useState('0');

    const panelClick: PanelClickFn = (itemId) => {
        const value: string = itemId === activePanel ? '0' : itemId;
        setActivePanel(value);
        return null;
    };

    return (
        <PanelContext.Provider
            value={{
                panelClick,
                activePanel,
            }}
        >
            {children}
        </PanelContext.Provider>
    );
};

export default PanelContext;
