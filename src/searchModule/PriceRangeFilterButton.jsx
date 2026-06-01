import { useEffect, useRef, useState } from "react";

import {
  ChevronDown,
} from "lucide-react";

export default function PriceRangeFilterButton({
  icon: Icon,
}) {
  const [isOpen, setIsOpen] =
    useState(false);

  const [maxPrice, setMaxPrice] =
    useState(6000);

  const wrapperRef = useRef(null);

  const sliderRef = useRef(null);

  const MAX = 10000;

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

  // Slider Drag
  const handleSlider = (e) => {
    const rect =
      sliderRef.current.getBoundingClientRect();

    let x = e.clientX - rect.left;

    if (x < 0) x = 0;

    if (x > rect.width)
      x = rect.width;

    const percent = x / rect.width;

    const value = Math.round(
      percent * MAX
    );

    setMaxPrice(value);
  };

  // Mouse Drag
  const startDragging = () => {
    function move(e) {
      handleSlider(e);
    }

    function stop() {
      window.removeEventListener(
        "mousemove",
        move
      );

      window.removeEventListener(
        "mouseup",
        stop
      );
    }

    window.addEventListener(
      "mousemove",
      move
    );

    window.addEventListener(
      "mouseup",
      stop
    );
  };

  const percent =
    (maxPrice / MAX) * 100;

  const formattedPrice =
    maxPrice.toLocaleString();

  // Histogram Bars
  const bars = [
    8, 10, 12, 18, 22, 38, 74, 120,
  ];

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

        Up to $
        {formattedPrice}

        <ChevronDown
          size={16}
          className={`transition-all duration-300 ${
            isOpen
              ? "rotate-180"
              : ""
          }`}
        />
      </button>

      {/* Panel */}
      <div
        className={`absolute top-[56px] left-0 w-[375px] bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 origin-top z-50 ${
          isOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-2 pointer-events-none"
        }`}
      >
        {/* Header */}
        <div className="bg-[#f5f5f7] px-5 py-4 border-b border-gray-200">
          <h3 className="text-[15px] font-semibold text-[#4c5d7a]">
            Price Range
          </h3>
        </div>

        <div className="p-4">

          {/* Graph Area */}
          <div className="relative pt-6 pb-4">

            {/* Price Bubble */}
            <div
              className="absolute top-0 -translate-x-1/2"
              style={{
                left: `${percent}%`,
              }}
            >
              <div className="bg-[#c5913b] text-white text-[12px] font-semibold px-3 py-1 rounded-full shadow-lg whitespace-nowrap">
                $
                {formattedPrice}
              </div>
            </div>

            {/* Slider */}
            <div
              ref={sliderRef}
              onMouseDown={(e) =>
                handleSlider(e)
              }
              className="relative h-[24px] mt-2 cursor-pointer"
            >
              {/* Track */}
              <div className="absolute top-1/2 left-0 right-0 h-[3px] bg-gray-200 -translate-y-1/2 rounded-full" />

              {/* Active Track */}
              <div
                className="absolute top-1/2 left-0 h-[3px] bg-[#c5913b] -translate-y-1/2 rounded-full"
                style={{
                  width: `${percent}%`,
                }}
              />

              {/* Thumb */}
              <div
                onMouseDown={
                  startDragging
                }
                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#c5913b] border-4 border-white shadow-lg cursor-grab active:cursor-grabbing"
                style={{
                  left: `${percent}%`,
                }}
              />
            </div>

            {/* Labels */}
            <div className="flex items-center justify-between mt-2">
              
              <span className="text-[14px] text-[#3c4043] font-medium">
                $0
              </span>

              <span className="text-[14px] text-[#3c4043] font-medium">
                $10K+
              </span>

            </div>

          </div>

          {/* Inputs */}
          <div className="grid grid-cols-[1fr_auto_1fr] gap-4 items-end mt-4">

            {/* Min */}
            <div>
              <label className="block text-[14px] font-semibold text-[#3c4043] mb-2">
                Min
              </label>

              <input
                type="text"
                placeholder="No min"
                className="w-full h-[46px] rounded-md border border-gray-300 px-4 text-[15px] outline-none focus:border-[#c5913b]"
              />
            </div>

            {/* Dash */}
            <div className="pb-3 text-[#3c4043] font-medium">
              —
            </div>

            {/* Max */}
            <div>
              <label className="block text-[14px] font-semibold text-[#3c4043] mb-2">
                Max
              </label>

              <input
                type="text"
                value={`$${formattedPrice}`}
                readOnly
                className="w-full h-[46px] rounded-md border border-gray-300 px-4 text-[15px] outline-none focus:border-[#c5913b]"
              />
            </div>

          </div>

          {/* Apply Button */}
          <button
            onClick={() =>
              setIsOpen(false)
            }
            className="w-full h-[46px] rounded-lg bg-[#151515] hover:bg-[#000000] text-white font-semibold transition-all duration-300 mt-5 cursor-pointer"
          >
            See 21 rentals available
          </button>

        </div>
      </div>
    </div>
  );
}