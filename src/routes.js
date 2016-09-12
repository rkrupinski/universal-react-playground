import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Layout from './components/Layout';
import Home from './components/home';
import People from './components/people';
import NotFound from './components/notFound';

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={Home} />
    <Route path="people" component={People} />
    <Route path="*" component={NotFound} />
  </Route>
);

export default routes;
