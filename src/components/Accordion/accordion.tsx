/* eslint-disable react/forbid-prop-types, no-unused-vars, import/no-unresolved, import/extensions */
import React, { useState } from 'react';
import { FullpageAccordionProps } from './types/index';
import { PanelContextProvider } from './panel-context';

const FullpageAccordion: React.FunctionComponent<FullpageAccordionProps> = ({
    children,
    height,
}) => (
    <PanelContextProvider>
        <div
            className="panels"
            data-testid="panels"
            style={{ height: height || '100vh' }}
        >
            {children}
        </div>
    </PanelContextProvider>
);

FullpageAccordion.defaultProps = {
    height: undefined,
};

export default FullpageAccordion;
