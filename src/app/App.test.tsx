import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import { initialState } from "app/pages/Home/slice";

import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("With React Testing Library", () => {
  let store, wrapper;

  it("It renders App", () => {
    store = mockStore(initialState);
    const { getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });
});
