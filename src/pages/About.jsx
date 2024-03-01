import React from 'react'
import { Hero } from '../components/About/Hero'
import { Navbar } from '../components/Navbar'
import { StatsData } from '../components/About/StatsData'
import { News } from '../components/About/News'
import { Contact } from '../components/About/Contact'
import { Footer } from '../components/Footer'


export const About = () => {
    return (
        <>
            <Navbar top={true} />
            <div className='bg-white flex flex-col justify-center'>

                <Hero />
                <div className="container mx-auto">
                    <div className="flex justify-center">

                        <StatsData />
                    </div>
                    <div className=" py-5"></div>
                </div>

                <div className="flex justify-center py-5">

                    <h2 className='mb-5 text-2xl sm:text-5xl font-bold'>Berita Terkini</h2>

                </div>
                <News />


                <div className="flex justify-center py-5">

                    <h2 className='mb-5 text-2xl sm:text-5xl font-bold'>Kontak </h2>

                </div>
                <div className="container mx-auto flex justify-center">

                    <div className="w-2/4">
                        <Contact />

                    </div>

                </div>
                <Footer />


            </div>
        </>
    )
}
