/*
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
 */

/**
 * @description: 判断设备 ;
 * @param {*}
 * @return {*}
 * @author: Full
 */

export const os = (function () {
    let ua = navigator.userAgent,
        isWindowsPhone = /(?:Windows Phone)/.test(ua),
        isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone,
        isAndroid = /(?:Android)/.test(ua),
        isFireFox = /(?:Firefox)/.test(ua),
        isChrome = /(?:Chrome|CriOS)/.test(ua),
        isTablet =
            /(?:iPad|PlayBook)/.test(ua) ||
            (isAndroid && !/(?:Mobile)/.test(ua)) ||
            (isFireFox && /(?:Tablet)/.test(ua)) ||
            (isChrome && /(?:Tablet)/.test(ua)),
        isPhone = /(?:iPhone)/.test(ua) && !isTablet,
        isPc = !isPhone && !isAndroid && !isSymbian;
    return {
        isTablet: isTablet,
        isPhone: isPhone,
        isAndroid: isAndroid,
        isPc: isPc,
    };
})();

/**
 * @description: 文档高度 ;
 * @param {*}
 * @return {*}
 * @author: Full
 */

export function getDocumentTop() {
    let bodyScrollTop = document.body ? document.body.scrollTop : 0;
    let documentScrollTop = document.documentElement
        ? document.documentElement.scrollTop
        : 0;
    return bodyScrollTop - documentScrollTop > 0
        ? bodyScrollTop
        : documentScrollTop;
}

/**
 * @description: 可视窗口高度 ;
 * @param {*}
 * @return {*}
 * @author: Full
 */
export function getWindowHeight() {
    let windowHeight = 0;

    if (document.compatMode === 'CSS1Compat') {
        windowHeight = document.documentElement.clientHeight;
    } else {
        windowHeight = document.body.clientHeight;
    }
    return windowHeight;
}

/**
 * @description: 滚动条滚动高度 ;
 * @param {*}
 * @return {*}
 * @author: Full
 */
export function getScrollHeight() {
    let bodyScrollHeight = document.body ? document.body.scrollHeight : 0;
    let documentScrollHeight = document.documentElement
        ? document.documentElement.scrollHeight
        : 0;
    return bodyScrollHeight - documentScrollHeight > 0
        ? bodyScrollHeight
        : documentScrollHeight;
}

/**
 * @Description:检查手机号  ;
 * @Param:  ;
 * @Return:  ;
 * @Author: Full
 */
export function isMobile(value: string): boolean {
    value = value.replace(/[^-|\d]/g, '');
    return (
        /^((\+86)|(86))?(1)\d{10}$/.test(value) ||
        /^0[0-9-]{10,13}$/.test(value)
    );
}

/**
 * @Description:  检查时间;
 * @Param:  ;
 * @Return:  ;
 * @Author: Full
 */
export function isDate(val: unknown): val is Date {
    return (
        Object.prototype.toString.call(val) === '[object Date]' &&
        !isNaN((val as Date).getTime())
    );
}

/**
 * @Description:  深度克隆;
 * @Param:  ;
 * @Return:  ;
 * @Author: Full
 */

export function isDef<T>(val: T): val is NonNullable<T> {
    return val !== undefined && val !== null;
}

export function deepClone<T extends Record<string, any> | null | undefined>(
    obj: T,
): T {
    if (!isDef(obj)) {
        return obj;
    }

    if (Array.isArray(obj)) {
        return obj.map((item) => deepClone(item)) as unknown as T;
    }

    if (typeof obj === 'object') {
        const to = {} as Record<string, any>;
        Object.keys(obj).forEach((key) => {
            to[key] = deepClone(obj[key]);
        });

        return to as T;
    }

    return obj;
}

/**
 * @Description:  生成随机数范围;
 * @Param:  ;
 * @Return:  ;
 * @Author: Full
 */
export function range(num: number, min: number, max: number): number {
    return Math.min(Math.max(num, min), max);
}

/**
 * @description: class添加，删除，切换 ;
 * @param {*}
 * @return {*}
 * @author: Full
 */
// Check if an element has a class
export const hasClass = (ele: HTMLElement, className: string) => {
    return !!ele.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
};

// Add class to element
export const addClass = (ele: HTMLElement, className: string) => {
    if (!hasClass(ele, className)) ele.className += ' ' + className;
};

// Remove class from element
export const removeClass = (ele: HTMLElement, className: string) => {
    if (hasClass(ele, className)) {
        const reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
        ele.className = ele.className.replace(reg, ' ');
    }
};

// Toggle class for the selected element
export const toggleClass = (ele: HTMLElement, className: string) => {
    if (!ele || !className) {
        return;
    }
    let classString = ele.className;
    const nameIndex = classString.indexOf(className);
    if (nameIndex === -1) {
        classString += '' + className;
    } else {
        classString =
            classString.substr(0, nameIndex) +
            classString.substr(nameIndex + className.length);
    }
    ele.className = classString;
};

/**
 * @description: 检查是否是方法 ;
 * @param {any} obj
 * @return {*}
 * @author: Full
 */
export function isFunction(obj: any): obj is Function {
    return typeof obj === 'function';
}
