export default function ConfirmLogic({ children, onAtrasClick }) {
  return (
    <div>
      <p>¿Estás seguro?</p>
      {children}
      <button onClick={() => onAtrasClick()}>Atras</button>
    </div>
  );
}
