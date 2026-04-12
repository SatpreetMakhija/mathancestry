import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import CatalogPage from "./pages/CatalogPage";
import TimelinePage from "./pages/TimelinePage";
import ExplorePage from "./pages/ExplorePage";
import SymbolPage from "./pages/SymbolPage";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<CatalogPage />} />
          <Route path="/timeline" element={<TimelinePage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/symbol/:id" element={<SymbolPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
