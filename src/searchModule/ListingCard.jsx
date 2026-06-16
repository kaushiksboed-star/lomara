import { Heart } from "lucide-react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import HomeDetails from "../homeDetails/HomeDetails";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

export default function ListingCard() {
  const [detailsOpen, setDetailsOpen] = useState(false);

  return (
    <>
    <div className="bg-[#111] border border-[#1f1f1f] rounded-2xl overflow-hidden cursor-pointer"
     onClick={() => setDetailsOpen(true)}
     >
      {/* Image */}
      <div className="relative h-[220px] overflow-hidden">
        <Swiper
          autoHeight={true}
          spaceBetween={20}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation, Pagination]}
          className="search-listing-swiper"
        >
          <SwiperSlide>
            <img src="./1.webp" alt="" className="w-full h-full object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./2.webp" alt="" className="w-full h-full object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./3.webp" alt="" className="w-full h-full object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./4.webp" alt="" className="w-full h-full object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./5.webp" alt="" className="w-full h-full object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./6.webp" alt="" className="w-full h-full object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./7.webp" alt="" className="w-full h-full object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./8.webp" alt="" className="w-full h-full object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./9.webp" alt="" className="w-full h-full object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./10.webp" alt="" className="w-full h-full object-cover" />
          </SwiperSlide>
          
        </Swiper>

        <button className="cursor-pointer absolute top-4 right-4 w-11 h-11 rounded-full bg-black/70 backdrop-blur-md flex items-center justify-center text-white">
          <Heart size={20} />
        </button>

        <div className="absolute top-4 left-4 bg-theme-gold-light text-dark text-[12px] font-semibold px-3 py-1 rounded-full">
          Featured
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-white text-[22px] font-bold">$1,985+</h3>

        <p className="text-gray-300 text-[14px] mt-1">1 bd • Fees may apply</p>

        <p className="text-gray-400 text-[13px] mt-2 leading-5">
          Residencial Ascot Park <br />
          Av. Winston Churchill 75, Santo Domingo, Distrito Nacional
        </p>

        <button
          type="button"
         
          className="w-full h-[40px] text-sm rounded-xl gold-btn font-semibold transition-all duration-300 mt-5 cursor-pointer"
        >
          Check Availability
        </button>
      </div>
    </div>

    <HomeDetails isOpen={detailsOpen} onClose={() => setDetailsOpen(false)} />
    </>
  );
}
