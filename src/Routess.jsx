import React from 'react';
import { Route, useHistory, Switch } from 'react-router-dom';
import { Security, SecureRoute, LoginCallback } from '@okta/okta-react';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import Home from './components/Home';
import SignIn from './components/auth/SignIn';
import Profile from './components/Profile';
import { oktaSignInConfig, oktaAuthConfig } from './config/authConfig';

const oktaAuth = new OktaAuth(oktaAuthConfig);

const Routess = () => {
  const history = useHistory();

  const customAuthHandler = () => {
    history.push('/login');
  };

  const restoreOriginalUri = async (_oktaAuth, originalUri) => {
    history.replace(toRelativeUrl(originalUri, window.location.origin));
  };

  return (
    <Security
      oktaAuth={oktaAuth}
      onAuthRequired={customAuthHandler}
      restoreOriginalUri={restoreOriginalUri}
    >
      <Switch>
        <Route path='/' exact={true} component={Home} />
        <SecureRoute path='/profile' component={Profile} />
        <Route path='/login' render={() => <SignIn config={oktaSignInConfig} />} />
        <Route path='/login/callback' component={LoginCallback} />
      </Switch>
    </Security>
  );
};
export default Routess;
