import Image from 'next/image';

export default function Hero() {
  return (
    <section id="hero" className="relative w-full h-screen min-h-[600px] max-h-screen overflow-hidden scroll-mt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero.jpg"
          alt="Modern construction building"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Grey Overlay for Contrast */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl">
            {/* Headline */}
            <h1 className="font-oswald font-bold text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight mb-6">
              <span className="text-yellow-500">BUILDING</span> THE FUTURE,
              <br />
              <span className="text-yellow-500">ONE</span> STRONG FOUNDATION
              <br />
             AT A <span className="text-orange-500">TIME</span>.
            </h1>

            {/* Subheadline */}
            <p className="font-lato text-white text-base md:text-lg lg:text-xl xl:text-2xl mb-8 max-w-2xl leading-relaxed">
              Professional construction services in <span className="font-bold">GTA, Ontario</span>. 
              Quality craftsmanship for homeowners who value excellence.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col md:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-orange-500 hover:bg-orange-600 text-white font-oswald font-bold text-base md:text-lg uppercase transition-colors rounded-sm shadow-lg hover:shadow-xl"
              >
                GET A FREE QUOTE
              </a>
              
              <a
                href="tel:+14163710546"
                className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-white hover:bg-gray-100 text-gray-800 font-oswald font-bold text-base md:text-lg uppercase transition-colors rounded-sm shadow-lg hover:shadow-xl"
              >
                <svg 
                  className="w-5 h-5 mr-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
                  />
                </svg>
                416-371-0546
              </a>
            </div>
          </div>
        </div>
      </div>

     
    </section>
  );
}
