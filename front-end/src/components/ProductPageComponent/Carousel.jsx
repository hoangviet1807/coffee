import { urlFor } from "@/lib/sanityImage";
import useEmblaCarousel from "embla-carousel-react";
import { usePrevNextButtons } from "../EmblaCarousel/ArrowButton";
import { useDotButton } from "../EmblaCarousel/DotButton";
import EmblaControl from "../EmblaCarousel/EmblaControl";
useEmblaCarousel.globalOptions = { loop: true };

export default function Carousel({ data }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start" });

  return (
    <div className="embla h-full relative group" ref={emblaRef}>
      <div className="embla__container h-full">
        {data.map((value, index) => (
          <div className="embla__slide relative" key={index}>
            <img
              src={value.asset.url}
              className="object-cover aspect-video h-full w-full "
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>
      <EmblaControl
        emblaApi={emblaApi}
        prevClassName={
          "absolute top-1/2 transition-all duration-500 group-hover:translate-x-0 -translate-x-full -translate-y-1/2 z-10 bg-white py-1.5 px-8"
        }
        nextClassName={
          "absolute right-0 top-1/2  transition-all duration-500  group-hover:translate-x-0 translate-x-full -translate-y-1/2 z-10 bg-white py-1.5 px-8"
        }
      />
    </div>
  );
}
