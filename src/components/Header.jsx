import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import { ChevronDown, Menu, X } from "lucide-react";

const megaMenus = {
  Buy: {
    columns: [
      {
        title: "Homes for sale",

        links: [
          {
            label: "Search homes",
            href: "/buy/search-homes",
          },

          {
            label: "New listings",
            href: "/buy/new-listings",
          },

          {
            label: "Open houses",
            href: "/buy/open-houses",
          },

          {
            label: "Luxury homes",
            href: "/buy/luxury-homes",
          },
        ],
      },

      {
        title: "Buying tools",

        links: [
          {
            label: "Affordability calculator",
            href: "/buy/affordability-calculator",
          },

          {
            label: "Mortgage rates",
            href: "/buy/mortgage-rates",
          },

          {
            label: "Find an agent",
            href: "/buy/find-agent",
          },

          {
            label: "Home buying guide",
            href: "/buy/guide",
          },
        ],
      },
    ],
  },

  Rent: {
    columns: [
      {
        title: "Rental listings",

        links: [
          {
            label: "Search apartments for rent",
            href: "/rent/apartments",
          },

          {
            label: "Search houses for rent",
            href: "/rent/houses",
          },

          {
            label: "Search all rental listings",
            href: "/rent/all-listings",
          },

          {
            label: "Browse all rental buildings",
            href: "/rent/buildings",
          },
        ],
      },

      {
        title: "Tools for renters",

        links: [
          {
            label: "Estimate what you can afford",
            href: "/rent/estimate",
          },

          {
            label: "See your applications",
            href: "/rent/applications",
          },

          {
            label: "Manage your tours",
            href: "/rent/tours",
          },

          {
            label: "Pay your rent",
            href: "/rent/pay-rent",
          },
        ],
      },

      {
        title: "More rental tools",

        links: [
          {
            label: "Build your credit",
            href: "/rent/build-credit",
          },

          {
            label: "Get renters insurance",
            href: "/rent/insurance",
          },

          {
            label: "Explore housing voucher programs",
            href: "/rent/housing-vouchers",
          },

          {
            label: "Learn more about renting",
            href: "/rent/learn",
          },
        ],
      },
    ],
  },

  Sell: {
    columns: [
      {
        title: "Sell your home",

        links: [
          {
            label: "Request an offer",
            href: "/sell/request-offer",
          },

          {
            label: "Compare agents",
            href: "/sell/compare-agents",
          },

          {
            label: "Home valuation",
            href: "/sell/home-valuation",
          },

          {
            label: "Seller guide",
            href: "/sell/guide",
          },
        ],
      },

      {
        title: "Seller resources",

        links: [
          {
            label: "Market trends",
            href: "/sell/market-trends",
          },

          {
            label: "Home staging",
            href: "/sell/home-staging",
          },

          {
            label: "Pricing tools",
            href: "/sell/pricing-tools",
          },

          {
            label: "Closing checklist",
            href: "/sell/closing-checklist",
          },
        ],
      },
    ],
  },

  "Find an agent": {
    columns: [
      {
        title: "Agent directory",

        links: [
          {
            label: "Top agents",
            href: "/agents/top-agents",
          },

          {
            label: "Agents near you",
            href: "/agents/near-you",
          },

          {
            label: "Browse agencies",
            href: "/agents/agencies",
          },

          {
            label: "Become an agent",
            href: "/agents/become-agent",
          },
        ],
      },

      {
        title: "Resources",

        links: [
          {
            label: "Agent reviews",
            href: "/agents/reviews",
          },

          {
            label: "Agent marketing",
            href: "/agents/marketing",
          },

          {
            label: "Success stories",
            href: "/agents/success-stories",
          },

          {
            label: "Community",
            href: "/agents/community",
          },
        ],
      },
    ],
  },
};

