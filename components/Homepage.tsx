import React from 'react'
import ProductPreviewByCategory from './Organisms/HomePage/productPreviewByCategory'
import CarouselProductSection from './Organisms/HomePage/carouselProductSection'
import OutlookSection from './Organisms/HomePage/outlookSection'
import ReviewCarousel from './Section/ReviewSection/ReviewCarousel'
// import from other components


export default function Homepage() {
    return (
        <>
        <ProductPreviewByCategory/>
        <CarouselProductSection/>
        <OutlookSection/>
        <ReviewCarousel/>
        </>
    )
}
