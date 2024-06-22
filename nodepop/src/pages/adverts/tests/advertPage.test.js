import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import AdvertPage from "../advertPage";
import { Provider } from "react-redux";
import { addLoad } from "../../../store/actions";

jest.mock("../../../store/actions");

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
  /*
  test(" should dispatch addLoad()", () => {
    renderComponents();

    //const textFilter = screen.getByPlaceholderText(/buscar\.anuncio\.\.\./i);
    const actionFilter = screen.getByTestId(2);

    userEvent.click(actionFilter);
    //userEvent.type(textFilter);

    expect(addLoad).toHaveBeenCalled();
  });*/
});
