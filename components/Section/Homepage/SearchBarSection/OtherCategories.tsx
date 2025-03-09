import Link from 'next/link'
import React from 'react'

export default function OtherCategories() {
  return (
    <div className='hidden sm:flex w-full h-fit my-auto gap-8 text-sm'>
        <Link href={'/product'}>New Arrivals</Link>
        <Link href={'/product'}>Clothing Brands</Link>
        <Link href={'/product'}>Shoes</Link>
        <Link href={'/product'}>Bags</Link>
        <Link href={'/product'}>Accessories</Link>
    </div>
  )
}
