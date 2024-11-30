import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import HomePage from "./pages/HomePage";
import PricingPage from "./pages/PricingPage";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/LoginPage";
import CityList from "./components/CityList";
import CountriesList from "./components/CountriesList";

const BASE_URL = "http://localhost:9000";

export default function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchCities();
  }, []);

  const fetchCities = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/cities`);
      const data = await res.json();
      setCities(data);
    } catch (error) {
      alert("There was an error loading data");
      console.log("fetchCities error", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="product" element={<ProductPage />} />
          <Route path="pricing" element={<PricingPage />} />
          <Route path="login" element={<Login />} />
          <Route path="app" element={<AppLayout />}>
            <Route
              index
              element={<CityList cities={cities} isLoading={isLoading} />}
            />
            <Route
              path="cities"
              element={<CityList cities={cities} isLoading={isLoading} />}
            />
            <Route
              path="countries"
              element={<CountriesList cities={cities} isLoading={isLoading} />}
            />
            <Route path="form" element={<p>Form</p>} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
