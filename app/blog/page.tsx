import React from 'react'

// import component
import BlogFilterSection from '@/components/Section/Blog/BlogFilterSection'
import BlogHeroSection from '@/components/Section/Blog/BlogHeroSection'
import BlogListSection from '@/components/Section/Blog/BlogListSection'

export default function Blogpage() {
  return (
    <div className='max-w-7xl mx-auto py-8'>
        <BlogHeroSection/>
        <BlogFilterSection/>
        <BlogListSection/>
    </div>
  )
}
