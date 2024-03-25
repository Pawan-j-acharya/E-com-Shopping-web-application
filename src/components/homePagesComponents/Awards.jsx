import award1 from "../../assets/award-1.png";
import award2 from "../../assets/award-2.png";
import award3 from "../../assets/award-3.png";
import award4 from "../../assets/award-4.png";

export default function Awards() {
  return (
    <>
      <ul className="flex items-start lg:gap-20 gap-10 flex-wrap justify-center">
        <li className="flex flex-col items-center justify-center text-center max-w-32">
          <img height="120" width="120" src={award1} alt="random-award-img"></img>
          <p className="mt-2 text-xs lg:text-sm italic text-zinc-500">
            Best Fake Clothing 2024
          </p>
        </li>
        <li className="flex flex-col items-center justify-center text-center max-w-32">
          <img height="120" width="120" src={award2} alt="random-award-img"></img>
          <p className="mt-2 text-xs lg:text-sm italic text-zinc-500">
            Best in Shop Lifting Award of 2024
          </p>
        </li>
        <li className="flex flex-col items-center justify-center text-center max-w-32">
          <img height="120" width="120" src={award3} alt="random-award-img"></img>
          <p className="mt-2 text-xs lg:text-sm italic text-zinc-500">
            Free Shipping - Most lost parcel award of 2024
          </p>
        </li>
        <li className="mt-2 flex flex-col items-center justify-center text-center max-w-32">
          <img height="110" width="110" src={award4} alt="random-award-img"></img>
          <p className="mt-2 text-xs lg:text-sm italic text-zinc-500">
            Customer Service of the Century
          </p>
        </li>
      </ul>
    </>
  );
}
