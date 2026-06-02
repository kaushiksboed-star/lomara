import { School, GraduationCap } from "lucide-react";

const schoolsData = [
  {
    id: 1,
    rating: "6",
    name: "William A Carter School",
    grades: "K-5",
    distance: "1.6 mi"
  },
  {
    id: 2,
    rating: "4",
    name: "Middletown Twin Towers Middle School",
    grades: "6-8",
    distance: "1.5 mi"
  },
  {
    id: 3,
    rating: "5",
    name: "Middletown High School",
    grades: "9-12",
    distance: "1.7 mi"
  }
];

export default function NearbySchools() {
  return (
    <div className="w-full text-gray-300 space-y-6">
      
      {/* --- Section Title --- */}
      <div className="space-y-1">
        <h3 className="text-white text-[22px] font-extrabold tracking-tight">
          Nearby schools in Middletown
        </h3>
        <p className="text-[13px] text-gray-300 font-semibold tracking-wide uppercase">
          Lomara Rating
        </p>
      </div>

      {/* --- Schools List (Auto-Responsive Rows) --- */}
      <div className="space-y-4">
        {schoolsData.map((school) => (
          <div
            key={school.id}
            className="flex items-center gap-4 p-2.5 rounded-xl hover:bg-[#151515]/50 transition-all duration-200 group cursor-pointer"
          >
            {/* Premium Gold Circular Rating Badge */}
            <div className="w-16 h-16 rounded-full border-2 border-[#c5913b] bg-[#131313] flex flex-col items-center justify-center shrink-0 shadow-lg group-hover:scale-105 transition-transform">
              <span className="text-white font-black text-[18px] leading-none">
                {school.rating}
              </span>
              <span className="text-gray-300 text-[13px] font-extrabold mt-0.5 tracking-tighter uppercase">
                / 10
              </span>
            </div>

            {/* School Info Block */}
            <div className="space-y-1 min-w-0 flex-1">
              {/* School Name with truncation guard on mobile */}
              <h4 className="text-white font-bold text-[15px] sm:text-[16px] tracking-tight truncate group-hover:text-[#c5913b] transition-colors">
                {school.name}
              </h4>
              
              {/* Metadata row */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-0.5 text-[13px] text-gray-400 font-medium">
                <span className="flex items-center gap-1">
                  Grades: <strong className="text-gray-200 font-bold">{school.grades}</strong>
                </span>
                <span className="text-gray-300 hidden sm:inline select-none">•</span>
                <span className="flex items-center gap-1">
                  Distance: <strong className="text-gray-200 font-bold">{school.distance}</strong>
                </span>
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}