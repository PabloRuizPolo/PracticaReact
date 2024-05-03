import { useState } from "react";
import { useAuth } from "./context";
import { login } from "./service";
import { useLocation, useNavigate } from "react-router-dom";

export default function LoginPage() {
  const { onLogin } = useAuth();
  const location = useLocation();
  const go = useNavigate();

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
    await login(inputValues);

    onLogin();

    const to = location.state?.from || "/";
    go(to, { relative: true });
  };

  const disabledButton = !email || !password;

  return (
    <div>
      <h2 className="title">Inicia sesión en Nodepop</h2>
      <form className="loginForm" onSubmit={handleSubmit}>
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
    </div>
  );
}
