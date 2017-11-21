import React from 'react';
import Saved from './pages/saved';
import Articles from './pages/Articles';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


const App = () => {
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Articles} />
        <Route exact path="/articles" component={Articles} />
        <Route exact path="/saved" component={Saved} />
      </Switch>
    </div>
  </Router>
};

export default App;
