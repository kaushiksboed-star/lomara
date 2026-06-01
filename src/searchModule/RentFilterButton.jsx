import { useEffect, useRef, useState } from "react";

import {
  ChevronDown,
} from "lucide-react";

export default function RentFilterButton({
  label,
  icon: Icon,
}) {
  const [isOpen, setIsOpen] =
    useState(false);

  const [selectedOption, setSelectedOption] =
    useState("For Rent");

  const wrapperRef = useRef(null);

  const options = [
    "For Sale",
    "For Rent",
    "Sold",
  ];

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(
          event.target
        )
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="relative"
    >
      {/* Button */}
      <button
        onClick={() =>
          setIsOpen(!isOpen)
        }
        className={`h-[44px] px-5 rounded-xl border flex items-center gap-2 text-white text-[14px] font-medium transition-all duration-300 whitespace-nowrap cursor-pointer ${
          isOpen
            ? "border-[#c5913b] bg-[#151515]"
            : "border-[#2a2a2a] bg-[#101010] hover:bg-[#181818]"
        }`}
      >
        {Icon && (
          <Icon size={16} />
        )}

        {selectedOption || label}

        <ChevronDown
          size={16}
          className={`transition-all duration-300 ${
            isOpen
              ? "rotate-180"
              : ""
          }`}
        />
      </button>

      {/* Dropdown Panel */}
      <div
        className={`absolute top-[56px] left-0 w-[290px] bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 origin-top z-50 ${
          isOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-2 pointer-events-none"
        }`}
      >
        {/* Options */}
        <div className="px-4 py-5 space-y-6">

          {options.map(
            (option, index) => (
              <label
                key={index}
                className="flex items-center gap-4 cursor-pointer"
              >
                <input
                  type="radio"
                  name="listingType"
                  checked={
                    selectedOption ===
                    option
                  }
                  onChange={() =>
                    setSelectedOption(
                      option
                    )
                  }
                  className="w-5 h-5 accent-[#c5913b] cursor-pointer"
                />

                <span className="text-[16px] text-[#171717] font-medium">
                  {option}
                </span>
              </label>
            )
          )}

        </div>

        {/* Bottom Button */}
        <div className="p-4 pt-0">
          <button
            onClick={() =>
              setIsOpen(false)
            }
            className="w-full h-[44px] rounded-lg bg-[#151515] hover:bg-[#000000] text-white font-semibold transition-all duration-300 cursor-pointer"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}