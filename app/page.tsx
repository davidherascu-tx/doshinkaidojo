import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 selection:bg-red-700 selection:text-white">
      
      {/* 1. HERO SECTION 
        Note the pt-[120px] md:pt-[150px]. This pushes the content down 
        so it doesn't hide behind your massive, fixed editorial Navbar.
      */}
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
        {/* To use a real image later, replace the bg-neutral-100 div with an <img /> */}
        <div className="w-full lg:w-1/2 relative">
          <div className="aspect-[4/5] bg-neutral-100 relative overflow-hidden group">
            <div className="absolute inset-0 bg-neutral-200 animate-pulse"></div>
            {/* When you have a Dojo photo, uncomment this line: */}
            {/* <img src="/dojo-hero.jpg" alt="Karate Training" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" /> */}
            
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-red-700 hidden md:block"></div>
          </div>
        </div>
      </section>

      {/* 2. THE GRID (Actionable Dashboard) */}
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

    </div>
  );
}