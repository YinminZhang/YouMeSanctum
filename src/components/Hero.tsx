import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useLanguage } from './LanguageContext'

const images = [
  "http://cdnjson.com/images/2025/01/30/image35d8d21856095058.png",
  "http://cdnjson.com/images/2025/01/30/imageacc13f5ac0b24054.png",
  "http://cdnjson.com/images/2025/01/30/imaged7f3417b6d2f48f4.png"
]

const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const { language } = useLanguage()

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const content = {
    title: {
      EN: "Welcome to You Me Sanctum",
      ZH: "欢迎来到月明仓屋"
    },
    subtitle: {
      EN: "Experience tranquility in the heart of nature",
      ZH: "体验大自然中的宁静"
    },
    button: {
      EN: "Book Your Stay",
      ZH: "立即预订"
    }
  }

  return (
    <section id="home" className="relative h-screen">
      {/* Background Image Container */}
      <div className="absolute inset-0">
        <img
          src={images[currentImageIndex]}
          alt={`Guesthouse image ${currentImageIndex + 1}`}
          className="w-full h-full object-cover transition-opacity duration-500"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black to-transparent"></div>

      {/* Navigation Buttons - Now with higher z-index */}
      <button
        onClick={prevImage}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition duration-300 z-20 cursor-pointer"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition duration-300 z-20 cursor-pointer"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-white text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">{content.title[language]}</h1>
        <p className="text-xl md:text-2xl mb-8">{content.subtitle[language]}</p>
        <a
          href="@/assets/images/wechat.jpg"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-gray-900 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300"
        >
          {content.button[language]}
        </a>
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentImageIndex ? 'bg-white' : 'bg-gray-400'
            } cursor-pointer`}
            aria-label={`Go to image ${index + 1}`}
          ></button>
        ))}
      </div>
    </section>
  )
}

export default Hero