import {
  SlidersHorizontal,
} from "lucide-react";

import SearchInput from "./SearchInput";
import RentFilterButton from "./RentFilterButton";
import PriceRangeFilterButton from "./PriceRangeFilterButton";
import BedroomFilterButton from "./BedroomFilterButton";
import PropertyTypeFilterButton from "./PropertyTypeFilterButton";
import MoreFilterButton from "./MoreFilterButton";

export default function SearchTopbar() {
  return (
    <div className="h-[74px] bg-black border-b border-[#1f1f1f] px-5 flex items-center gap-3">

      <SearchInput />

      <RentFilterButton />
      <PriceRangeFilterButton />
      <BedroomFilterButton />
      <PropertyTypeFilterButton />
      <MoreFilterButton />

      

      <button className="h-[44px] px-6 rounded-xl gold-btn font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer">
        Save search
      </button>

    </div>
  );
}