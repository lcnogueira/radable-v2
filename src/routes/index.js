import React from 'react';
import { Switch, Route } from 'react-router-dom';

import CategoryPage from '../pages/CategoryPage';
import NewPost from '../pages/NewPost';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/:category?" component={CategoryPage} />
      <Route exact path="/post/create" component={NewPost} />
    </Switch>
  );
}
