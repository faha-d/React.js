import PropTypes from "prop-types";
import "./Card.css";
const products = [
  {
    id: 1,
    name: "Product A",
    description: "This is a high-quality product.",
    price: "$49.99",
    imageUrl:
      "https://img.freepik.com/free-psd/shoes-sale-social-media-post-square-banner-template-design_505751-2900.jpg?semt=ais_hybrid",
  },
  {
    id: 2,
    name: "Product B",
    description: "This product is affordable and reliable.",
    price: "$29.99",
    imageUrl:
      "https://img.freepik.com/free-vector/vector-3d-illustration-poster-with-anti-aging-cosmetic-premium-products_1441-616.jpg?semt=ais_hybrid",
  },
  {
    id: 3,
    name: "Product C",
    description: "An excellent choice for professionals.",
    price: "$79.99",
    imageUrl:
      "https://img.freepik.com/premium-psd/refrigerator-sale-promotional-poster-design-template_987701-2795.jpg?semt=ais_hybrid",
  },
];

// SingleCard Component to render each card item
const Card = ({ name, description, price, imageUrl }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={name} className="card-image" width={200} />
      <div className="card-content">
        <h2 className="card-title">{name}</h2>
        <p className="card-description">{description}</p>
        <p className="card-price">{price}</p>
      </div>
    </div>
  );
};

// Prop validation for SingleCard
Card.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

const Cardlist = () => {
  return (
    <div className="card-list">
      {products.map(({ id, name, description, price, imageUrl }) => (
        <Card
          key={id}
          name={name}
          description={description}
          price={price}
          imageUrl={imageUrl}
        />
      ))}
    </div>
  );
};

export default Cardlist;
