import { ArrowRight } from "lucide-react";

export default function AboutUs() {
  return (
    <section className="relative w-full min-h-full  bg-black text-white flex flex-col lg:flex-row items-center justify-center overflow-x-hidden px-6 lg:px-12 py-12">
      <h1 className="absolute top-6 lg:top-12 left-0 w-full text-6xl sm:text-7xl md:text-8xl lg:text-[12rem] font-extrabold text-white/5 tracking-tight text-center select-none">
        ABOUT US
      </h1>

      <div className="w-full lg:w-1/2 flex justify-center relative z-10 mb-8 lg:mb-0">
        <img
          src="https://img.freepik.com/free-photo/smiling-portrait-business-woman-beautiful_1303-2288.jpg?semt=ais_hybrid&w=740&q=80"
          alt="About Us"
          className="max-h-[400px] md:max-h-[500px] lg:max-h-[600px] object-contain"
        />
      </div>

      <div className="w-full lg:w-1/2 lg:px-12 space-y-6 relative z-10 text-center lg:text-left">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
          WE ARE <span className="text-emerald-600">ORGANICMEDIA</span>
        </h2>
        <p className="text-base text-start sm:text-xl font-medium text-gray-200">
          Social Media Marketing Company, <br className="hidden sm:block" /> Based In Kerala.
        </p>

        <div className="absolute hidden md:flex bottom-0 left-1/2 lg:left-auto lg:right-12 -translate-x-1/2 lg:translate-x-0 top-1/3 w-32 h-32 lg:w-40 lg:h-40 items-center justify-center">
          <div className="text-red-600 font-semibold text-xs sm:text-sm tracking-widest animate-spin-slow">
            EVEN MORE - EVEN BETTER - EVEN MORE - EVEN BETTER -
          </div>
        </div>

        <p className="text-xs sm:text-base text-start leading-relaxed text-gray-400 max-w-xl mx-auto lg:mx-0">
         We are a creative Social Media Marketing Company based in Kerala, dedicated to helping businesses grow their online presence and connect with the right audience. Our team specializes in strategic content creation, performance-driven campaigns, influencer marketing, and brand storytelling that engage customers and drive results.
        </p>

        <div className="flex justify-center lg:justify-start">
          <button className="flex items-center gap-2 px-5 sm:px-6 py-2 sm:py-3 bg-green-600 hover:bg-red-500 text-white text-sm sm:text-base font-semibold rounded-full hover:bg-orange-600 transition">
            READ MORE <ArrowRight size={16} />
          </button>
        </div>
      </div>

      <div className="absolute hidden lg:block top-1/2 -left-6 -translate-y-1/2 rotate-90 text-xs sm:text-sm tracking-widest font-medium text-white/80">
        ABOUT US
      </div>
    </section>
  );
}
