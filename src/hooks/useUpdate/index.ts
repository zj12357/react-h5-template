/**
 * @description: 强制组件重新渲染 ;
 * @param {*}
 * @return {*}
 * @author: Full
 */

import { useCallback, useState } from 'react';

const useUpdate = () => {
    const [, setState] = useState({});

    return useCallback(() => setState({}), []);
};

export default useUpdate;
