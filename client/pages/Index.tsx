import React from 'react';
import { Heart, X, MessageCircle, Plus, ArrowLeft, ArrowRight, MousePointerClick, Leaf, PiggyBank, Users, Smile } from 'lucide-react';

export default function Index() {
  // Product carousel animation state (appearance + motion)
  const items = React.useMemo(
    () => [
      { id: 'cardigan', src: '/images/cardigan.png' },
      { id: 'dress', src: '/images/dress.png' },
      { id: 'blazer', src: '/images/blazer.png' },
      { id: 'bag', src: '/images/bag.png' },
      { id: 'shirt', src: '/images/shirt.png' },
    ],
    []
  );
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
  const transition = 'transform 520ms cubic-bezier(0.22,1,0.36,1), width 450ms cubic-bezier(0.22,1,0.36,1), opacity 450ms linear';

  const getSlotForItemIndex = (index) => {
    const slotIndex = (index - pivot + 5) % 5;
    return SLOT_CONFIGS[slotIndex];
  };

  const handleLike = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setPivot((p) => (p + 1) % 5);
    window.setTimeout(() => setIsAnimating(false), 540);
  };

  const handleDislike = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setPivot((p) => (p + 4) % 5); // -1 mod 5
    window.setTimeout(() => setIsAnimating(false), 540);
  };
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Header/Navigation */}
      <header className="bg-white/95 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="relative flex items-center">
            {/* Logo - aligned with headline */}
            <div className="flex items-center">
              <img 
                src="/images/logo.png" 
                alt="Swap'n Wear" 
                className="w-[223px] h-[89px]"
              />
            </div>
            
            {/* Top Navigation */}
            <nav className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-8">
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
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-0 relative lg:min-h-[90vh] flex items-center">
        <div className="container mx-auto px-4 lg:scale-[0.85] lg:origin-top">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Headlines and CTA */}
            <div className="flex flex-col lg:pl-[154px] max-w-xl">
              <h1 className="font-instrument font-bold text-[52px] leading-[60px] mb-4">
                <span className="bg-gradient-to-r from-[#003D99] to-[#66C2FF] bg-no-repeat bg-left bg-clip-text text-transparent">Broke with a full closet?</span>
              </h1>
              <h2 className="font-instrument font-medium text-[36px] leading-[44px] text-gray-900 mb-4">
                Your fashion regrets are someone else's dreams.
              </h2>
              
              {/* Step indicators - 70px spacing from headline */}
              <div className="lg:scale-[0.9] lg:origin-left">
                <div className="space-y-4 pt-[56px]">
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
              
              <p className="font-instrument font-semibold text-[21px] leading-[26px] text-black mb-4 pt-6 lg:scale-[0.9] lg:origin-left inline-block" style={{ color: '#000000' }}>
                Your closet crisis, solved.
              </p>
              
              {/* CTA Buttons - positioned to align with bottom of model image */}
              <div className="flex flex-col gap-4 pt-8 items-center">
                <button className="text-white font-instrument font-semibold text-[22px] leading-[27px] py-4 rounded-lg shadow-lg hover:opacity-90 transition-opacity w-full max-w-[426px] px-[21px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#003D99]" style={{ backgroundColor: '#0077FF' }}>
                  Show me how to escape closet hell
                </button>
                <button className="text-blue-900 font-instrument font-semibold text-[22px] leading-[27px] py-4 rounded-lg shadow-lg hover:opacity-90 transition-opacity w-full max-w-[426px] px-[21px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#003D99]" style={{ backgroundColor: '#EBFDB9' }}>
                  Be our testing legend
                </button>
              </div>
            </div>
            
            {/* Right Image - aligned with headline */}
            <div className="relative pt-0">
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
      <section className="pt-0 pb-0 bg-white relative lg:-mt-6">
        <div className="container mx-auto px-4">
          {/* Flowing stats - Infinite horizontal scroll in 2 rows */}
          <div className="relative overflow-x-hidden w-screen left-1/2 -translate-x-1/2 pt-0 pb-10">
            {/* Top Row - Alternating E3F4FF and E9FFBD backgrounds, scrolling left */}
            <div className="flex animate-scroll mb-4">
              {/* First set of stats */}
              <div className="flex whitespace-nowrap gap-[30px]">
                <div className="rounded-full px-8 py-3 shadow-lg" style={{ backgroundColor: '#E3F4FF' }}>
                  <span className="font-instrument font-normal text-[21px] text-black">47% feel pressured to buy clothes just to "fit in"</span>
                </div>
                <div className="rounded-full px-8 py-3 shadow-lg" style={{ backgroundColor: '#E9FFBD' }}>
                  <span className="font-instrument font-normal text-[21px] text-black">56% experience financial strain from fashion trends</span>
                </div>
                <div className="rounded-full px-8 py-3 shadow-lg" style={{ backgroundColor: '#E3F4FF' }}>
                  <span className="font-instrument font-normal text-[21px] text-black">50% experience "wardrobe rage"</span>
                </div>
                <div className="rounded-full px-8 py-3 shadow-lg" style={{ backgroundColor: '#E9FFBD' }}>
                  <span className="font-instrument font-normal text-[21px] text-black">80% of clothes worn only 20% of the time</span>
                </div>
              </div>
              {/* Duplicate set for seamless loop */}
              <div className="flex whitespace-nowrap gap-[30px] ml-[30px]">
                <div className="rounded-full px-8 py-3 shadow-lg" style={{ backgroundColor: '#E3F4FF' }}>
                  <span className="font-instrument font-normal text-[21px] text-black">47% feel pressured to buy clothes just to "fit in"</span>
                </div>
                <div className="rounded-full px-8 py-3 shadow-lg" style={{ backgroundColor: '#E9FFBD' }}>
                  <span className="font-instrument font-normal text-[21px] text-black">56% experience financial strain from fashion trends</span>
                </div>
                <div className="rounded-full px-8 py-3 shadow-lg" style={{ backgroundColor: '#E3F4FF' }}>
                  <span className="font-instrument font-normal text-[21px] text-black">50% experience "wardrobe rage"</span>
                </div>
                <div className="rounded-full px-8 py-3 shadow-lg" style={{ backgroundColor: '#E9FFBD' }}>
                  <span className="font-instrument font-normal text-[21px] text-black">80% of clothes worn only 20% of the time</span>
                </div>
              </div>
            </div>
            
            {/* Bottom Row - Alternating E9FFBD and E3F4FF backgrounds, scrolling right */}
            <div className="flex animate-scroll-reverse">
              {/* First set of stats */}
              <div className="flex whitespace-nowrap gap-[30px]">
                <div className="rounded-full px-8 py-3 shadow-lg" style={{ backgroundColor: '#E9FFBD' }}>
                  <span className="font-instrument font-normal text-[21px] text-black">17 minutes wasted daily choosing outfits</span>
                </div>
                <div className="rounded-full px-8 py-3 shadow-lg" style={{ backgroundColor: '#E3F4FF' }}>
                  <span className="font-instrument font-normal text-[21px] text-black">65% throw away at least one item monthly</span>
                </div>
                <div className="rounded-full px-8 py-3 shadow-lg" style={{ backgroundColor: '#E9FFBD' }}>
                  <span className="font-instrument font-normal text-[21px] text-black">$550 average worth of unworn clothes per closet</span>
                </div>
                <div className="rounded-full px-8 py-3 shadow-lg" style={{ backgroundColor: '#E3F4FF' }}>
                  <span className="font-instrument font-normal text-[21px] text-black">Over 50% feel mentally overwhelmed when deciding what to wear</span>
                </div>
              </div>
              {/* Duplicate set for seamless loop */}
              <div className="flex whitespace-nowrap gap-[30px] ml-[30px]">
                <div className="rounded-full px-8 py-3 shadow-lg" style={{ backgroundColor: '#E9FFBD' }}>
                  <span className="font-instrument font-normal text-[21px] text-black">17 minutes wasted daily choosing outfits</span>
                </div>
                <div className="rounded-full px-8 py-3 shadow-lg" style={{ backgroundColor: '#E3F4FF' }}>
                  <span className="font-instrument font-normal text-[21px] text-black">65% throw away at least one item monthly</span>
                </div>
                <div className="rounded-full px-8 py-3 shadow-lg" style={{ backgroundColor: '#E9FFBD' }}>
                  <span className="font-instrument font-normal text-[21px] text-black">$550 average worth of unworn clothes per closet</span>
                </div>
                <div className="rounded-full px-8 py-3 shadow-lg" style={{ backgroundColor: '#E3F4FF' }}>
                  <span className="font-instrument font-normal text-[21px] text-black">Over 50% feel mentally overwhelmed when deciding what to wear</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Carousel Section */}
      <section className="pt-20 pb-10 bg-[#E3F4FF]">
        <div className="container mx-auto px-4">
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
          <div className="relative w-screen left-1/2 -translate-x-1/2 mt-[40px] h-[58px]">
            <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-[42px]">
              <button onClick={handleDislike}
                className="w-[58px] h-[58px] rounded-full flex items-center justify-center shadow-[0_4px_6px_rgba(0,0,0,0.09)]"
                style={{ backgroundColor: '#FFFEFE' }}
                aria-label="Dislike"
              >
                <X className="w-6 h-6 text-[#758A75]" strokeWidth={2} />
              </button>
              <button onClick={handleLike}
                className="w-[58px] h-[58px] rounded-full flex items-center justify-center shadow-[0_4px_6px_rgba(0,0,0,0.09)]"
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
      </section>

      {/* Swap'n Whaaaaat Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-instrument font-semibold text-[40px] mb-[40px] mx-auto bg-gradient-to-r from-[#003D99] to-[#B8E0FF] bg-clip-text text-transparent" style={{ width: '479px', height: '49px', lineHeight: '49px' }}>
            Swap'n Whaaaaat?
          </h2>
          <p className="font-instrument font-medium text-[25px] leading-[36px] mb-[40px] mx-auto" style={{ width: '684px', color: '#222B22' }}>
            Your nothing-to-wear problem just met its match.
          </p>
          
          {/* Meme reconstructed per spec */}
          <div className="relative bg-white shadow-lg mx-auto mb-8" style={{ width: '531px', height: '370px' }}>
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
          
          <p className="font-instrument font-normal text-[21px] leading-[36px] text-justify mx-auto" style={{ width: '1058px', color: '#1A1A1A' }}>
            If this is your morning routine too, Swap'n Wear is about to be your new obsession. Think dating apps but for clothes – upload what's collecting dust, swipe on pieces that give you butterflies, meet up and swap. Your impulse buys become someone else's holy grail and vice versa. Let's make sustainability sexy!
          </p>
          
          {/* Benefits row (minimal prompt style) */}
          <div className="mt-12">
            <div className="relative w-screen left-1/2 -translate-x-1/2 flex items-center justify-center gap-12" style={{ color: '#003D99' }}>
              <div className="flex items-center gap-2">
                <Leaf className="w-5 h-5" />
                <span className="font-instrument font-medium text-xl">Save the planet</span>
              </div>
              <div className="flex items-center gap-2">
                <Smile className="w-5 h-5" />
                <span className="font-instrument font-medium text-xl">Zero shopping guilt</span>
              </div>
              <div className="flex items-center gap-2">
                <PiggyBank className="w-5 h-5" />
                <span className="font-instrument font-medium text-xl">Save money</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span className="font-instrument font-medium text-xl">Meet style soulmates</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center space-y-[40px]">
            <h3 className="font-instrument font-semibold italic text-[40px]" style={{ color: '#003D99', width: '538px', height: '36px', lineHeight: '36px', marginLeft: 'auto', marginRight: 'auto', textAlign: 'justify' }}>
              Your closet crisis ends here...
            </h3>
            <h2 className="font-instrument font-medium" style={{ width: '684px', height: '41px', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center', fontSize: '25px', lineHeight: '36px', color: '#4A4A4A' }}>
              From closet crisis to style bliss in 3 simple steps
            </h2>
          </div>
          
          {/* Step 1: Upload */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-32 mt-[40px]">
            <div className="lg:order-2 space-y-10">
              <h3 className="font-instrument font-semibold text-4xl text-gray-900">Upload</h3>
              <p className="font-instrument font-normal text-xl text-gray-600 leading-relaxed">
                Turn your fashion regrets into treasure Take photos of clothes collecting dust in your closet. Add size, condition, and why you never wear it. Someone out there is literally searching for exactly what you're hiding.
              </p>
            </div>
            <div className="lg:order-1 flex justify-center">
              <img 
                src="/images/uploaditems.png" 
                alt="Upload items visual"
                className="w-full max-w-[560px] h-auto"
              />
            </div>
          </div>
          
          {/* Step 2: Swipe */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
            <div className="lg:order-1 space-y-10">
              <h3 className="font-instrument font-semibold text-4xl text-gray-900">Swipe</h3>
              <p className="font-instrument font-normal text-xl text-gray-600 leading-relaxed">
                Find pieces that spark joy (finally!) Swipe through real clothes from real closets near you. See something that makes your heart skip? Swipe right. Not feeling it? Swipe left. It's like Tinder, but you won't get ghosted – just great clothes.
              </p>
            </div>
            <div className="lg:order-2 flex justify-center">
              <img 
                src="/images/swipeitems.png" 
                alt="Swipe items visual"
                className="w-full max-w-[560px] h-auto"
              />
            </div>
          </div>
          
          {/* Step 3: Trade */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="lg:order-2 space-y-6">
              <h3 className="font-instrument font-semibold text-4xl text-gray-900">Trade</h3>
              <p className="font-instrument font-normal text-xl text-gray-600 leading-relaxed">
                Matched with someone? Choose how to swap:
              </p>
              <div className="space-y-4 text-lg text-gray-600">
                <p>1. Meet & greet: Coffee shop vibes, inspect items, trade on the spot</p>
                <p>2. Parcel magic: Drop in lockers, grab and go – zero human interaction</p>
                <p>3. Door to door: Use your favorite delivery service (you arrange it)</p>
              </div>
            </div>
            <div className="lg:order-1 flex justify-center">
              <img 
                src="/images/match.png" 
                alt="Match visual"
                className="w-full max-w-[560px] h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Swap Section */}
      <section className="py-20" style={{ backgroundColor: '#E3F4FF' }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-instrument font-semibold text-4xl lg:text-5xl text-gray-800 mb-4">
            Why swap instead of shop?
          </h2>
          <p className="font-instrument font-medium text-xl text-gray-600 mb-16">
            (Besides saving your bank account)
          </p>
          
          <div className="flex flex-col items-center gap-[30px]">
            <div className="w-full max-w-[779px] rounded-3xl shadow-lg" style={{ backgroundColor: '#EBFDB9' }}>
              <div className="p-[30px] text-left">
                <h3 className="font-instrument font-medium text-2xl text-blue-900 mb-[30px]">
                  Your wallet will thank you
                </h3>
                <p className="font-instrument font-normal text-lg text-blue-900">
                  Stop the broke-but-buying cycle. Get fresh pieces without spending money. That $40 you would've blown on another top? Keep it for actual food.
                </p>
              </div>
            </div>
            
            <div className="w-full max-w-[779px] rounded-3xl shadow-lg" style={{ backgroundColor: '#EBFDB9' }}>
              <div className="p-[30px] text-left">
                <h3 className="font-instrument font-medium text-2xl text-blue-900 mb-[30px]">
                  Your closet will finally make sense
                </h3>
                <p className="font-instrument font-normal text-lg text-blue-900">
                  Trade clothes you never touch for pieces you'll actually wear. End the daily "I have nothing to wear" breakdown. Your mornings just got 17 minutes shorter.
                </p>
              </div>
            </div>
            
            <div className="w-full max-w-[779px] rounded-3xl shadow-lg" style={{ backgroundColor: '#EBFDB9' }}>
              <div className="p-[30px] text-left">
                <h3 className="font-instrument font-medium text-2xl text-blue-900 mb-[30px]">
                  Your style will evolve
                </h3>
                <p className="font-instrument font-normal text-lg text-blue-900">
                  Discover pieces you'd never buy but absolutely love wearing. Try new styles risk-free. Someone else's "meh" might be your new signature look.
                </p>
              </div>
            </div>
            
            <div className="w-full max-w-[779px] rounded-3xl shadow-lg" style={{ backgroundColor: '#EBFDB9' }}>
              <div className="p-[30px] text-left">
                <h3 className="font-instrument font-medium text-2xl text-blue-900 mb-[30px]">
                  Your conscience will chill out
                </h3>
                <p className="font-instrument font-normal text-lg text-blue-900">
                  Those clothes gathering dust? They'll find someone who genuinely loves them. You get guilt-free decluttering plus the warm fuzzies of not contributing to fast fashion waste.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Early Birds Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-instrument font-semibold text-4xl lg:text-5xl text-gray-800 mb-6">
            Join the closet rebellion before everyone else
          </h2>
          <p className="font-instrument font-normal text-xl text-gray-600 max-w-4xl mx-auto mb-16">
            We're not just building an app – we're starting a movement. The first swappers will help us create something that changes how an entire generation thinks about clothes.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
            {/* Beta Tester Squad */}
            <div className="rounded-3xl p-8 shadow-lg text-left flex flex-col h-full" style={{ backgroundColor: '#EBFDB9' }}>
              <h3 className="font-instrument font-semibold text-2xl text-gray-900 mb-4">
                Beta Tester Squad
              </h3>
              <p className="font-instrument font-medium text-lg text-gray-600 mb-6">
                Be our fearless tester and help break the fast fashion system from the inside. Get first access, direct the line to founders, and "OG Swapper" status forever.
              </p>
              <button className="bg-blue-600 text-white font-instrument font-semibold text-xl px-8 py-4 rounded-full hover:bg-blue-700 transition-colors self-center mt-auto">
                Be our testing legend
              </button>
            </div>
            
            {/* The inner circle */}
            <div className="rounded-3xl p-8 shadow-lg text-left flex flex-col h-full" style={{ backgroundColor: '#E3F4FF' }}>
              <h3 className="font-instrument font-semibold text-2xl text-gray-900 mb-4">
                The inner circle
              </h3>
              <p className="font-instrument font-medium text-lg text-gray-600 mb-6">
                Get founder diary updates, sneak peeks, and launch access before we announce it anywhere. Real updates, not corporate fluff.
              </p>
              <button className="bg-lime-200 text-blue-900 font-instrument font-semibold text-xl px-8 py-4 rounded-full hover:bg-lime-300 transition-colors self-center mt-auto">
                Get the insider scoop
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20" style={{ backgroundColor: '#E3F4FF' }}>
        <div className="container mx-auto px-4 text-center">
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
      <section className="py-0" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container mx-auto px-4">
          <div className="h-[393px] flex flex-col items-center justify-center text-center gap-6">
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <button className="font-instrument font-medium text-2xl px-8 py-4 rounded-xl hover:opacity-90 transition-colors" style={{ backgroundColor: '#0077FF', color: '#EBFDB9' }}>
                But wait, is this actually safe/legit/not weird?
              </button>
              <button className="font-instrument font-semibold text-2xl px-8 py-4 rounded-full hover:opacity-90 transition-colors" style={{ backgroundColor: '#EBFDB9', color: '#003D99' }}>
                Ask questions
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="py-8" style={{ backgroundColor: '#E3F4FF' }}>
        <div className="container mx-auto px-4 text-center">
          <p className="font-instrument font-normal text-xl text-black">
            Swap'n Wear © 2025. Made with care for people and planet.
          </p>
        </div>
      </section>
    </div>
  );
}