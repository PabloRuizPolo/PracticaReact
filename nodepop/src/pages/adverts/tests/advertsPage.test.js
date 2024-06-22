import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import AdvertsPage from "../advertsPage";
import { addsLoad } from "../../../store/actions";
import userEvent from "@testing-library/user-event";

jest.mock("../../../store/actions");

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
  test(" should dispatch addsLoad()", async () => {
    renderComponents();

    expect(addsLoad).toHaveBeenCalled();

    const textFilter = screen.findByLabelText("Buscar");
    //const actionFilter = screen.findByRole("textbox");

    //userEvent.click(actionFilter);
    await userEvent.type(textFilter);
  });
});
