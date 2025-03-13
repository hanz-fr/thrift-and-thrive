import React from "react";
import ProductPreviewByCategory from "./Section/Homepage/ProductReviewCategorySection/productPreviewByCategory";
import CarouselProductSection from "./Section/Homepage/CarouselProductSection/carouselProductSection";
import OutlookSection from "./Section/Homepage/OutlookSection/Outlook";
import ReviewCarousel from "./Section/Homepage/ReviewSection/ReviewCarousel";
import EducateContainer from "./Section/Homepage/EducateSection/EducateContainer";
import HeroSection from "./Section/Homepage/HeroSection/HeroSection";
import BestProduct from "./Section/Homepage/BestProductSection/BestProduct";
import TopBrands from "./Section/Homepage/TopBrandsSection/TopBrands";
import Search from "./Section/Homepage/SearchBarSection/SearchSection";
import AOSInitializer from "@/app/aos-init";

export default function Homepage() {
  return (
    <>
      <AOSInitializer />

      <Search />
      <HeroSection />
      <BestProduct />
      <TopBrands />
      <ProductPreviewByCategory />
      <CarouselProductSection />
      <OutlookSection />
      <ReviewCarousel />
      <EducateContainer />
    </>
  );
}
