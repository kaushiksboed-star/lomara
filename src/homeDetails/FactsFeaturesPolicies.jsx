const data = {
  buildingAmenities: [
    {
      category: "Community Rooms",
      items: [
        "Club House: Community Clubhouse With Complimentary Wi-fi",
        "Fitness Center: Modern 24-hour Fitness Center"
      ]
    },
    {
      category: "Outdoor common areas",
      items: [
        "Picnic Area: Tree-lined Outdoor Bbq And Picnic Area",
        "Playground: Children's Playground"
      ]
    },
    {
      category: "Other",
      items: [
        "In Unit: In-unit Washer/dryer",
        "Swimming Pool: Oversized Swimming Pool And Sundeck"
      ]
    },
    {
      category: "Services & facilities",
      items: [
        "Electric Vehicle Charging Station",
        "Storage Space"
      ]
    },
    {
      category: "View description",
      items: [
        "Picturesque Hudson Valley Mountain Views",
        "Scenic View*"
      ]
    }
  ],
  unitFeatures: [
    {
      category: "Appliances",
      items: [
        "Dishwasher",
        "Dryer: In-unit Washer/dryer",
        "Microwave Oven: Microwave*",
        "Washer: In-unit Washer/dryer"
      ]
    },
    {
      category: "Cooling",
      items: [
        "Central Air Conditioning: Central Air Conditioning/heating",
        "Electric Air Conditioning: Electricity Provider: Orange & Rockland"
      ]
    },
    {
      category: "Other",
      items: [
        "Patio Balcony: Private Patio/balcony"
      ]
    }
  ],
  policies: [
    {
      category: "Parking",
      items: [
        "Parking Lot: Other"
      ]
    },
    {
      category: "Utilities included in rent",
      items: [
        "Cable TV",
        "Garbage",
        "Internet",
        "Sewer",
        "Water"
      ]
    }
  ]
};

export default function FactsFeaturesPolicies() {
  
  const renderRowItems = (sections) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-8 py-4">
      {sections.map((section, idx) => (
        <div key={idx} className="space-y-3 break-words">
          {/* Sub-category Title */}
          <h4 className="text-[#c5913b] text-[13px] font-bold tracking-wider uppercase opacity-90">
            {section.category}
          </h4>
          
          {/* Features List */}
          <ul className="space-y-3">
            {section.items.map((item, itemIdx) => (
              <li 
                key={itemIdx} 
                className="flex items-start gap-2.5 text-gray-300 text-[13px] leading-relaxed font-normal hover:text-white transition-colors duration-200 group"
              >
                {/* Elegant Golden Bullet Dot */}
                <span className="w-1.5 h-1.5 rounded-full bg-[#c5913b] shrink-0 mt-1.5 transition-transform duration-200 group-hover:scale-125" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );

  return (
    <div className="w-full space-y-6 ">
      
      {/* --- Main Section Heading --- */}
      <h2 className="text-white text-[22px] font-extrabold tracking-tight">
        Facts, features & policies
      </h2>

      {/* --- 1. Building Amenities --- */}
      <div className="space-y-2 border-b border-[#1f1f1f] pb-8">
        <h3 className="text-white text-[16px] font-extrabold tracking-wide uppercase">
          Building Amenities
        </h3>
        {renderRowItems(data.buildingAmenities)}
      </div>

      {/* --- 2. Unit Features --- */}
      <div className="space-y-2 border-b border-[#1f1f1f] pb-8">
        <h3 className="text-white text-[16px] font-extrabold tracking-wide uppercase">
          Unit Features
        </h3>
        {renderRowItems(data.unitFeatures)}
      </div>

      {/* --- 3. Policies --- */}
      <div className="space-y-2 pb-4">
        <h3 className="text-white text-[16px] font-extrabold tracking-wide uppercase">
          Policies
        </h3>
        {renderRowItems(data.policies)}
      </div>

    </div>
  );
}