function MegaMenu({ menu }) {
  return (
    <div className="bg-[#0d0d0d] border border-[#1f1f1f] shadow-2xl w-full overflow-hidden backdrop-blur-md">
      <div className="px-4 py-8 max-w-[1400px] mx-auto">
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {menu.columns.map((column, index) => (
            <div
              key={index}
              className={`${
                index !== menu.columns.length - 1
                  ? "xl:border-r border-[#1f1f1f]"
                  : ""
              } pr-8`}
            >
              <h3 className="text-white text-[16px] font-semibold mb-4">
                {column.title}
              </h3>

              <div className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <Link
                    key={linkIndex}
                    to={link.href}
                    className="block text-gray-400 hover:text-amber-100 transition-all duration-300 text-[14px]"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Header() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [visibleMenu, setVisibleMenu] = useState(null);
  const closeTimer = useRef(null);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  const leftMenus = ["Buy", "Rent", "Sell", "Find an agent"];

  return (
    <>
      <header className="bg-black border-b border-[#1f1f1f] px-4 xl:px-8 relative z-50 header_section">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 items-center gap-3 header_grid">
            {/* Left Menu */}
            <div className="hidden xl:flex items-center gap-8 text-[15px] font-medium">
              {leftMenus.map((item, index) => (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => {
                    if (closeTimer.current) {
                      clearTimeout(closeTimer.current);
                    }

                    setActiveMenu(item);
                    setVisibleMenu(item);
                  }}
                >
                  <button className="flex items-center gap-2 text-amber-50 hover:text-amber-100 transition text-sm cursor-pointer menu_text">
                    {item}

                    <ChevronDown
                      size={16}
                      className={`transition-all duration-300 ${
                        activeMenu === item ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>
              ))}
            </div>

            {/* Logo */}
            <div className="header_logo flex items-center justify-center">
              <Link to="/lomara/" className="logo_bx shrink-0">
                <img
                  src="/lomara/logo.png"
                  alt="Lomara Logo"
                  className="object-contain"
                />
              </Link>
            </div>

            {/* Right Menu */}
            <div className="hidden xl:flex items-center justify-end gap-8">
              <Link
                to="/help"
                className="text-amber-50 hover:text-amber-100 transition text-sm"
              >
                Get help
              </Link>

              <button className="gold-btn text-black transition-all duration-300 font-semibold px-6 py-2.5 rounded-xl cursor-pointer text-sm">
                Sign in
              </button>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="xl:hidden text-white cursor-pointer mobile_menu_btn"
            >
              {mobileMenu ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Desktop Mega Menu */}
          <div
            onMouseEnter={() => {
              if (closeTimer.current) {
                clearTimeout(closeTimer.current);
              }

              if (visibleMenu) {
                setActiveMenu(visibleMenu);
              }
            }}
            onMouseLeave={() => {
              setActiveMenu(null);

              closeTimer.current = setTimeout(() => {
                setVisibleMenu(null);
              }, 400);
            }}
            className={`absolute left-0 top-full w-full transition-all duration-500 ease-in-out origin-top z-50 ${
              activeMenu
                ? "opacity-100 translate-y-0 visible"
                : "opacity-0 -translate-y-2 visible pointer-events-none"
            }`}
          >
            {visibleMenu && <MegaMenu menu={megaMenus[visibleMenu]} />}
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="absolute top-[94px] left-0 right-0 bottom-0 bg-black overflow-y-auto xl:hidden z-50">
          <div className="p-6 space-y-6">
            {leftMenus.map((item, index) => (
              <div key={index} className="border-b border-[#1f1f1f] pb-4">
                <button
                  onClick={() =>
                    setMobileDropdown(mobileDropdown === item ? null : item)
                  }
                  className="flex items-center justify-between w-full text-white text-[16px] font-medium cursor-pointer"
                >
                  {item}

                  <ChevronDown
                    size={18}
                    className={`transition-all duration-300 ${
                      mobileDropdown === item ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {mobileDropdown === item && (
                  <div className="mt-4 pl-2 space-y-6">
                    {megaMenus[item].columns.map((column, colIndex) => (
                      <div key={colIndex}>
                        <h4 className="text-white text-[14px] font-semibold mb-3">
                          {column.title}
                        </h4>

                        <div className="space-y-3">
                          {column.links.map((link, linkIndex) => (
                            <Link
                              key={linkIndex}
                              to={link.href}
                              className="block text-gray-400 hover:text-amber-100 text-[13px] transition-all duration-300"
                            >
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Mobile Bottom Links */}
            <div className="pt-6 flex flex-col gap-5">
              <Link to="/help" className="text-gray-400 text-base">
                Get help
              </Link>

              <button className="w-full h-[54px] rounded-xl gold-btn font-semibold cursor-pointer">
                Sign in
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
