export default function CarouselContainer({ children }) {
  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container md:relative">{children}</div>
    </div>
  );
}
