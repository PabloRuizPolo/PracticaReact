import { useState } from "react";
import { useAuth } from "./context";
import { login } from "./service";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import FormField from "../../components/FormField";
import "./loginPage.css";
import { useDispatch } from "react-redux";
import {
  authLogin,
  auth_login_completed,
  auth_login_pending,
  auth_login_rejected,
} from "../../store/actions";

export default function LoginPage() {
  const location = useLocation();
  const go = useNavigate();
  const dispatch = useDispatch();

  const [error, setError] = useState(null);
  const [isFetch, setIsFetch] = useState(false);

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

    try {
      setIsFetch(true);
      await login(inputValues);
      setIsFetch(false);
      dispatch(authLogin());
      const to = location.state?.from || "/";
      go(to, { replace: true });
    } catch (error) {
      setIsFetch(false);
      setError(error);
    }
  };

  const quitError = () => {
    setError(null);
  };

  const disabledButton = !email || !password;

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
