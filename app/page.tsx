import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 selection:bg-red-700 selection:text-white">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-[120px] md:pt-[150px] pb-20 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* Left: Typography Block */}
        <div className="w-full lg:w-1/2 flex flex-col z-10">
          <div className="w-16 h-1.5 bg-red-700 mb-8"></div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-6 text-black">
            Master <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-red-900">The Form.</span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-500 font-medium leading-relaxed mb-10 max-w-lg">
            Traditional Shotokan Karate in Cincinnati. We build character, discipline, and strength through strict adherence to Japanese martial arts roots.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/shop/class-registration" 
              className="group relative inline-flex items-center justify-center px-8 py-4 text-sm font-bold uppercase tracking-widest text-white bg-black overflow-hidden"
            >
              <span className="absolute inset-0 w-full h-full bg-red-700 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
              <span className="relative flex items-center gap-3">
                Start Training
                <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </span>
            </Link>
            <Link 
              href="/schedule" 
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold uppercase tracking-widest text-black border-2 border-black hover:bg-neutral-100 transition-colors"
            >
              View Schedule
            </Link>
          </div>
        </div>

        {/* Right: Image/Visual Block */}
        <div className="w-full lg:w-1/2 relative">
          <div className="aspect-[4/5] bg-neutral-100 relative overflow-hidden group">
            <img 
              src="/thao-lee-uGlJHMEifB4-unsplash_web.webp" 
              alt="Doshinkai Dojo Karate Training" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
            />
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-red-700 hidden md:block z-10"></div>
          </div>
        </div>
      </section>

      {/* 2. PHILOSOPHY & STORY SECTION (NEW) */}
      <section className="bg-black text-white py-24 md:py-32 relative overflow-hidden">
        
        {/* Giant Kanji Background Watermark */}
        <div className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 text-[250px] md:text-[400px] font-black text-neutral-900 opacity-50 select-none pointer-events-none z-0">
          空手道
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            
            {/* Left Column: Title */}
            <div className="lg:col-span-4">
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">
                Philosophy <br /> <span className="text-red-700">&amp; Story</span>
              </h2>
              <div className="w-12 h-1 bg-red-700 mt-6"></div>
            </div>

            {/* Right Column: Content */}
            <div className="lg:col-span-8 flex flex-col space-y-10">
              
              <div>
                <h3 className="text-2xl md:text-3xl font-bold leading-snug mb-6 text-neutral-100 border-l-4 border-red-700 pl-6 py-2">
                  DOSHINKAI means <br className="hidden md:block" />
                  <span className="text-red-500">‘The Way of Body, Mind, and Spirit’.</span>
                </h3>
                <p className="text-neutral-400 text-lg leading-relaxed">
                  The name was bestowed upon our director by the founder of our organization, Hirokazu Kanazawa, Soke. The name of our dojo exemplifies the philosophy and teachings of SKIF. The word ‘DOJO’ means ‘the place where the Way is taught and learned’.
                </p>
              </div>

              <div>
                <p className="text-white text-lg font-semibold uppercase tracking-widest mb-6">
                  At Doshinkai Dojo, we emphasize the holistic development of our practitioners:
                </p>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <span className="text-red-700 text-xl font-black mt-1">01.</span>
                    <p className="text-neutral-300 text-lg leading-relaxed">
                      <strong className="text-white">The body</strong> is cultivated through training in stamina, coordination, strength, and agility.
                    </p>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-red-700 text-xl font-black mt-1">02.</span>
                    <p className="text-neutral-300 text-lg leading-relaxed">
                      <strong className="text-white">The mind</strong> is sharpened through practices fostering concentration and memory.
                    </p>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-red-700 text-xl font-black mt-1">03.</span>
                    <p className="text-neutral-300 text-lg leading-relaxed">
                      <strong className="text-white">The spirit</strong> is nurtured through lessons in perseverance, humility, and self-confidence.
                    </p>
                  </li>
                </ul>
              </div>

              <div className="pt-8 border-t border-neutral-800">
                <p className="text-neutral-400 text-base leading-relaxed">
                  Doshinkai Dojo is proudly affiliated with the Shotokan Karate-Do International Federation-United States of America (SKIF-USA) and the Shotokan Karate-Do International Federation (SKIF) based in Japan. SKIF is one of the world’s largest traditional karate organizations, boasting over 2 million members across more than 130 countries.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 3. THE GRID (Actionable Dashboard) */}
      <section className="bg-neutral-50 py-24 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-black mb-4">Explore</h2>
              <p className="text-neutral-500 font-medium">Your path at Doshinkai Dojo</p>
            </div>
            <Link href="/shop/class-registration" className="hidden md:flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-red-700 hover:text-black transition-colors group">
              View All Classes <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1 */}
            <Link href="/shop/class-registration" className="group bg-white border border-neutral-200 p-8 hover:border-red-700 hover:shadow-2xl transition-all duration-300 relative overflow-hidden flex flex-col justify-between min-h-[300px]">
              <div className="absolute top-0 left-0 w-full h-1 bg-red-700 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-4 block">Enroll</span>
                <h3 className="text-2xl font-black uppercase tracking-tight text-black mb-2">Class Registration</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">Join our upcoming training sessions. Suitable for all skill levels.</p>
              </div>
              <div className="flex justify-between items-center mt-8">
                <span className="text-red-700 font-bold group-hover:translate-x-2 transition-transform">&rarr;</span>
                <span className="bg-red-100 text-red-700 text-[10px] uppercase tracking-widest px-2 py-1 font-bold">Popular</span>
              </div>
            </Link>

            {/* Card 2 */}
            <Link href="/schedule" className="group bg-white border border-neutral-200 p-8 hover:border-black hover:shadow-2xl transition-all duration-300 relative overflow-hidden flex flex-col justify-between min-h-[300px]">
              <div className="absolute top-0 left-0 w-full h-1 bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-4 block">Calendar</span>
                <h3 className="text-2xl font-black uppercase tracking-tight text-black mb-2">Dojo Schedule</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">Find the right training times for you and your family.</p>
              </div>
              <div className="flex justify-between items-center mt-8">
                <span className="text-black font-bold group-hover:translate-x-2 transition-transform">&rarr;</span>
              </div>
            </Link>

            {/* Card 3 */}
            <Link href="/about/shotokan" className="group bg-white border border-neutral-200 p-8 hover:border-black hover:shadow-2xl transition-all duration-300 relative overflow-hidden flex flex-col justify-between min-h-[300px]">
              <div className="absolute top-0 left-0 w-full h-1 bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-4 block">Philosophy</span>
                <h3 className="text-2xl font-black uppercase tracking-tight text-black mb-2">The Way of Shotokan</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">Learn the history, roots, and benefits of traditional Japanese Karate.</p>
              </div>
              <div className="flex justify-between items-center mt-8">
                <span className="text-black font-bold group-hover:translate-x-2 transition-transform">&rarr;</span>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* 4. COMMUNITY / WE SUPPORT BANNER (NEW) */}
      <section className="bg-white py-16 border-t border-neutral-200 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h4 className="text-xs font-black uppercase tracking-widest text-red-700 mb-4">Community</h4>
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">We Proudly Support</h2>
          <a 
            href="https://aikidocincy.org" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex flex-col items-center group"
          >
            <span className="text-lg md:text-xl font-semibold text-neutral-600 group-hover:text-black transition-colors duration-300 mb-1">
              Aikido of Cincinnati
            </span>
            <span className="text-sm text-red-700 font-medium group-hover:underline decoration-2 underline-offset-4 transition-all">
              aikidocincy.org
            </span>
          </a>
        </div>
      </section>

    </div>
  );
}