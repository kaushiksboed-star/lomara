const services = [
  {
    title: "Buy a home",
    description:
      "A real estate agent can provide you with a clear breakdown of costs so that you can avoid surprise expenses.",
    buttonText: "Find a local agent",
    image:
      "/lomara/buy-a-home.webp",
  },
  {
    title: "Rent a home",
    description:
      "We’re creating a seamless online experience — from shopping on the largest rental network, to applying, to paying rent.",
    buttonText: "Find rentals",
    image:
      "/lomara/rent-a-home.webp",
  },
  {
    title: "Sell a home",
    description:
      "No matter what path you take to sell your home, we can help you navigate a successful sale.",
    buttonText: "See your options",
    image:
      "/lomara/sell-a-home.webp",
  },
];

function ServiceCard({ item }) {
  return (
    <div className="bg-[#000000] border border-[#2a2a2a] rounded-[20px] p-7 text-center shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between ">
      
      {/* Image */}
      <div className="w-[140px] h-[140px] mx-auto mb-8 rounded-full bg-[#1b1b1b] flex items-center justify-center overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-[100px] h-[100px] object-contain rounded-full"
        />
      </div>

      {/* Content */}
      <div>
        <h3 className="text-white text-[30px] font-bold mb-5 leading-tight">
          {item.title}
        </h3>

        <p className="text-gray-400 text-[16px] leading-8 max-w-[420px] mx-auto mb-10">
          {item.description}
        </p>
      </div>

      {/* Button */}
      <button className="cursor-pointer h-[58px] px-8 border border-amber-200 text-amber-100 hover:bg-[#ca953b] hover:text-black transition-all duration-300 rounded-2xl font-semibold text-lg">
        {item.buttonText}
      </button>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section className="px-[20px] relative py-20 bg-theme-black-light">
      <div className="container mx-auto px-0">
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {services.map((item, index) => (
            <ServiceCard key={index} item={item} />
          ))}
        </div>

      </div>
    </section>
  );
}