import { useEffect, useRef, useState } from "react";
import {
  X,
  ChevronDown,
  CalendarDays,
  Building2,
  House,
  Building,
  Landmark,
  Waves,
  Dumbbell,
  Car,
  Trees,
  Bath,
  Warehouse,
  Flame,
  Snowflake,
  ShieldCheck,
  Dog,
  Cat,
  Ban,
  WashingMachine,
  ParkingCircle,
  Accessibility,
  School,
  BriefcaseBusiness,
  TrainFront,
  SlidersHorizontal,
  Info,
  MapPin,
  Mountain,
} from "lucide-react";

// --- Data Arrays ---

const petOptions = [
  { label: "Allows small dogs", icon: Dog },
  { label: "Allows large dogs", icon: Dog },
  { label: "Allows cats", icon: Cat },
  { label: "No pets allowed", icon: Ban },
];

const popularAmenities = [
  { label: "In-unit laundry", icon: WashingMachine },
  { label: "Must have A/C", icon: Snowflake },
  { label: "On-site parking", icon: ParkingCircle },
];

const amenities = [
  { label: "Elevator", icon: Building2 },
  { label: "Pool", icon: Waves },
  { label: "Waterfront", icon: Waves },
  { label: "Furnished", icon: House },
  { label: "High speed internet", icon: SlidersHorizontal },
  { label: "Basement", icon: Warehouse },
  { label: "Utilities included", icon: Flame },
  { label: "Hardwood floors", icon: Building },
  { label: "Fitness center", icon: Dumbbell },
  { label: "Outdoor space", icon: Trees },
  { label: "Dishwasher", icon: Bath },
];

const viewOptions = [
  { label: "City", icon: Building2 },
  { label: "Mountain", icon: Mountain },
  { label: "Park", icon: Trees },
  { label: "Water", icon: Waves },
];

const travelTimeOptions = ["Any", "60min", "45min", "30min", "15min"];

