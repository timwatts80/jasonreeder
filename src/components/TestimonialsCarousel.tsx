'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';

const testimonials = [
  {
    id: 1,
    quote: "Jason's ability to identify and execute on profitable opportunities is unmatched. His transparent communication and proven track record made our partnership decision easy.",
    name: "Michael K.",
    title: "Private Investor, Seattle"
  },
  {
    id: 2,
    quote: "Working with Jason has been incredibly rewarding. His speed of execution and attention to detail throughout every phase gives us complete confidence in our investments.",
    name: "Sarah C.",
    title: "Investment Group, Portland"
  },
  {
    id: 3,
    quote: "Jason delivers exactly what he promises, when he promises it. His deep market knowledge and honest approach make him an ideal long-term partner.",
    name: "David R.",
    title: "Real Estate Fund, Vancouver"
  },
  {
    id: 4,
    quote: "The level of detail in Jason's reporting and his proactive communication style sets him apart. We always know exactly where our investment stands.",
    name: "Jennifer L.",
    title: "Family Office, San Francisco"
  }
];

export default function TestimonialsCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const trackRef = useRef<HTMLDivElement>(null);

  const totalTestimonials = testimonials.length;
  // Duplicate testimonials for infinite loop
  const extendedTestimonials = [...testimonials, ...testimonials];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide(prev => {
      const next = prev + 1;
      // When we reach the end of the original set, reset to beginning seamlessly
      if (next >= totalTestimonials) {
        setTimeout(() => {
          setIsTransitioning(false);
          setCurrentSlide(0);
          setTimeout(() => setIsTransitioning(true), 50);
        }, 500);
        return next;
      }
      return next;
    });
  }, [totalTestimonials]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);

    return () => clearInterval(interval);
  }, [nextSlide]);

  const prevSlide = () => {
    setCurrentSlide(prev => {
      if (prev <= 0) {
        // Jump to the end of the duplicated set without transition
        setIsTransitioning(false);
        setTimeout(() => {
          setCurrentSlide(totalTestimonials - 1);
          setIsTransitioning(true);
        }, 50);
        return totalTestimonials - 1;
      }
      return prev - 1;
    });
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const slideWidth = isMobile ? 100 : 50;
  const translateX = currentSlide * slideWidth;

  return (
    <div className="relative mb-16">
      <div className="overflow-hidden pb-4">
        <div 
          ref={trackRef}
          className={`flex ${isTransitioning ? 'transition-transform duration-500 ease-in-out' : ''}`}
          style={{ transform: `translateX(-${translateX}%)` }}
        >
          {extendedTestimonials.map((testimonial, index) => (
            <div key={`${testimonial.id}-${Math.floor(index / totalTestimonials)}`} className="w-full md:w-1/2 flex-shrink-0 px-3">
              <div className="bg-white p-8 rounded-lg shadow-lg mx-3 h-96 md:h-80 flex flex-col">
                <div className="text-6xl mb-4" style={{ color: 'var(--color-accent)' }}>&ldquo;</div>
                <blockquote className="text-lg text-gray-700 mb-6 leading-relaxed italic flex-grow">
                  {testimonial.quote}
                </blockquote>
                <div className="text-left mt-auto">
                  <p className="font-semibold" style={{ color: 'var(--color-primary)' }}>
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-600">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Carousel Navigation */}
      <button 
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
        style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-primary)' }}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
        style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-primary)' }}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      
      {/* Carousel Dots */}
      <div className="flex justify-center space-x-2 mt-6">
        {testimonials.map((_, index) => (
          <button 
            key={index}
            onClick={() => goToSlide(index)}
            className="w-3 h-3 rounded-full transition-all duration-300"
            style={{ 
              backgroundColor: index === (currentSlide % totalTestimonials) ? 'var(--color-accent)' : '#d1d5db' 
            }}
          />
        ))}
      </div>
    </div>
  );
}