import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Layout } from "antd";
import Header from "app/components/Header";
import store from "./app/store";
import "antd/dist/antd.css";

function render() {
  const App = require("./app/App").default;
  ReactDOM.render(
    <Provider store={store}>
      <Layout>
        <Header />
        <App />
      </Layout>
    </Provider>,
    document.getElementById("root")
  );
}

render();

if (process.env.NODE_ENV === "development" && module.hot) {
  module.hot.accept("./app/App", render);
}
