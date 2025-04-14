// components/ServicesCarousel.tsx
"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FiShoppingCart, FiImage, FiCreditCard } from "react-icons/fi";

interface ServiceCard {
  id: number;
  title: string;
  image: string;
  bgColor: string;
}

const serviceCards: ServiceCard[] = [
  {
    id: 1,
    title: "SEO Optimization",
    image: "/images/service-laptop.png",
    bgColor: "bg-blue-300",
  },
  {
    id: 2,
    title: "Content Management",
    image: "/images/service-folder.png",
    bgColor: "bg-green-200",
  },
  {
    id: 3,
    title: "Performance Analysis",
    image: "/images/service-chart.png",
    bgColor: "bg-amber-200",
  },
  {
    id: 4,
    title: "Marketing Strategy",
    image: "/images/service-strategy.png",
    bgColor: "bg-purple-200",
  },
];

const ServicesCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  // Auto rotate the carousel
  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % serviceCards.length);
    }, 3000); // Change slide every 3 seconds

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, []);

  // Calculate which cards to show
  const visibleCards = () => {
    const cards = [];
    for (let i = 0; i < 3; i++) {
      const index = (activeIndex + i) % serviceCards.length;
      cards.push(serviceCards[index]);
    }
    return cards;
  };

  return (
    <div className="py-20 overflow-hidden relative">
      {/* Side buttons - same as in hero section for consistency */}
      <div className="fixed right-0 top-1/3 z-50">
        <div className="flex flex-col bg-indigo-900">
          <button className="p-4 hover:bg-indigo-800">
            <FiShoppingCart size={24} className="text-white" />
          </button>
          <button className="p-4 hover:bg-indigo-800">
            <FiImage size={24} className="text-white" />
          </button>
          <button className="p-4 hover:bg-indigo-800">
            <FiCreditCard size={24} className="text-white" />
          </button>
        </div>
      </div>

      {/* Carousel Container */}
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="flex w-full max-w-5xl space-x-4 md:space-x-8">
            {visibleCards().map((card, index) => (
              <div
                key={card.id}
                className={`w-1/3 rounded-2xl p-4 transition-all duration-500 transform ${
                  index === 1 ? "scale-100" : "scale-90"
                } ${card.bgColor}`}
              >
                <div className="aspect-square relative flex items-center justify-center">
                  {/* Service Image */}
                  <div className="relative h-full w-full">
                    <Image
                      src={card.image}
                      alt={card.title}
                      layout="fill"
                      objectFit="contain"
                    />

                    {/* Decorative Elements */}
                    <div className="absolute top-5 left-5">
                      <div className="w-4 h-4 rounded-full bg-pink-300"></div>
                    </div>
                    <div className="absolute bottom-5 right-10">
                      <div className="w-3 h-3 rounded-full bg-white"></div>
                    </div>
                    <div className="absolute top-1/2 right-2">
                      <div className="w-6 h-6 text-blue-500">+</div>
                    </div>

                    {/* Wavy Line (for certain cards) */}
                    {card.id === 2 && (
                      <div className="absolute bottom-10 left-0">
                        <svg
                          width="40"
                          height="10"
                          viewBox="0 0 40 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0 5C5 0 10 10 15 5C20 0 25 10 30 5C35 0 40 10 45 5"
                            stroke="#FFD700"
                            strokeWidth="2"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCarousel;
