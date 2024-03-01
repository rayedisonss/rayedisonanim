import React from 'react'
import { CarouselView } from '../components/Product/CarouselView'
import { Navbar } from '../components/Navbar'
import { Description } from '../components/Product/Description'
import { CardPrice } from '../components/Product/CardPrice'
import { Rating } from '../components/Product/Rating'
import { Comment } from '../components/Product/Comment'
import { CarouselProduct } from '../components/Carousel/CarouselProduct'
import { Footer } from '../components/Footer'

export const Product = () => {
    return (
        <>
            <div className='bg-white flex flex-col justify-center'>

                <Navbar />
                <div className="container mx-auto ">

                    <div className=" ">

                        <div className='pt-4 px-4 flex gap-5 text-color-primary sm:flex-nowrap flex-wrap flex container  justify-center'>
                            <CarouselView />
                            <Description />
                            <CardPrice />
                        </div>

                    </div>
                    <br />
                    <div className="flex flex-col justify-center ">
                        <div className=' flex gap-5 text-color-primary sm:flex-nowrap flex-wrap  '>

                            <Rating />
                            <Comment />
                        </div>

                    </div>
                    <div className="flex flex-col justify-center text-center">

                        <h2 className='text-3xl font-bold p-6 mb-3'>Lainnya</h2>
                        <CarouselProduct />

                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}
