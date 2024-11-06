import React from "react";
import {  Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ApplicationForm from "./pages/ApplicationForm";
import About from "./pages/About";

export const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/application-form" element={<ApplicationForm />} />
        <Route path="/about" element={<About />} />
      </Routes>
  );
};