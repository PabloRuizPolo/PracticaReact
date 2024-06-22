import { render } from "@testing-library/react";

import AdvertPage from "../advertPage";
import { Provider } from "react-redux";

describe("advertPage", () => {
  const state = {
    adds: {
      loaded: false,
      data: [],
    },
  };
  const store = {
    getState: () => state,
    dispatch: () => {},
    subscribe: () => {},
  };
  const renderComponents = () =>
    render(
      <Provider store={store}>
        <AdvertPage />
      </Provider>
    );

  test("snapshot", () => {
    const { container } = renderComponents();
    expect(container).toMatchSnapshot();
  });
});
