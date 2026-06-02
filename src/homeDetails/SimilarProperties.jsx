import { useRef } from "react";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Swiper এর প্রয়োজনীয় CSS ইম্পোর্ট
import "swiper/css";

const propertiesData = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=400&q=80",
    price: "$2,100 - $2,200",
    tagLine: "Fees may apply",
    isTotalMonthlyPrice: false,
    specs: "2 bd | 1.5 ba | 800 sqft",
    title: "Country Manor...",
    status: "For rent",
    broker: "Houlihan-Parnes Realtors"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=400&q=80",
    price: "$1,900 - $2,200",
    tagLine: "Fees may apply",
    isTotalMonthlyPrice: false,
    specs: "1+ bd | 1+ ba | 600+ sqft",
    title: "Stevens Manor...",
    status: "For rent",
    broker: "Houlihan-Parnes Realtors"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=400&q=80",
    price: "$2,400 - $2,750",
    tagLine: "Fees may apply",
    isTotalMonthlyPrice: false,
    specs: "1+ bd | 1+ ba | 775+ sqft",
    title: "The Park at Main",
    status: "For rent",
    broker: "Houlihan-Parnes Realtors"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=400&q=80",
    price: "$2,450 - $2,900",
    tagLine: "Total monthly price",
    isTotalMonthlyPrice: true,
    specs: "1+ bd | 1+ ba | 935+ sqft",
    title: "Tower Ridge Grande",
    status: "For rent",
    broker: "Tower Ridge Associates LLC"
  },
   {
    id: 5,
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=400&q=80",
    price: "$2,100 - $2,200",
    tagLine: "Fees may apply",
    isTotalMonthlyPrice: false,
    specs: "2 bd | 1.5 ba | 800 sqft",
    title: "Country Manor...",
    status: "For rent",
    broker: "Houlihan-Parnes Realtors"
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=400&q=80",
    price: "$1,900 - $2,200",
    tagLine: "Fees may apply",
    isTotalMonthlyPrice: false,
    specs: "1+ bd | 1+ ba | 600+ sqft",
    title: "Stevens Manor...",
    status: "For rent",
    broker: "Houlihan-Parnes Realtors"
  },
];

export default function SimilarProperties() {
  return (
    <div className="w-full space-y-6">
      
      {/* --- Top Header Section with Carousel Controls --- */}
      <div className="flex items-center justify-between">
        <h3 className="text-white text-[22px] font-bold tracking-tight">
          Similar apartments for rent
        </h3>
        
        {/* Navigation Arrow Buttons */}
        <div className="flex items-center gap-2">
          <button className="nearby-prev w-9 h-9 rounded-full border border-[#2a2a2a] bg-[#151515] hover:bg-[#1f1f1f] text-gray-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed">
            <ChevronLeft size={18} />
          </button>
          <button className="nearby-next w-9 h-9 rounded-full border border-[#2a2a2a] bg-[#151515] hover:bg-[#1f1f1f] text-gray-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* --- Swiper Carousel Slider --- */}
      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: ".nearby-prev",
          nextEl: ".nearby-next",
        }}
        spaceBetween={16}
        slidesPerView={1.2}
        breakpoints={{
          480: { slidesPerView: 1.5 },
          768: { slidesPerView: 2.1 },
          1024: { slidesPerView: 3.1 }
        }}
        className="w-full"
      >
        {propertiesData.map((item) => (
          <SwiperSlide key={item.id} className="!h-auto pb-2">
            <div className="h-full flex flex-col justify-between group">
              
              {/* Card Container */}
              <div className="bg-[#151515] border border-[#2a2a2a] rounded-xl overflow-hidden transition-all duration-300 hover:border-[#c5913b]/40 shadow-md">
                
                {/* Property Image */}
                <div className="w-full h-[150px] bg-[#222] overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Card Info Content */}
                <div className="p-4 space-y-1.5">
                  {/* Price */}
                  <h4 className="text-white font-extrabold text-[18px] tracking-tight">
                    {item.price}
                  </h4>

                  {/* Badge Text (Fees / Total Monthly Price Check) */}
                  <div className="text-[13px] font-medium h-[20px] flex items-center">
                    {item.isTotalMonthlyPrice ? (
                      <div className="text-[#c5913b] flex items-center gap-1 font-semibold">
                        <div className="w-4 h-4 rounded-full bg-[#c5913b] flex items-center justify-center">
                          <Check size={10} className="text-black stroke-[4]" />
                        </div>
                        <span className="border-b border-dashed border-[#c5913b]/60 cursor-pointer">{item.tagLine}</span>
                      </div>
                    ) : (
                      <span className="text-gray-400">{item.tagLine}</span>
                    )}
                  </div>

                  {/* Specs */}
                  <p className="text-white text-[13px] font-bold">
                    {item.specs}
                  </p>

                  {/* Title / Name */}
                  <p className="text-gray-300 text-[14px] font-semibold truncate">
                    {item.title}
                  </p>

                  {/* Status */}
                  <p className="text-gray-400 text-[13px] font-medium">
                    {item.status}
                  </p>
                </div>
              </div>

              {/* Outside Footer Broker Note */}
              <div className="mt-2 px-1 text-[11px] text-gray-500 font-medium truncate">
                {item.broker}
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
}