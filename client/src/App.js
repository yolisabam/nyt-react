import React from 'react';
import Search from './pages/Search';
import Article from './components/Article';
import API from "./utils/API";
import Form from "./components/Form";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


const App = () => {
  return (
  <Router>
    <div>
      <Search/>
    </div>
  </Router>
  )
};

export default App;

 // <Switch>
 //        <Route exact path="/" component={Articles} />
 //        <Route exact path="/articles" component={Articles} />
 //        <Route exact path="/saved" component={Saved} />
 //      </Switch>
