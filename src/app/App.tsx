import { createContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "app/pages/Home";
import Login from "app/pages/Login";

import "./App.css";

export const AuthContext = createContext("");

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
