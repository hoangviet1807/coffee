import capuchino1 from "../../assets/coffee/capuchino1.png";

export default function CoffeeCard() {
  return (
    <div className="bg-gradient-to-r from-[#252A32] to-[#111b2b] rounded-3xl p-4  relative flex flex-col items-center shadow-lg">
      <a href="/capuchino" className="relative w-full">
        <img
          src={capuchino1.src}
          alt={"capu"}
          className="object-cover rounded-2xl mb-1 w-full aspect-square"
        />

        <div className="absolute top-0 right-0 flex items-center bg-[#23262F] px-5 py-1 rounded-full rounded-lr-none rounded-br-none">
          <span className="text-[#D17842] font-bold text-sm mr-1">★</span>
          <span className="text-white text-sm">{4}</span>
        </div>
      </a>

      <div className="w-full text-left mt-2">
        <div className="flex flex-col gap-1">
          <h3 className="text-lg">cappuccino</h3>
          <p className="text-gray-400 text-xs mb-2">cappuccino</p>
        </div>

        <div className="flex items-center justify-between mt-2">
          <span className="text-[#D17842] font-bold text-lg">12.000</span>
          <button
            onClick={() => {}}
            className="bg-[#D17842] rounded-lg w-8 h-8 flex items-center justify-center text-white text-xl"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
