import React from 'react';

const Dashboard = React.lazy(() => import('../container/Dashboard'));

const routes = [
  {
    path: '/',
    exact: true,
    name: 'Dashboard',
    component: Dashboard
  }
];

export default routes;