import React from "react";
import ReviewCarousel from "./Section/ReviewSection/ReviewCarousel";

// import from other components
import HeroSection from './Section/HeroSection/HeroSection'
import BestProduct from './Section/BestProductSection/BestProduct'
import TopBrands from './Section/TopBrandsSection/TopBrands'

export default function Homepage() {
    return (
        <>
            <HeroSection />

            <BestProduct />

            <TopBrands />
        </>
    );
}
