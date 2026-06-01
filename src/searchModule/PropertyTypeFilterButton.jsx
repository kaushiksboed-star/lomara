import { useEffect, useRef, useState } from "react";

import {
  ChevronDown,
  Building2,
  House,
  Building,
  Landmark,
  BedDouble,
  DoorOpen,
} from "lucide-react";

const homeTypes = [
  {
    label: "Any",
    icon: Building2,
  },

  {
    label: "Houses",
    icon: House,
  },

  {
    label: "Apartments/Condos",
    icon: Building,
  },

  {
    label: "Townhomes",
    icon: Landmark,
  },
];

const spaceTypes = [
  {
    label: "Any",
    icon: BedDouble,
  },

  {
    label: "Entire place",
    icon: House,
  },

  {
    label: "Room for rent",
    icon: DoorOpen,
  },
];

export default function PropertyTypeFilterButton({
  icon: Icon,
}) {
  const [isOpen, setIsOpen] =
    useState(false);

  const [selectedHomeType, setSelectedHomeType] =
    useState("Any");

  const [selectedSpaceType, setSelectedSpaceType] =
    useState("Entire place");

  const wrapperRef = useRef(null);

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

        Property type

        <ChevronDown
          size={16}
          className={`transition-all duration-300 ${
            isOpen
              ? "rotate-180"
              : ""
          }`}
        />
      </button>

      {/* Dropdown */}
      <div
        className={`absolute top-[56px] left-0 w-[390px] bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 origin-top z-50 ${
          isOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-2 pointer-events-none"
        }`}
      >
        {/* Header */}
        <div className="bg-[#f5f5f7] px-5 py-4 border-b border-gray-200">
          <h3 className="text-[15px] font-semibold text-[#4c5d7a]">
            Property type
          </h3>
        </div>

        <div className="p-5">

          {/* Home Type */}
          <h4 className="text-[15px] font-semibold text-[#2f2f2f] mb-4">
            Home type
          </h4>

          <div className="grid grid-cols-2 gap-3">

            {homeTypes.map(
              (item, index) => {
                const ItemIcon =
                  item.icon;

                const isActive =
                  selectedHomeType ===
                  item.label;

                return (
                  <button
                    key={index}
                    onClick={() =>
                      setSelectedHomeType(
                        item.label
                      )
                    }
                    className={`h-[76px] rounded-md border flex flex-col items-center justify-center gap-2 transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "border-2 border-[#c5913b] bg-[#fff8ee]"
                        : "border-gray-300 bg-white hover:bg-gray-50"
                    }`}
                  >
                    <ItemIcon
                      size={22}
                      className={`${
                        isActive
                          ? "text-[#c5913b]"
                          : "text-black"
                      }`}
                    />

                    <span
                      className={`text-[15px] font-semibold ${
                        isActive
                          ? "text-[#c5913b]"
                          : "text-[#2f2f2f]"
                      }`}
                    >
                      {item.label}
                    </span>
                  </button>
                );
              }
            )}

          </div>

          {/* Space */}
          <h4 className="text-[15px] font-semibold text-[#2f2f2f] mt-8 mb-4">
            Space
          </h4>

          <div className="grid grid-cols-3 gap-3">

            {spaceTypes.map(
              (item, index) => {
                const ItemIcon =
                  item.icon;

                const isActive =
                  selectedSpaceType ===
                  item.label;

                return (
                  <button
                    key={index}
                    onClick={() =>
                      setSelectedSpaceType(
                        item.label
                      )
                    }
                    className={`h-[76px] rounded-md border flex flex-col items-center justify-center gap-2 transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "border-2 border-[#c5913b] bg-[#fff8ee]"
                        : "border-gray-300 bg-white hover:bg-gray-50"
                    }`}
                  >
                    <ItemIcon
                      size={22}
                      className={`${
                        isActive
                          ? "text-[#c5913b]"
                          : "text-black"
                      }`}
                    />

                    <span
                      className={`text-[14px] font-semibold text-center leading-5 ${
                        isActive
                          ? "text-[#c5913b]"
                          : "text-[#2f2f2f]"
                      }`}
                    >
                      {item.label}
                    </span>
                  </button>
                );
              }
            )}

          </div>

          {/* Apply Button */}
          <button
            onClick={() =>
              setIsOpen(false)
            }
            className="w-full h-[46px] rounded-lg bg-[#c5913b] hover:bg-[#ad7d31] text-black font-semibold transition-all duration-300 mt-6 cursor-pointer"
          >
            See 0 rentals available
          </button>

        </div>
      </div>
    </div>
  );
}