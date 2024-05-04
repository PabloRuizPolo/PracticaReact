import { Link } from "react-router-dom";
import { ReactComponent as Icon } from "../assets/logo.svg";
import LogBotton from "./LogBotton";
import { useState } from "react";
import ConfirmButton from "./ConfirmButton";
import ConfirmLogic from "./ConfirmLogic";
import "./header.css";

export default function Header() {
  const [confirm, setConfirm] = useState(false);

  const onclick = () => {
    setConfirm(true);
  };

  return (
    <div>
      {confirm ? (
        <div className="logout-confirm-container">
          <ConfirmLogic
            className="confirm-logic"
            onAtrasClick={() => setConfirm(false)}
          >
            <LogBotton className="confirm-logic" />
          </ConfirmLogic>
        </div>
      ) : (
        <header className="header-container">
          <Link className="link-header" to={"/"}>
            <Icon />
            <h1 className="title">Nodepop</h1>
          </Link>
          <ConfirmButton className="logoutButton" onclick={onclick}>
            <p>Logout</p>
          </ConfirmButton>
        </header>
      )}
    </div>
  );
}
