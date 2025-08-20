import React from 'react';
import { Heart, X, MessageCircle, Plus, ArrowLeft, ArrowRight, MousePointerClick, Leaf, PiggyBank, Users, Smile, Menu } from 'lucide-react';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react"

export default function Index() {
  // Product carousel animation state (appearance + motion)
  const initialItems = React.useMemo(
    () => [
      { id: 'cardigan', src: '/images/cardigan.png' },
      { id: 'dress', src: '/images/dress.png' },
      { id: 'blazer', src: '/images/blazer.png' },
      { id: 'bag', src: '/images/bag.png' },
      { id: 'shirt', src: '/images/shirt.png' },
    ],
    []
  );
  const [items, setItems] = React.useState(initialItems);
  const SLOT_CONFIGS = React.useMemo(() => {
    const GAP = 40; // desired gap between card edges
    const widthOuter = 261;
    const widthInner = 297;
    const widthCenter = 323;
    const innerOffset = Math.round(widthCenter / 2 + widthInner / 2 + GAP); // 350
    const outerOffset = Math.round(innerOffset + (widthInner / 2 + widthOuter / 2 + GAP)); // 669
    return [
      { offsetX: -outerOffset, offsetY: 52, width: widthOuter, opacity: 0.4, z: 1 },
      { offsetX: -innerOffset, offsetY: 22, width: widthInner, opacity: 0.6, z: 2 },
      { offsetX: 0, offsetY: 0, width: widthCenter, opacity: 1, z: 3 },
      { offsetX: innerOffset, offsetY: 22, width: widthInner, opacity: 0.6, z: 2 },
      { offsetX: outerOffset, offsetY: 52, width: widthOuter, opacity: 0.4, z: 1 },
    ];
  }, []);
  const [pivot, setPivot] = React.useState(2); // index in items[] that is centered
  const [isAnimating, setIsAnimating] = React.useState(false);
  const [processedCount, setProcessedCount] = React.useState(0);
  const [showOutOfItems, setShowOutOfItems] = React.useState(false);
  const [mobileNavOpen, setMobileNavOpen] = React.useState(false);
  const transition = 'transform 520ms cubic-bezier(0.22,1,0.36,1), width 450ms cubic-bezier(0.22,1,0.36,1), opacity 450ms linear';

  const getSlotForItemIndex = (index) => {
    const slotIndex = (index - pivot + 5) % 5;
    return SLOT_CONFIGS[slotIndex];
  };

  const handleAction = (direction: 'like' | 'dislike') => {
    if (isAnimating || showOutOfItems) return;
    setIsAnimating(true);
    // Always move left (advance pivot)
    setPivot((p) => (p + 1) % items.length);
    window.setTimeout(() => {
      setIsAnimating(false);
      setProcessedCount((c) => {
        const updated = c + 1;
        if (updated >= initialItems.length) {
          setShowOutOfItems(true);
        }
        return updated;
      });
    }, 540);
  };

  const handleRestartMatches = () => {
    setProcessedCount(0);
    setShowOutOfItems(false);
    // Reset pivot to center; keep current items order for continued browsing
    setPivot(2);
  };
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Header/Navigation */}
      <header className="bg-white/95 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-4 py-4">
          <div className="relative flex items-center">
            {/* Logo - aligned with headline */}
            <div className="flex items-center">
              <img 
                src="/images/logo.png" 
                alt="Swap'n Wear" 
                className="w-[160px] sm:w-[200px] lg:w-[223px] h-auto"
              />
            </div>
            
            {/* Top Navigation (desktop/tablet) */}
            <nav className="hidden md:flex flex-row flex-wrap justify-center gap-2 md:gap-8 mt-4 md:mt-0 md:absolute md:left-1/2 md:transform md:-translate-x-1/2 items-center">
              <a href="#why-swap" className="font-instrument font-medium text-[16px] hover:opacity-80 transition-opacity" style={{ color: '#4A4A4A' }}>
                Why Swap
              </a>
              <a href="#how-it-works" className="font-instrument font-medium text-[16px] hover:opacity-80 transition-opacity" style={{ color: '#4A4A4A' }}>
                How It Works
              </a>
              <a href="#contact" className="font-instrument font-medium text-[16px] hover:opacity-80 transition-opacity" style={{ color: '#4A4A4A' }}>
                For Early Birds
              </a>
              <a href="#about" className="font-instrument font-medium text-[16px] hover:opacity-80 transition-opacity" style={{ color: '#4A4A4A' }}>
                Contact
              </a>
            </nav>

            {/* Mobile hamburger */}
            <button
              type="button"
              aria-label="Toggle navigation"
              aria-expanded={mobileNavOpen}
              onClick={() => setMobileNavOpen((v) => !v)}
              className="ml-auto md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#003D99]"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
          {mobileNavOpen && (
            <div className="md:hidden mt-3">
              <div className="w-full rounded-xl border border-gray-200 shadow-md bg-white overflow-hidden">
                <a href="#why-swap" onClick={() => setMobileNavOpen(false)} className="block px-4 py-3 font-instrument font-medium text-[16px] text-gray-700 hover:bg-gray-50">Why Swap</a>
                <a href="#how-it-works" onClick={() => setMobileNavOpen(false)} className="block px-4 py-3 font-instrument font-medium text-[16px] text-gray-700 hover:bg-gray-50">How It Works</a>
                <a href="#contact" onClick={() => setMobileNavOpen(false)} className="block px-4 py-3 font-instrument font-medium text-[16px] text-gray-700 hover:bg-gray-50">For Early Birds</a>
                <a href="#about" onClick={() => setMobileNavOpen(false)} className="block px-4 py-3 font-instrument font-medium text-[16px] text-gray-700 hover:bg-gray-50">Contact</a>
              </div>
            </div>
          )}
        </div>
      </header>

      <main role="main">
      {/* Hero Section */}
      <section className="pt-6 pb-8 sm:pb-10 lg:pb-0 relative z-10 lg:min-h-[90vh] flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-4 lg:scale-[0.85] lg:origin-top">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left side - Headlines and CTA */}
            <div className="flex flex-col lg:pl-[154px] max-w-xl mx-auto lg:mx-0 order-2 lg:order-1">
              <h1 className="font-instrument font-bold text-[28px] sm:text-[36px] lg:text-[52px] leading-tight sm:leading-[44px] lg:leading-[60px] mb-4 text-center lg:text-left">
                <span className="bg-gradient-to-r from-[#003D99] to-[#66C2FF] bg-no-repeat bg-left bg-clip-text text-transparent">Broke with a full closet?</span>
              </h1>
              <h2 className="font-instrument font-medium text-[20px] sm:text-[28px] lg:text-[36px] leading-snug sm:leading-[36px] lg:leading-[44px] text-gray-900 mb-4 text-center lg:text-left">
                Your fashion regrets are someone else's dreams.
              </h2>

              {/* Removed extra stickers; replaced by stacked chips below */}
              
              {/* Step indicators - creative stickers on mobile/tablet, original text on desktop */}
              <div className="pt-[40px]">
                {/* Mobile/Tablet: Horizontal sticker pills */}
                <div className="lg:hidden mt-4 flex flex-row items-center justify-center gap-3">
                  {/* Upload pill */}
                  <div className="inline-flex items-center gap-2 px-4 py-3 rounded-full border border-gray-200 shadow-md -rotate-3 -translate-y-0.5" style={{ backgroundColor: '#B8E0FF' }}>
                    <Plus className="w-4 h-4 text-[#003D99]" />
                    <span className="font-instrument font-semibold text-sm text-[#003D99]">Upload</span>
                  </div>
                  {/* Swipe pill */}
                  <div className="inline-flex items-center gap-2 px-4 py-3 rounded-full border border-gray-200 shadow-md rotate-2 translate-y-0.5" style={{ backgroundColor: '#E3F4FF' }}>
                    <MousePointerClick className="w-4 h-4 text-[#003D99]" />
                    <span className="font-instrument font-semibold text-sm text-[#003D99]">Swipe</span>
                  </div>
                  {/* Trade pill */}
                  <div className="inline-flex items-center gap-2 px-4 py-3 rounded-full border border-gray-200 shadow-md -rotate-1 -translate-y-0.5" style={{ backgroundColor: '#EBFDB9' }}>
                    <ArrowRight className="w-4 h-4 text-[#6E8F56]" />
                    <span className="font-instrument font-semibold text-sm text-[#222B22]">Trade</span>
                  </div>
                </div>

                {/* Desktop: keep original step text layout */}
                <div className="hidden lg:block lg:scale-[0.9] lg:origin-left">
                  <div className="space-y-4 pt-0">
                    <div className="flex items-center gap-2">
                      <div className="px-3 py-1" style={{ backgroundColor: '#B8E0FF', borderRadius: '25px' }}>
                        <span className="font-instrument font-normal text-[21px] text-black">Upload</span>
                      </div>
                      <span className="font-instrument font-normal text-[21px] text-black">what you never wear.</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="px-3 py-1" style={{ backgroundColor: '#B8E0FF', borderRadius: '25px' }}>
                        <span className="font-instrument font-normal text-[21px] text-black">Swipe</span>
                      </div>
                      <span className="font-instrument font-normal text-[21px] text-black">on what you want.</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-instrument font-normal text-[21px] text-black">Meet up and</span>
                      <div className="px-3 py-1" style={{ backgroundColor: '#B8E0FF', borderRadius: '25px' }}>
                        <span className="font-instrument font-normal text-[21px] text-black">Trade</span>
                      </div>
                      <span className="font-instrument font-normal text-[21px] text-black" style={{ marginLeft: '-8px' }}>.</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="font-instrument font-semibold text-[16px] sm:text-[18px] lg:text-[21px] leading-[26px] text-black mb-4 pt-6 lg:scale-[0.9] lg:origin-left inline-block text-center lg:text-left mx-auto lg:mx-0" style={{ color: '#000000' }}>
                Your closet crisis, solved.
              </p>
              
              {/* CTA Buttons - positioned to align with bottom of model image */}
              <div className="flex flex-col gap-4 pt-10 sm:pt-12 lg:pt-8 items-center">
                <a href="#how-it-works" className="text-white font-instrument font-semibold text-[16px] sm:text-[18px] lg:text-[22px] leading-[27px] py-2.5 sm:py-3 lg:py-4 rounded-lg shadow-lg hover:opacity-90 transition-opacity w-full max-w-[240px] sm:max-w-[340px] lg:max-w-[426px] px-3 sm:px-5 lg:px-[21px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#003D99] min-h-[44px] text-center" style={{ backgroundColor: '#0077FF' }}>
                  Show me how to escape closet hell
                </a>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSf0q5JXb1zF_GhLFT9ITqGS2MkyWku3PJArf6Wczo8fT8IBsw/viewform?usp=dialog" target="_blank" rel="noopener noreferrer" className="relative z-20 pointer-events-auto text-blue-900 font-instrument font-semibold text-[16px] sm:text-[18px] lg:text-[22px] leading-[27px] py-2.5 sm:py-3 lg:py-4 rounded-lg shadow-lg hover:opacity-90 transition-opacity w-full max-w-[240px] sm:max-w-[340px] lg:max-w-[426px] px-3 sm:px-5 lg:px-[21px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#003D99] min-h-[44px] text-center" style={{ backgroundColor: '#EBFDB9' }}>
                  Be our testing legend
                </a>
              </div>
            </div>
            
            {/* Right Image - aligned with headline */}
            <div className="relative pt-0 order-1 lg:order-2 flex justify-center lg:justify-start mb-6 lg:mb-0 hidden lg:block">
              <img 
                src="/images/model.png" 
                alt="Model sitting on the floor in a sunlit studio" 
                className="w-full max-w-[546.4px] h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="mt-6 sm:mt-8 pt-0 pb-0 bg-white relative lg:-mt-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-4">
          {/* Flowing stats - Infinite horizontal scroll in 2 rows */}
          <div className="relative overflow-x-hidden w-screen left-1/2 -translate-x-1/2 pt-0 pb-10">
            {/* Top Row - Alternating E3F4FF and E9FFBD backgrounds, scrolling left */}
            <div className="flex animate-scroll mb-4">
              {/* First set of stats */}
              <div className="flex whitespace-nowrap gap-[30px]">
                <div className="rounded-full px-8 py-3 shadow-lg" style={{ backgroundColor: '#E3F4FF' }}>
                  <span className="font-instrument font-normal text-[16px] sm:text-[18px] lg:text-[21px] text-black">47% feel pressured to buy clothes just to "fit in"</span>
                </div>
                <div className="rounded-full px-8 py-3 shadow-lg" style={{ backgroundColor: '#E9FFBD' }}>
                  <span className="font-instrument font-normal text-[16px] sm:text-[18px] lg:text-[21px] text-black">56% experience financial strain from fashion trends</span>
                </div>
                <div className="rounded-full px-8 py-3 shadow-lg" style={{ backgroundColor: '#E3F4FF' }}>
                  <span className="font-instrument font-normal text-[16px] sm:text-[18px] lg:text-[21px] text-black">50% experience "wardrobe rage"</span>
                </div>
                <div className="rounded-full px-8 py-3 shadow-lg" style={{ backgroundColor: '#E9FFBD' }}>
                  <span className="font-instrument font-normal text-[16px] sm:text-[18px] lg:text-[21px] text-black">80% of clothes worn only 20% of the time</span>
                </div>
              </div>
              {/* Duplicate set for seamless loop */}
              <div className="flex whitespace-nowrap gap-[30px] ml-[30px]">
                <div className="rounded-full px-8 py-3 shadow-lg" style={{ backgroundColor: '#E3F4FF' }}>
                  <span className="font-instrument font-normal text-[16px] sm:text-[18px] lg:text-[21px] text-black">47% feel pressured to buy clothes just to "fit in"</span>
                </div>
                <div className="rounded-full px-8 py-3 shadow-lg" style={{ backgroundColor: '#E9FFBD' }}>
                  <span className="font-instrument font-normal text-[16px] sm:text-[18px] lg:text-[21px] text-black">56% experience financial strain from fashion trends</span>
                </div>
                <div className="rounded-full px-8 py-3 shadow-lg" style={{ backgroundColor: '#E3F4FF' }}>
                  <span className="font-instrument font-normal text-[16px] sm:text-[18px] lg:text-[21px] text-black">50% experience "wardrobe rage"</span>
                </div>
                <div className="rounded-full px-8 py-3 shadow-lg" style={{ backgroundColor: '#E9FFBD' }}>
                  <span className="font-instrument font-normal text-[16px] sm:text-[18px] lg:text-[21px] text-black">80% of clothes worn only 20% of the time</span>
                </div>
              </div>
            </div>
            
            {/* Bottom Row - Alternating E9FFBD and E3F4FF backgrounds, scrolling right */}
            <div className="flex animate-scroll-reverse">
              {/* First set of stats */}
              <div className="flex whitespace-nowrap gap-[30px]">
                <div className="rounded-full px-8 py-3 shadow-lg" style={{ backgroundColor: '#E9FFBD' }}>
                  <span className="font-instrument font-normal text-[16px] sm:text-[18px] lg:text-[21px] text-black">17 minutes wasted daily choosing outfits</span>
                </div>
                <div className="rounded-full px-8 py-3 shadow-lg" style={{ backgroundColor: '#E3F4FF' }}>
                  <span className="font-instrument font-normal text-[16px] sm:text-[18px] lg:text-[21px] text-black">65% throw away at least one item monthly</span>
                </div>
                <div className="rounded-full px-8 py-3 shadow-lg" style={{ backgroundColor: '#E9FFBD' }}>
                  <span className="font-instrument font-normal text-[16px] sm:text-[18px] lg:text-[21px] text-black">$550 average worth of unworn clothes per closet</span>
                </div>
                <div className="rounded-full px-8 py-3 shadow-lg" style={{ backgroundColor: '#E3F4FF' }}>
                  <span className="font-instrument font-normal text-[16px] sm:text-[18px] lg:text-[21px] text-black">Over 50% feel mentally overwhelmed when deciding what to wear</span>
                </div>
              </div>
              {/* Duplicate set for seamless loop */}
              <div className="flex whitespace-nowrap gap-[30px] ml-[30px]">
                <div className="rounded-full px-8 py-3 shadow-lg" style={{ backgroundColor: '#E9FFBD' }}>
                  <span className="font-instrument font-normal text-[16px] sm:text-[18px] lg:text-[21px] text-black">17 minutes wasted daily choosing outfits</span>
                </div>
                <div className="rounded-full px-8 py-3 shadow-lg" style={{ backgroundColor: '#E3F4FF' }}>
                  <span className="font-instrument font-normal text-[16px] sm:text-[18px] lg:text-[21px] text-black">65% throw away at least one item monthly</span>
                </div>
                <div className="rounded-full px-8 py-3 shadow-lg" style={{ backgroundColor: '#E9FFBD' }}>
                  <span className="font-instrument font-normal text-[16px] sm:text-[18px] lg:text-[21px] text-black">$550 average worth of unworn clothes per closet</span>
                </div>
                <div className="rounded-full px-8 py-3 shadow-lg" style={{ backgroundColor: '#E3F4FF' }}>
                  <span className="font-instrument font-normal text-[16px] sm:text-[18px] lg:text-[21px] text-black">Over 50% feel mentally overwhelmed when deciding what to wear</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Carousel Section */}
      <section className="pt-12 sm:pt-16 lg:pt-20 pb-6 sm:pb-8 lg:pb-10 bg-[#E3F4FF]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-4">
          {/* Mobile: Simple single item */}
          <div className="block lg:hidden">
            <div className="flex justify-center">
              <img src={items[pivot]?.src} alt={items[pivot]?.id} className="w-[280px] sm:w-[320px] h-auto" />
            </div>
            <div className="flex justify-center gap-4 mt-8">
              <button onClick={() => handleAction('dislike')} disabled={isAnimating || showOutOfItems} className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shadow-[0_4px_6px_rgba(0,0,0,0.09)] disabled:opacity-50 disabled:cursor-not-allowed" style={{ backgroundColor: '#FFFEFE' }} aria-label="Dislike">
                <X className="w-5 h-5 text-[#758A75]" strokeWidth={2} />
              </button>
              <button onClick={() => handleAction('like')} disabled={isAnimating || showOutOfItems} className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shadow-[0_4px_6px_rgba(0,0,0,0.09)] disabled:opacity-50 disabled:cursor-not-allowed" style={{ backgroundColor: '#0077FF' }} aria-label="Like">
                <Heart className="w-5 h-5 text-white" strokeWidth={2} />
              </button>
            </div>
            {/* Minimalistic prompt with icon for mobile */}
            <div className="mt-4 flex items-center justify-center gap-2 text-[#1A1A1A]">
              <MousePointerClick className="w-4 h-4 opacity-80" />
              <span className="font-caveat text-[18px] leading-[24px]">Give it a try — tap like or dislike</span>
            </div>
          </div>

          {/* Desktop: Original carousel */}
          <div className="hidden lg:block">
            <div className="relative w-screen left-1/2 -translate-x-1/2 overflow-visible min-h-[527px]">
              {items.map((item, index) => {
                const slot = getSlotForItemIndex(index);
                const style = {
                  left: '50%',
                  top: 0,
                  width: `${slot.width}px`,
                  opacity: slot.opacity,
                  zIndex: slot.z,
                  transform: `translateX(-50%) translateX(${slot.offsetX}px) translateY(${slot.offsetY}px)`,
                  transition,
                } as React.CSSProperties;
                return (
                  <img
                    key={item.id}
                    src={item.src}
                    alt={item.id}
                    className="absolute select-none pointer-events-none"
                    style={style}
                  />
                );
              })}
              </div>

            {/* Like / Dislike buttons (appearance only) */}
            <div className="relative w-screen left-1/2 -translate-x-1/2 mt:[40px] h-[58px]">
              <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-[42px]">
                <button onClick={() => handleAction('dislike')}
                  disabled={isAnimating || showOutOfItems}
                  className="w-[58px] h-[58px] rounded-full flex items-center justify-center shadow-[0_4px_6px_rgba(0,0,0,0.09)] disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ backgroundColor: '#FFFEFE' }}
                  aria-label="Dislike"
                >
                  <X className="w-6 h-6 text-[#758A75]" strokeWidth={2} />
                </button>
                <button onClick={() => handleAction('like')}
                  disabled={isAnimating || showOutOfItems}
                  className="w-[58px] h-[58px] rounded-full flex items-center justify-center shadow-[0_4px_6px_rgba(0,0,0,0.09)] disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ backgroundColor: '#0077FF' }}
                  aria-label="Like"
                >
                  <Heart className="w-6 h-6 text-white" strokeWidth={2} />
                </button>
              </div>
              {/* Minimalistic prompt with icon */}
              <div className="absolute left-1/2 top-1/2 -translate-y-1/2 translate-x-[120px] flex items-center gap-2 text-[#1A1A1A]">
                <MousePointerClick className="w-5 h-5 opacity-80" />
                <span className="font-caveat text-[22px] leading-[28px]">Give it a try — tap like or dislike</span>
              </div>
            </div>
          </div>
        </div>
        {showOutOfItems && (
          <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
            <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full p-4 text-center">
              <p className="font-instrument text-gray-800 text-base">All caught up. Join early birds or restart matches.</p>
              <div className="mt-3 flex flex-row gap-2 justify-center">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSf0q5JXb1zF_GhLFT9ITqGS2MkyWku3PJArf6Wczo8fT8IBsw/viewform?usp=dialog" target="_blank" rel="noopener noreferrer" className="relative z-20 pointer-events-auto text-white font-instrument font-medium px-4 py-2 rounded-md" style={{ backgroundColor: '#0077FF' }}>
                  Be a testing legend
                </a>
                <button
                  type="button"
                  onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSc1PQ-OD7u2UuPPz0hHYwsDGEqImtifHbEk8h1_XB2y4Mc0Wg/viewform?usp=header', '_blank', 'noopener,noreferrer')}
                  className="relative z-20 pointer-events-auto text-blue-900 font-instrument font-medium px-4 py-2 rounded-md"
                  style={{ backgroundColor: '#EBFDB9' }}
                  aria-label="Get updates"
                >
                  Get updates
                </button>
                <button onClick={handleRestartMatches} className="font-instrument font-medium px-4 py-2 rounded-md border" style={{ borderColor: '#E5E7EB', color: '#1F2937' }}>
                  Restart
                </button>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Swap'n Whaaaaat Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-4 text-center">
          <h2 className="font-instrument font-semibold text-[24px] sm:text-[32px] lg:text-[40px] mb-[24px] sm:mb-[32px] lg:mb-[40px] mx-auto bg-gradient-to-r from-[#003D99] to-[#B8E0FF] bg-clip-text text-transparent leading-tight sm:leading-[44px] lg:leading-[49px] max-w-[479px]">
            Swap'n Whaaaaat?
          </h2>
          <p className="font-instrument font-medium text-[18px] sm:text-[22px] lg:text-[25px] leading-[30px] sm:leading-[36px] mb-[24px] sm:mb-[32px] lg:mb-[40px] mx-auto" style={{ maxWidth: '684px', color: '#222B22' }}>
            Your nothing-to-wear problem just met its match.
          </p>
          
          {/* Meme reconstructed per spec */}
          <div className="hidden md:block relative bg-white shadow-lg mx-auto mb-8" style={{ width: '531px', height: '370px' }}>
            {/* Headline rows */}
            <p className="font-arial" style={{ position: 'absolute', left: '24px', top: '12px', width: '197px', height: '29px', fontWeight: 400, fontSize: '25px', lineHeight: '29px', textAlign: 'justify' as const, color: '#000000' }}>
              me: owns 47 tops
            </p>
            <p className="font-arial" style={{ position: 'absolute', left: '22px', top: '55px', width: '95px', height: '29px', fontWeight: 400, fontSize: '25px', lineHeight: '29px', textAlign: 'justify' as const, color: '#000000' }}>
              also me:
            </p>
            {/* GIF layer */}
            <img
              src="/images/memegif.gif"
              alt="Wardrobe meme animated"
              className="absolute pointer-events-none"
              style={{ left: '16px', top: '98px', width: '500px', height: '260px', objectFit: 'cover' }}
            />
          </div>
          <img className="md:hidden mx-auto w-full max-w-[531px] h-auto mb-8" src="/images/memegif.gif" alt="Wardrobe meme animated" />
          
          <p className="font-instrument font-normal text-[16px] sm:text-[18px] lg:text-[21px] leading-7 sm:leading-8 text-justify mx-auto" style={{ maxWidth: '1058px', color: '#1A1A1A' }}>
            If this is your morning routine too, Swap'n Wear is about to be your new obsession. Think dating apps but for clothes – upload what's collecting dust, swipe on pieces that give you butterflies, meet up and swap. Your impulse buys become someone else's holy grail and vice versa. Let's make sustainability sexy!
          </p>
          
          {/* Benefits row re-styled as colorful sticker pills across all breakpoints */}
          <div className="mt-12">
            <div className="relative w-screen left-1/2 -translate-x-1/2 flex flex-wrap items-center justify-center gap-3 sm:gap-4 lg:gap-5">
              {/* Save the planet pill */}
              <div className="inline-flex items-center gap-2 px-4 py-3 rounded-full border border-gray-200 shadow-md -rotate-3 -translate-y-0.5" style={{ backgroundColor: '#EBFDB9' }}>
                <Leaf className="w-4 h-4 text-[#6E8F56]" />
                <span className="font-instrument font-semibold text-sm text-[#222B22]">Save the planet</span>
              </div>
              {/* Zero shopping guilt pill */}
              <div className="inline-flex items-center gap-2 px-4 py-3 rounded-full border border-gray-200 shadow-md rotate-2 translate-y-0.5" style={{ backgroundColor: '#E3F4FF' }}>
                <Smile className="w-4 h-4 text-[#003D99]" />
                <span className="font-instrument font-semibold text-sm text-[#003D99]">Zero shopping guilt</span>
              </div>
              {/* Save money pill */}
              <div className="inline-flex items-center gap-2 px-4 py-3 rounded-full border border-gray-200 shadow-md -rotate-1 -translate-y-0.5" style={{ backgroundColor: '#EBFDB9' }}>
                <PiggyBank className="w-4 h-4 text-[#6E8F56]" />
                <span className="font-instrument font-semibold text-sm text-[#222B22]">Save money</span>
              </div>
              {/* Meet style soulmates pill */}
              <div className="inline-flex items-center gap-2 px-4 py-3 rounded-full border border-gray-200 shadow-md rotate-1 translate-y-0.5" style={{ backgroundColor: '#B8E0FF' }}>
                <Users className="w-4 h-4 text-[#003D99]" />
                <span className="font-instrument font-semibold text-sm text-[#003D99]">Meet style soulmates</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-4">
          <div className="flex flex-col items-center space-y-[40px]">
            <h2 className="font-instrument font-semibold italic text-[24px] sm:text-[32px] lg:text-[40px] leading-tight sm:leading-[44px] lg:leading-[49px]" style={{ marginLeft: 'auto', marginRight: 'auto', textAlign: 'center', color: '#003D99' }}>
              Your closet crisis ends here...
            </h2>
            <p className="font-instrument font-medium text-[18px] sm:text-[22px] lg:text-[25px]" style={{ color: '#222B22', maxWidth: '684px', lineHeight: '36px', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}>
              From closet crisis to style bliss in 3 simple steps
            </p>
          </div>
          
          {/* Step 1: Upload */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32 mt-[40px]">
            <div className="order-2 lg:order-2 space-y-10">
              <h3 className="font-instrument font-semibold text-4xl text-gray-900 text-center">Upload</h3>
              <p className="font-instrument font-normal text-xl text-gray-600 leading-relaxed">
                Turn your fashion regrets into treasure Take photos of clothes collecting dust in your closet. Add size, condition, and why you never wear it. Someone out there is literally searching for exactly what you're hiding.
              </p>
            </div>
            <div className="order-1 lg:order-1 flex justify-center">
              <img 
                src="/images/uploaditems.png" 
                alt="Upload items visual"
                className="w-full max-w-[320px] sm:max-w-[420px] lg:max-w-[560px] h-auto"
              />
            </div>
          </div>
          
          {/* Step 2: Swipe */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            <div className="order-2 lg:order-1 space-y-10">
              <h3 className="font-instrument font-semibold text-4xl text-gray-900 text-center">Swipe</h3>
              <p className="font-instrument font-normal text-xl text-gray-600 leading-relaxed">
                Find pieces that spark joy (finally!) Swipe through real clothes from real closets near you. See something that makes your heart skip? Swipe right. Not feeling it? Swipe left. It's like Tinder, but you won't get ghosted – just great clothes.
              </p>
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
              <img 
                src="/images/swipeitems.png" 
                alt="Swipe items visual"
                className="w-full max-w-[320px] sm:max-w-[420px] lg:max-w-[560px] h-auto"
              />
            </div>
          </div>
          
          {/* Step 3: Trade */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-2 space-y-6">
              <h3 className="font-instrument font-semibold text-4xl text-gray-900 text-center">Trade</h3>
              <p className="font-instrument font-normal text-xl text-gray-600 leading-relaxed">
                Matched with someone? Choose how to swap:
              </p>
              <ol className="list-decimal pl-5 space-y-2 text-lg text-gray-600">
                <li>Meet & greet: Coffee shop vibes, inspect items, trade on the spot</li>
                <li>Parcel magic: Drop in lockers, grab and go – zero human interaction</li>
                <li>Door to door: Use your favorite delivery service (you arrange it)</li>
              </ol>
            </div>
            <div className="order-1 lg:order-1 flex justify-center">
              <img 
                src="/images/match.png" 
                alt="Match visual"
                className="w-full max-w-[320px] sm:max-w-[420px] lg:max-w-[560px] h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Swap Section */}
      <section id="why-swap" className="py-12 sm:py-16 lg:py-20" style={{ backgroundColor: '#E3F4FF' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-4 text-center">
          <h2 className="font-instrument font-semibold text-4xl lg:text-5xl text-gray-800 mb-4">
            Why swap instead of shop?
          </h2>
          <p className="font-instrument font-medium text-xl text-gray-600 mb-16">
            (Besides saving your bank account)
          </p>
          
          <div className="flex flex-col items-center gap-[30px]">
            <article className="w-full max-w-[779px] rounded-3xl shadow-lg" style={{ backgroundColor: '#EBFDB9' }}>
              <div className="p-[30px] text-left">
                <h3 className="font-instrument font-medium text-2xl text-blue-900 mb-[30px]">
                  Your wallet will thank you
                </h3>
                <p className="font-instrument font-normal text-lg text-blue-900">
                  Stop the broke-but-buying cycle. Get fresh pieces without spending money. That $40 you would've blown on another top? Keep it for actual food.
                </p>
              </div>
            </article>
            
            <article className="w-full max-w-[779px] rounded-3xl shadow-lg" style={{ backgroundColor: '#EBFDB9' }}>
              <div className="p-[30px] text-left">
                <h3 className="font-instrument font-medium text-2xl text-blue-900 mb-[30px]">
                  Your closet will finally make sense
                </h3>
                <p className="font-instrument font-normal text-lg text-blue-900">
                  Trade clothes you never touch for pieces you'll actually wear. End the daily "I have nothing to wear" breakdown. Your mornings just got 17 minutes shorter.
                </p>
              </div>
            </article>
            
            <article className="w-full max-w-[779px] rounded-3xl shadow-lg" style={{ backgroundColor: '#EBFDB9' }}>
              <div className="p-[30px] text-left">
                <h3 className="font-instrument font-medium text-2xl text-blue-900 mb-[30px]">
                  Your style will evolve
                </h3>
                <p className="font-instrument font-normal text-lg text-blue-900">
                  Discover pieces you'd never buy but absolutely love wearing. Try new styles risk-free. Someone else's "meh" might be your new signature look.
                </p>
              </div>
            </article>
            
            <article className="w-full max-w-[779px] rounded-3xl shadow-lg" style={{ backgroundColor: '#EBFDB9' }}>
              <div className="p-[30px] text-left">
                <h3 className="font-instrument font-medium text-2xl text-blue-900 mb-[30px]">
                  Your conscience will chill out
                </h3>
                <p className="font-instrument font-normal text-lg text-blue-900">
                  Those clothes gathering dust? They'll find someone who genuinely loves them. You get guilt-free decluttering plus the warm fuzzies of not contributing to fast fashion waste.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Early Birds Section */}
      <section id="contact" className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-4 text-center">
          <h2 className="font-instrument font-semibold text-4xl lg:text-5xl text-gray-800 mb-6">
            Join the closet rebellion before everyone else
          </h2>
          <p className="font-instrument font-normal text-xl text-gray-600 max-w-4xl mx-auto mb-16">
            We're not just building an app – we're starting a movement. The first swappers will help us create something that changes how an entire generation thinks about clothes.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
            {/* Beta Tester Squad */}
            <article className="rounded-3xl p-8 shadow-lg text-left flex flex-col h-full" style={{ backgroundColor: '#EBFDB9' }}>
              <h3 className="font-instrument font-semibold text-2xl text-gray-900 mb-4">
                Beta Tester Squad
              </h3>
              <p className="font-instrument font-medium text-lg text-gray-600 mb-6">
                Be our fearless tester and help break the fast fashion system from the inside. Get first access, direct the line to founders, and "OG Swapper" status forever.
              </p>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSf0q5JXb1zF_GhLFT9ITqGS2MkyWku3PJArf6Wczo8fT8IBsw/viewform?usp=dialog" target="_blank" rel="noopener noreferrer" className="relative z-20 pointer-events-auto bg-blue-600 text-white font-instrument font-semibold text-xl px-8 py-4 rounded-full hover:bg-blue-700 transition-colors self-center mt-auto">
                Be our testing legend
              </a>
            </article>
            
            {/* The inner circle */}
            <article className="rounded-3xl p-8 shadow-lg text-left flex flex-col h-full" style={{ backgroundColor: '#E3F4FF' }}>
              <h3 className="font-instrument font-semibold text-2xl text-gray-900 mb-4">
                The inner circle
              </h3>
              <p className="font-instrument font-medium text-lg text-gray-600 mb-6">
                Get founder diary updates, sneak peeks, and launch access before we announce it anywhere. Real updates, not corporate fluff.
              </p>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSc1PQ-OD7u2UuPPz0hHYwsDGEqImtifHbEk8h1_XB2y4Mc0Wg/viewform?usp=header" target="_blank" rel="noopener noreferrer" className="bg-lime-200 text-blue-900 font-instrument font-semibold text-xl px-8 py-4 rounded-full hover:bg-lime-300 transition-colors self-center mt-auto">
                Get the insider scoop
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-12 sm:py-16 lg:py-20" style={{ backgroundColor: '#E3F4FF' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-4 text-center">
          <blockquote className="max-w-4xl mx-auto">
            <p className="font-instrument font-normal italic text-3xl lg:text-4xl text-gray-900 leading-relaxed mb-6">
              "We started this because we were tired of staring at closets full of regrets while feeling broke. Early birds aren't just users – you're co-conspirators helping us prove there's a better way."
            </p>
            <footer className="font-instrument font-normal text-xl text-gray-600">
              - The Swap'n Wear team (who definitely have their own closet issue)
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Questions CTA Section (white background, fixed height, centered) */}
      <section id="about" className="py-0" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-4">
          <div className="h-[393px] flex flex-col items-center justify-center text-center gap-6">
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <button className="font-instrument font-medium text-2xl px-8 py-4 rounded-xl hover:opacity-90 transition-colors" style={{ backgroundColor: '#0077FF', color: '#EBFDB9' }}>
                But wait, is this actually safe/legit/not weird?
              </button>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLScfvPlvdf3wUAvZU8fhGhjFioGNES3niipUzvUgWDCWViWOfA/viewform?usp=header" target="_blank" rel="noopener noreferrer" className="relative z-20 pointer-events-auto font-instrument font-semibold text-2xl px-8 py-4 rounded-full hover:opacity-90 transition-colors" style={{ backgroundColor: '#EBFDB9', color: '#003D99' }}>
                Ask questions
              </a>
            </div>
          </div>
        </div>
      </section>
      </main>

      {/* Footer */}
      <footer className="py-8" style={{ backgroundColor: '#E3F4FF' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-4 text-center">
          <p className="font-instrument font-normal text-xl text-black">
            Swap'n Wear © 2025. Made with care for people and planet.
          </p>
        </div>
      </footer>
      <SpeedInsights/>
      <Analytics />
    </div>
  );
}