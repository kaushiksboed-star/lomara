import { useState, useRef } from "react";
import { House, Maximize2, X } from "lucide-react";

export default function MapPlaceholder({ images = [] }) {

  const [showContactForm, setShowContactForm] = useState(false);
  const formRef = useRef(null);

  const displayImage = images[0] || "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80";

  return (
    <div className="w-full space-y-6">
      
      {/* --- Map Module Placeholder with overlays --- */}
      <div className="w-full h-[320px] bg-[#151515] border border-[#2a2a2a] rounded-xl relative overflow-hidden group">
        {/* Styled Dark Mapping Backdrop Lines */}
        <div className="absolute inset-0 opacity-[0.15] bg-[radial-gradient(#2a2a2a_1px,transparent_1px)] [background-size:20px_20px] flex items-center justify-center">
          <div className="absolute w-full h-[2px] bg-[#2a2a2a] top-1/4 rotate-6" />
          <div className="absolute w-full h-[2px] bg-[#2a2a2a] top-3/4 -rotate-3" />
          <div className="absolute h-full w-[2px] bg-[#2a2a2a] left-1/4 rotate-12" />
          <div className="absolute h-full w-[2px] bg-[#2a2a2a] left-3/4 -rotate-45" />
        </div>

        {/* Pin Circle Location Pointer */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
          <div className="w-10 h-10 rounded-full bg-[#c5913b] border-2 border-[#0f0f0f] flex items-center justify-center shadow-2xl">
            <House size={18} className="text-black" />
          </div>
        </div>

        {/* Street View Preview Card Layout */}
        <div className="absolute top-3 left-3 w-[105px] h-[65px] rounded-lg overflow-hidden border border-[#2a2a2a] bg-black/60 backdrop-blur-sm cursor-pointer group/street">
          <img
            src={displayImage}
            alt="Street View Thumbnail"
            className="w-full h-full object-cover opacity-50 group-hover/street:opacity-90 transition-opacity"
          />
          <div className="absolute inset-x-0 bottom-0 bg-black/50 py-1 text-center">
            <span className="text-white text-[10px] font-semibold tracking-tight">
              Street View
            </span>
          </div>
        </div>

        {/* Expand Screen Action Button */}
        <button className="absolute top-3 right-3 w-9 h-9 rounded-lg bg-black/60 backdrop-blur-sm border border-[#2a2a2a] text-white flex items-center justify-center hover:bg-[#1a1a1a] transition-all cursor-pointer">
          <Maximize2 size={16} className="text-[#c5913b]" />
        </button>
      </div>

      {/* --- Toggle Logic: Button vs Inline Contact Form --- */}
      {!showContactForm ? (
        <div className="space-y-3">
          <button 
            onClick={() => {
              setShowContactForm(true);
              setTimeout(() => formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 100);
            }}
            className="w-full h-[48px] rounded-xl gold-btn font-bold text-[15px] transition-all duration-300 cursor-pointer"
          >
            Ask a question
          </button>
          <div className="text-gray-500 text-[13px]">
            Contact manager for more details about this home.
          </div>
        </div>
      ) : (
        /* --- IMAGE_8C6500.PNG: CONTACT PROPERTY FORM --- */
        <div 
          ref={formRef}
          className="w-full bg-[#111111]/40 border border-[#2a2a2a] rounded-2xl overflow-hidden shadow-xl animate-in fade-in slide-in-from-top-4 duration-300"
        >
          {/* Form Header Section */}
          <div className="p-5 border-b border-[#2a2a2a] bg-[#111111]/80 flex items-center justify-between">
            <h3 className="text-white text-[18px] font-bold">Contact property</h3>
            <button 
              onClick={() => setShowContactForm(false)}
              className="text-gray-400 hover:text-white transition-colors cursor-pointer p-1 rounded-lg hover:bg-[#1a1a1a]"
            >
              <X size={18} />
            </button>
          </div>

          {/* Form Content Fields */}
          <div className="p-6 space-y-4">
            {/* First & last name Field */}
            <div>
              <label className="text-[13px] font-semibold text-gray-300 block mb-1.5">
                First & last name <span className="text-red-500">*</span>
              </label>
              <input 
                type="text" 
                required
                className="w-full h-[44px] bg-[#151515] border border-[#2a2a2a] rounded-xl px-4 text-white text-[14px] outline-none focus:border-[#c5913b] transition-colors"
              />
            </div>

            {/* Email & Phone Form Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-[13px] font-semibold text-gray-300 block mb-1.5">
                  Email <span className="text-red-500">*</span>
                </label>
                <input 
                  type="email" 
                  required
                  className="w-full h-[44px] bg-[#151515] border border-[#2a2a2a] rounded-xl px-4 text-white text-[14px] outline-none focus:border-[#c5913b] transition-colors"
                />
              </div>
              <div>
                <label className="text-[13px] font-semibold text-gray-300 block mb-1.5">
                  Phone <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  required
                  placeholder="(XXX) XXX-XXXX"
                  className="w-full h-[44px] bg-[#151515] border border-[#2a2a2a] rounded-xl px-4 text-white placeholder-gray-600 text-[14px] outline-none focus:border-[#c5913b] transition-colors"
                />
              </div>
            </div>

            {/* Message Area */}
            <div>
              <label className="text-[13px] font-semibold text-gray-300 block mb-1.5">
                Message
              </label>
              <textarea 
                rows={4}
                defaultValue="I'm interested in your property."
                className="w-full bg-[#151515] border border-[#2a2a2a] rounded-xl p-4 text-white text-[14px] outline-none focus:border-[#c5913b] transition-colors resize-none leading-relaxed"
              />
            </div>

            {/* Terms of Use Link Description */}
            <p className="text-[11px] text-gray-500 leading-relaxed font-medium pt-1">
              By contacting this property, you agree to our <span className="text-[#c5913b] hover:underline cursor-pointer">Terms of Use</span>. <span className="text-[#c5913b] hover:underline cursor-pointer font-semibold">Show more</span>
            </p>
          </div>

          {/* Form Action Footer Box */}
          <div className="p-4 bg-[#111111]/60 border-t border-[#2a2a2a] flex justify-end">
            <button 
              onClick={() => setShowContactForm(false)}
              className="h-[44px] px-6 rounded-xl bg-[#c5913b] hover:bg-[#ad7d31] text-black font-bold text-[14px] transition-all duration-300 cursor-pointer shadow-md"
            >
              Send message
            </button>
          </div>
        </div>
      )}

    </div>
  );
}