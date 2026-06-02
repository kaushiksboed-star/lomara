import { useState } from "react";
import { ChevronRight, Layers, ArrowUpDown } from "lucide-react";

const initialUnits = [
  {
    id: 1,
    type: "2 bed",
    title: "2 Bedrooms - 2 Bathrooms",
    specs: "2 bd, 2 ba",
    sqft: "954",
    availability: "Now",
    rent: "$2,406+",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=120&q=80"
  },
  {
    id: 2,
    type: "3 bed",
    title: "Unit 307",
    specs: "3 bd, 2 ba",
    sqft: "1,145",
    availability: "Jul 14",
    rent: "$3,181",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=120&q=80"
  }
];

export default function AvailableUnits() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredUnits = activeFilter === "All" 
    ? initialUnits 
    : initialUnits.filter(unit => unit.type === activeFilter);

  return (
    <div className="w-full text-gray-300 space-y-5">
      
      {/* --- Header Area --- */}
      <div className="space-y-1.5">
        <h3 className="text-white text-[22px] font-bold tracking-tight">
          Available units
        </h3>
        <p className="text-[13px] text-gray-400 max-w-[900px] leading-relaxed">
          Price may not include required fees and charges. Price shown reflects the lease term provided for each unit.
        </p>
      </div>

      {/* --- Filter Pills --- */}
      <div className="flex flex-wrap gap-2.5">
        <button
          onClick={() => setActiveFilter("All")}
          className={`px-4 py-1.5 rounded-full text-[13px] font-semibold border transition-all cursor-pointer ${
            activeFilter === "All"
              ? "border-[#c5913b] text-[#c5913b] bg-[#1b1711]"
              : "border-[#2a2a2a] bg-[#151515] text-gray-300 hover:border-gray-500"
          }`}
        >
          All (2)
        </button>

        <button
          onClick={() => setActiveFilter("2 bed")}
          className={`px-4 py-1.5 rounded-full text-[13px] font-semibold border transition-all cursor-pointer ${
            activeFilter === "2 bed"
              ? "border-[#c5913b] text-[#c5913b] bg-[#1b1711]"
              : "border-[#2a2a2a] bg-[#151515] text-gray-300 hover:border-gray-500"
          }`}
        >
          2 bed <span className="text-gray-500 font-medium ml-1">$2,406+</span>
        </button>

        <button
          onClick={() => setActiveFilter("3 bed")}
          className={`px-4 py-1.5 rounded-full text-[13px] font-semibold border transition-all cursor-pointer ${
            activeFilter === "3 bed"
              ? "border-[#c5913b] text-[#c5913b] bg-[#1b1711]"
              : "border-[#2a2a2a] bg-[#151515] text-gray-300 hover:border-gray-500"
          }`}
        >
          3 bed <span className="text-gray-500 font-medium ml-1">$3,181+</span>
        </button>
      </div>

      {/* --- Table Container --- */}
      <div className="border border-[#2a2a2a] rounded-xl overflow-hidden bg-[#111111]/40 shadow-xl">
        
        {/* Table Header (Responsive columns grid) */}
        <div className="grid grid-cols-3 md:grid-cols-5 items-center bg-[#151515] border-b border-[#2a2a2a] px-4 py-3 text-[13px] font-bold text-gray-400 select-none">
          <div className="col-span-2">Unit</div>
          <div className="hidden md:block">Sqft</div>
          <div className="hidden md:block">Available</div>
          <button className="flex items-center justify-end md:justify-start gap-1 hover:text-white transition-colors cursor-pointer text-right md:text-left">
            Base rent <ArrowUpDown size={12} className="text-[#c5913b]" />
          </button>
        </div>

        {/* Table Rows */}
        <div className="divide-y divide-[#1f1f1f]">
          {filteredUnits.map((unit) => (
            <div 
              key={unit.id}
              className="grid grid-cols-3 md:grid-cols-5 items-center px-4 py-4 hover:bg-[#151515]/50 transition-colors group relative cursor-pointer"
            >
              {/* Unit Info (Spans 2 columns everywhere) */}
              <div className="col-span-2 flex items-center gap-3.5">               
                <div className="w-[55px] h-[55px] bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg overflow-hidden shrink-0 flex items-center justify-center">
                  <img src={unit.image} alt="Floor plan preview" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" />
                </div>
                
                <div className="space-y-0.5">
                  <h4 className="text-white font-bold text-[14px] md:text-[15px] tracking-tight group-hover:text-[#c5913b] transition-colors">
                    {unit.title}
                  </h4>
                  <p className="text-gray-400 text-[12px] md:text-[13px]">
                    {unit.specs}
                  </p>
                  
                  {/* Mobile-Only Info: Shows sqft and availability inline under the title */}
                  <p className="text-gray-500 text-[11px] md:hidden font-medium">
                    {unit.sqft} sqft · Available: {unit.availability}
                  </p>

                  <button className="flex items-center gap-1 text-[#c5913b] text-[11px] md:text-[12px] font-medium hover:underline pt-0.5 cursor-pointer">
                    <Layers size={12} />
                    Floor plan
                  </button>
                </div>
              </div>

              {/* Sqft Column (Hidden on mobile, block on desktop) */}
              <div className="hidden md:block text-[14px] font-medium text-gray-300">
                {unit.sqft}
              </div>

              {/* Available Column (Hidden on mobile, block on desktop) */}
              <div className="hidden md:block text-[14px] font-medium text-gray-300">
                {unit.availability}
              </div>

              {/* Base Rent & Action Arrow (Aligned perfectly on mobile and desktop) */}
              <div className="col-span-1 flex items-center justify-end md:justify-between text-[14px] font-bold text-white pr-2 md:pr-4">
                <span>{unit.rent}</span>
                <ChevronRight 
                  size={18} 
                  className="text-gray-500 group-hover:text-[#c5913b] group-hover:translate-x-0.5 transition-all ml-2 md:ml-0" 
                />
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* --- Footer Label --- */}
      <div className="text-[11px] text-gray-500 font-medium tracking-wide">
        Listings by: Cole Group Realty
      </div>

    </div>
  );
}