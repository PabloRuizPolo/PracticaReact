import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import FormField from "../../components/FormField";
import "./loginPage.css";
import { useDispatch, useSelector } from "react-redux";
import { authLogin, uiResetError } from "../../store/actions";
import { getUi } from "../../store/selectors";

export default function LoginPage() {
  const dispatch = useDispatch();

  const { pending: isFetch, error } = useSelector(getUi);

  const [inputValues, setInputValues] = useState({
    email: "",
    password: "",
    checkbox: false,
  });
  const { email, password, checkbox } = inputValues;

  const handleChange = (event) => {
    setInputValues((formValues) => ({
      ...formValues,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(authLogin(inputValues));
  };

  const quitError = () => {
    dispatch(uiResetError());
  };

  const disabledButton = !email || !password || isFetch;

  return (
    <div className="loginPage">
      <h2 className="title">Inicia sesión en Nodepop</h2>
      <form className="loginForm" onSubmit={handleSubmit} onClick={quitError}>
        <FormField
          type="mail"
          name="email"
          label="Email"
          value={email}
          onChange={handleChange}
          className="formField"
        />
        <FormField
          type="passqord"
          name="password"
          label="Contraseña"
          value={password}
          onChange={handleChange}
          className="formField"
        />
        <FormField
          type="checkbox"
          name="checkbox"
          label="Recordar Contraseña"
          value={checkbox}
          onChange={handleChange}
          className="formField"
        />

        <div className="div-button">
          <Button type="submit" disabled={disabledButton}>
            Entrar
          </Button>
        </div>
      </form>
      {error && <div onClick={quitError}>{error.message}</div>}
    </div>
  );
}
