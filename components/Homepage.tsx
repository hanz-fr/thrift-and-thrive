import React from 'react'
import ProductPreviewByCategory from './Organisms/HomePage/productPreviewByCategory'
import CarouselProductSection from './Organisms/HomePage/carouselProductSection'
import OutlookSection from './Organisms/HomePage/outlookSection'
import ReviewCarousel from './Section/ReviewSection/ReviewCarousel'

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
            <ProductPreviewByCategory/>
            <CarouselProductSection/>
            <OutlookSection/>
            <ReviewCarousel/>
        </>
    );
}
