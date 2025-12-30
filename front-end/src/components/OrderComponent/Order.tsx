import React from "react";

const sizes = ["S", "M", "L"];

export default function Order() {
  const [selectedSize, setSelectedSize] = React.useState(sizes[0]);
  return (
    <div>
      <div>
        <p>Size</p>
        <div className="flex gap-5 mt-2 w-full justify-between">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`px-4 flex-1 py-2 rounded-lg bg-[#141921] ${
                selectedSize === size &&
                "border text-[#D17842] border-[#D17842]"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <div className="sticky bottom-0 w-full flex gap-6 mt-5 items-center">
        <div className="flex flex-col gap-1 w-fit items-center">
          <p className="text-xs">Price</p>
          <p className="text-lg font-medium">$ 4.20</p>
        </div>

        <button className="flex-1 bg-[#D17842] text-white py-3 rounded-lg">
          Add to cart
        </button>
      </div>
    </div>
  );
}
