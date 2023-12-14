import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Collections from "../components/Collections";
import Footer from "../components/Footer";
import WomenCollecton from "../components/WomenCollecton";

function MainPage() {
  return (
    <div>
      <Header />
      <Banner />
      <Collections />
      <WomenCollecton />
      <Footer />
    </div>
  );
}

export default MainPage;
