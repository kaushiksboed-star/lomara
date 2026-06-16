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
];

export default function SearchBox() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLocation, setCurrentLocation] = useState("");
  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  // Get Current Location
  const handleCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        setCurrentLocation(
          `${latitude.toFixed(4)}, ${longitude.toFixed(4)}`
        );

        console.log("Latitude:", latitude);
        console.log("Longitude:", longitude);
      },
      (error) => {
        console.log(error);

        if (error.code === 1) {
          alert("Please allow location access.");
        }
      }
    );
  };

  return (
    <div
      ref={wrapperRef}
      className="relative w-full max-w-[720px]"
    >
      {/* Search Box */}
      <div
        className={`bg-white rounded-2xl overflow-hidden h-[64px] w-full shadow-soft flex items-center px-5 border-2 transition-all duration-300 ${
          isOpen
            ? "border-[#4B83FF] shadow-[0_0_0_4px_rgba(59,130,246,0.15)]"
            : "border-transparent"
        }`}
      >
        <input
          type="text"
          placeholder={
            currentLocation
              ? currentLocation
              : "Enter an address, neighborhood, city, or ZIP code"
          }
          className="flex-1 outline-none text-[16px] text-gray-700 placeholder:text-gray-400"
          onFocus={() => setIsOpen(true)}
        />

        <button className="text-black hover:text-primary transition cursor-pointer">
          <Search size={24} />
        </button>
      </div>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute top-[74px] left-0 w-full bg-white rounded-2xl shadow-2xl overflow-hidden z-50 border border-gray-200">

          {/* Current Location */}
          <button
            onClick={handleCurrentLocation}
            className="w-full flex items-center gap-3 px-5 py-4 hover:bg-gray-50 transition-all duration-200 cursor-pointer"
          >
            <MapPin
              size={20}
              className="text-gray-500"
            />

            <span className="text-[16px] text-gray-800">
              Use Current Location
            </span>
          </button>

          {/* History Title */}
          <div className="px-5 py-3 bg-gray-100">
            <h4 className="text-[13px] font-semibold tracking-wide text-gray-600 uppercase">
              Search History
            </h4>
          </div>

          {/* History List */}
          <div className="max-h-[280px] overflow-y-auto">

            {searchHistory.map((item, index) => (
              <button
                key={index}
                className="w-full flex items-center gap-3 px-5 py-4 hover:bg-gray-50 transition-all duration-200 border-b border-gray-100 last:border-b-0 cursor-pointer"
              >
                <Clock3
                  size={20}
                  className="text-gray-500"
                />

                <span className="text-[16px] text-gray-800">
                  {item}
                </span>
              </button>
            ))}

          </div>
        </div>
      )}
    </div>
  );
}