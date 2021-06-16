import { render, screen } from "@testing-library/react";

import ReposTab from "../ReposTab";
import { initialState } from "../../slice";
import { repos } from "../../mockState";

import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("With React Testing Library", () => {
  let store, wrapper;

  it("Loads Repos Tab", () => {
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <ReposTab repos={repos} loading={false} />
      </Provider>
    );
  });
});
