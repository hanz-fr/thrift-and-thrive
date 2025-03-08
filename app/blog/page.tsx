import React from 'react'

// import component
import BlogFilterSection from '@/components/Organisms/Blog/BlogFilterSection'
import BlogHeroSection from '@/components/Organisms/Blog/BlogHeroSection'
import BlogListSection from '@/components/Organisms/Blog/BlogListSection'

export default function Blogpage() {
  return (
    <div>
        <BlogHeroSection/>
        <BlogFilterSection/>
        <BlogListSection/>
    </div>
  )
}
