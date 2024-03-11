'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from './button/button'
import Link from 'next/link'
import { type ProductInterface } from '@/types'

export const Product = ({
  id,
  name,
  price,
  image,
  stock,
  category
}: ProductInterface) => {
  const [quantity, setQuantity] = useState(0)

  const minusQuantity = () => {
    if (quantity > 0) {
      setQuantity((prev) => prev - 1)
    }
  }

  const plusQuantity = () => {
    if (quantity + 1 <= stock) {
      setQuantity((prev) => prev + 1)
    }
  }

  return (
    <div className='border w-64 h-96'>
      <Link href={`/products/${category}/${id}`}>
        <Image
          src={image}
          alt={`${name} image`}
          width='288'
          height='288'
          title='Check product details'
          className='cursor-pointer hover:opacity-70 transition-all'
        />
      </Link>
      <h2 className='pt-3'>
        <span>{name.toUpperCase()}</span>
        <span className='text-slate-400 italic font-extralight'>
          {' '}
          - Stock: {stock}
        </span>
      </h2>
      <p className='pt-3'>U$S {price}</p>
      <div className='pt-3 w-full flex justify-evenly items-center'>
        {quantity === 0 ? (
          <button className='border w-28 h-8' onClick={plusQuantity}>
            Add to cart
          </button>
        ) : (
          <>
            <Button sign='-' updateQuantity={minusQuantity} />
            <span>{quantity}</span>
            <Button sign='+' updateQuantity={plusQuantity} />
          </>
        )}
      </div>
    </div>
  )
}
