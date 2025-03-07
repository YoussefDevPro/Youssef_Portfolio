"use client"

import { useState, useEffect } from "react"
import { ArrowLeft, ArrowRight, Home } from "lucide-react"
import AnimatedBackground from "@/components/animated-background"

import Link from "next/link"

interface SlideContent {
  title: string
  content: string
  image: string
  isVideo?: boolean
}

export default function HygieneSystemeNerveux() {
  const slides: SlideContent[] = [
    {
      title: "Introduction au Système Nerveux",
      content: "Le système nerveux est le réseau de cellules spécialisées qui coordonnent les actions d'un organisme et transmettent des signaux entre ses différentes parties. Il est composé du cerveau, de la moelle épinière et des nerfs périphériques.",
      image: "models/tpe-of-danger.png",
    },
    {
      title: "Effets de l'Alcool",
      content: "L'alcool est un dépresseur du système nerveux central. Sa consommation excessive peut entraîner des dommages neurologiques, affecter la mémoire et réduire les capacités cognitives à long terme.",
      image: "models/alcool.png",
    },
    {
      title: "Effets du Tabac",
      content: "Le tabac contient de la nicotine qui stimule temporairement le système nerveux mais peut causer une dépendance. La consommation de tabac réduit l'oxygénation du cerveau et augmente les risques de maladies neurologiques.",
      image: "models/tpe-of-danger.png",
      isVideo: false,
    },
  ]

  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  // Add keyboard event listener for arrow key navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        nextSlide()
      } else if (event.key === "ArrowLeft") {
        prevSlide()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    
    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, []) // Empty dependency array means this effect runs once on mount

  return (
    <main className="relative h-screen w-screen overflow-hidden bg-base">
      <AnimatedBackground />
      
      <div className="overflow-hidden absolute inset-0 flex items-center justify-center p-2 md:p-4">
        <div className="glass-container relative flex h-[95vh] w-full max-w-7xl rounded-2xl shadow-xl bg-opacity-30">
          {/* Home button in top right */}
          <div className="absolute top-4 right-4 z-20">
            <Link href="/">
              <button 
                className="flex h-12 w-12 items-center justify-center rounded-full bg-surface0 text-lavender transition-colors hover:bg-lavender hover:text-base"
                aria-label="Return to home"
              >
                <Home size={26} />
              </button>
            </Link>
          </div>
          
          {/* Slide content */}
          <div className="w-full h-full p-6 md:p-10 flex flex-col">
            <h1 className="text-4xl font-bold text-lavender mb-10 text-center">
              {slides[currentSlide].title}
            </h1>
            
            <div className="flex-1 flex flex-col md:flex-row gap-10">
              {/* Text content on the left */}
              <div className="flex-1 glass-panel rounded-xl p-8 bg-opacity-50 flex items-center">
                <p className="text-text text-xl">
                  {slides[currentSlide].content}
                </p>
              </div>
              
              {/* Image/video/3D model on the right */}
              <div className="flex-1 glass-panel rounded-xl p-8 bg-opacity-50 flex items-center justify-center">
                {slides[currentSlide].isVideo ? (
                  <video 
                    src={slides[currentSlide].image} 
                    className="max-w-full max-h-full rounded-lg" 
                    controls 
                    autoPlay 
                    loop 
                    muted
                  />
                ) : (
                  <img 
                    src={slides[currentSlide].image} 
                    alt={slides[currentSlide].title}
                    className="max-w-full max-h-full rounded-lg object-contain" 
                  />
                )}
              </div>
            </div>
            
            {/* Navigation arrows */}
            <div className="flex justify-between mt-8">
              <button 
                onClick={prevSlide}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-surface0 text-lavender transition-colors hover:bg-lavender hover:text-base"
                aria-label="Previous slide"
              >
                <ArrowLeft size={24} />
              </button>
              
              <div className="flex gap-2">
                {slides.map((_, index) => (
                  <button 
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-3 w-3 rounded-full ${currentSlide === index ? 'bg-lavender' : 'bg-surface0'}`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              
              <button 
                onClick={nextSlide}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-surface0 text-lavender transition-colors hover:bg-lavender hover:text-base"
                aria-label="Next slide"
              >
                <ArrowRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}