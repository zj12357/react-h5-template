/*
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
 */

import localforage from 'localforage';

const tokenKey = 'token';

export default Object.freeze({
    clearToken() {
        return localforage.removeItem(tokenKey);
    },
    setToken(data: string | null) {
        return localforage.setItem(tokenKey, data || null);
    },
    getToken() {
        return localforage.getItem(tokenKey);
    },
});
