import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import Profile from './Profile';
import Signup from './Signup';
import Error404 from './Error404';

const Pages = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/signup" component={Signup} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
};

export default Pages;
