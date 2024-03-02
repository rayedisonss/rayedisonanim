import { Canvas } from '@react-three/fiber'
import React from 'react'
import { Experience } from '../components/Experience'
import { Header } from '../components/Header'
import { CardGroup } from '../components/CardsShoes/CardGroup'
import { CarouselProduct } from '../components/Carousel/CarouselProduct'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { CarouselNews } from '../components/Carousel/CarouselNews'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
    const navigate = useNavigate()
    return (
        <>
            <Navbar top={true} />
            <Canvas camera={{
                fov: 64,
                position: [2.3, 1.5, 2.3]
            }}>
                <Experience />
            </Canvas>

            <Header title={"Trending"} />
            <CardGroup />

            <Header title={"Some Product"} />
            <CarouselProduct />

            <Header title={"Lihat Semua"} />
            <div className="container mx-auto flex justify-center">
                <button className="btn btn-primary" onClick={() => navigate('/allproducts')}>More</button>
            </div>

            <Footer />

        </>
    )
}
