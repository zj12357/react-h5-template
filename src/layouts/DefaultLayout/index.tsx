import { default as React, FC, useState, useEffect, Fragment } from 'react';
import { Helmet } from 'react-helmet-async';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import routes from '@/router/router';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import { MixRouteConfig } from '../../router/router';
interface DefaultLayoutProps extends RouteComponentProps {
    route: MixRouteConfig;
}

// seo优化
const DefaultLayout: FC<DefaultLayoutProps> = (props) => {
    const {
        children,
        location: { pathname },
    } = props;
    const [xtitle, setTitle] = useState<string>('');
    const [xdescription, setDescription] = useState<string>('');

    useEffect(() => {
        const { title, description } =
            routes.filter((item) => {
                return item.path === pathname;
            })[0] || {};
        setTitle(title || '');
        setDescription(description || '');
    }, [pathname]);
    return (
        <Fragment>
            <Helmet>
                <title>{xtitle}</title>
                <meta name="description" content={xdescription} />
            </Helmet>
            {props.route.showHeader && <Header></Header>}
            <main>{children}</main>
            {props.route.showFooter && <Footer></Footer>}
        </Fragment>
    );
};

export default withRouter(DefaultLayout);
