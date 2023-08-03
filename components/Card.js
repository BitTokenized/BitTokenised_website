import React, { useRef, useEffect, useState } from "react";
import VanillaTilt from "vanilla-tilt";
import { FaArrowLeft } from "react-icons/fa";

const Card = ({ card, index, setCards }) => {
  const [showContent, setShowContent] = useState("text");
  const tiltRef = useRef(null);

  const handleClick = (index, tiltRef) => {
    const cardEl = tiltRef.current;
    const flipDuration = 1000;

    cardEl.classList.add("animate__animated", "animate__flipInY");
    setTimeout(() => {
      cardEl.classList.remove("animate__animated", "animate__flipInY");
    }, flipDuration);
    updateCardFlippedStatus(index);
  };

  const updateCardFlippedStatus = (index) => {
    setCards((prevCards) =>
      prevCards.map((card, i) =>
        i === index ? { ...card, flipped: !card.flipped } : card
      )
    );
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const tiltEls = document.querySelectorAll(".card");
      tiltEls.forEach((el) => {
        VanillaTilt.init(el, {
          max: 7,
          speed: 2000,
          glare: true,
          "max-glare": 0.05,
          perspective: 1000,
          scale: 1.07,
          transition: true,
          easing: "cubic-bezier(.03,.98,.52,.99)",
          gyroscope: true,
          gyroscopeMaxAngleX: 45,
          gyroscopeMaxAngleY: 45,
        });
      });
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
      const tiltEls = document.querySelectorAll(".card");
      tiltEls.forEach((el) => {
        if (el.vanillaTilt) {
          el.vanillaTilt.destroy();
        }
      });
    };
  }, []);

  return (
    <div
      id={`card-${card.title}`}
      className={`card card-compact md:w-68 lg:w-72 xl:w-80 2xl:w-96 md:h-82 lg:h-72 xl:h-80 2xl:h-96 cursor-pointer
    bg-neutral text-secondary hover:text-primary ${card.shadow}`}
      ref={tiltRef}
      onMouseEnter={() => {
        const buttons = tiltRef.current.querySelectorAll(".btn");
        buttons.forEach((btn) => {
          btn.classList.remove("btn-secondary");
          btn.classList.add("btn-primary");
        });
      }}
      onMouseLeave={() => {
        const buttons = tiltRef.current.querySelectorAll(".btn");
        buttons.forEach((btn) => {
          btn.classList.remove("btn-primary");
          btn.classList.add("btn-secondary");
        });
      }}
    >
      <div className={`rounded-xl ${card.flipped ? "hidden" : ""}`}>
        <figure className="h-52 md:h-24 lg:h-24 xl:h-36 2xl:h-52">
          <img src={card.image} alt={card.title} />
        </figure>
        <div className="card-body">
          <p className="card-title text-xl lg:text-md xl:text-xl 2xl:text-xl">
            {card.title}
          </p>
          <p className="text-white text-base xl:text-sm 2xl:text-base">
            {card.subtitle}
          </p>
          <div className="card-actions justify-end mt-2">
            <button
              onClick={() => handleClick(index, tiltRef)}
              className="btn btn-outline btn-secondary gap-2 md:btn-sm md:btn-sm lg:btn-sm xl:btn-md 2xl:btn-md"
              disabled={card.disable}
            >
              {card.logo}
              {card.btnText}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`
        card-body justify-center items-center ${!card.flipped ? "hidden" : ""}`}
      >
        <h2 className="card-title text-center text-3xl lg:text-lg xl:text-2xl 2xl:text-3xl">
          {card.backTitle}
        </h2>
        <span className="text-white text-justify text-base lg:text-sm xl:text-md 2xl:text-base">
          {showContent === "text" && card.textBack}
          {showContent === "features" && card.services}
        </span>

        <div className="card-actions mt-2">
          <button
            onClick={() => {
              handleClick(index, tiltRef);
              setShowContent("text");
            }}
            className="btn btn-outline btn-secondary gap-2 btn-md md:btn-sm md:btn-sm lg:btn-sm xl:btn-md 2xl:btn-md"
          >
            <FaArrowLeft />
          </button>
          <button
            className="btn btn-outline btn-primary gap-2 md:btn-sm md:btn-sm lg:btn-sm xl:btn-md 2xl:btn-md"
            onClick={() => setShowContent("features")}
          >
            Services
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
