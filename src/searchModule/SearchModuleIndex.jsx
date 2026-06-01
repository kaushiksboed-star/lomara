import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import MapSection from "./MapSection";
import ListingPanel from "./ListingPanel";
import SearchTopbar from "./SearchTopbar";

function SearchModuleIndex() {
  return (
    <>
      <div className="layout-theme">
        <Sidebar />

        <div className="main-content">

          <Header />
          <div className="w-full bg-black overflow-hidden">
            <SearchTopbar />
            <div className="flex h-[calc(100vh-196px)] min-h-0 overflow-hidden">
              {/* Left Map */}
              <div className="h-full min-h-0 w-[60%] shrink-0 border-r border-[#1f1f1f]">
                <MapSection />
              </div>

              {/* Right Listings */}
              <div className="h-full min-h-0 w-[40%] shrink-0 bg-[#0b0b0b]">
                <ListingPanel />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchModuleIndex;
