import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import LoginPage from './routes/login';
import Dashboard from './routes/dashboard';
import Posts from './routes/posts';
import PostEdit from './routes/posts/edit';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/login" exact component={LoginPage} />
        <IndexPage>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/posts" exact component={Posts} />
          <Route path="/posts/:id/edit" exact component={PostEdit} />
          <Route path="/posts/write" exact component={PostEdit} />
        </IndexPage>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
