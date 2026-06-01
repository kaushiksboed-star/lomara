import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const footerMenus = [
  {
    title: "Real Estate",

    links: [
      {
        label: "Browse all homes",
        href: "/real-estate/browse-all-homes",
      },

      {
        label: "Albuquerque real estate",
        href: "/real-estate/albuquerque",
      },

      {
        label: "Atlanta real estate",
        href: "/real-estate/atlanta",
      },

      {
        label: "Austin real estate",
        href: "/real-estate/austin",
      },

      {
        label: "Baltimore real estate",
        href: "/real-estate/baltimore",
      },

      {
        label: "Boston real estate",
        href: "/real-estate/boston",
      },

      {
        label: "Chicago real estate",
        href: "/real-estate/chicago",
      },
    ],
  },

  {
    title: "Rentals",

    links: [
      {
        label: "Apartments for rent",
        href: "/rentals/apartments",
      },

      {
        label: "Rental buildings",
        href: "/rentals/buildings",
      },

      {
        label: "Luxury rentals",
        href: "/rentals/luxury",
      },

      {
        label: "Studio apartments",
        href: "/rentals/studio",
      },
    ],
  },

  {
    title: "Mortgage Rates",

    links: [
      {
        label: "30 year fixed",
        href: "/mortgage-rates/30-year-fixed",
      },

      {
        label: "15 year fixed",
        href: "/mortgage-rates/15-year-fixed",
      },

      {
        label: "Refinance rates",
        href: "/mortgage-rates/refinance",
      },

      {
        label: "Mortgage calculator",
        href: "/mortgage-rates/calculator",
      },
    ],
  },

  {
    title: "Browse Homes",

    links: [
      {
        label: "Homes near schools",
        href: "/browse-homes/schools",
      },

      {
        label: "Luxury homes",
        href: "/browse-homes/luxury",
      },

      {
        label: "Waterfront homes",
        href: "/browse-homes/waterfront",
      },

      {
        label: "Open houses",
        href: "/browse-homes/open-houses",
      },
    ],
  },
];

function FooterMenuItem({ item, isOpen, onClick, showBorder }) {
  return (
    <div className={`relative ${showBorder ? "" : ""}`}>
      {/* Menu Button */}
      <button
        onClick={onClick}
        className={`${
          showBorder ? "lg:border-r border-[#2a2a2a]" : ""
        } w-full cursor-pointer flex items-center justify-center gap-2 text-white hover:text-amber-100 transition-all duration-300 text-[18px] font-medium px-8 py-6`}
      >
        {item.title}

        <ChevronDown
          className={`w-5 h-5 transition-all duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="px-6 py-6 max-h-[420px] overflow-y-auto">
          <div className="flex flex-col items-center gap-5">
            {item.links.map((link, index) => (
              <Link
                key={index}
                to={link.href}
                className="text-[15px] text-gray-400 hover:text-amber-100 transition-all duration-300 text-center"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function RecommendationInfoSection() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <section className="bg-black py-16 border-t border-[#1f1f1f] px-[20px]">
      <div className="container mx-auto px-0">
        {/* Top Content */}
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-white text-[34px] font-semibold mb-5">
            About Lomara&apos;s Recommendations
          </h2>

          <p className="text-gray-400 text-[18px] leading-9">
            Recommendations are based on your location and search activity, such
            as the homes you&apos;ve viewed and saved and the filters
            you&apos;ve used. We use this information to bring similar homes to
            your attention, so you don&apos;t miss out.
          </p>
        </div>

        {/* Bottom Menu */}
        <div className="mt-16  border-[#2a2a2a]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {footerMenus.map((item, index) => (
              <FooterMenuItem
                key={index}
                item={item}
                isOpen={activeDropdown === index}
                onClick={() =>
                  setActiveDropdown(activeDropdown === index ? null : index)
                }
                showBorder={index !== footerMenus.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
