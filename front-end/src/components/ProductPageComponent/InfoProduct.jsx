import { useState } from "react";

export default function InfoProduct({ product }) {
  const sortedSizes = [...product.sizes].sort((a, b) => a.price - b.price);
  const defaultSize = sortedSizes[0];
  const [defaultOption, setDefaultOption] = useState(defaultSize);

  return (
    <section class="flex flex-col gap-6 font-sans">
      {product.isFeatured && (
        <span class="uppercase tracking-widest text-xs text-neutral-500">
          Best Seller
        </span>
      )}

      <h1 class="font-serif text-4xl leading-tight">{product.name}</h1>

      <div class="text-lg">
        <span class="font-medium">
          {defaultOption.price.toLocaleString("it-IT", {
            style: "currency",
            currency: "VND",
          })}
        </span>
      </div>

      <p class="text-neutral-600 leading-relaxed max-w-md">
        {product.description?.[0]?.children?.[0]?.text}
      </p>

      <div class="flex flex-col gap-3">
        <span class="text-sm text-neutral-500"> Choose a size </span>

        <div class="flex gap-2 flex-wrap">
          {sortedSizes.map((size, index) => (
            <button
              onClick={() => setDefaultOption(size)}
              class={`px-5 py-2 border  text-sm transition
                ${defaultOption.size === size.size ? "border-black" : "border-neutral-300"}
            ${!size.isAvailable && "opacity-40 cursor-not-allowed"}
          `}
              disabled={!size.isAvailable}
            >
              {size.size}
            </button>
          ))}
        </div>
      </div>

      <div class="flex flex-col gap-2 max-w-30">
        <label class="text-sm text-neutral-500"> Quantity </label>
        <input
          id="quantity"
          defaultValue="1"
          type="number"
          min="1"
          class="border px-3 py-2 text-sm focus:outline-none focus:border-black"
        />
      </div>

      <button class="mt-6 bg-black text-white py-4 text-sm tracking-wide hover:bg-neutral-800 transition">
        ADD TO CART
      </button>
    </section>
  );
}
