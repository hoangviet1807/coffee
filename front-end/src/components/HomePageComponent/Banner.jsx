import { urlFor } from "@/lib/sanityImage";
import useEmblaCarousel from "embla-carousel-react";
import { DotButton, useDotButton } from "../EmblaCarousel/DotButton";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "../EmblaCarousel/ArrowButton";
useEmblaCarousel.globalOptions = { loop: true };
export default function Banner({ data }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start" });
  const { images } = data;

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <div className="relative">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container relative">
          {images.map((value, index) => (
            <div className="embla__slide relative" key={index}>
              <img
                src={urlFor(value.image).url()}
                className="object-cover aspect-video max-h-screen w-full"
                alt={`Slide ${index + 1}`}
              />
              <div className="absolute bottom-1/2 left-5  w-2/5 p-5 bg-[#ffffffb3] minx-w-[350px] flex flex-col gap-4">
                <p className="text-xl font-medium">{value.title}</p>
                <p>{value.subtitle}</p>
                <a
                  href={value.buttonLink}
                  className="bg-[#575756] py-2 max-w-1/2 text-white text-center"
                >
                  {value.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="embla__controls">
          <div className="embla__buttons">
            <PrevButton
              className="absolute left-10 bottom-10 z-10 place-items-center w-10 h-10 border rounded-full bg-white"
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
            />
            <NextButton
              className="absolute right-10 bottom-10 z-10 place-items-center  w-10 h-10 border rounded-full bg-white"
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
            />
          </div>

          <div className="embla__dots absolute bottom-10 left-1/2 -translate-x-1/2">
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={"embla__dot".concat(
                  index === selectedIndex ? " embla__dot--selected" : ""
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
