export default function ConfirmButton({ children, onclick }) {
  return <button onClick={onclick}>{children}</button>;
}
