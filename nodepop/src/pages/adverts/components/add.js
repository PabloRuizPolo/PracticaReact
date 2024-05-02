export default function Add({ name, sale, price, tags, photo }) {
  let className = "false";
  let content = "";
  let key = 1;

  if (sale === true) {
    className = "true";
    content = "Se vende";
  } else {
    content = "Se compra";
  }

  return (
    <section>
      <div className={className}>
        <h3>{content}</h3>
      </div>
      <div className="img-container">
        <img>{photo}</img>
      </div>
      <div className="price-container">
        <span>{price}</span>
      </div>
      <div className="name-container">
        <span>{name}</span>
      </div>
      <div className="tags-container">
        <ul>
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
