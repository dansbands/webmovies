import React from "react";
import "./App.css";
import { Router, Switch, Route } from 'react-router';
import { createBrowserHistory } from "history";

import Main from "./containers/Main";

const App = (props) => {
  console.log({props});

  const customHistory = createBrowserHistory();

  return (
    <div className="App">
      {/*
        <Main />
        */}
        <Router history={customHistory}>
          <Switch>
            <Route path="/" component={Main} />
          </Switch>
        </Router>
    </div>
  );
};

export default App;
