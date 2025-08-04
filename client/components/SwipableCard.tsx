import React, { useState } from 'react';
import { Heart, X } from 'lucide-react';

interface ClothingItem {
  id: number;
  image: string;
  title: string;
  description: string;
  condition: string;
  size: string;
  author: string;
}

const clothingItems: ClothingItem[] = [
  {
    id: 1,
    image: "https://api.builder.io/api/v1/image/assets/TEMP/702150b3a0766cd16f04290b0cac2f98281f8938?width=794",
    title: "Blazer",
    description: "Lightly worn pastel green blazer, oversized, in very good condition. Perfect for spring and summer outfits.",
    condition: "Very Good",
    size: "L",
    author: "Klara"
  },
  {
    id: 2,
    image: "https://cdn.builder.io/api/v1/image/assets%2Fdc1ef5848ba8400292dccd16da94774e%2Fe30c223462ce4cae97e6869d53948c87?format=webp&width=800",
    title: "Cardigan",
    description: "Cardigan with pearl buttons, worn a few times for a photo shoot. Soft and cozy material.",
    condition: "Like New",
    size: "XL",
    author: "Noa"
  },
  {
    id: 3,
    image: "https://cdn.builder.io/api/v1/image/assets%2Fdc1ef5848ba8400292dccd16da94774e%2F951be603f9ca4b30b1f1c8fddab0a5cd?format=webp&width=800",
    title: "Leather sandals",
    description: "Gently used leather sandals in great condition, minimal wear. Perfect for summer.",
    condition: "Good", 
    size: "39",
    author: "Anna"
  },
  {
    id: 4,
    image: "https://cdn.builder.io/api/v1/image/assets%2Fdc1ef5848ba8400292dccd16da94774e%2F345966254c28413e8c34183bfb37aa4b?format=webp&width=800",
    title: "High-waisted pants",
    description: "Straight-leg trousers, breathable linen-cotton blend, worn a few times. Great fit.",
    condition: "Excellent",
    size: "S",
    author: "Elena"
  },
  {
    id: 5,
    image: "https://cdn.builder.io/api/v1/image/assets%2Fdc1ef5848ba8400292dccd16da94774e%2F1f7444ae286243668db2955d3e355870?format=webp&width=800",
    title: "Pink jumpsuit",
    description: "Soft pink one-piece with adjustable straps and relaxed fit. Perfect for casual outings.",
    condition: "Good",
    size: "M", 
    author: "Milda"
  }
];

interface SwipableCardProps {
  className?: string;
}

export default function SwipableCard({ className = "" }: SwipableCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const currentItem = clothingItems[currentIndex];

  const handleSwipe = (direction: 'left' | 'right') => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % clothingItems.length);
      setIsAnimating(false);
    }, 300);
  };

  if (!currentItem) return null;

  return (
    <div className={`relative flex flex-col items-center ${className}`}>
      <div className={`w-72 sm:w-80 lg:w-96 bg-white rounded-3xl shadow-xl overflow-hidden transition-all duration-300 ${
        isAnimating ? 'transform scale-95 opacity-0' : 'transform scale-100 opacity-100'
      }`}>
        <img 
          src={currentItem.image}
          alt={currentItem.title}
          className="w-full h-80 sm:h-96 object-cover"
        />
        <div className="p-4 lg:p-6 space-y-3 lg:space-y-4">
          <div className="flex items-start justify-between">
            <div className="space-y-2 flex-1">
              <h3 className="font-inter text-lg lg:text-xl font-medium text-swap-text-dark">
                {currentItem.title}
              </h3>
              <p className="text-swap-text-gray text-sm leading-relaxed">
                {currentItem.description.length > 60 
                  ? `${currentItem.description.substring(0, 60)}...` 
                  : currentItem.description}
              </p>
              <button className="text-swap-green text-sm font-semibold hover:underline">
                Read More
              </button>
            </div>
            <div className="bg-swap-light-green rounded-full w-10 lg:w-11 h-8 lg:h-9 flex items-center justify-center flex-shrink-0 ml-3">
              <span className="text-swap-green font-medium text-sm">
                {currentItem.size}
              </span>
            </div>
          </div>
          <div className="space-y-1">
            <p className="text-swap-text-gray text-xs font-semibold">
              Condition: {currentItem.condition}
            </p>
            <p className="text-swap-text-dark text-xs">
              by {currentItem.author}
            </p>
          </div>
        </div>
      </div>

      {/* Add more vertical space between card and buttons */}
      <div className="h-10 sm:h-12 lg:h-14" />

      {/* Swipe Action Buttons */}
      <div className="flex gap-6 sm:gap-8 items-center z-10">
        <button 
          onClick={() => handleSwipe('left')}
          className="bg-white rounded-full w-16 sm:w-20 h-16 sm:h-20 shadow-lg flex items-center justify-center hover:scale-105 transition-transform"
          disabled={isAnimating}
        >
          <X className="w-6 sm:w-8 h-6 sm:h-8 text-swap-green" strokeWidth={2} />
        </button>
        <button 
          onClick={() => handleSwipe('right')}
          className="bg-swap-green rounded-full w-16 sm:w-20 h-16 sm:h-20 shadow-lg flex items-center justify-center hover:scale-105 transition-transform"
          disabled={isAnimating}
        >
          <Heart className="w-6 sm:w-8 h-6 sm:h-8 text-white" fill="white" />
        </button>
      </div>
    </div>
  );
}
