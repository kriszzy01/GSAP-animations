import React, { useEffect } from "react";
import { Header } from "./blocks/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { textIntro } from "./utils";

export const App: React.FC = () => {
  useEffect(() => {
    textIntro(".intro");
  }, []);

  return (
    <Router>
      <Header />

      <main>
        <Switch></Switch>
      </main>

      <div>
        <h5 className="intro">
          The <b>SHOPPER</b>, is a worldclass, innovative, global online
          ecommerce platform, that meets your everyday daily needs.
        </h5>
      </div>
    </Router>
  );
};
