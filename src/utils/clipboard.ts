/**
 * @description: 复制 ;
 * @param {*}
 * @return {*}
 * @author: Full
 */

import { MouseEvent } from 'react';
import Clipboard from 'clipboard';

export const clipboardSuccess = () => {};

export const clipboardError = () => {};

export const handleClipboard = (text: string, event: MouseEvent) => {
    const clipboard = new Clipboard(event.target as Element, {
        text: () => text,
    });
    clipboard.on('success', () => {
        clipboardSuccess();
        clipboard.destroy();
    });
    clipboard.on('error', () => {
        clipboardError();
        clipboard.destroy();
    });
    (clipboard as any).onClick(event);
};
