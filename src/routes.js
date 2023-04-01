import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import ProductListPage from './pages/ProductListPage/ProductListPage';
import ProductActionPage from './pages/ProductActionPage/ProductActionPage';
import CartContainer from './containers/CartContainer';
import Contact from './pages/Contact/Contact';
const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage />,
    },
    {
        path: '/contact',
        exact: false,
        main: () => <Contact></Contact>,
    },
    {
        path: '/cart',
        exact: false,
        main: () => <CartContainer></CartContainer>,
    },
    {
        path: '/product-list',
        exact: false,
        main: () => <ProductListPage />,
    },
    {
        path: '/product/add',
        exact: false,
        main: ({ history }) => <ProductActionPage history={history} />,
    },
    {
        path: '/product/:id/edit',
        exact: false,
        main: ({ match, history }) => <ProductActionPage match={match} history={history} />,
    },
    {
        path: '',
        exact: false,
        main: () => <NotFoundPage />,
    },
];

export default routes;
