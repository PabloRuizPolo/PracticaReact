import { useState } from "react";
import { postAdds } from "../adverts/service";
import { useAuth } from "../login/context";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import "./newAdvertPage.css";
import FormField from "../../components/FormField";

function NewAdvert() {
  const { onLogin } = useAuth();
  const go = useNavigate();

  const [inputValues, setInputValues] = useState({
    name: "",
    sale: false,
    price: 0,
    tags: [],
    photo: "",
  });
  const [error, setError] = useState(null);

  const { name, sale, price, tags, photo } = inputValues;

  const handleChange = (event) => {
    const { name, value, type } = event.target;

    if (type === "radio") {
      setInputValues((formValues) => ({
        ...formValues,
        sale: value,
      }));
    } else if (name === "tags") {
      const selectedTags = Array.from(
        event.target.selectedOptions,
        (option) => option.value
      );
      setInputValues((formValues) => ({
        ...formValues,
        tags: selectedTags,
      }));
    } else {
      setInputValues((formValues) => ({
        ...formValues,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (event) => {
    const { name, sale, price, tags } = inputValues;
    const newAdd = { name, sale, price, tags };
    event.preventDefault();
    try {
      postAdds(newAdd).then((add) => go(`/adverts/${add.id}`));
    } catch (error) {
      setError(error);
    }
  };

  const quitError = () => {
    setError(null);
  };

  const disabledButton = !name || !sale || !price || !tags;

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        onClick={quitError}
        className="form-container"
      >
        <FormField
          type="text"
          name="name"
          label="Nombre del producto"
          value={name}
          onChange={handleChange}
          className="newAdd-formField"
        />

        <label className="formField-label">
          ¿Que desea hacer?
          <input
            className="formField-input"
            type="radio"
            name="accion"
            value={true}
            onChange={handleChange}
          />
          Vender
          <input
            className="formField-input"
            type="radio"
            name="accion"
            value={false}
            onChange={handleChange}
          />
          Comprar
        </label>

        <FormField
          type="number"
          name="price"
          label="Precio euros"
          value={price}
          onChange={handleChange}
          className="newAdd-formField"
        />

        <label className="formField-label">Tags</label>
        <select
          name="tags"
          multiple
          value={tags}
          onChange={handleChange}
          className="formField-input"
        >
          <option value="lifestyle">lifestyle</option>
          <option value="mobile">mobile</option>
          <option value="work">work</option>
          <option value="motor">motor</option>
        </select>
        <label className="formField-label">Foto</label>
        <input
          className="input-photo"
          type="file"
          name="photo"
          value={photo} // File inputs typically don't have a value
          onChange={handleChange}
        />
        <Button
          type="submit"
          $variant="main"
          $place="newAdd"
          disabled={disabledButton}
        >
          Crear
        </Button>
      </form>
      {error && <div onClick={quitError}>{error.message}</div>}
    </div>
  );
}
export default NewAdvert;
