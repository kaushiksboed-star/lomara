import { useState, useEffect, useRef } from "react";
import {
  X,
  ChevronLeft,
  Heart,
  Share2,
  EyeOff,
  MoreHorizontal,
  Building,
  CalendarDays,
  WashingMachine,
  Thermometer,
  LayoutGrid,
  Mail,
  Link as LinkIcon,
  Maximize2,
  Car,
  Banknote,
  House,
  User,
  Building2,
  Bed,
  PawPrint,
  SquareParking,
  Fan,
} from "lucide-react";
import { Link } from "react-router-dom";
import PetEssentials from "./PetEssentials";
import NearbyProperties from "./NearbyProperties";
import AvailableUnits from "./AvailableUnits";
import FactsFeaturesPolicies from "./FactsFeaturesPolicies";
import NearbySchools from "./NearbySchools";
import RequestTour from "./RequestTour";
import SimilarProperties from "./SimilarProperties";
import FrequentlyAskedQuestions from "./FrequentlyAskedQuestions";
import MapPlaceholder from "./MapPlaceholder";

const tabs = [
  "Overview",
  "Available Units",
  "Facts & features",
];

const specialTags = [
  "COMPLETELY RENOVATED",
  "NEW BATHROOM",
  "NEW CABINETRY",
  "NATURAL VINYL FLOORS THROUGHOUT",
  "BEAUTIFULLY UPDATED KITCHEN",
  "NEW APPLIANCES",
  "QUARTZ COUNTERTOPS",
];

