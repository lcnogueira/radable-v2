import React from 'react';
import { Switch, Route } from 'react-router-dom';

import CategoryPage from '../pages/CategoryPage';
import NewPost from '../pages/NewPost';
import EditPost from '../pages/EditPost';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/:category?" component={CategoryPage} />
      <Route exact path="/post/create" component={NewPost} />
      <Route exact path="/post/edit/:id" component={EditPost} />
    </Switch>
  );
}
