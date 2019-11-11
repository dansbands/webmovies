import React from "react";
import "./App.css";
import { Router, Switch, Route } from 'react-router';
import { createBrowserHistory } from "history";

import Main from "./containers/Main";
import Movie from "./containers/Movie";

const App = (props) => {
  console.log({props});

  const customHistory = createBrowserHistory();

  return (
    <div className="App">
        <Router history={customHistory}>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/movies/:id" component={Movie} />
          </Switch>
        </Router>
    </div>
  );
};

export default App;
