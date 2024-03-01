import React from 'react'
import { Navbar } from '../components/Navbar'
import { ModelShoes } from '../components/Product/ModelShoes'
import { Canvas } from '@react-three/fiber'
import { useNavigate } from 'react-router-dom'


export const ProductViewer = () => {
    const navigate = useNavigate();
    return (
        <>
            <Navbar top={true} />
            <Canvas >

                <ModelShoes />
            </Canvas>
            <div className="container mx-auto flex justify-center absolute bottom-10">
                <button className="btn btn-primary" onClick={() => navigate('/product')}>Kembali</button>
            </div>
        </>
    )
}
