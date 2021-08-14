import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, Wufo, WufoRoster, Lawufa, LawufaRoster, Buf } from "../src";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/wufo" exact component={() => <Wufo />} />
          <Route path="/wufo-roster" exact component={() => <WufoRoster />} />
          <Route path="/lawufa" exact component={() => <Lawufa />} />
          <Route path="/lawufa-roster" exact component={() => <LawufaRoster />} />
          <Route path="/buf" exact component={() => <Buf />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