export default function MoreFilterButton() {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);
  const dateInputRef = useRef(null);

  // --- States ---
  const [hideNoDate, setHideNoDate] = useState(false);
  const [selectedPets, setSelectedPets] = useState([]);
  const [selectedPopular, setSelectedPopular] = useState([]);
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [selectedViews, setSelectedViews] = useState([]);
  const [fiftyFivePlus, setFiftyFivePlus] = useState("Include");
  const [maxTravelTime, setMaxTravelTime] = useState("Any");
  
  // Commute Filters State (Set to false initially so it stays hidden first time)
  const [showCommuteFilters, setShowCommuteFilters] = useState(false);

  const [checkboxStates, setCheckboxStates] = useState({
    disabledAccess: false,
    incomeRestricted: false,
    apartmentCommunity: false,
    controlledAccess: false,
    dishwasher: false,
    singleStory: false,
    media3D: false,
    acceptsLomara: false,
    instantTour: false,
    shortTermLease: false,
  });

  // --- Handlers ---
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

  const toggleArrayItem = (item, state, setState) => {
    setState((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item],
    );
  };

  const handleCheckboxChange = (name) => {
    setCheckboxStates((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <div ref={wrapperRef} className="relative">
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`h-[44px] px-5 rounded-xl border flex items-center gap-2 text-white text-[14px] font-medium transition-all duration-300 whitespace-nowrap cursor-pointer ${
          isOpen
            ? "border-[#c5913b] bg-[#151515]"
            : "border-[#2a2a2a] bg-[#101010] hover:bg-[#181818]"
        }`}
      >
        <SlidersHorizontal size={16} />
        Filters
      </button>

      {/* Main Filter Modal */}
      <div
        className={`fixed inset-0 z-[998] transition-all duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          onClick={() => setIsOpen(false)}
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        />

        {/* Panel */}
        <div
          className={`absolute right-0 top-0 h-full w-full max-w-[600px] bg-[#0f0f0f] border-l border-[#1f1f1f] overflow-y-auto transition-all duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Header */}
          <div className="sticky top-0 z-20 bg-[#111] border-b border-[#1f1f1f] px-6 py-5 flex items-center justify-between">
            <h2 className="text-white text-[20px] font-semibold">
              More filters
            </h2>
            <button
              onClick={() => setIsOpen(false)}
              className="w-10 h-10 rounded-full hover:bg-[#1a1a1a] flex items-center justify-center transition-all duration-300 cursor-pointer"
            >
              <X size={20} className="text-white" />
            </button>
          </div>

          <div className="px-6 pt-6 space-y-8">
            {/* 1. Availability */}
            <div className="pb-8 border-b border-[#1f1f1f] backdrop:backdrop-blur-sm">
              <h3 className="text-white text-[20px] font-bold mb-5">
                Availability
              </h3>
              <label className="text-[14px] text-white font-medium flex items-center gap-2 mb-2 w-max">
                Move in date
                <div className="relative flex items-center group/tooltip">
                  <Info size={14} className="text-[#c5913b] cursor-pointer" />
                  
                  {/* Tooltip Content */}
                  <div className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-3 w-[250px] p-4 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg shadow-xl opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all duration-200 pointer-events-none">
                    <h4 className="text-white font-semibold text-[15px] mb-1">Move in date</h4>
                    <p className="text-[13px] text-gray-300 font-normal leading-relaxed whitespace-normal">
                      Choose a move-in date to view listings available on or before this date.
                    </p>
                    {/* Arrow tail */}
                    <div className="absolute -bottom-[6px] left-1/2 -translate-x-1/2 w-3 h-3 bg-[#1a1a1a] border-b border-r border-[#2a2a2a] rotate-45"></div>
                  </div>
                </div>
              </label>

              {/* Fixed Date Picker */}
              <div 
                onClick={() => dateInputRef.current?.showPicker()}
                className="h-[46px] w-1/2 rounded-xl border border-[#2a2a2a] bg-[#151515] px-4 flex items-center justify-between mb-4 cursor-pointer hover:bg-[#1a1a1a] transition-colors"
              >
                <input
                  ref={dateInputRef}
                  type="date"
                  className="bg-transparent text-white outline-none w-full text-[14px] [&::-webkit-calendar-picker-indicator]:hidden cursor-pointer"
                />                
                <CalendarDays size={18} className="text-gray-400 pointer-events-none" />
              </div>

              <label className="flex items-center gap-3 cursor-pointer w-max">
                <input
                  type="checkbox"
                  checked={hideNoDate}
                  onChange={() => setHideNoDate(!hideNoDate)}
                  className="accent-[#c5913b] w-4 h-4"
                />
                <span className="text-gray-300 text-[14px]">
                  Hide listings with no date provided
                </span>
              </label>
            </div>

            {/* 2. Top amenities */}
            <div className="pb-8 border-b border-[#1f1f1f]">
              <h3 className="text-white text-[20px] font-bold mb-5">
                Top amenities
              </h3>

              {/* Pets */}
              <div className="mb-6">
                <h4 className="text-white text-[15px] font-semibold mb-3">Pets</h4>
                <div className="grid grid-cols-4 gap-3">
                  {petOptions.map((item, index) => {
                    const isActive = selectedPets.includes(item.label);
                    return (
                      <button
                        key={index}
                        onClick={() => toggleArrayItem(item.label, selectedPets, setSelectedPets)}
                        className={`h-[70px] rounded-xl border flex flex-col items-center justify-center gap-2 transition-all duration-300 cursor-pointer ${
                          isActive ? "border-[#c5913b] bg-[#1b1711] text-[#c5913b]" : "border-[#2a2a2a] bg-[#151515] hover:bg-[#1a1a1a] text-white"
                        }`}
                      >
                        <item.icon size={20} className={isActive ? "text-[#c5913b]" : "text-white"} />
                        <span className="text-[12px] font-medium text-center px-1 leading-tight">{item.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Popular Amenities */}
              <div className="mb-6">
                <h4 className="text-white text-[15px] font-semibold mb-3">Popular amenities</h4>
                <div className="grid grid-cols-3 gap-3">
                  {popularAmenities.map((item, index) => {
                    const isActive = selectedPopular.includes(item.label);
                    return (
                      <button
                        key={index}
                        onClick={() => toggleArrayItem(item.label, selectedPopular, setSelectedPopular)}
                        className={`h-[70px] rounded-xl border flex flex-col items-center justify-center gap-2 transition-all duration-300 cursor-pointer ${
                          isActive ? "border-[#c5913b] bg-[#1b1711] text-[#c5913b]" : "border-[#2a2a2a] bg-[#151515] hover:bg-[#1a1a1a] text-white"
                        }`}
                      >
                        <item.icon size={20} className={isActive ? "text-[#c5913b]" : "text-white"} />
                        <span className="text-[13px] font-medium">{item.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Other Amenities (Pills) */}
              <div className="flex flex-wrap gap-3 mb-6">
                {amenities.map((item, index) => {
                  const isActive = selectedAmenities.includes(item.label);
                  return (
                    <button
                      key={index}
                      onClick={() => toggleArrayItem(item.label, selectedAmenities, setSelectedAmenities)}
                      className={`h-[38px] px-4 rounded-full border flex items-center gap-2 transition-all duration-300 cursor-pointer ${
                        isActive ? "bg-[#c5913b] border-[#c5913b] text-black" : "bg-[#151515] border-[#2a2a2a] hover:bg-[#1a1a1a] text-white"
                      }`}
                    >
                      <item.icon size={15} className={isActive ? "text-black" : "text-[#c5913b]"} />
                      <span className="text-[13px] font-medium">{item.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Amenity Checkboxes with Info Tooltips */}
              <div className="space-y-4 mb-8">
                {[
                  {
                    id: "disabledAccess",
                    label: "Disabled Access",
                    tooltip: true,
                    infoTitle: "Disabled Access",
                    infoText: "Find rentals that the housing provider has identified as accessible for people with disabilities. Please note that Zillow is unable to independently validate this claim; please contact the housing provider with any questions."
                  },
                  {
                    id: "incomeRestricted",
                    label: "Income Restricted",
                    tooltip: true,
                    infoTitle: "Income Restricted",
                    infoText: "Find rentals with income restrictions. These homes have income caps that determine eligibility."
                  },
                  {
                    id: "apartmentCommunity",
                    label: "Apartment Communities Only",
                    tooltip: true,
                    infoTitle: "Apartment Communities Only",
                    infoText: "Apartment Communities are professionally managed properties that typically have extra amenities and at least 25 units."
                  },
                  { id: "controlledAccess", label: "Controlled access" },
                  { id: "dishwasher", label: "Dishwasher" },
                ].map((item) => (
                  <label key={item.id} className="flex items-center gap-3 cursor-pointer w-max relative">
                    <input
                      type="checkbox"
                      checked={checkboxStates[item.id]}
                      onChange={() => handleCheckboxChange(item.id)}
                      className="accent-[#c5913b] w-4 h-4"
                    />
                    <span className="text-gray-300 text-[14px] flex items-center gap-2 relative">
                      {item.label}
                      
                      {item.tooltip && (
                        <div className="relative flex items-center group/tooltip">
                          <Info size={14} className="text-[#c5913b] cursor-pointer" />
                          
                          {/* Tooltip Content */}
                          <div className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-3 w-[250px] p-4 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg shadow-xl opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all duration-200 pointer-events-none">
                            <h4 className="text-white font-semibold text-[14px] mb-1">{item.infoTitle}</h4>
                            <p className="text-[13px] text-gray-300 font-normal leading-relaxed whitespace-normal">
                              {item.infoText}
                            </p>
                            {/* Arrow tail */}
                            <div className="absolute -bottom-[6px] left-1/2 -translate-x-1/2 w-3 h-3 bg-[#1a1a1a] border-b border-r border-[#2a2a2a] rotate-45"></div>
                          </div>
                        </div>
                      )}
                      
                    </span>
                  </label>
                ))}
              </div>

              {/* Views */}
              <div>
                <h4 className="text-white text-[15px] font-semibold mb-3">Views</h4>
                <div className="grid grid-cols-4 gap-3">
                  {viewOptions.map((item, index) => {
                    const isActive = selectedViews.includes(item.label);
                    return (
                      <button
                        key={index}
                        onClick={() => toggleArrayItem(item.label, selectedViews, setSelectedViews)}
                        className={`h-[70px] rounded-xl border flex flex-col items-center justify-center gap-2 transition-all duration-300 cursor-pointer ${
                          isActive ? "border-[#c5913b] bg-[#1b1711] text-[#c5913b]" : "border-[#2a2a2a] bg-[#151515] hover:bg-[#1a1a1a] text-white"
                        }`}
                      >
                        <item.icon size={20} className={isActive ? "text-[#c5913b]" : "text-white"} />
                        <span className="text-[13px] font-medium">{item.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* 3. Property details */}
            <div className="pb-8 border-b border-[#1f1f1f]">
              <h3 className="text-white text-[20px] font-bold mb-5">Property details</h3>

              <div className="mb-6">
                <h4 className="text-white text-[15px] font-semibold mb-3">Home size</h4>
                <div className="flex items-center gap-3">
                  <div className="relative flex-1">
                    <select className="w-full h-[46px] rounded-xl border border-[#2a2a2a] bg-[#151515] px-4 text-white outline-none appearance-none cursor-pointer">
                      <option>No Min</option>
                      <option>500 sqft</option>
                      <option>1000 sqft</option>
                    </select>
                    <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                  </div>
                  <span className="text-gray-500">-</span>
                  <div className="relative flex-1">
                    <select className="w-full h-[46px] rounded-xl border border-[#2a2a2a] bg-[#151515] px-4 text-white outline-none appearance-none cursor-pointer">
                      <option>No Max</option>
                      <option>2000 sqft</option>
                      <option>3000 sqft</option>
                    </select>
                    <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-white text-[15px] font-semibold mb-3">Number of stories</h4>
                <label className="flex items-center gap-3 cursor-pointer w-max">
                  <input
                    type="checkbox"
                    checked={checkboxStates.singleStory}
                    onChange={() => handleCheckboxChange("singleStory")}
                    className="accent-[#c5913b] w-4 h-4"
                  />
                  <span className="text-gray-300 text-[14px]">Single-story only</span>
                </label>
              </div>

              <div>
                <h4 className="text-white text-[15px] font-semibold mb-3">55+ Communities</h4>
                <div className="space-y-3">
                  {["Include", "Don't show", "Only show"].map((option) => (
                    <label key={option} className="flex items-center gap-3 cursor-pointer w-max">
                      <input
                        type="radio"
                        name="fiftyFivePlus"
                        value={option}
                        checked={fiftyFivePlus === option}
                        onChange={(e) => setFiftyFivePlus(e.target.value)}
                        className="accent-[#c5913b] w-4 h-4"
                      />
                      <span className="text-gray-300 text-[14px]">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* 4. Listing details */}
            <div className="pb-8 border-b border-[#1f1f1f]">
              <h3 className="text-white text-[20px] font-bold mb-5">Listing details</h3>

              <div className="mb-6">
                <h4 className="text-white text-[15px] font-semibold mb-3">Media</h4>
                <label className="flex items-center gap-3 cursor-pointer w-max">
                  <input
                    type="checkbox"
                    checked={checkboxStates.media3D}
                    onChange={() => handleCheckboxChange("media3D")}
                    className="accent-[#c5913b] w-4 h-4"
                  />
                  <span className="text-gray-300 text-[14px]">3D tour</span>
                </label>
              </div>

              <div className="mb-6">
                <h4 className="text-white text-[15px] font-semibold mb-3">Listing feature</h4>
                <div className="space-y-4">
                  <label className="flex items-center gap-3 cursor-pointer w-max">
                    <input
                      type="checkbox"
                      checked={checkboxStates.acceptsLomara}
                      onChange={() => handleCheckboxChange("acceptsLomara")}
                      className="accent-[#c5913b] w-4 h-4"
                    />
                    <span className="text-gray-300 text-[14px]">Accepts Lomara Applications</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer w-max">
                    <input
                      type="checkbox"
                      checked={checkboxStates.instantTour}
                      onChange={() => handleCheckboxChange("instantTour")}
                      className="accent-[#c5913b] w-4 h-4"
                    />
                    <span className="text-gray-300 text-[14px]">Instant Tour Available</span>
                  </label>
                </div>
              </div>

              <div>
                <h4 className="text-white text-[15px] font-semibold mb-3">Pricing</h4>
                <label className="flex items-center gap-3 cursor-pointer w-max">
                  <input
                    type="checkbox"
                    checked={checkboxStates.shortTermLease}
                    onChange={() => handleCheckboxChange("shortTermLease")}
                    className="accent-[#c5913b] w-4 h-4"
                  />
                  <span className="text-gray-300 text-[14px]">Short term lease available</span>
                </label>
              </div>
            </div>

            {/* 5. Commute time */}
            <div className="pb-8 border-b border-[#1f1f1f]">
              <h3 className="text-white text-[20px] font-bold mb-5">Commute time</h3>

              <div className="h-[46px] rounded-xl border border-[#2a2a2a] bg-[#151515] px-4 flex items-center gap-3 mb-5">
                <input
                  type="text"
                  placeholder="Enter address, city, state and ZIP code"
                  className="flex-1 bg-transparent outline-none text-white placeholder:text-gray-500 text-[14px]"
                />
                <MapPin size={18} className="text-[#c5913b]" />
              </div>
              
              {/* FIXED: The div renders only when showCommuteFilters is true */}
              {showCommuteFilters && (
                <div className="Commute_filters">
                  <div className="mb-5">
                    <h4 className="text-white text-[15px] font-semibold mb-2">Travel mode</h4>
                    <div className="relative">
                      <select className="w-full h-[46px] rounded-xl border border-[#2a2a2a] bg-[#151515] px-4 text-white outline-none appearance-none cursor-pointer">
                        <option>Drive</option>
                        <option>Transit</option>
                        <option>Walk</option>
                        <option>Bike</option>
                      </select>
                      <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  <div className="mb-5">
                    <h4 className="text-white text-[15px] font-semibold mb-2">Time of day</h4>
                    <div className="relative">
                      <select className="w-full h-[46px] rounded-xl border border-[#2a2a2a] bg-[#151515] px-4 text-white outline-none appearance-none cursor-pointer">
                        <option>Now</option>
                        <option>Rush Hour</option>
                      </select>
                      <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  <div className="mb-5">
                    <h4 className="text-white text-[15px] font-semibold mb-2">Max. travel time</h4>
                    <div className="flex rounded-xl border border-[#2a2a2a] overflow-hidden">
                      {travelTimeOptions.map((time, index) => {
                        const isActive = maxTravelTime === time;
                        return (
                          <button
                            key={time}
                            onClick={() => setMaxTravelTime(time)}
                            className={`flex-1 h-[40px] text-[13px] font-medium border-r border-[#2a2a2a] last:border-0 transition-colors cursor-pointer ${
                              isActive ? "bg-[#c5913b] text-black" : "bg-[#151515] text-white hover:bg-[#1a1a1a]"
                            }`}
                          >
                            {time}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {/* FIXED: Accurate text and chevron rotation mapping based on state */}
              <button 
                onClick={() => setShowCommuteFilters(!showCommuteFilters)}
                className="text-[#c5913b] text-[14px] font-medium flex items-center gap-1 hover:underline transition-all mt-2 cursor-pointer"
              >
                <ChevronDown 
                  size={16} 
                  className={`transition-transform duration-300 ${showCommuteFilters ? "rotate-180" : ""}`} 
                /> 
                {showCommuteFilters ? "Hide commute filters" : "Show commute filters"}
              </button>
            </div>

            {/* 6. Time on Lomara & 7. Keywords */}
            <div className="pb-8 space-y-6">
              <div>
                <h3 className="text-white text-[15px] font-bold mb-3">Time on Lomara</h3>
                <div className="relative">
                  <select className="w-full h-[46px] rounded-xl border border-[#2a2a2a] bg-[#151515] px-4 text-white outline-none appearance-none cursor-pointer">
                    <option>Any</option>
                    <option>Newer than 1 day</option>
                    <option>Newer than 7 days</option>
                  </select>
                  <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
              </div>

              <div>
                <h3 className="text-white text-[15px] font-bold mb-3">Keywords</h3>
                <div className="h-[46px] rounded-xl border border-[#2a2a2a] bg-[#151515] px-4 flex items-center">
                  <input
                    type="text"
                    placeholder="Short term, furnished, etc."
                    className="w-full bg-transparent outline-none text-white placeholder:text-gray-500 text-[14px]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="sticky bottom-0 z-20 bg-[#111] border-t border-[#1f1f1f] px-6 py-5 flex items-center gap-4">
            <button className="h-[50px] px-6 rounded-xl border border-[#2a2a2a] text-white font-medium hover:bg-[#181818] transition-all duration-300 cursor-pointer">
              Reset all filters
            </button>
            <button className="flex-1 h-[50px] rounded-xl bg-[#c5913b] hover:bg-[#ad7d31] text-black font-semibold transition-all duration-300 cursor-pointer">
              See 6 rentals available
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}