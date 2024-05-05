import Photo from "../../../components/Photo";
import "../advertsPage.css";
import defaultPhoto from "../../../assets/default-profile.png";
import "./add.css";

export default function Add({ name, sale, price, tags, photo, location }) {
  let className = "false";
  let action = "";
  let key = 1;

  if (sale === true) {
    className = "true";
    action = "Se vende";
  } else {
    action = "Se compra";
  }

  const hasPhoto = photo && photo.length > 0;
  const classNamePhoto =
    location === "advertsPage" ? "advertsPage" : "advertPage";

  return (
    <section className="adContainer">
      <div className="name-container">
        <h3>{name}</h3>
      </div>
      <div className="img-container">
        <Photo
          photo={hasPhoto ? photo : defaultPhoto}
          className={classNamePhoto}
        ></Photo>
      </div>
      <div className="price-container">
        <span>{price} euros</span>
      </div>
      <div className="name-container">
        <span>{action}</span>
      </div>
      <div className="tags-container">
        <ul className="listTags">
          {tags &&
            tags.map((tag) => (
              <li key={key++} className="tag">
                {tag}
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
}
