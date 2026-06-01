import { useState } from "react";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./home/MainLayout";
import SearchModuleIndex from "./searchModule/SearchModuleIndex";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/lomara" element={<MainLayout />} />
        <Route path="/search" element={<SearchModuleIndex />} />
      </Routes>
    </>
  );
}

export default App;
