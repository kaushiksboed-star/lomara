import { useEffect, useRef, useState } from "react";

import { ChevronDown, Check } from "lucide-react";

const bedroomOptions = ["Studio", "1", "2", "3", "4", "5"];

const bathroomOptions = ["Any", "1+", "1.5+", "2+", "3+", "4+"];

export default function BedroomFilterButton({ icon: Icon }) {
  const [isOpen, setIsOpen] = useState(false);

  const [selectedBedroom, setSelectedBedroom] = useState("Studio");

  const [selectedBathroom, setSelectedBathroom] = useState("Any");

  const [exactMatch, setExactMatch] = useState(true);

  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={wrapperRef} className="relative">
      {/* Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`h-[44px] px-5 rounded-xl border flex items-center gap-2 text-white text-[14px] font-medium transition-all duration-300 whitespace-nowrap cursor-pointer ${
          isOpen
            ? "border-[#c5913b] bg-[#151515]"
            : "border-[#2a2a2a] bg-[#101010] hover:bg-[#181818]"
        }`}
      >
        {Icon && <Icon size={16} />}
        {selectedBedroom} bd, {selectedBathroom} ba
        <ChevronDown
          size={16}
          className={`transition-all duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown */}
      <div
        className={`absolute top-[56px] left-0 w-[430px] bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 origin-top z-50 ${
          isOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-2 pointer-events-none"
        }`}
      >
        {/* Bedrooms Header */}
        <div className="bg-[#f5f5f7] px-5 py-4 border-b border-gray-200">
          <h3 className="text-[15px] font-semibold text-[#4c5d7a]">
            Number of Bedrooms
          </h3>
        </div>

        <div className="p-4">
          {/* Bedrooms */}
          <h4 className="text-[15px] font-semibold text-[#2f2f2f] mb-4">
            Bedrooms
          </h4>

          <div className="grid grid-cols-6 border border-gray-300 rounded-md overflow-hidden">
            {bedroomOptions.map((option, index) => (
              <button
                key={index}
                onClick={() => setSelectedBedroom(option)}
                className={`h-[44px] text-[15px] font-semibold border-r border-gray-300 last:border-r-0 transition-all duration-300 cursor-pointer ${
                  selectedBedroom === option
                    ? "bg-[#fff8ee] border-[#c5913b] text-[#c5913b]"
                    : "bg-white text-[#2f2f2f] hover:bg-gray-50"
                }`}
              >
                {option}
              </button>
            ))}
          </div>

          {/* Exact Match */}
          <button
            onClick={() => setExactMatch(!exactMatch)}
            className="flex items-center gap-3 mt-5 cursor-pointer"
          >
            <div
              className={`w-5 h-5 rounded flex items-center justify-center transition-all duration-300 ${
                exactMatch ? "bg-[#c5913b]" : "border border-gray-400 bg-white"
              }`}
            >
              {exactMatch && (
                <Check size={14} className="text-white" strokeWidth={3} />
              )}
            </div>

            <span className="text-[15px] text-[#3c4043]">Use exact match</span>
          </button>
        </div>

        {/* Bathrooms Header */}
        <div className="bg-[#f5f5f7] px-5 py-4 border-y border-gray-200">
          <h3 className="text-[15px] font-semibold text-[#4c5d7a]">
            Number of Bathrooms
          </h3>
        </div>

        <div className="p-4">
          {/* Bathrooms */}
          <h4 className="text-[15px] font-semibold text-[#2f2f2f] mb-4">
            Bathrooms
          </h4>

          <div className="grid grid-cols-6 border border-gray-300 rounded-md overflow-hidden">
            {bathroomOptions.map((option, index) => (
              <button
                key={index}
                onClick={() => setSelectedBathroom(option)}
                className={`h-[44px] text-[15px] font-semibold border-r border-gray-300 last:border-r-0 transition-all duration-300 cursor-pointer ${
                  selectedBathroom === option
                    ? "bg-[#fff8ee] border-[#c5913b] text-[#c5913b]"
                    : "bg-white text-[#2f2f2f] hover:bg-gray-50"
                }`}
              >
                {option}
              </button>
            ))}
          </div>

          {/* Warning Box */}
          {exactMatch && (
            <div className="mt-4 bg-[#faf4e5] rounded-md px-4 py-3">
              <p className="text-[14px] leading-6 text-[#7d5407]">
                No homes within current range. Removing the 'Beds' filter adds
                21 listings.{" "}
                <button className="font-semibold text-[#151515] underline cursor-pointer">
                  Update
                </button>
              </p>
            </div>
          )}

          {/* Apply Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="w-full h-[46px] rounded-lg bg-[#151515] hover:bg-[#000000] text-white font-semibold transition-all duration-300 mt-5 cursor-pointer"
          >
            See 0 rentals available
          </button>
        </div>
      </div>
    </div>
  );
}
