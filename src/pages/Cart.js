const data = [
  {
    id: 1,
    name: "Blink Mini – Compact indoor plug-in smart security camera",
    description:
      "Monitor the inside of your home day and night with our 1080P HD indoor plug-in smart security camera",
    price: 64.99,
    image:
      "https://res.cloudinary.com/dy28teazb/image/upload/v1668172648/React%20Shopping/Products/81-585-013-01_a04wkd.jpg",
    category: "Camera",
  },
  {
    id: 2,
    name: "Vlogging Camera, 4K Digital Camera for YouTube with WiFi",
    description:
      "It's super suitable for the 'happy snapper' who just hope to point and shoot to take good quality images",
    price: 109.99,
    image:
      "https://res.cloudinary.com/dy28teazb/image/upload/v1668172649/React%20Shopping/Products/81pgsjFGpmL_qundpd.jpg",
    category: "Camera",
  },
  {
    id: 3,
    name: "SAMSUNG 55-Inch Class Crystal 4K UHD AU8000 Series HDR",
    description:
      "Witness millions of shades of color through powerful Dynamic Crystal technology",
    price: 497.99,
    image:
      "https://res.cloudinary.com/dy28teazb/image/upload/v1668172649/React%20Shopping/Products/cl-uhd-tu7090-un50tu7090gxzs-rperspective-285965740_duusj5.png",
    category: "TV",
  },
];

const Cart = () => {
  return (
    <div className="cart-section container mx-auto py-10">
      <h2 className="section-title uppercase text-2xl font-bold space-font text-center mb-10">
        Your cart
      </h2>
      <div className="cart-container">
        <div className="product-headlines grid grid-cols-5">
          <div className="col-product col-span-2">Product</div>
          <div className="col-unit-price">Unit Price</div>
          <div className="col-quantity">Quantity</div>
          <div className="col-total-price">Total Price</div>
        </div>
        {data.map((product) => (
          <div className="product grid grid-cols-5">
            <div className="left flex col-span-2">
              <img
                src={product.image}
                alt={product.name}
                className="h-32 h-32 object-cover"
              />
              <div className="details">
                <span>{product.name}</span>
                <button className="remove-btn">Remove</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-lower"></div>
    </div>
  );
};

export default Cart;
