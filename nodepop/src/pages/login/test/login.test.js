import { render, screen } from "@testing-library/react";
import LoginPage from "../loginPage";
import { Provider } from "react-redux";
import userEvent from "@testing-library/user-event";
import { act } from "react";
import { authLogin } from "../../../store/actions";

const loginType = (input, text) => userEvent.type(input, text);
const loginClick = (input) => userEvent.click(input);
jest.mock("../../../store/actions");

describe("login", () => {
  const state = {
    ui: {
      pending: false,
      error: null,
    },
  };
  const store = {
    dispatch: () => {},
    subscribe: () => {},
    getState: () => state,
  };

  const renderComponents = () =>
    render(
      <Provider store={store}>
        <LoginPage />
      </Provider>
    );

  test("snapshot", () => {
    const { container } = renderComponents();
    expect(container).toMatchSnapshot();
  });

  test("should dispatch authLogin with credentials", () => {
    const email = "email";
    const password = "password";
    const checkbox = "false";
    renderComponents();

    const usernameInput = screen.getByLabelText("Email");
    const passwordInput = screen.getByLabelText("Contraseña");
    const checkboxInput = screen.getByLabelText("Recordar Contraseña");
    const loginButton = screen.getByRole("button");

    expect(loginButton).toBeDisabled();

    act(() => loginType(usernameInput, email));
    act(() => loginType(passwordInput, password));
    act(() => loginClick(checkboxInput));

    userEvent.click(loginButton);

    expect(authLogin).toHaveBeenCalledWith({
      email,
      password,
      checkbox,
    });
  });
});
