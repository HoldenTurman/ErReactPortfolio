import React from "react";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Offer from "./components/Offer";
import Portfolio from "./components/Portfolio";
import Mission from "./components/Mission";
import Banner from "./components/Banner";

export default function App() {
  return (
    <>
      <Header />
      <Nav />
      <Hero />
      <About />
      <Offer />
      <Portfolio />
      <Mission />
      <Banner />
      <Contact />
      <Footer />
    </>
  );
}
