import { useState } from "react";
import CoffeeCard from "./CoffeeCard";

export default function Options() {
  const options = [
    "All",
    "Capuchino",
    "Espresso",
    "Latte",
    "Macchiato",
    "Mocha",
  ];
  const [optionSelected, setOptionSlected] = useState("All");

  return (
    <>
      <div className="flex flex-row flex-no-wrap overflow-x-auto gap-3">
        {options.map((option, index) => (
          <button
            onClick={() => setOptionSlected(option)}
            className={`font-bold px-4 py-2 rounded-full text-sm mr-2 mb-2 relative ${
              option === optionSelected ? "text-[#D17842]" : "text-[#52555A]"
            }`}
            key={index}
          >
            {option}
            {option === optionSelected && (
              <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-2 h-2 bg-[#D17842] rounded-full" />
            )}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        <CoffeeCard />
        <CoffeeCard />
      </div>
    </>
  );
}
