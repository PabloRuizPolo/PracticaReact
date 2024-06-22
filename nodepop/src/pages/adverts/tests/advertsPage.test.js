import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import AdvertsPage from "../advertsPage";

describe("AdvertsPage", () => {
  const state = {
    adds: {
      loaded: false,
      data: [],
    },
    tags: [],
    ui: {
      pending: false,
      error: null,
    },
  };

  const store = {
    subscribe: () => {},
    getState: () => state,
    dispatch: () => {},
  };

  const renderComponents = () =>
    render(
      <Provider store={store}>
        <AdvertsPage />
      </Provider>
    );

  test("snapshot", () => {
    const { container } = renderComponents();
    expect(container).toMatchSnapshot();
  });
});
