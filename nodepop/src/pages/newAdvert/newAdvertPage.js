import { useState } from "react";
import { postAdds } from "../adverts/service";
import { useAuth } from "../login/context";
import { useNavigate } from "react-router-dom";

function NewAdvert() {
  const { onLogin } = useAuth();
  const go = useNavigate();

  const [inputValues, setInputValues] = useState({
    name: "",
    sale: false,
    price: 0,
    tags: [], // Initialize tags as an empty array
    photo: "",
  });

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
    event.preventDefault();
    console.log(inputValues);
    go("/");
  };

  const disabledButton = !name || !sale || !price || !tags;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className="formField-label">name</label>
        <input type="text" name="name" value={name} onChange={handleChange} />
        <label className="formField-label">
          Vender
          <input
            type="radio"
            name="accion"
            value={true}
            onChange={handleChange}
          />
          Si
          <input
            type="radio"
            name="accion"
            value={false}
            onChange={handleChange}
          />
          No
        </label>
        <label className="formField-label">Precio</label>
        <input
          type="number"
          name="price"
          value={price}
          onChange={handleChange}
        />
        <label className="formField-label">Tags</label>
        <select name="tags" multiple value={tags} onChange={handleChange}>
          <option value="lifestyle">lifestyle</option>
          <option value="mobile">mobile</option>
          <option value="work">work</option>
          <option value="motor">motor</option>
        </select>
        <label className="formField-label">Foto</label>
        <input
          type="file"
          name="photo"
          value={photo} // File inputs typically don't have a value
          onChange={handleChange}
        />
        <button type="submit" disabled={disabledButton}>
          Crear anuncio
        </button>
      </form>
    </div>
  );
}
export default NewAdvert;
