/*
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
 */
import React, { FC, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { MixRouteConfig } from './router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

NProgress.configure({ showSpinner: false });

interface Props extends MixRouteConfig {}

const FancyRoute: FC<Props> = (props) => {
    useEffect(() => {
        NProgress.done();
        return (): any => NProgress.start();
    }, []);
    return <Route {...props} />;
};

export default FancyRoute;
