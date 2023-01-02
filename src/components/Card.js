const Card = ({ product }) => {
  return (
    <div className="product flex flex-col gap-3 shadow-md bg-white rounded-xl overflow-hidden hover:shadow-xl duration-300">
      <div className="img">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="texts flex flex-col gap-2 px-5 pb-5">
        <span className="category-tag uppercase text-xs font-semibold tracking-widest text-teal-500">
          {product.category}
        </span>
        <h3 className="title text-xl font-medium h-[5.25rem]">
          {product.name}
        </h3>
        <p className="details text-gray-500 h-[6rem]">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="price text-xl font-medium text-teal-500">
            ${product.price}
          </span>
          <button className="uppercase bg-teal-500 text-teal-50 py-3 px-8 rounded-md shadow-md shadow-teal-50 hover:bg-teal-600 hover:shadow-lg duration-300 ">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
