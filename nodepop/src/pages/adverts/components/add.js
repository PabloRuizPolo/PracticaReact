import "../advertsPage.css";

export default function Add({ name, sale, price, tags, photo }) {
  let className = "false";
  let action = "";
  let key = 1;

  if (sale === true) {
    className = "true";
    action = "Se vende";
  } else {
    action = "Se compra";
  }

  return (
    <section className="adContainer">
      <div className="name-container">
        <h3>{name}</h3>
      </div>
      <div className="img-container">
        <img>{photo}</img>
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
