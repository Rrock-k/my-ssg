import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/index";
import AboutPage from "../pages/about";
import ContactPage from "../pages/contact";
import Layout from "../components/Layout";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about.html" element={<AboutPage />} />
        <Route path="/contact.html" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}
