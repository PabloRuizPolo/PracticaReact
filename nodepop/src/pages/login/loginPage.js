import { useState } from "react";
import { useAuth } from "./context";
import { login } from "./service";
import { useLocation, useNavigate } from "react-router-dom";

export default function LoginPage() {
  const { onLogin } = useAuth();
  const location = useLocation();
  const go = useNavigate();

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
      onLogin();
      const to = location.state?.from || "/";
      go(to, { relative: true });
    } catch (error) {
      setIsFetch(false);
      setError(error);
    }
  };

  const quitError = () => {
    setError(null);
  };

  const disabledButton = !email || !password || isFetch;

  return (
    <div>
      <h2 className="title">Inicia sesión en Nodepop</h2>
      <form className="loginForm" onSubmit={handleSubmit} onClick={quitError}>
        <div className="formField">
          <label className="formField-label">Email</label>
          <input
            className="formField-input"
            type="mail"
            name="email"
            value={email}
            onChange={handleChange}
          ></input>
        </div>
        <div className="formField">
          <label className="formField-label">Password</label>
          <input
            className="formField-input"
            type="passqord"
            name="password"
            value={password}
            onChange={handleChange}
          ></input>
          <label>Recordar Contraseña</label>
          <input
            type="checkbox"
            name="checkbox"
            value={checkbox}
            onChange={handleChange}
          />
        </div>
        <button type="submit" disabled={disabledButton}>
          Entrar
        </button>
      </form>
      {error && <div onClick={quitError}>{error.message}</div>}
    </div>
  );
}
