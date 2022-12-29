import { useState } from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

const data = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/4341431/pexels-photo-4341431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

    alt: "A Black Camera with Lens",
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/4009409/pexels-photo-4009409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Watching tv",
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/2323435/pexels-photo-2323435.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Photo Of Red And Black Sony Ps4 Dualshock4",
  },
  {
    id: 4,
    src: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Top View Photo of Black Wireless Headphones",
  },
  {
    id: 5,
    src: "https://images.pexels.com/photos/23474/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "smart watch",
  },
];

const Slider = () => {
  //state
  const [currentSlide, setCurrentSlide] = useState(0);

  // slide handler
  const prevSlide = () => {
    setCurrentSlide(
      currentSlide === 0 ? data.length - 1 : (prevSlide) => prevSlide - 1
    );
  };
  const nextSlide = () => {
    setCurrentSlide(
      currentSlide === data.length - 1 ? 0 : (prevSlide) => prevSlide + 1
    );
  };

  return (
    <div className="frame relative">
      <div
        className="slider "
        style={{ transform: `translateX(-${100 * currentSlide}vw)` }}
      >
        {data.map((image) => (
          <div
            className="slide"
            style={{ backgroundImage: `url(${image.src})` }}
            key={image.id}
          ></div>
        ))}
      </div>
      <div className="btns absolute  z-[1] text-teal-50 text-2xl flex gap-10 bottom-20 w-screen justify-center">
        <button
          onClick={prevSlide}
          className="prev-btn h-10 w-10 text-4xl hover:bg-white/70 hover:text-teal-900 duration-300 bg-teal-300/20 backdrop-blur-xl flex justify-center items-center rounded-full"
        >
          <span>
            <BsArrowLeftShort />
          </span>
        </button>
        <button
          onClick={nextSlide}
          className="next-btn h-10 w-10 text-4xl hover:bg-white/70 hover:text-teal-900 duration-300 bg-teal-300/20 backdrop-blur-xl flex justify-center items-center rounded-full"
        >
          <span>
            <BsArrowRightShort />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Slider;
