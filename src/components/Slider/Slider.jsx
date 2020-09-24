import React, { useEffect, useCallback, useState } from "react"
import { useEmblaCarousel } from "embla-carousel/react"

import "./style.css"
import Slide1 from "../../slides/slide1.png"
import Slide2 from "../../slides/slide2.png"
import Slide3 from "../../slides/slide3.png"

const slides = [
  {
    title: "АКАМА",
    subtitle: "веб решение для удаленного управления объектами ЖКХ",
    image: Slide1,
  },
  {
    title: "Newty Patchnote",
    subtitle: "информационный портал о индустрии брокеров",
    image: Slide2,
  },
  {
    title: "Quick Montage",
    subtitle:
      "Приложение для первичного монтажа на основе технологии транскрибации",
    image: Slide3,
  },
]

export default function Slider() {
  const [emblaRef, embla] = useEmblaCarousel()

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla])
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla])

  const onSelect = useCallback(() => {
    if (!embla) return
    setPrevBtnEnabled(embla.canScrollPrev())
    setNextBtnEnabled(embla.canScrollNext())
  }, [embla])

  useEffect(() => {
    if (!embla) return
    embla.on("select", onSelect)
    onSelect()
  }, [embla, onSelect])

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map(({ title, subtitle, image }) => (
            <div className="embla__slide" key={title}>
              <div className="embla__slide__text">
                <div className="embla__slide__text__title">{title}</div>
                <div className="embla__slide__text__subtitle">{subtitle}</div>
              </div>
              <div className="embla__slide__image">
                <img src={image} alt={title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
