import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch } from 'react-router-dom';

import Guide from './components/pages/Guide';
import Home from './components/pages/Home';


class App extends Component {

  render() {


    return (
      <div className="App">
      <Router>
        <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/guide' component={Guide} />
            <Route component={Home} />
          </Switch>
        </div>
      </Router>
      </div>
    );
  }
}

export default App;
