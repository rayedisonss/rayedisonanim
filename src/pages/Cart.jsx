import React from 'react'
import { CardCart } from '../components/Cart/CardCart'
import { Navbar } from '../components/Navbar'
import { PriceCart } from '../components/Cart/PriceCart'
import { Footer } from '../components/Footer'

export const Cart = () => {
    return (
        <>
            <Navbar />
            <div className='bg-white h-full'>
                <h1 className='text-center text-3xl p-9'>Keranjang</h1>
                <div className="flex md:flex-row flex-col">
                    <CardCart />
                    <div className="flex justify-center">
                        <PriceCart />

                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}
