import Meowington from "../../assets/Meowington.jpg";
import max from "../../assets/max.jpg";
import Puddle from "../../assets/Puddle.jpg";
import Woofington from "../../assets/Woofington.jpg";
import Meowzilla from "../../assets/Meowzilla.jpg";
import Muncher from "../../assets/Muncher.jpg";
import ReviewCard from "./ReviewCard";
import { useState } from "react";
import { useEffect } from "react";
const FAKE_REVIEWS = [
  {
    name: "Whiskers McMeowington",
    img: max,
    message:
      "Wow! This store lives up to its name, it's so fake, it's so unreal!",
  },
  {
    name: "Captain Meowington",
    img: Meowington,
    message: "Don't look straight at me or I'm gonna slash your face",
  },
  {
    name: "Meowzilla",
    img: Meowzilla,
    message:
      "NYEAW NYEAW NYEAW! I love zoomies at midnight and jump at my owner's back!",
  },
  {
    name: "Snowball",
    img: Puddle,
    message: "MEEOOOWW! I love my owner when I'm hungry",
  },
  {
    name: "Barkley Woofington",
    img: Woofington,
    message:
      "My owner keeps buying a pair of slippers, I guess it's my toy! ARF!",
  },
  {
    name: "Biscuit Muncher",
    img: Muncher,
    message:
      "OINK! I'm Muncher, I love eating even non edible things. I will eat everything!",
  },
];
export default function ReviewSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const slider = setTimeout(
      () =>
        setCurrentIndex((index) => {
          if (index > 4) return 0;
          return index + 1;
        }),
      3500
    );
    return () => {
      clearTimeout(slider);
    };
  }, [currentIndex]);

  return (
    <ul className="flex overflow-hidden">
      {FAKE_REVIEWS.map((reviewer, index) => (
        <ReviewCard
          currentIndex={currentIndex}
          key={index}
          name={reviewer.name}
          img={reviewer.img}
        >
          {reviewer.message}
        </ReviewCard>
      ))}
    </ul>
  );
}
