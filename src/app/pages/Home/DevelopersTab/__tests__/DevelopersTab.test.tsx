import { render } from "@testing-library/react";

import DevelpersTab from "../DeveloperTab";
import { initialState } from "../../slice";
import { developers } from "../../mockState";

import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("With React Testing Library", () => {
  let store, wrapper;

  it("Loads Developers Tab", () => {
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <DevelpersTab developers={developers} loading={false} />
      </Provider>
    );
  });
});
