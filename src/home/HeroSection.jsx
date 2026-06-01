import SearchBox from "./SearchBox";

export default function HeroSection() {
  return (
    <section className="relative">
      <div
        className="h-[520px] bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=2070&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 max-w-[1200px] mx-auto px-[20px] h-full flex items-center">
          <div className="max-w-[700px]">
            <h1 className="text-white text-[74px] leading-[80px] font-black tracking-tight banner_text">
              Rentals. Homes.
              <br />
              Agents. Loans.
            </h1>

            <div className="mt-10">
              <SearchBox />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}