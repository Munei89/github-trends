import { createContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "app/pages/Home";

import "./App.css";

export const AuthContext = createContext("");

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
