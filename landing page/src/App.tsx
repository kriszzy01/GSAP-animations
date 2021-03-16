import React from "react";
import { Header, Home, Gallary } from "./blocks";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export const App: React.FC = () => {
  return (
    <Router>
      <Header />

      <main>
        <Switch>
          <Route path="/shopper" component={Home} />
          <Route path="/gallary" component={Gallary} />
        </Switch>
      </main>
    </Router>
  );
};
