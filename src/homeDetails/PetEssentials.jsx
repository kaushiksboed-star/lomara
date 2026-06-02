import { useState, useRef } from "react";
import { Dog, Cat, ChevronLeft, ChevronRight, X } from "lucide-react";
// Swiper React components এবং modules ইম্পোর্ট
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Swiper এর প্রয়োজনীয় CSS ইম্পোর্ট
import "swiper/css";
import { Link } from "react-router-dom";

export default function PetEssentials() {
  // ফর্ম শো/হাইড করার জন্য স্টেট
  const [showApplyForm, setShowApplyForm] = useState(false);
  const formRef = useRef(null);

  return (
    <div className="w-full text-gray-300 space-y-6">
      
      {/* --- Top Header Section with Carousel Controls --- */}
      <div className="flex items-center justify-between">
        <h3 className="text-white text-[20px] font-bold tracking-tight">
          Pet essentials
        </h3>
        
        {/* Navigation Arrow Buttons */}
        <div className="flex items-center gap-2">
          <button className="pet-prev w-9 h-9 rounded-full border border-[#2a2a2a] bg-[#151515] hover:bg-[#1f1f1f] text-gray-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed">
            <ChevronLeft size={18} />
          </button>
          <button className="pet-next w-9 h-9 rounded-full border border-[#2a2a2a] bg-[#151515] hover:bg-[#1f1f1f] text-gray-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* --- Swiper Carousel Slider --- */}
      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: ".pet-prev",
          nextEl: ".pet-next",
        }}
        spaceBetween={16}
        slidesPerView={1}
        breakpoints={{
          360: { slidesPerView: 1.2 },
          768: { slidesPerView: 2.1 },
        }}
        className="w-full"
      >
        {/* Slide 1: Dogs */}
        <SwiperSlide className="!h-auto">
          <div className="h-full bg-[#151515] border border-[#2a2a2a] rounded-xl p-5 space-y-4 transition-all hover:border-[#c5913b]/40">
            <div className="flex items-center justify-between pb-3 border-b border-[#2a2a2a]">
              <div className="flex items-center gap-2.5 text-white font-bold text-[16px]">
                <Dog size={20} className="text-[#c5913b]" />
                <span>Dogs</span>
              </div>
              <span className="bg-green-500/10 text-green-400 border border-green-500/20 text-[12px] font-semibold px-2.5 py-0.5 rounded-md">
                Allowed
              </span>
            </div>
            <div className="space-y-3 text-[14px]">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Number allowed</span>
                <span className="text-white font-bold">1</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Monthly dog rent</span>
                <span className="text-white font-bold">$60</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">One-time dog fee</span>
                <span className="text-white font-bold">$300</span>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2: Cats */}
        <SwiperSlide className="!h-auto">
          <div className="h-full bg-[#151515] border border-[#2a2a2a] rounded-xl p-5 space-y-4 transition-all hover:border-[#c5913b]/40">
            <div className="flex items-center justify-between pb-3 border-b border-[#2a2a2a]">
              <div className="flex items-center gap-2.5 text-white font-bold text-[16px]">
                <Cat size={20} className="text-[#c5913b]" />
                <span>Cats</span>
              </div>
              <span className="bg-green-500/10 text-green-400 border border-green-500/20 text-[12px] font-semibold px-2.5 py-0.5 rounded-md">
                Allowed
              </span>
            </div>
            <div className="space-y-3 text-[14px]">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Number allowed</span>
                <span className="text-white font-bold">1</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Monthly cat rent</span>
                <span className="text-white font-bold">$60</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">One-time cat fee</span>
                <span className="text-white font-bold">$300</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* --- Additional Details Section --- */}
      <div className="space-y-2 pt-2">
        <h4 className="text-white text-[15px] font-bold tracking-tight">
          Additional details
        </h4>
        <p className="text-gray-400 text-[14px] leading-relaxed font-normal">
          Cats and Dogs (max 30 lbs.) <span className="text-gray-600 mx-1.5">|</span> Restrictions: Other restrictions may apply
        </p>
      </div>

      {/* --- FIXED: Action Toggle Button (Hides when form is open & has 'gold-btn' class) --- */}
      {!showApplyForm && (
        <div className="pt-2">
          <button 
            onClick={() => {
              setShowApplyForm(true);
              setTimeout(() => formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 100);
            }}
            className="w-full h-[48px] rounded-xl border gold-btn font-bold text-[15px] border-[#c5913b]/40 text-[#c5913b] hover:bg-[#c5913b]/10 transition-all duration-300 cursor-pointer"
          >
            Apply with your pet
          </button>
        </div>
      )}

      {/* --- INLINE FORM CONTAINER --- */}
      {showApplyForm && (
        <div 
          ref={formRef}
          className="w-full bg-[#111111]/40 border border-[#2a2a2a] rounded-2xl overflow-hidden shadow-xl mt-4 animate-in fade-in slide-in-from-top-4 duration-300"
        >
          {/* Section Header */}
          <div className="p-5 border-b border-[#2a2a2a] bg-[#111111]/80 flex items-center justify-between">
            <h3 className="text-white text-[18px] font-bold">Request to apply</h3>
            <button 
              onClick={() => setShowApplyForm(false)}
              className="text-gray-400 hover:text-white transition-colors cursor-pointer p-1 rounded-lg hover:bg-[#1a1a1a]"
            >
              <X size={18} />
            </button>
          </div>

          {/* Form Body Inputs */}
          <div className="p-6 space-y-4">
            
            {/* Full Name Input */}
            <div>
              <label className="text-[13px] font-semibold text-gray-300 block mb-1.5">
                First & last name <span className="text-red-500">*</span>
              </label>
              <input 
                type="text" 
                className="w-full h-[44px] bg-[#151515] border border-[#2a2a2a] rounded-xl px-4 text-white text-[14px] outline-none focus:border-[#c5913b] transition-colors"
              />
            </div>

            {/* Contact Row Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-[13px] font-semibold text-gray-300 block mb-1.5">
                  Email <span className="text-red-500">*</span>
                </label>
                <input 
                  type="email" 
                  className="w-full h-[44px] bg-[#151515] border border-[#2a2a2a] rounded-xl px-4 text-white text-[14px] outline-none focus:border-[#c5913b] transition-colors"
                />
              </div>
              <div>
                <label className="text-[13px] font-semibold text-gray-300 block mb-1.5">
                  Phone <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  placeholder="(XXX) XXX-XXXX"
                  className="w-full h-[44px] bg-[#151515] border border-[#2a2a2a] rounded-xl px-4 text-white placeholder-gray-600 text-[14px] outline-none focus:border-[#c5913b] transition-colors"
                />
              </div>
            </div>

            {/* Custom Textarea Message */}
            <div>
              <label className="text-[13px] font-semibold text-gray-300 block mb-1.5">
                Message
              </label>
              <textarea 
                rows={4}
                defaultValue="I'm interested in your property and would like to move forward. Can you send me an application for this property?"
                className="w-full bg-[#151515] border border-[#2a2a2a] rounded-xl p-4 text-white text-[14px] outline-none focus:border-[#c5913b] transition-colors resize-none leading-relaxed"
              />
            </div>

            {/* Legal Disclaimer Consent text */}
            <p className="text-[11px] text-gray-400 leading-relaxed font-medium pt-1">
              By clicking "Send request", you consent to Lomara Group, the rental managers for the properties you choose to contact, and their respective service providers calling, texting, or sending voice or AI-generated messages to the phone number you provide in connection with your inquiry. These communications may include marketing content and may be sent using an autodialer or other automated means, including prerecorded or artificial voices. Message and data rates may apply. Your consent is not a condition of leasing any property. You also agree to our <Link to="" className="text-[#c5913b] hover:underline cursor-pointer">Terms of Use</Link> and <Link to="" className="text-[#c5913b] hover:underline cursor-pointer">Privacy Policy</Link>. 
            </p>

          </div>

          {/* Action Row Footer inside inline box */}
          <div className="p-4 bg-[#111111]/60 border-t border-[#2a2a2a] flex justify-end">
            <button 
              onClick={() => setShowApplyForm(false)}
              className="h-[44px] px-6 rounded-xl gold-btn font-bold text-[14px] transition-all duration-300 cursor-pointer shadow-md"
            >
              Send request
            </button>
          </div>

        </div>
      )}

    </div>
  );
}