/*
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
 */
import 'mutationobserver-shim'; // 兼容ie8
import cssVars from 'css-vars-ponyfill'; // css var 的垫片
import localforage from 'localforage';
import { ConfigProvider } from 'antd';

export const themeOptions: {
    dark: {
        [key: string]: string;
    };
    light: {
        [key: string]: string;
    };
} = {
    // 浅色
    light: {
        '--m-theme-bg-color': '#f8413d',
        '--m-theme-font-color': '#ffffff',
    },
    // 深色
    dark: {
        '--m-theme-bg-color': '#1a2944',
        '--m-theme-font-color': 'red',
    },
};

export const initTheme = (theme: 'dark' | 'light') => {
    document.documentElement.setAttribute('data-theme', theme);
    cssVars({
        rootElement: document,
        silent: true,
        watch: true,
        // variables 自定义属性名/值对的集合
        variables: themeOptions[theme],
        // 当添加，删除或修改其<link>或<style>元素的禁用或href属性时，ponyfill将自行调用
        onlyLegacy: false, // false 默认将css变量编译为浏览器识别的css样式 true 当浏览器不支持css变量的时候将css变量编译为识别的css
    });
    ConfigProvider.config({
        theme: {
            primaryColor: themeOptions[theme]['--m-theme-bg-color'],
        },
    });
    localforage.setItem('mtheme', theme);
};
