import { NextButton, PrevButton, usePrevNextButtons } from "./ArrowButton";
import { DotButton, useDotButton } from "./DotButton";

export default function EmblaControl({
  emblaApi,
  controlClassName,
  prevClassName,
  nextClassName,
  dotClassName,
}) {
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <div className={`${controlClassName} embla__controls max-sm:hidden!`}>
      <div className="embla__buttons">
        <PrevButton
          className={`${prevClassName} place-items-center`}
          onClick={onPrevButtonClick}
          disabled={prevBtnDisabled}
        />
        <NextButton
          className={`${nextClassName} place-items-center`}
          onClick={onNextButtonClick}
          disabled={nextBtnDisabled}
        />
      </div>

      <div className={`embla__dots ${dotClassName}`}>
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
  );
}
