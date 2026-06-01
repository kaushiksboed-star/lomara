import FloatingBadge from "./FloatingBadge";
import { MessageCircle, MapPin } from "lucide-react";

export default function RecommendationCard() {
  return (
    <div className="relative">
      
      <div className="absolute top-4 left-[0px] z-20">
        <FloatingBadge
          icon={MessageCircle}
          title="Recommended homes"
          subtitle="based on your monthly budget"
        />
      </div>

      <div className="absolute top-24 left-[20px] z-20">
        <FloatingBadge
          icon={MapPin}
          title="Recommended homes"
          subtitle="based on your preferred location"
        />
      </div>

      <div className="w-[340px] bg-white rounded-3xl shadow-soft overflow-hidden relative z-10 shadow-lg">
        <img
          src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2070&auto=format&fit=crop"
          alt=""
          className="w-full h-[240px] object-cover"
        />

        <div className="p-4 pb-6">
          <h3 className="text-[26px] font-black leading-10">
            $695,000
          </h3>

          <div className="flex items-center gap-2 text-sm mt-2 text-gray-600 font-medium flex-wrap">
            <span>4 bd</span>
            <span>|</span>
            <span>3 ba</span>
            <span>|</span>
            <span>3,102 sqft</span>
            <span>|</span>
            <span>House for Sale</span>
          </div>

          <div className="mt-3 w-[75%] h-3 rounded-full bg-gray-200"></div>
          <div className="mt-3 w-[95%] h-3 rounded-full bg-gray-200"></div>
        </div>
      </div>
      <div className="absolute top-5 left-5 w-[360px] h-full bg-white rounded-3xl -z-10 overflow-hidden shadow-lg m_shadow_none">
        <img
          src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2070&auto=format&fit=crop"
          alt=""
          className="w-full h-[240px] object-cover"
        />

        <div className="p-4 pb-6">
          <h3 className="text-[26px] font-black leading-10">
            $695,000
          </h3>

          <div className="flex items-center gap-2 text-sm mt-2 text-gray-600 font-medium flex-wrap">
            <span>4 bd</span>
            <span>|</span>
            <span>3 ba</span>
            <span>|</span>
            <span>3,102 sqft</span>
            <span>|</span>
            <span>House for Sale</span>
          </div>

          <div className="mt-3 w-[75%] h-3 rounded-full bg-gray-200"></div>
          <div className="mt-3 w-[95%] h-3 rounded-full bg-gray-200"></div>
        </div>
      </div>
      <div className="absolute top-10 left-10 w-[360px] h-full bg-white rounded-3xl -z-20 overflow-hidden shadow-lg m_shadow_none">
        <img
          src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2070&auto=format&fit=crop"
          alt=""
          className="w-full h-[240px] object-cover"
        />

        <div className="p-4 pb-6">
          <h3 className="text-[26px] font-black leading-10">
            $695,000
          </h3>

          <div className="flex items-center gap-2 text-sm mt-2 text-gray-600 font-medium flex-wrap">
            <span>4 bd</span>
            <span>|</span>
            <span>3 ba</span>
            <span>|</span>
            <span>3,102 sqft</span>
            <span>|</span>
            <span>House for Sale</span>
          </div>

          <div className="mt-3 w-[75%] h-3 rounded-full bg-gray-200"></div>
          <div className="mt-3 w-[95%] h-3 rounded-full bg-gray-200"></div>
        </div>
      </div>

    </div>
  );
}