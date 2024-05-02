import { Link } from "react-router-dom";
import { ReactComponent as Icon } from "../assets/logo.svg";
import LogBotton from "./LogBotton";

export default function Header() {
  return (
    <header>
      <Link to={"/"}>
        <Icon />
        <h1>Nodepop</h1>
      </Link>
      <LogBotton />
    </header>
  );
}
