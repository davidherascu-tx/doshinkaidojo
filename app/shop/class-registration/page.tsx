"use client";

import { useState } from 'react';

export default function ClassRegistration() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const plans = [
    {
      id: "trial",
      name: "Free Trial Class",
      ages: "All Ages",
      desc: "Experience your first Shotokan Karate class for free. Meet the instructor, learn basic forms, and see if our dojo is the right fit for you.",
      schedule: "By Appointment",
      popular: true
    },
    {
      id: "youth",
      name: "Youth Class",
      ages: "Ages 5 - 11",
      desc: "Foundational training focusing on discipline, coordination, and basic technique.",
      schedule: "Wednesdays"
    },
    {
      id: "adult",
      name: "All Levels",
      ages: "Ages 12+",
      desc: "Comprehensive Shotokan training for teens and adults, from beginners to black belts.",
      schedule: "Sun, Mon, Wed, Sat"
    },
    {
      id: "advanced",
      name: "Intermediate / Adv",
      ages: "Ages 12+",
      desc: "High-intensity technical training and sparring for experienced practitioners.",
      schedule: "Sun, Sat"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-neutral-900 selection:bg-red-700 selection:text-white pb-24">
      
      {/* 1. CINEMATIC HEADER */}
      <section className="relative pt-[120px] md:pt-[180px] pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-neutral-200">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
          <div>
            <div className="w-16 h-1.5 bg-red-700 mb-8"></div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9] text-black">
              Join The <br />
              <span className="text-neutral-300">Dojo</span>
            </h1>
          </div>
          <div className="max-w-md">
            <p className="text-lg text-neutral-500 font-medium leading-relaxed">
              Begin your journey in traditional Shotokan Karate. Select your training path below and complete your registration.
            </p>
          </div>
        </div>
      </section>

      {/* REGISTRATION WRAPPER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 lg:pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* LEFT COLUMN: Select Plan */}
          <div className="lg:col-span-5 flex flex-col space-y-8">
            <div>
              <h2 className="text-xs font-black uppercase tracking-widest text-red-700 mb-2">Step 01</h2>
              <h3 className="text-3xl font-black uppercase tracking-tighter text-black">Select Your Path</h3>
            </div>

            <div className="space-y-4">
              {plans.map((plan) => (
                <div 
                  key={plan.id}
                  onClick={() => setSelectedPlan(plan.id)}
                  className={`cursor-pointer border p-6 transition-all duration-300 relative overflow-hidden group ${
                    selectedPlan === plan.id 
                      ? 'border-red-700 bg-red-50/30 shadow-[0_10px_30px_rgba(185,28,28,0.1)]' 
                      : 'border-neutral-200 bg-white hover:border-black'
                  }`}
                >
                  {/* Selection Indicator Line */}
                  <div className={`absolute top-0 left-0 w-1 h-full transition-all duration-300 ${
                    selectedPlan === plan.id ? 'bg-red-700 scale-y-100' : 'bg-black scale-y-0 group-hover:scale-y-100'
                  } origin-top`}></div>
                  
                  <div className="flex justify-between items-start mb-4 pl-2">
                    <div>
                      <h4 className="text-xl font-bold uppercase tracking-tight text-black">{plan.name}</h4>
                      <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">{plan.ages}</span>
                    </div>
                    {/* Moved the Popular tag to the top right where the price used to be */}
                    {plan.popular && (
                      <div className="text-right">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-red-700 bg-red-100 px-2 py-1">
                          Most Popular
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <p className="text-sm text-neutral-600 mb-6 pl-2 leading-relaxed">
                    {plan.desc}
                  </p>
                  
                  <div className="flex justify-between items-center pl-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-neutral-900 border border-neutral-200 px-3 py-1">
                      {plan.schedule}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: The Form */}
          <div className="lg:col-span-7">
            <div className="bg-neutral-50 p-8 md:p-12 border border-neutral-200 relative">
              
              {/* If a plan isn't selected, show a subtle overlay asking them to select one first */}
              {!selectedPlan && (
                <div className="absolute inset-0 bg-white/60 backdrop-blur-sm z-10 flex items-center justify-center border border-neutral-200">
                  <span className="bg-black text-white text-sm font-bold uppercase tracking-widest px-6 py-3 shadow-xl">
                    Please select a path first &larr;
                  </span>
                </div>
              )}

              <div className="mb-12">
                <h2 className="text-xs font-black uppercase tracking-widest text-red-700 mb-2">Step 02</h2>
                <h3 className="text-3xl font-black uppercase tracking-tighter text-black">Student Details</h3>
              </div>

              <form className="space-y-10">
                {/* Name Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative group">
                    <input type="text" id="firstName" required className="w-full bg-transparent border-b-2 border-neutral-300 py-3 text-lg font-medium text-black focus:outline-none focus:border-red-700 transition-colors peer" placeholder=" " />
                    <label htmlFor="firstName" className="absolute left-0 top-3 text-neutral-400 text-lg font-medium transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-red-700 peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-widest peer-valid:-top-4 peer-valid:text-xs peer-valid:text-black peer-valid:font-bold peer-valid:uppercase peer-valid:tracking-widest cursor-text">
                      First Name
                    </label>
                  </div>
                  <div className="relative group">
                    <input type="text" id="lastName" required className="w-full bg-transparent border-b-2 border-neutral-300 py-3 text-lg font-medium text-black focus:outline-none focus:border-red-700 transition-colors peer" placeholder=" " />
                    <label htmlFor="lastName" className="absolute left-0 top-3 text-neutral-400 text-lg font-medium transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-red-700 peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-widest peer-valid:-top-4 peer-valid:text-xs peer-valid:text-black peer-valid:font-bold peer-valid:uppercase peer-valid:tracking-widest cursor-text">
                      Last Name
                    </label>
                  </div>
                </div>

                {/* Contact Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative group">
                    <input type="email" id="email" required className="w-full bg-transparent border-b-2 border-neutral-300 py-3 text-lg font-medium text-black focus:outline-none focus:border-red-700 transition-colors peer" placeholder=" " />
                    <label htmlFor="email" className="absolute left-0 top-3 text-neutral-400 text-lg font-medium transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-red-700 peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-widest peer-valid:-top-4 peer-valid:text-xs peer-valid:text-black peer-valid:font-bold peer-valid:uppercase peer-valid:tracking-widest cursor-text">
                      Email Address
                    </label>
                  </div>
                  <div className="relative group">
                    <input type="tel" id="phone" required className="w-full bg-transparent border-b-2 border-neutral-300 py-3 text-lg font-medium text-black focus:outline-none focus:border-red-700 transition-colors peer" placeholder=" " />
                    <label htmlFor="phone" className="absolute left-0 top-3 text-neutral-400 text-lg font-medium transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-red-700 peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-widest peer-valid:-top-4 peer-valid:text-xs peer-valid:text-black peer-valid:font-bold peer-valid:uppercase peer-valid:tracking-widest cursor-text">
                      Phone Number
                    </label>
                  </div>
                </div>

                {/* Details Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative group">
                    <input type="number" id="age" required className="w-full bg-transparent border-b-2 border-neutral-300 py-3 text-lg font-medium text-black focus:outline-none focus:border-red-700 transition-colors peer" placeholder=" " />
                    <label htmlFor="age" className="absolute left-0 top-3 text-neutral-400 text-lg font-medium transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-red-700 peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-widest peer-valid:-top-4 peer-valid:text-xs peer-valid:text-black peer-valid:font-bold peer-valid:uppercase peer-valid:tracking-widest cursor-text">
                      Student Age
                    </label>
                  </div>
                  <div className="relative group">
                    <select id="experience" required className="w-full bg-transparent border-b-2 border-neutral-300 py-3 text-lg font-medium text-black focus:outline-none focus:border-red-700 transition-colors appearance-none cursor-pointer">
                      <option value="" disabled selected hidden>Prior Experience</option>
                      <option value="none">None / Beginner</option>
                      <option value="some">Some Martial Arts Experience</option>
                      <option value="advanced">Advanced / Prior Black Belt</option>
                    </select>
                    {/* Custom Dropdown Arrow */}
                    <div className="absolute right-0 top-4 pointer-events-none">
                      <svg className="w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="relative group pt-4">
                  <textarea id="message" rows={3} className="w-full bg-transparent border-b-2 border-neutral-300 py-3 text-lg font-medium text-black focus:outline-none focus:border-red-700 transition-colors peer resize-none" placeholder=" "></textarea>
                  <label htmlFor="message" className="absolute left-0 top-6 text-neutral-400 text-lg font-medium transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-red-700 peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-widest peer-valid:-top-4 peer-valid:text-xs peer-valid:text-black peer-valid:font-bold peer-valid:uppercase peer-valid:tracking-widest cursor-text">
                    Any medical conditions or notes? (Optional)
                  </label>
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <button 
                    type="submit" 
                    className={`w-full relative inline-flex items-center justify-center px-10 py-5 text-sm font-bold uppercase tracking-widest text-white overflow-hidden shadow-xl transition-all duration-300 group ${
                      selectedPlan ? 'bg-black hover:-translate-y-1' : 'bg-neutral-300 cursor-not-allowed'
                    }`}
                    disabled={!selectedPlan}
                  >
                    {selectedPlan && <span className="absolute inset-0 w-full h-full bg-red-700 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>}
                    <span className="relative flex items-center gap-3">
                      Complete Registration
                      {selectedPlan && <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>}
                    </span>
                  </button>
                  <p className="text-center text-xs font-bold uppercase tracking-widest text-neutral-400 mt-6">
                    No payment required today. We will contact you to finalize enrollment.
                  </p>
                </div>
                
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}