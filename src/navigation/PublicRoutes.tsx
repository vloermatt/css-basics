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
});

const AsyncPosition = Loadable({
  loader: () => import('../containers/Basics/Position'),
  loading: Loading,
});
const AsyncFloat = Loadable({
  loader: () => import('../containers/Basics/Float'),
  loading: Loading,
});
const AsyncPadding = Loadable({
  loader: () => import('../containers/Basics/Padding'),
  loading: Loading,
});
const AsyncTextAlign = Loadable({
  loader: () => import('../containers/Basics/TextAlign'),
  loading: Loading,
});

const PublicRoutes = [
  {
    title: 'Home',
    path: '/',
    component: AsyncHome,
    exact: true,
  },
  {
    title: 'About',
    path: '/about',
    component: AsyncAbout,
    exact: true,
  },
  {
    title: 'Contact',
    path: '/contact',
    component: AsyncContact,
    exact: true,
  },
  {
    title: 'Display',
    path: '/display',
    component: AsyncDisplay,
    exact: true,
  },
  {
    title: 'Position',
    path: '/position',
    component: AsyncPosition,
    exact: true,
  },
  {
    title: 'Float',
    path: '/float',
    component: AsyncFloat,
    exact: true,
  },
  {
    title: 'Padding',
    path: '/padding',
    component: AsyncPadding,
  },
  {
    title: 'Text Align',
    path: '/text-align',
    component: AsyncTextAlign,
  },
];

export default PublicRoutes;
