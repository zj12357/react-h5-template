/**
 * @description: localStorage ;
 * @param {*}
 * @return {*}
 * @author: Full
 */

const formValueObj = (value: any) => ({ value });
const getRealVal = (obj: any) => obj && obj.value;

export const Cache = {
    localGet(key: any) {
        if (window.localStorage.getItem(key)) {
            return getRealVal(
                JSON.parse(window.localStorage.getItem(key) || ''),
            );
        } else {
            return null;
        }
    },
    localSet(key: any, value: any) {
        window.localStorage.setItem(key, JSON.stringify(formValueObj(value)));
    },
    localRemove(key: any) {
        window.localStorage.removeItem(key);
    },
    localClear() {
        window.localStorage.clear();
    },
};

export default Cache;
