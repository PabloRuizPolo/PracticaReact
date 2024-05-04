import Button from "./Button";

export default function ConfirmButton({ children, onclick, className }) {
  return (
    <Button $variant="no-main" $place={className} onClick={onclick}>
      {children}
    </Button>
  );
}
