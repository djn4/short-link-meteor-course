import {Meteor} from 'meteor/meteor';
import React    from 'react';
import {BrowserRouter, Router, Route, Switch} from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

import Login    from '../ui/Login';
import Signup   from '../ui/Signup';
import Link     from '../ui/Link';
import NotFound from '../ui/NotFound';

const unauthenticatedPages = ['/', '/signup'];
const authenticatedPages = ['/links'];
const history = createBrowserHistory({
  forceRefresh: true
});
const onEnterPublicPage = () => {
  if(Meteor.userId()) {
      history.push('/links');
  }
};
const onEnterPrivatePage = () => {
  if (!Meteor.userId()) {
    history.push('/');
  }
};

export const onAuthChange = (isAuthenticated) => {
  const pathname = history.location.pathname;
  const IsUnauthenticatedPage = unauthenticatedPages.includes(pathname);
  const isAuthenticatedPage = authenticatedPages.includes(pathname);

   if(IsUnauthenticatedPage && isAuthenticated){
     history.push('/links');
   } else if (isAuthenticatedPage && !isAuthenticated) {
     history.push('/');
   }
};

export const routes = (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={Login}   onEnter={onEnterPublicPage}/>
      <Route path="/signup" component={Signup}  onEnter={onEnterPublicPage}/>
      <Route path="/links"  component={Link}    onEnter={onEnterPrivatePage}/>
      <Route path="*"       component={NotFound}/>
    </Switch>
  </Router>
);
