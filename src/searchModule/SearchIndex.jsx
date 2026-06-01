import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import MapSection from "./MapSection";
import ListingPanel from "./ListingPanel";

function SearchIndex() {
  return (
    <>
      <div className="layout-theme">
        <Sidebar />

        <div className="main-content">
          <Header />
          <div className="flex h-[calc(100vh-200px)]">
            {/* Left Map */}
            <div className="w-[60%] border-r border-[#1f1f1f]">
              <MapSection />
            </div>

            {/* Right Listings */}
            <div className="w-[40%] bg-[#0b0b0b]">
              <ListingPanel />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchIndex;
