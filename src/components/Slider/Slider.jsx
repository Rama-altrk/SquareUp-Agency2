
import './Slider.css'
import About from '../About/About'
import { useState, useEffect } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
const SMALL_BREAKPOINT = 992
const LARGE_BREAKPOINT = 1440
function getCardsPerView(width) {
  if (width > LARGE_BREAKPOINT) return "all"
  if (width >= SMALL_BREAKPOINT) return 2
  return 1
}

function Slider({ cards }) {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, []);

  const cardsPerView = getCardsPerView(screenWidth)
  const [currentIndex, setCurrentIndex] = useState(0)
  if (cardsPerView === "all") {
    return <About reviews={cards} />
  }
  const totalPages = Math.ceil(cards.length / cardsPerView)
  const visibleCards = cards.slice(
    currentIndex * cardsPerView,
    currentIndex * cardsPerView + cardsPerView
  )
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalPages - 1 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalPages - 1 : prevIndex - 1
    )
  }

  return (
    <div className="slider">
      <div className="container">
        <button className="arrow-btn left" onClick={prevSlide}><FaChevronLeft/></button>
        <About reviews={visibleCards} />
        <button className="arrow-btn right" onClick={nextSlide}><FaChevronRight/></button>
      </div>
    </div>
  )
}

export default Slider;
