import React, { Suspense, ComponentType } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import routes from './router/router';
import store from './store';
import { compose } from '@reduxjs/toolkit';
import WithHelmet from './components/HOC/withHelmet';
import WithReduxProvider from './components/HOC/withReduxProvider';
import Loading from './components/Loading';
import renderRoutes from './router/renderRoutes';

const RouteComponent = (props: any) => {
    // props接收前面所有高阶组件传过来的值，按需传给要渲染的子组件

    return (
        <Router>
            <Suspense fallback={<Loading></Loading>}>
                <Switch>{renderRoutes(routes)}</Switch>
            </Suspense>
        </Router>
    );
};

// 从右到左依次执行
const renderer: (c: ComponentType) => ComponentType = compose(
    WithReduxProvider(store),
    WithHelmet,
);

const Main = renderer(RouteComponent);

function App() {
    return <Main></Main>;
}

export default App;
