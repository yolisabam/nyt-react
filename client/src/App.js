import React from 'react';
import Saved from './pages/saved';
import Articles from './pages/Articles';
import Article from './components/Article';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


const App = () => {
  <Router>
    <div>
      <Article 
     title={`Test`}
     date={`11/20/17`}
     url={`https://www.google.com`}
     />
    </div>
  </Router>
};

export default App;

 // <Switch>
 //        <Route exact path="/" component={Articles} />
 //        <Route exact path="/articles" component={Articles} />
 //        <Route exact path="/saved" component={Saved} />
 //      </Switch>
