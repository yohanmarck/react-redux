/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './style.scss';

const App = () => (
  <div className="app-wrapper">
    <Switch>
      <Route exact path="/" component={() => <div>homepage</div>} />
    </Switch>
  </div>
);

export default App;
