import Button from "./Button";
import "./confirmLogic.css";

export default function ConfirmLogic({ children, onAtrasClick, className }) {
  return (
    <div className="confirm-logic-div">
      <p>¿Estás seguro?</p>
      {children}
      <Button onClick={() => onAtrasClick()} $place={className}>
        Atras
      </Button>
    </div>
  );
}
