import RecommendationCard from "./RecommendationCard";

export default function RecommendationSection() {
  return (
    <section className="px-[20px] relative py-20 bg-black">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-20 px-0">
        <div>
          <h2 className="text-[30px] text-white leading-10 capitalize">
            Find homes tailored to your lifestyle
          </h2>

          <p className="text-gray-400 mt-3 text-md">
            Get smart recommendations based on your budget, preferred location, and search activity. Sign in to unlock a more personalized home buying experience.
          </p>

          <button className="mt-8 gold-btn text-black transition-all duration-300 font-semibold px-6 py-2.5 rounded-xl cursor-pointer text-sm">
            Sign in
          </button>
        </div>

        <div className="flex justify-center">
          <RecommendationCard />
        </div>
      </div>

      <div className="pt-24 overflow-hidden">
        <div className="container mx-auto px-0">
          <div className="mb-10">
            <h2 className="text-[30px] text-white leading-10">
              Find Homes You Can Afford
            </h2>

            <p className="text-gray-400 text-base mt-3 max-w-2xl">
              Answer a few quick questions and discover premium properties that
              match your budget and lifestyle.
            </p>
          </div>

          <div className="flex gap-6 flex-wrap">
            {/* <div className="w-[25%] flex-auto bg-[#111111] border border-[#2a2a2a] rounded-3xl p-6 flex flex-col justify-between shadow-2xl">
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 10l9-7 9 7v10a1 1 0 01-1 1h-5v-7H9v7H4a1 1 0 01-1-1V10z"
                      />
                    </svg>
                  </div>

                  <div>
                    <h4 className="text-white font-semibold text-lg">
                      Premium Home Loans
                    </h4>

                    <p className="text-gray-400 text-sm">
                      Smart affordability estimator
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-y-8 gap-x-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white">$ --</h3>
                    <p className="text-gray-400 mt-2 text-sm">
                      Suggested target price
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white">$ --</h3>
                    <p className="text-gray-400 mt-2 text-sm">
                      Monthly payment
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white">-- %</h3>
                    <p className="text-gray-400 mt-2 text-sm">Interest rate</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white">-- %</h3>
                    <p className="text-gray-400 mt-2 text-sm">APR estimate</p>
                  </div>
                </div>
              </div>

              <button className="w-full h-14 mt-10 bg-amber-100 hover:bg-[#ca953b] text-black transition-all duration-300 font-semibold rounded-xl cursor-pointer text-md">
                Let’s Get Started
              </button>
            </div> */}

            <div className="w-[100%] flex flex-nowrap gap-6 overflow-x-auto scrollbar-hide pr-6">
              <div className="w-[320px] flex-auto bg-[#111111] border border-[#242424] rounded-3xl overflow-hidden shadow-xl">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1200&auto=format&fit=crop"
                    alt="House"
                    className="w-full h-[230px] object-cover"
                  />

                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-theme-gold text-black text-xs font-bold uppercase tracking-wide">
                      Within Budget
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-white text-xl font-semibold mb-2">
                    Modern Family House
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed mb-5">
                    Beautiful premium home with spacious interiors and modern
                    luxury architecture.
                  </p>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">Starting From</p>

                      <h4 className="text-white text-2xl font-bold">
                        $749,000
                      </h4>
                    </div>

                    <button className="px-6 h-11 bg-amber-100 hover:bg-[#ca953b] text-black transition-all duration-300 font-semibold rounded-xl cursor-pointer text-md">
                      View
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-[320px] flex-auto bg-[#111111] border border-[#242424] rounded-3xl overflow-hidden shadow-xl">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200&auto=format&fit=crop"
                    alt="House"
                    className="w-full h-[230px] object-cover"
                  />

                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-theme-gold text-black text-xs font-bold uppercase tracking-wide">
                      Within Budget
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-white text-xl font-semibold mb-2">
                    Luxury Villa
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed mb-5">
                    Elegant villa with premium architecture and modern interior
                    finishing.
                  </p>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">Starting From</p>

                      <h4 className="text-white text-2xl font-bold">
                        $949,000
                      </h4>
                    </div>

                    <button className="px-6 h-11 bg-amber-100 hover:bg-[#ca953b] text-black transition-all duration-300 font-semibold rounded-xl cursor-pointer text-md">
                      View
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-[320px] flex-auto bg-[#111111] border border-[#242424] rounded-3xl overflow-hidden shadow-xl">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1200&auto=format&fit=crop"
                    alt="House"
                    className="w-full h-[230px] object-cover"
                  />

                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-theme-gold text-black text-xs font-bold uppercase tracking-wide">
                      Within Budget
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-white text-xl font-semibold mb-2">
                    Smart Urban Home
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed mb-5">
                    Stylish modern property built for comfortable urban
                    lifestyle.
                  </p>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">Starting From</p>

                      <h4 className="text-white text-2xl font-bold">
                        $699,000
                      </h4>
                    </div>

                    <button className="px-6 h-11 bg-amber-100 hover:bg-[#ca953b] text-black transition-all duration-300 font-semibold rounded-xl cursor-pointer text-md">
                      View
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-[320px] flex-auto bg-[#111111] border border-[#242424] rounded-3xl overflow-hidden shadow-xl">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1200&auto=format&fit=crop"
                    alt="House"
                    className="w-full h-[230px] object-cover"
                  />

                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-theme-gold text-black text-xs font-bold uppercase tracking-wide">
                      Within Budget
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-white text-xl font-semibold mb-2">
                    Modern Family House
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed mb-5">
                    Beautiful premium home with spacious interiors and modern
                    luxury architecture.
                  </p>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">Starting From</p>

                      <h4 className="text-white text-2xl font-bold">
                        $749,000
                      </h4>
                    </div>

                    <button className="px-6 h-11 bg-amber-100 hover:bg-[#ca953b] text-black transition-all duration-300 font-semibold rounded-xl cursor-pointer text-md">
                      View
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
