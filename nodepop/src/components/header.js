import { Link } from "react-router-dom";
import { ReactComponent as Icon } from "../assets/logo.svg";
import LogBotton from "./LogBotton";
import { useState } from "react";
import ConfirmButton from "./ConfirmButton";
import ConfirmLogic from "./ConfirmLogic";

export default function Header() {
  const [confirm, setConfirm] = useState(false);

  const onclick = () => {
    setConfirm(true);
  };

  return (
    <div>
      {confirm ? (
        <ConfirmLogic onAtrasClick={() => setConfirm(false)}>
          <LogBotton />
        </ConfirmLogic>
      ) : (
        <header>
          <Link to={"/"}>
            <Icon />
            <h1>Nodepop</h1>
          </Link>
          <ConfirmButton onclick={onclick}>
            <p>Logout</p>
          </ConfirmButton>
        </header>
      )}
    </div>
  );
}
