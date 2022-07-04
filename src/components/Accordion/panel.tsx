/* eslint-disable import/no-unresolved, no-unused-vars, import/extensions */
import React, { useContext } from 'react';
import PanelContext from './panel-context';
import { PanelProps } from './types/index';

const Panel: React.FunctionComponent<PanelProps> = ({
    children,
    background,
    itemId,
}) => {
    const { activePanel, panelClick } = useContext(PanelContext);

    return (
        <div
            id={itemId}
            data-testid="panel"
            className={`panel${
                activePanel === itemId ? ' open open-active' : ''
            }`}
            style={{
                backgroundImage: `url("${background}")`,
            }}
            onClick={() => panelClick(itemId)}
            // onMouseOver={() => panelClick(itemId)}
            // onKeyDown={() => panelClick(itemId)}
            role="button"
            tabIndex={0}
        >
            {children}
        </div>
    );
};

export default Panel;
