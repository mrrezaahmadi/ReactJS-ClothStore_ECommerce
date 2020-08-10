import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './views/homepage/homepage.component';
import ShopPage from './views/shop/shop.component';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;