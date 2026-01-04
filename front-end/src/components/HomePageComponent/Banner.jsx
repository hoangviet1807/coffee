import { urlFor } from "@/lib/sanityImage";
import useEmblaCarousel from "embla-carousel-react";
import { DotButton, useDotButton } from "../EmblaCarousel/DotButton";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "../EmblaCarousel/ArrowButton";
import EmblaControl from "../EmblaCarousel/EmblaControl";
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
    <div className="md:relative">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container md:relative">
          {images.map((value, index) => (
            <div className="embla__slide relative" key={index}>
              <img
                src={urlFor(value.image).url()}
                className="object-cover aspect-video max-h-screen w-full"
                alt={`Slide ${index + 1}`}
              />
              <div className="md:absolute md:bottom-1/2 md:left-5  md:w-2/5 p-5 bg-[#ffffffb3] w-full flex flex-col gap-4">
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
        <EmblaControl
          emblaApi={emblaApi}
          prevClassName={
            "absolute left-10 bottom-20 z-10 border rounded-full bg-white p-2"
          }
          nextClassName={
            "absolute right-10 bottom-20 z-10 border rounded-full bg-white p-2"
          }
          dotClassName={"absolute bottom-20 left-1/2 -translate-x-1/2"}
        />
      </div>
    </div>
  );
}
