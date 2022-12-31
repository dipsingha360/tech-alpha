import { Link } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="navbar-bg  bg-teal-500 text-teal-50 h-20 flex justify-center items-center ">
      <div className="navbar container mx-auto flex items-center justify-between">
        <div className="left">
          <span className="logo text-2xl font-semibold">
            tech<span className="text-gray-700">Alpha</span>{" "}
          </span>
        </div>
        <div className="right flex items-center gap-5 ">
          <Link
            end
            to="/"
            className="nav-link hover:text-teal-300 duration-300"
          >
            Home
          </Link>
          <Link
            to="/products"
            className="nav-link hover:text-teal-300 duration-300"
          >
            Products
          </Link>
          <Link to="/cart">
            <span className="cart-icon relative">
              <BsCart3 />
              <span className="cart-counter text-teal-50 absolute z-[1] -top-3 -right-3 text-xs bg-gray-700 h-5 w-5 rounded-full flex items-center justify-center ">
                0
              </span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
