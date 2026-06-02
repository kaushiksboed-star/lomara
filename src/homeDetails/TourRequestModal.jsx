import { X } from "lucide-react";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function TourRequestModal({ isOpen, onClose, action }) {
  const modalRef = useRef(null);
  const normalizedAction = action === "apply" ? "apply" : "tour";

  const modalTitle =
    normalizedAction === "apply"
      ? "Request to Apply"
      : "Request a Tour";

  const defaultMessage =
    normalizedAction === "apply"
      ? "I would like to apply for this home."
      : "I would like to schedule a tour.";

  const submitText =
    normalizedAction === "apply"
      ? "Send application request"
      : "Send tour request";


  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[1000] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
      
      {/* --- Modal Container (image_8b7903.png layout) --- */}
      <div 
        ref={modalRef}
        className="w-full max-w-[620px] bg-[#0f0f0f] border border-[#2a2a2a] rounded-2xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200"
      >
        
        {/* Modal Header */}
        <div className="p-5 border-b border-[#2a2a2a] bg-[#111111] flex items-center justify-between">
          <h3 className="text-white text-[18px] sm:text-[20px] font-bold tracking-tight">
            {modalTitle}
          </h3>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors cursor-pointer p-1 rounded-lg hover:bg-[#1a1a1a]"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body / Form Fields */}
        <form onSubmit={(e) => e.preventDefault()} className="p-6 space-y-4">
          
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

          {/* Email & Phone Responsive Grid Row */}
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

          {/* Message Field */}
          <div>
            <label className="text-[13px] font-semibold text-gray-300 block mb-1.5">
              Message
            </label>
            <textarea 
              rows={4}
              defaultValue={defaultMessage}
              className="w-full bg-[#151515] border border-[#2a2a2a] rounded-xl p-4 text-white text-[14px] outline-none focus:border-[#c5913b] transition-colors resize-none leading-relaxed"
            />
          </div>

          {/* Footer Consent / Link Text */}
          <p className="text-[11px] text-gray-500 leading-relaxed font-medium pt-1">
            By contacting this property, you agree to our &nbsp;
            <Link to="" className="text-[#c5913b] hover:underline cursor-pointer">Terms of Use</Link>.
          </p>

          {/* Modal Footer / Submit Button (Right Aligned) */}
          <div className="pt-2 flex justify-end border-t border-[#1f1f1f] -mx-6 px-6 -mb-2">
            <button 
              type="submit"
              className="h-[44px] px-6 mt-4 rounded-xl gold-btn font-bold text-[14px] transition-all duration-300 cursor-pointer shadow-lg"
            >
              {submitText}
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}