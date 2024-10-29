const ProductInfo = () => {
  const info = {
    name: "Laptop",
    price: 55000,
    availibility: "In Stock",
  };
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
    </div>
  );
};
export default ProductInfo;
