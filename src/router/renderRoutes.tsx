/*
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
 */
import React from 'react';
import { Switch } from 'react-router-dom';
import { MixRouteConfig } from './router';
import DefaultLayout from '@/layouts/DefaultLayout';
import FancyRoute from './FancyRoute';

const renderRoutes = (routes: MixRouteConfig[]) =>
    routes ? (
        <Switch>
            {routes.map((route, index): JSX.Element => {
                const Component = route.component as any;

                const DefaultPage = (props: any) => (
                    <DefaultLayout route={route}>
                        <Component {...props} route={route}></Component>
                    </DefaultLayout>
                );

                return (
                    <FancyRoute
                        key={route.key || index}
                        path={route.path}
                        exact={route.exact}
                        strict={route.strict}
                        render={(props) => {
                            return DefaultPage(props);
                        }}
                    />
                );
            })}
        </Switch>
    ) : null;

export default renderRoutes;
