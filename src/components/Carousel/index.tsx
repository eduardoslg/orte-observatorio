import { useState } from 'react'

import {
  CarouselButton,
  CarouselContainer,
  CarouselContent,
  CarouselItem,
} from './styles'

export function Carousel({ items }: any) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)
  }

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length,
    )
  }

  return (
    <CarouselContainer>
      <CarouselButton onClick={handlePrev}>Previous</CarouselButton>
      <CarouselContent>
        {items.map((item: any, index: any) => (
          <CarouselItem key={index} isActive={index === currentIndex}>
            {item}
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselButton onClick={handleNext}>Next</CarouselButton>
    </CarouselContainer>
  )
}

export default Carousel
