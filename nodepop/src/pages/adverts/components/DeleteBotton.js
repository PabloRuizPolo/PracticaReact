import { useNavigate } from "react-router-dom";
import { deleteAdd } from "../service";
import { useState } from "react";

export default function DeleteAdd({ id }) {
  const go = useNavigate();

  const handleClick = async () => {
    await deleteAdd(id);
    go("/");
  };

  return <button onClick={handleClick}>Borrar</button>;
}
