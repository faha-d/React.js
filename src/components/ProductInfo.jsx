const ProductInfo = () => {

  const info = {
    name: "Laptop",
    price: 55000,
    availibility: "In Stock",
  };

  const items = ["MacBook", "Linux"];
  return (
    <div className="product-info">
        <h1>
            Product Details
        </h1>
      <ul>
        <li>Name: {info.name}</li>
        <li>Price: {info.price}</li>
        <li>Availibility: {info.availibility}</li>
      </ul>

      <h2>Cart Items:
      </h2>
      {items.length > 0 && <p>{items.length} items are available</p>}
      <ul>
        {items.map((item) => (
          <li key={Math.random(item.length)}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
export default ProductInfo;
