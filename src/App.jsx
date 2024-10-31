import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import HomePage from "./pages/HomePage";
import PricingPage from "./pages/PricingPage";
import PageNotFound from "./pages/PageNotFound";
import PageNav from "./components/PageNav";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <PageNav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="product" element={<ProductPage />} />
          <Route path="pricing" element={<PricingPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
