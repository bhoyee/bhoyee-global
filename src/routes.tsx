import { lazy, Suspense } from 'react';
import type { ReactNode } from 'react';

const Home = lazy(() => import('@/pages/Home'));
const About = lazy(() => import('@/pages/About'));
const Services = lazy(() => import('@/pages/Services'));
const Contact = lazy(() => import('@/pages/Contact'));
const NotFound = lazy(() => import('@/pages/NotFound'));

interface RouteConfig {
  name: string;
  path: string;
  element: ReactNode;
  visible?: boolean;
}

const routes: RouteConfig[] = [
  {
    name: 'Home',
    path: '/',
    element: (
      <Suspense fallback={null}>
        <Home />
      </Suspense>
    ),
  },
  {
    name: 'About',
    path: '/about',
    element: (
      <Suspense fallback={null}>
        <About />
      </Suspense>
    ),
  },
  {
    name: 'Services',
    path: '/services',
    element: (
      <Suspense fallback={null}>
        <Services />
      </Suspense>
    ),
  },
  {
    name: 'Contact',
    path: '/contact',
    element: (
      <Suspense fallback={null}>
        <Contact />
      </Suspense>
    ),
  },
  {
    name: 'Not Found',
    path: '*',
    element: (
      <Suspense fallback={null}>
        <NotFound />
      </Suspense>
    ),
    visible: false,
  },
];

export default routes;
