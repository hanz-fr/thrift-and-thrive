import Link from 'next/link'
import React from 'react'

export default function OtherCategories() {
  return (
    <div className='hidden sm:flex w-full h-fit my-auto gap-8 text-sm'>
        <Link href={'/#'}>New Arrivals</Link>
        <Link href={'/#'}>Clothing Brands</Link>
        <Link href={'/#'}>Shoes</Link>
        <Link href={'/#'}>Bags</Link>
        <Link href={'/#'}>Accessories</Link>
    </div>
  )
}
