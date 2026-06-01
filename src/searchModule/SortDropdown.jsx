import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

const sortOptions = [
  "Homes for You",
  "Verified Source",
  "Payment (High to Low)",
  "Payment (Low to High)",
  "Newest",
  "Bedrooms",
  "Bathrooms",
  "Square Feet",
  "Lot Size"
];

export default function SortDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState("Homes for You");
  const dropdownRef = useRef(null);

  // ড্রপডাউনের বাইরে ক্লিক করলে বন্ধ হওয়ার হ্যান্ডলার
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative inline-block text-left">
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`h-[44px] px-5 rounded-xl border flex items-center gap-2 text-white text-[14px] font-medium transition-all duration-300 whitespace-nowrap cursor-pointer ${
          isOpen
            ? "border-[#c5913b] bg-[#151515]"
            : "border-[#2a2a2a] bg-[#101010] hover:bg-[#181818]"
        }`}
      >
        Sort: {selectedSort}
        <ChevronDown 
          size={18} 
          className={`text-gray-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} 
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-[220px] max-h-[300px] overflow-y-auto bg-[#101010] border border-[#2a2a2a] rounded-xl shadow-xl z-50 py-2 scrollbar-thin scrollbar-thumb-[#2a2a2a] animate-in fade-in zoom-in duration-150">
          {sortOptions.map((option, index) => {
            const isSelected = selectedSort === option;
            return (
              <button
                key={index}
                onClick={() => {
                  setSelectedSort(option);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-2.5 text-[14px] transition-colors cursor-pointer block ${
                  isSelected
                    ? "text-[#c5913b] bg-[#1b1711] font-semibold"
                    : "text-gray-300 hover:bg-[#181818] hover:text-white"
                }`}
              >
                {option}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}