import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Minu from "./components/Minu";
import FetchDemo from "./pages/FetchDemo";
function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/fetch" component={FetchDemo} />
        <Route path="/minu" component={Minu} />
      </Switch>
    </HashRouter>
  );
}

export default App;
