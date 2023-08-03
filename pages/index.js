import React, { useState } from "react";
import Card from "./components/Card";
import { cardsData } from "./data/cardsData";

export default function Index() {
  const [cards, setCards] = useState(cardsData);

  return (
    <div>
      <div className="p-3 lg:p-2 xl:p-4 md:mb-2 lg:mb-4 xl:mb-5 2xl:mb-8 text-center text-white font-Kotta animate__animated animate__slideInDown">
        <p className="text-4xl lg:text-5xl xl:text-5xl 2xl:text-7xl mb-2 lg:mb-2 xl:mb-2 2xl:mb-4 flex items-center justify-center">
          <img
            src="/logo_2.png"
            alt="Logo"
            className="h-12 md:h-12 lg:h-14 xl:h-16 2xl:h-24 mr-2"
          />
          <span className="text-primary font-bold">Bit</span>
          <span>Tokenized</span>
        </p>

        <p className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl mb-2 md:mb-3 lg:mb-4 xl:mb-6 2xl:mb-8">
          <span>Shaping the </span>
          <span className="text-secondary font-bold">Tokenized </span>
          <span>Revolution, One Token At a Time!</span>
        </p>
        <button className="btn btn-primary btn-md md:btn-sm lg:btn-sm xl:btn-lg 2xl:btn-lg hover:bg-transparent hover:text-primary flex-none ">
          Free Consultation - Book Now!
        </button>
      </div>

      <div className="flex items-center justify-center flex-col animate__animated animate__zoomInUp">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {cards.map((card, index) => (
            <Card key={index} card={card} index={index} setCards={setCards} />
          ))}
        </div>
      </div>
    </div>
  );
}
