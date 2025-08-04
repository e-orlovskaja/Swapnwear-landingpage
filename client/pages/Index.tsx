import React from 'react';
import { Heart, X, MessageCircle, Plus } from 'lucide-react';
import SwipableCard from '../components/SwipableCard';

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-swap-cream via-orange-100/30 to-swap-cream overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="container mx-auto px-4 pt-16 md:pt-20 lg:pt-24">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Side - Content */}
            <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
              {/* Logo */}
              <div className="space-y-4 lg:space-y-6">
                <img
                  src="/swap'n wear (2).png"
                  alt="Swap'n Wear logo"
                  className="w-64 sm:w-72 lg:w-96 h-auto mx-auto lg:mx-0"
                />

                {/* Tagline */}
                <h2 className="font-belanosima font-semibold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight">
                  <span className="text-swap-text-dark">A clothing swap app – no reselling, just </span>
                  <span className="text-swap-green underline decoration-swap-green decoration-2">pure trading.</span>
                </h2>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto lg:mx-0">
                <button className="bg-swap-green text-swap-beige font-inter font-semibold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-swap-green/90 transition-colors flex-1">
                  Join the movement
                </button>
                <button className="border-2 border-swap-green text-swap-green font-inter font-semibold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-transparent hover:bg-swap-light-green transition-colors flex-1">
                  Learn how it works
                </button>
              </div>
            </div>

            {/* Right Side - App Mockup */}
            <div className="relative flex justify-center lg:justify-end mt-8 lg:mt-0">
              <SwipableCard className="mb-16" />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section - Original Design */}
      <section className="py-16 lg:py-24 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-5xl p-8 lg:p-12 text-center space-y-8">
              <div className="space-y-4">
                <h3 className="font-instrument text-2xl lg:text-3xl font-medium text-black">
                  Subscribe for our Newsletter
                </h3>
                <p className="font-instrument text-lg text-black">
                  Subscribe for updates on launch and new features news
                </p>
              </div>
              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-6 py-4 rounded-full border border-swap-text-gray bg-swap-input-bg focus:outline-none focus:ring-2 focus:ring-swap-green"
                />
                <button className="w-full bg-swap-green text-swap-beige font-inter font-semibold text-xl px-8 py-4 rounded-full hover:bg-swap-green/90 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Swap'n Whaaaaat Section */}
      <section className="py-20 lg:py-32 relative">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-belanosima text-3xl md:text-4xl lg:text-5xl text-swap-green mb-12">
            Swap'n Whaaaaat?
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-lg">
              <p className="font-instrument text-lg md:text-xl lg:text-2xl text-black leading-relaxed">
                Swipe left, swipe right – find the one you never knew your closet needed. Swap'n Wear is the thrill of thrifting meets the magic of matching. Upload your clothes, set your vibe, and start swiping through real closets near you. No selling. No price tags. Just pure, mutual style exchange. Maybe it's that pastel jacket. Maybe it's vintage Levi's. Whatever it is, it's waiting for you – and it wants to swap.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How the app works Section */}
      <section className="py-20 lg:py-32 relative bg-gradient-to-b from-swap-cream via-green-100/20 to-swap-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="font-belanosima text-4xl lg:text-5xl text-swap-text-dark">
              How the app works?
            </h2>
          </div>

          <div className="space-y-24 lg:space-y-32">
            {/* Step 1: Post */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="lg:order-2 space-y-6">
                <h3 className="font-belanosima text-3xl lg:text-4xl text-swap-text-dark">#1 Post</h3>
                <p className="font-instrument text-xl lg:text-2xl text-swap-text-dark leading-relaxed">
                  Swap'n Wear helps you declutter your closet and find new styles without buying new. Upload photos of clothes you want to trade.
                </p>
                <button className="bg-swap-green text-swap-beige font-medium px-6 py-3 rounded-xl transform -rotate-3 hover:rotate-0 transition-transform flex items-center gap-2">
                  <Plus className="w-5 h-5" />
                  Add New Item
                </button>
              </div>
              <div className="lg:order-1 relative">
                <div className="bg-white rounded-3xl shadow-xl p-4 transform rotate-3 max-w-sm mx-auto">
                  <img 
                    src="https://api.builder.io/api/v1/image/assets/TEMP/ee88d8a05e782211e222f60459ff3f2c57d1d094?width=468" 
                    alt="Leather sandals" 
                    className="w-full h-48 object-cover rounded-2xl mb-3"
                  />
                  <div className="space-y-2">
                    <div className="flex justify-between items-start">
                      <h4 className="font-inter font-medium text-swap-text-dark">Leather sandals</h4>
                      <span className="bg-swap-active text-white text-xs px-2 py-1 rounded-xl">Active</span>
                    </div>
                    <div className="flex gap-2 text-xs text-swap-text-gray">
                      <span>Size 39</span>
                      <span>•</span>
                      <span>Good</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <button className="bg-swap-light-beige text-swap-text-dark text-xs px-3 py-2 rounded-xl">Edit</button>
                      <button className="text-swap-red text-xs">Delete</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2: Swipe */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="space-y-6">
                <h3 className="font-belanosima text-3xl lg:text-4xl text-swap-text-dark">#2 Swipe</h3>
                <p className="font-instrument text-xl lg:text-2xl text-swap-text-dark leading-relaxed">
                  Swap'n Wear helps you declutter your closet and find new styles without buying new. Browse through other users' items.
                </p>
              </div>
              <div className="relative">
                <div className="relative max-w-sm mx-auto">
                  {/* Background card */}
                  <div className="absolute inset-0 bg-white rounded-3xl shadow-xl transform rotate-8 opacity-90">
                    <div className="p-4">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets%2Fdc1ef5848ba8400292dccd16da94774e%2Fe30c223462ce4cae97e6869d53948c87?format=webp&width=800"
                        alt="Cardigan"
                        className="w-full h-48 object-cover rounded-2xl mb-3"
                      />
                      <div className="space-y-2">
                        <h4 className="font-inter text-sm font-medium text-swap-text-dark">Cardigan</h4>
                        <p className="text-xs text-swap-text-gray">Cardigan with pearl buttons, worn a few times...</p>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-swap-text-gray">Condition: Like New</span>
                          <div className="bg-swap-light-green rounded-full w-6 h-6 flex items-center justify-center">
                            <span className="text-swap-green text-xs">XL</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Front card */}
                  <div className="relative bg-white rounded-3xl shadow-xl p-4 z-10">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2Fdc1ef5848ba8400292dccd16da94774e%2F951be603f9ca4b30b1f1c8fddab0a5cd?format=webp&width=800"
                      alt="Leather sandals"
                      className="w-full h-48 object-cover rounded-2xl mb-3"
                    />
                    <div className="space-y-2">
                      <div className="flex justify-between items-start">
                        <h4 className="font-inter text-sm font-medium text-swap-text-dark">Leather sandals</h4>
                        <div className="bg-swap-light-green rounded-full w-6 h-6 flex items-center justify-center">
                          <span className="text-swap-green text-xs">39</span>
                        </div>
                      </div>
                      <p className="text-xs text-swap-text-gray">Gently used leather sandals in great condition...</p>
                      <div className="space-y-1">
                        <p className="text-xs text-swap-text-gray font-semibold">Condition: Good</p>
                        <p className="text-xs text-swap-text-dark">by Anna</p>
                      </div>
                    </div>
                  </div>

                  {/* Swipe action buttons */}
                  <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 flex gap-4 z-20">
                    <button className="bg-white rounded-full w-16 h-16 shadow-lg flex items-center justify-center">
                      <X className="w-6 h-6 text-swap-text-gray" />
                    </button>
                    <button className="bg-swap-green rounded-full w-16 h-16 shadow-lg flex items-center justify-center">
                      <Heart className="w-6 h-6 text-white" fill="white" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3: Match */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="lg:order-2 space-y-6">
                <h3 className="font-belanosima text-3xl lg:text-4xl text-swap-text-dark">#3 Match</h3>
                <p className="font-instrument text-xl lg:text-2xl text-swap-text-dark leading-relaxed">
                  Swap'n Wear helps you declutter your closet and find new styles without buying new. When you both like each other's items, it's a match!
                </p>
              </div>
              <div className="lg:order-1 relative">
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 bg-swap-green rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <Heart className="w-10 h-10 text-white" fill="white" />
                  </div>
                  <h3 className="font-inter text-3xl font-bold text-swap-green">It's a Match!</h3>
                  <div className="flex justify-center items-center gap-4">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2Fdc1ef5848ba8400292dccd16da94774e%2F345966254c28413e8c34183bfb37aa4b?format=webp&width=800"
                      alt="High-waisted pants"
                      className="w-24 h-24 rounded-3xl object-cover transform -rotate-11 shadow-lg"
                    />
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2Fdc1ef5848ba8400292dccd16da94774e%2F1f7444ae286243668db2955d3e355870?format=webp&width=800"
                      alt="Pink jumpsuit"
                      className="w-24 h-24 rounded-3xl object-cover shadow-lg"
                    />
                  </div>
                  <button className="bg-swap-green text-swap-beige font-semibold px-6 py-3 rounded-xl transform -rotate-4 hover:rotate-0 transition-transform flex items-center gap-2 mx-auto">
                    <MessageCircle className="w-5 h-5" />
                    Start Chatting
                  </button>
                </div>
              </div>
            </div>

            {/* Step 4: Swap */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="space-y-6">
                <h3 className="font-belanosima text-3xl lg:text-4xl text-swap-text-dark">#4 Swap</h3>
                <p className="font-instrument text-xl lg:text-2xl text-swap-text-dark leading-relaxed">
                  Swap'n Wear helps you declutter your closet and find new styles without buying new. Chat, meet up, and make the swap!
                </p>
              </div>
              <div className="relative">
                <div className="bg-white rounded-3xl p-6 shadow-xl max-w-sm mx-auto space-y-4">
                  <div className="space-y-4">
                    <div className="bg-swap-chat-bg rounded-3xl p-4">
                      <p className="text-swap-text-dark">Hi! I love your floral dress!</p>
                    </div>
                    <div className="bg-swap-green rounded-3xl p-4 ml-8">
                      <p className="text-swap-beige">Thank you! Your sweater looks so cozy. Perfect timing for fall!</p>
                    </div>
                    <div className="bg-swap-chat-bg rounded-3xl p-4">
                      <p className="text-swap-text-dark">Are you free to swap this weekend?</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why it's Better Section */}
      <section className="py-20 lg:py-32 relative bg-gradient-to-b from-swap-cream via-orange-100/20 to-swap-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-belanosima text-4xl lg:text-5xl text-swap-text-dark">
              Why it's Better
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <div className="bg-white rounded-5xl p-8 lg:p-10 text-center space-y-6">
              <h3 className="font-instrument text-2xl lg:text-3xl font-medium text-black">
                Swipe to Swap
              </h3>
              <p className="font-instrument text-lg text-black leading-relaxed">
                Tired of scrolling through endless listings? Swap'n Wear brings the fun back with a swipe-based interface - match with pieces you love, and trade instantly. No awkward haggling, no wasted time.
              </p>
            </div>

            <div className="bg-white rounded-5xl p-8 lg:p-10 text-center space-y-6">
              <h3 className="font-instrument text-2xl lg:text-3xl font-medium text-black">
                No Reselling, Just Pure Trading
              </h3>
              <p className="font-instrument text-lg text-black leading-relaxed">
                This isn't a secondhand marketplace. It's a wardrobe exchange built on values. No pricing, no reselling - just fair, mutual swaps that keep closets fresh without feeding consumerism.
              </p>
            </div>

            <div className="bg-white rounded-5xl p-8 lg:p-10 text-center space-y-6">
              <h3 className="font-instrument text-2xl lg:text-3xl font-medium text-black">
                Every Swap Cuts Waste & Emissions
              </h3>
              <p className="font-instrument text-lg text-black leading-relaxed">
                Fast fashion is killing the planet. Swap'n Wear helps extend clothing lifecycles, reduce landfill waste, and slash CO₂. Swapping just one outfit saves up to 25kg of emissions. That's style with impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Sections */}
      <section className="py-20 lg:py-32 relative bg-gradient-to-b from-orange-100/30 to-swap-cream">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Stay in the Loop */}
            <div className="bg-white rounded-5xl p-8 lg:p-12 space-y-8">
              <div className="space-y-4">
                <h3 className="font-instrument text-2xl lg:text-3xl font-medium text-black">
                  Stay in the Loop
                </h3>
                <p className="font-instrument text-lg text-black">
                  Subscribe for updates on launch and new features news
                </p>
              </div>
              <div className="space-y-4">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="w-full px-6 py-4 rounded-full border border-swap-text-gray bg-swap-input-bg focus:outline-none focus:ring-2 focus:ring-swap-green"
                />
                <button className="w-full bg-swap-green text-swap-beige font-inter font-semibold text-xl px-8 py-4 rounded-full hover:bg-swap-green/90 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Become a hero-tester */}
            <div className="bg-white rounded-5xl p-8 lg:p-12 space-y-8">
              <div className="space-y-4">
                <h3 className="font-instrument text-2xl lg:text-3xl font-medium text-black">
                  Become a hero-tester
                </h3>
                <p className="font-instrument text-lg text-black">
                  Get early access, help us improve, and earn exclusive in-app badges + 3 months of Pro!
                </p>
              </div>
              <div className="space-y-4">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="w-full px-6 py-4 rounded-full border border-swap-text-gray bg-swap-input-bg focus:outline-none focus:ring-2 focus:ring-swap-green"
                />
                <button className="w-full bg-swap-green text-swap-beige font-inter font-semibold text-xl px-8 py-4 rounded-full hover:bg-swap-green/90 transition-colors">
                  Apply for testing
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-swap-cream">
        <div className="container mx-auto px-4 text-center space-y-6">
          <p className="font-instrument text-xl text-black">
            Swap'n Wear © 2025. Made with care for people and planet.
          </p>
          <div className="flex justify-center gap-8">
            <a href="#" className="font-instrument text-xl text-black hover:text-swap-green transition-colors">Privacy</a>
            <a href="#" className="font-instrument text-xl text-black hover:text-swap-green transition-colors">Contact</a>
            <a href="#" className="font-instrument text-xl text-black hover:text-swap-green transition-colors">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
