import Loadable from 'react-loadable';
/**Presentatioanl */
import Loading from './Loading';

const AsyncHome = Loadable({
    loader: () => import('../containers/Home'),
    loading: Loading,
});

const AsyncAbout = Loadable({
    loader: () => import('../containers/About'),
    loading: Loading,
});

const AsyncContact = Loadable({
    loader: () => import('../containers/Contact'),
    loading: Loading,
});

const AsyncDisplay = Loadable({
    loader: () => import('../containers/Basics/Display'),
    loading: Loading,
})

const AsyncPosition = Loadable({
    loader: () => import('../containers/Basics/Position'),
    loading: Loading,
})

const PublicRoutes = [
    {
        title: 'Home',
        path: '/',
        component: AsyncHome,
        exact: true
    },
    {
        title: 'About',
        path: '/about',
        component: AsyncAbout,
        exact: true
    },
    {
        title: 'Contact',
        path: '/contact',
        component: AsyncContact,
        exact: true
    },
    {
        title: 'Display',
        path: '/display',
        component: AsyncDisplay,
        exact: true
    },
    {
        title: 'Position',
        path: '/position',
        component: AsyncPosition,
        exact: true
    },
];

export default PublicRoutes;