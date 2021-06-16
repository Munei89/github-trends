import { render, screen } from "@testing-library/react";

import Home from "../Home";
import { initialState } from "../slice";

import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("With React Testing Library", () => {
  let store, wrapper;

  it("Shows Repositories", () => {
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    expect(screen.getByText("Repositeries")).toBeInTheDocument();
  });

  it("Shows Developers", () => {
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    expect(screen.getByText("Developers")).toBeInTheDocument();
  });
});
