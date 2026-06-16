import { useEffect, useRef, useState } from "react";

import {
  Search,
  MapPin,
  Clock3,
} from "lucide-react";

const searchHistory = [
  "Santo Domingo",
  "Santiago",
  "Punta Cana",
  "Bávaro",
  "Puerto Plata",
  "La Romana",
  "Cabarete",
  "Sosúa",
  "Jarabacoa",
  "San Pedro de Macorís",
];

export default function SearchInput() {
  const [isOpen, setIsOpen] = useState(false);

  const [locationText, setLocationText] =
    useState("");

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

  // Current Location
  const handleCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert(
        "Geolocation is not supported."
      );
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude =
          position.coords.latitude;

        const longitude =
          position.coords.longitude;

        const location =
          `${latitude.toFixed(
            4
          )}, ${longitude.toFixed(4)}`;

        setLocationText(location);

        setIsOpen(false);
      },

      () => {
        alert(
          "Please allow location access."
        );
      }
    );
  };

  return (
    <div
      ref={wrapperRef}
      className="relative min-w-[420px]"
    >
      {/* Search Input */}
      <div
        className={`h-[44px] rounded-xl border bg-[#101010] flex items-center px-4 transition-all duration-300 ${
          isOpen
            ? "border-[#4B83FF] shadow-[0_0_0_4px_rgba(59,130,246,0.15)]"
            : "border-[#2a2a2a]"
        }`}
      >
        <input
          type="text"
          placeholder="Address, neighborhood, city, ZIP"
          value={locationText}
          onChange={(e) =>
            setLocationText(
              e.target.value
            )
          }
          onFocus={() => setIsOpen(true)}
          className="flex-1 bg-transparent outline-none text-white placeholder:text-gray-500 text-[15px]"
        />

        <button className="text-gray-400 hover:text-white transition-all duration-300 cursor-pointer">
          <Search size={20} />
        </button>
      </div>

      {/* Dropdown Panel */}
      <div
        className={`absolute top-[56px] left-0 w-full bg-white rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 origin-top z-50 ${
          isOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-2 pointer-events-none"
        }`}
      >
        {/* Current Location */}
        <button
          onClick={handleCurrentLocation}
          className="w-full flex items-center gap-3 px-3 py-2 hover:bg-gray-50 transition-all duration-300 cursor-pointer"
        >
          <MapPin
            size={14}
            className="text-gray-500"
          />

          <span className="text-[14px] text-gray-800">
            Current Location
          </span>
        </button>

        {/* Search History Title */}
        <div className="px-3 py-2 bg-[#f5f5f7] border-y border-gray-100">
          <h4 className="text-[13px] font-bold tracking-wide text-[#4c5d7a] uppercase">
            Search History
          </h4>
        </div>

        {/* Search History */}
        <div className="max-h-[300px] overflow-y-auto">

          {searchHistory.map(
            (item, index) => (
              <button
                key={index}
                onClick={() => {
                  setLocationText(item);
                  setIsOpen(false);
                }}
                className="w-full flex items-center gap-3 px-3 py-2 hover:bg-gray-50 transition-all duration-300 border-b border-gray-100 last:border-b-0 cursor-pointer"
              >
                <Clock3
                  size={14}
                  className="text-gray-500"
                />

                <span className="text-[14px] text-gray-800">
                  {item}
                </span>
              </button>
            )
          )}

        </div>
      </div>
    </div>
  );
}