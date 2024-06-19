import { useEffect, useRef, useState } from "react";
import { getTags, postAdds } from "../adverts/service";
import { useAuth } from "../login/context";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import "./newAdvertPage.css";
import FormField from "../../components/FormField";
import { useDispatch } from "react-redux";
import { createdAdd } from "../../store/actions";

function NewAdvert() {
  const go = useNavigate();
  const photoValue = useRef(null);
  const dispatch = useDispatch();

  const [inputValues, setInputValues] = useState({
    name: "",
    sale: false,
    price: 0,
    tags: [],
  });
  const [error, setError] = useState(null);
  const [apiTags, setApiTags] = useState([]);

  useEffect(() => {
    getTags().then((tags) => setApiTags(tags));

    return;
  }, []);

  const { name, sale, price, tags } = inputValues;

  const handleChange = (event) => {
    const { name, value, type } = event.target;

    if (type === "radio") {
      setInputValues((formValues) => ({
        ...formValues,
        sale: value,
      }));
    } else if (event.target.name === "tags" && event.target.selectedOptions) {
      const selectedTags = Array.from(
        event.target.selectedOptions,
        (option) => option.value
      );
      setInputValues((formValues) => ({
        ...formValues,
        tags: selectedTags,
      }));
    } else if (name === "photo") {
      photoValue.current = event.target.files[0];
    } else {
      setInputValues((formValues) => ({
        ...formValues,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (event) => {
    const { name, sale, price, tags } = inputValues;

    const photo = photoValue.current;

    const formData = new FormData();
    formData.append("name", name);
    formData.append("sale", sale);
    formData.append("price", price);
    formData.append("tags", tags.join(","));

    if (photo && photo instanceof File) {
      formData.append("photo", photo, photo.name);
    }
    event.preventDefault();

    const newAdd = await dispatch(createdAdd(formData));

    go(`/adverts/${newAdd.id}`);
    /*
    try {
      console.log(formData);
      postAdds(formData).then((add) => go(`/adverts/${add.id}`));
    } catch (error) {
      setError(error);
    }*/
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
          {apiTags.map((tag) => (
            <option key={tag} value={tag}>
              {tag}
            </option>
          ))}
        </select>
        <label className="formField-label">Foto</label>
        <input
          ref={photoValue}
          className="input-photo"
          type="file"
          name="photo"
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
