import SortDropdown from "./SortDropdown";
import ListingGrid from "./ListingGrid";

export default function ListingPanel() {
  return (
    <div className="h-full overflow-y-auto">

      {/* Top */}
      <div className="relative top-0 z-20 bg-[#0b0b0b] border-b border-[#1f1f1f] px-6 py-5">

        <div className="flex items-end justify-between">

          <div>
            <h2 className="text-white text-[26px] font-semibold">
              Rental Listings
            </h2>

            <p className="text-gray-400 text-[14px] mt-1">
              576 rentals available
            </p>
          </div>

          <SortDropdown />

        </div>

      </div>

      <ListingGrid />

    </div>
  );
}