import React from 'react';

import { Switch, Route, Link } from 'react-router-dom';

import Home from './Home';
import Profile from './Profile';
import Signup from './Signup';
import Error404 from './Error404';

const Pages = () => {
  return (
    <div>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/fourOhFour">Error404</Link>
      </ul>

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
