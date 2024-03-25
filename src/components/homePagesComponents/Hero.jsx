import  {useNavigate}  from "react-router-dom";
import heroImage from "../../assets/hero-final.jpg";
/* eslint-disable react/prop-types */
export default function Hero() {

  const navigate = useNavigate;

  const handleButtonClick = () => {
    navigate("/shop");
    window.scrollTo(0, 0);
  };

  return (
    <div
      className="hero min-h-[50rem] bg-[center_right_-6rem] bg-no-repeat lg:bg-center"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center lg:text-left text-neutral-content w-full lg:justify-start lg:px-40 xl:px-20">
        <div className="max-w-md">
          <h1 className="mb-5 text-6xl font-bold">FakeStore</h1>
          <p className="mb-5 text-lg">
          "Because reality is overrated – shop in our fantasyland!"
          </p>
          <button
            onClick={handleButtonClick}
            className="btn px-6 btn-wide btn-md rounded-sm btn-primary text-white mt-4"
          >
            SHOP
          </button>
        </div>
      </div>
    </div>
  );
}
