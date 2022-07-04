/*
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
 */
import React from 'react';
import { RouteConfig } from 'react-router-config';
import { Redirect } from 'react-router-dom';
import mateInfo from '@/common/mateInfo';

const Home = React.lazy(() => import('../pages/Home'));

const NotFound = React.lazy(() => import('../pages/NotFound'));

export interface MixRouteConfig extends RouteConfig {
    title?: string;
    description?: string;
    requiresAuth?: boolean; //登录权限拦截
    showHeader?: boolean;
    showFooter?: boolean;
}

const routes: MixRouteConfig[] = [
    {
        path: '/',
        exact: true,
        requiresAuth: false,
        showHeader: true,
        showFooter: true,
        component: () => <Redirect to="/home"></Redirect>,
    },

    {
        path: '/home',
        exact: true,
        component: Home,
        requiresAuth: false,
        title: mateInfo.home.title,
        description: mateInfo.home.description,
        showHeader: true,
        showFooter: true,
    },

    {
        path: '*',
        exact: true,
        requiresAuth: false,
        component: NotFound,
        showHeader: false,
        showFooter: false,
    },
];

export default routes;
