import React from 'react'
import { Navbar } from '../components/Navbar'
import { Sidebar } from '../components/Sidebar'
import { Footer } from '../components/Footer'
import { CardProduct } from '../components/allProduct/CardProduct'

export const AllProducts = () => {
    return (
        <>
            <div className='bg-white h-full'>
                <Navbar top={false} />
                <Sidebar />
                <CardProduct />
                <div className="container mx-auto flex justify-center">

                    <div className="join">
                        <button className="join-item btn-secondary btn btn-active">1</button>
                        <button className="join-item btn">2</button>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}
