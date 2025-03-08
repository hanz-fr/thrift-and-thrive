import React from 'react'

// import component
import BlogFilterSection from '@/components/Section/Blog/BlogFilterSection'
import BlogHeroSection from '@/components/Section/Blog/BlogHeroSection'
import BlogListSection from '@/components/Section/Blog/BlogListSection'

export default function Blogpage() {
  return (
    <div>
        <BlogHeroSection/>
        <BlogFilterSection/>
        <BlogListSection/>
    </div>
  )
}
