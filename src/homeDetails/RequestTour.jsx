import { Link } from "react-router-dom";

export default function RequestTour() {
  return (
    <div className="w-full text-gray-300 space-y-6">
      
      {/* --- Section Title --- */}
      <div className="space-y-1">
        <h3 className="text-white text-[22px] font-extrabold tracking-tight">
          Request a tour
        </h3>
      </div>

      {/* --- Form Content --- */}
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        
        {/* Full Name Input */}
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

        {/* Contact Row (Auto-Responsive Grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Email Field */}
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
          
          {/* Phone Field */}
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

        {/* Message Textarea Field */}
        <div>
          <label className="text-[13px] font-semibold text-gray-300 block mb-1.5">
            Message
          </label>
          <textarea 
            rows={4}
            defaultValue="I would like to schedule a tour."
            className="w-full bg-[#151515] border border-[#2a2a2a] rounded-xl p-4 text-white text-[14px] outline-none focus:border-[#c5913b] transition-colors resize-none leading-relaxed"
          />
        </div>

        {/* Action Submit Button */}
        <div className="pt-2">
          <button 
            type="submit"
            className="w-full h-[48px] rounded-xl bg-[#c5913b] hover:bg-[#ad7d31] text-black font-bold text-[15px] transition-all duration-300 cursor-pointer shadow-lg"
          >
            Send tour request
          </button>
        </div>

        {/* Disclaimer / Legal Consent Text */}
        <p className="text-[11px] text-gray-500 leading-relaxed font-medium pt-2">
          By clicking "Send tour request", you consent to Lomara Group, the rental managers for the properties you choose to contact, and their respective service providers calling, texting, or sending voice or AI-generated messages to the phone number you provide in connection with your inquiry. These communications may include marketing content and may be sent using an autodialer or other automated means, including prerecorded or artificial voices. Message and data rates may apply. Your consent is not a condition of leasing any property. You also agree to our <Link to="" className="text-[#c5913b] hover:underline cursor-pointer">Terms of Use</Link> and <Link to="" className="text-[#c5913b] hover:underline cursor-pointer">Privacy Policy</Link>.
        </p>

      </form>
    </div>
  );
}