export default function HomeDetails({ isOpen, onClose }) {
  const [isSaved, setIsSaved] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  const [showTabs, setShowTabs] = useState(false);
  const [activeTab, setActiveTab] = useState("Overview");

  const shareDropdownRef = useRef(null);
  const moreDropdownRef = useRef(null);
  const scrollContainerRef = useRef(null);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      if (scrollContainerRef.current.scrollTop > 300) {
        setShowTabs(true);
      } else {
        setShowTabs(false);
      }
    }
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        shareDropdownRef.current &&
        !shareDropdownRef.current.contains(event.target)
      ) {
        setIsShareOpen(false);
      }
      if (
        moreDropdownRef.current &&
        !moreDropdownRef.current.contains(event.target)
      ) {
        setIsMoreOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (!isOpen) return null;

  const images = [
    "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=400&q=80",
  ];

  return (
    <div
      ref={scrollContainerRef}
      onScroll={handleScroll}
      className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-sm overflow-y-auto flex justify-center items-start"
    >
      {/* Custom Keyframe Animations */}
      <style>{`
        @keyframes menuSlideDown {
          from {
            transform: translateY(-15px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-menu-drop {
          animation: menuSlideDown 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      <div className="w-full max-w-[1240px] bg-[#0f0f0f] border border-[#2a2a2a] shadow-2xl my-4 animate-in fade-in zoom-in-95 duration-200">
        {/* --- Header Navbar --- */}
        <div className="sticky top-0 z-30 bg-[#111111] border-b border-[#2a2a2a] rounded-t-2xl">
          <div className="px-4 md:px-6 h-[60px] flex items-center justify-between relative">
            <button
              onClick={onClose}
              className="flex items-center gap-2 text-gray-300 hover:text-white text-[14px] font-medium transition-colors cursor-pointer"
            >
              <ChevronLeft size={18} />
              Back to search
            </button>

            {/* Right Menu Actions */}
            <div className="flex items-center gap-2 md:gap-4">
              <button
                onClick={() => setIsSaved(!isSaved)}
                className="flex items-center gap-1.5 text-gray-300 hover:text-white text-[14px] font-medium transition-colors cursor-pointer px-2 py-1 rounded-lg hover:bg-[#1a1a1a]"
              >
                <Heart
                  size={16}
                  className={
                    isSaved ? "fill-red-500 text-red-500" : "text-[#c5913b]"
                  }
                />
                <span className="hidden sm:inline">Save</span>
              </button>

              {/* Share Dropdown */}
              <div ref={shareDropdownRef} className="relative">
                <button
                  onClick={() => {
                    setIsShareOpen(!isShareOpen);
                    setIsMoreOpen(false);
                  }}
                  className={`flex items-center gap-1.5 text-gray-300 hover:text-white text-[14px] font-medium transition-colors cursor-pointer px-2 py-1 rounded-lg hover:bg-[#1a1a1a] ${isShareOpen ? "bg-[#1a1a1a] text-white" : ""}`}
                >
                  <Share2 size={16} className="text-[#c5913b]" />
                  <span className="hidden sm:inline">Share</span>
                </button>

                {isShareOpen && (
                  <div className="absolute right-0 mt-2 w-[180px] bg-[#101010] border border-[#2a2a2a] rounded-xl shadow-xl z-50 py-1.5 animate-in fade-in zoom-in-95 duration-150">
                    <button className="w-full text-left px-4 py-2.5 text-[14px] text-gray-300 hover:bg-[#181818] hover:text-white transition-colors cursor-pointer flex items-center gap-2.5">
                      <Mail size={16} className="text-[#c5913b]" />
                      Email
                    </button>
                    <button className="w-full text-left px-4 py-2.5 text-[14px] text-gray-300 hover:bg-[#181818] hover:text-white transition-colors cursor-pointer flex items-center gap-2.5">
                      <LinkIcon size={16} className="text-[#c5913b]" />
                      Copy Link
                    </button>
                  </div>
                )}
              </div>

              {/* More Dropdown */}
              <div ref={moreDropdownRef} className="relative">
                <button
                  onClick={() => {
                    setIsMoreOpen(!isMoreOpen);
                    setIsShareOpen(false);
                  }}
                  className={`flex items-center gap-1.5 text-gray-300 hover:text-white p-1 rounded-lg hover:bg-[#1a1a1a] cursor-pointer justify-center ${isMoreOpen ? "bg-[#1a1a1a] text-white" : ""}`}
                >
                  <MoreHorizontal size={18} className="text-[#c5913b]" />
                  <span className="hidden sm:inline">More</span>
                </button>

                {isMoreOpen && (
                  <div className="absolute right-0 mt-2 w-[220px] bg-[#101010] border border-[#2a2a2a] rounded-xl shadow-xl z-50 py-1.5 animate-in fade-in zoom-in-95 duration-150">
                    <button className="w-full text-left px-4 py-2.5 text-[14px] text-gray-300 hover:bg-[#181818] hover:text-white transition-colors cursor-pointer block">
                      View owner dashboard
                    </button>
                    <button className="w-full text-left px-4 py-2.5 text-[14px] text-gray-300 hover:bg-[#181818] hover:text-white transition-colors cursor-pointer block">
                      Report problem with listing
                    </button>
                  </div>
                )}
              </div>

              <div className="w-[1px] h-5 bg-[#2a2a2a] mx-1 hidden sm:block" />
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* FIXED: Smooth Drop Animation added using 'animate-menu-drop' class */}
          {showTabs && (
            <div className="border-t border-[#2a2a2a] px-4 md:px-6 h-[48px] flex items-center justify-start md:justify-center gap-6 bg-[#111111] overflow-x-auto whitespace-nowrap scrollbar-none animate-menu-drop">
              {tabs.map((tab) => {
                const isActive = activeTab === tab;
                return (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`relative h-full flex items-center px-1 text-[14px] font-medium transition-colors cursor-pointer ${isActive ? "text-[#c5913b]" : "text-gray-400 hover:text-white"}`}
                  >
                    {tab}
                    {isActive && (
                      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#c5913b] rounded-t-full" />
                    )}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* --- Main Content Layout --- */}
        <div className="p-4 md:p-6 space-y-6">
          {/* Images Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2 rounded-xl overflow-hidden h-[260px] sm:h-[380px] md:h-[440px] relative group">
            <div className="md:col-span-2 h-full bg-[#151515]">
              <img
                src={images[0]}
                alt="Main Exterior"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden md:grid md:col-span-2 grid-cols-2 grid-rows-2 gap-2 h-full">
              {images.slice(1).map((img, idx) => (
                <div
                  key={idx}
                  className="w-full h-full bg-[#151515] overflow-hidden"
                >
                  <img
                    src={img}
                    alt={`Interior ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="absolute top-4 left-4 bg-[#151515]/90 border border-[#2a2a2a] text-white text-[11px] font-semibold px-2.5 py-1 rounded-full flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-[#c5913b] rounded-full"></span>
              Condo for rent
            </div>
            <button className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm border border-[#2a2a2a] text-white text-[13px] font-medium px-4 py-2 rounded-xl flex items-center gap-2 hover:bg-black/90 transition-all cursor-pointer">
              <LayoutGrid size={15} className="text-[#c5913b]" />
              See all 27 photos
            </button>
          </div>

          {/* Columns Split */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
            {/* Left Column Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Pricing & Address */}
              <div className="flex flex-col sm:flex-row justify-between items-start gap-4 pb-6 border-b border-[#1f1f1f]">
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-white text-[28px] font-extrabold">
                      Boulder Pointe Apartments
                    </span>
                  </div>
                  <p className="text-gray-300 text-[15px] font-medium mt-1">
                    201 Genung St, Middletown, NY 10940
                  </p>
                </div>

                <div className="flex gap-6 border-t sm:border-t-0 pt-4 sm:pt-0 w-full sm:w-auto border-[#2a2a2a]">
                  <div className="text-center min-w-[50px]">
                    <div className="text-white text-[24px] font-bold">2</div>
                    <div className="text-gray-400 text-[13px]">beds</div>
                  </div>
                  <div className="text-center min-w-[50px] border-x border-[#1f1f1f] px-6">
                    <div className="text-white text-[24px] font-bold">2</div>
                    <div className="text-gray-400 text-[13px]">baths</div>
                  </div>
                  <div className="text-center min-w-[60px]">
                    <div className="text-white text-[24px] font-bold">964</div>
                    <div className="text-gray-400 text-[13px]">sqft</div>
                  </div>
                </div>
              </div>

              {/* Core Highlights Tags */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                <div className="h-[46px] rounded-xl border border-[#2a2a2a] bg-[#151515] px-4 flex items-center gap-3 text-white text-[16px]">
                  <Building2 size={16} className="text-[#c5913b]" />
                  <span>Apartment building</span>
                </div>

                <div className="h-[46px] rounded-xl border border-[#2a2a2a] bg-[#151515] px-4 flex items-center gap-3 text-white text-[16px]">
                  <Bed size={16} className="text-[#c5913b]" />
                  <span>2-3 beds</span>
                </div>

                <div className="h-[46px] rounded-xl border border-[#2a2a2a] bg-[#151515] px-4 flex items-center gap-3 text-white text-[16px]">
                  <PawPrint size={16} className="text-[#c5913b]" />
                  <span>Pet-friendly</span>
                </div>

                <div className="h-[46px] rounded-xl border border-[#2a2a2a] bg-[#151515] px-4 flex items-center gap-3 text-white text-[16px]">
                  <SquareParking size={16} className="text-[#c5913b]" />
                  <span>
                    Other parking{" "}
                    <span className="text-gray-400 border-b border-dashed border-gray-600 cursor-pointer select-none">
                      + 1
                    </span>
                  </span>
                </div>

                {/* 5. Air conditioning (central) */}
                <div className="h-[46px] rounded-xl border border-[#2a2a2a] bg-[#151515] px-4 flex items-center gap-3 text-white text-[16px]">
                  <Fan size={16} className="text-[#c5913b]" />
                  <span>Air conditioning (central)</span>
                </div>

                {/* 6. In-unit laundry (W/D) */}
                <div className="h-[46px] rounded-xl border border-[#2a2a2a] bg-[#151515] px-4 flex items-center gap-3 text-white text-[16px]">
                  <WashingMachine size={16} className="text-[#c5913b]" />
                  <span>In-unit laundry (W/D)</span>
                </div>
              </div>

              {/* --- WHAT'S SPECIAL SECTION --- */}
              <div className="space-y-6 pt-6 border-t border-[#1f1f1f]">
                <h3 className="text-white text-[20px] font-bold tracking-tight">
                  What's special
                </h3>
                <div className="flex flex-wrap gap-2">
                  {specialTags.map((tag, idx) => (
                    <div
                      key={idx}
                      className="bg-[#151515] border border-[#2a2a2a] text-white text-[11px] font-semibold tracking-wider px-3 py-1.5 rounded-lg uppercase hover:border-[#c5913b] transition-colors"
                    >
                      {tag}
                    </div>
                  ))}
                </div>
                <div className="space-y-4 text-[14px] leading-relaxed text-gray-300 font-normal">
                  <p>
                    Welcome to completely renovated very spacious and bright 2
                    bedroom and 1 bath apartment on the second floor.
                    Beautifully updated kitchen with quartz countertops and new
                    cabinetry, new appliances, new bathroom and natural vinyl
                    floors throughout. Comes with many closets and extra storage
                    room. Just a few minutes away from major highways, thruway ,
                    RT17 & Woodbury Commons. Good credit, proof of income,
                    references.{" "}
                    <span className="text-red-500 font-semibold">NO PETS!</span>
                  </p>
                  <p>
                    1 year lease. 1 month security deposit. Application, credit
                    report, proof of income, references. Tenant is responsible
                    for all utilities.
                  </p>
                </div>
                <div className="space-y-2 pt-2">
                  <div className="flex items-center gap-2 text-[14px] text-white font-bold">
                    <span>
                      2 days{" "}
                      <span className="text-[#c5913b] font-medium hover:underline cursor-pointer">
                        on Lomara
                      </span>
                    </span>
                    <span className="text-gray-600">|</span>
                    <span>
                      3{" "}
                      <span className="text-gray-400 font-medium">
                        contacts
                      </span>
                    </span>
                  </div>
                  <div className="text-[12px] text-gray-500 space-y-0.5 font-medium">
                    <div>Lomara last checked: 13 hours ago</div>
                    <div>Listing updated: May 30, 2026 at 12:02am</div>
                  </div>
                </div>

                <div className="border-t border-[#1f1f1f] pt-6 space-y-4">
                  <h4 className="text-white text-[15px] font-bold">
                    Listing By:{" "}
                    <span className="text-gray-400 font-medium">
                      management company
                    </span>
                  </h4>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-[#151515] border border-[#2a2a2a] flex items-center justify-center text-gray-400 hover:border-[#c5913b] transition-colors">
                      <User size={22} />
                    </div>
                    <span className="text-gray-200 font-semibold text-[15px] hover:text-white transition-colors cursor-pointer">
                      Berta Aidukevicius
                    </span>
                  </div>
                </div>
              </div>

              <div className="w-full border-t border-[#1f1f1f]"></div>
              <MapPlaceholder />
              <div className="w-full border-t border-[#1f1f1f]"></div>
              {/* Pet essentials  */}
              <PetEssentials />
              {/* Pet essentials End*/}
              <div className="w-full border-t border-[#1f1f1f]"></div>
              <NearbyProperties />
              <div className="w-full border-t border-[#1f1f1f]"></div>
              <AvailableUnits />
              <div className="w-full border-t border-[#1f1f1f]"></div>
              <FactsFeaturesPolicies />
              <div className="w-full border-t border-[#1f1f1f]"></div>
              <NearbySchools />
              <div className="w-full border-t border-[#1f1f1f]"></div>
              <RequestTour />
              <div className="w-full border-t border-[#1f1f1f]"></div>
              <SimilarProperties />
              <div className="w-full border-t border-[#1f1f1f]"></div>
              <FrequentlyAskedQuestions />
            </div>

            <div className="lg:col-span-1 sticky top-[130px] z-10 space-y-3">
              <div className="bg-[#151515] border border-[#2a2a2a] rounded-2xl p-5 space-y-3">
                <button className="w-full h-[48px] rounded-xl gold-btn font-bold text-[15px] transition-all duration-300 cursor-pointer shadow-lg">
                  Request a tour
                </button>
                <button className="w-full h-[48px] rounded-xl border border-[#2a2a2a] text-white hover:bg-[#1f1f1f] font-semibold text-[15px] transition-all duration-300 cursor-pointer">
                  Request to apply
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
