import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Logon, Register } from './pages';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Logon} />
        <Route path="/register" component={Register} />
      </Switch>
    </BrowserRouter>
  );
}
