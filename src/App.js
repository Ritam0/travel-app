import React from "react";
import Destinations from "./components/Destinations";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Offer from "./components/Offer";
import Services from "./components/Services";

export default function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Services />
      <Destinations />
      <Offer />
    </div>
  );
}