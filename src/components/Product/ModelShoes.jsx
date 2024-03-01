import React from 'react'
import { OrbitControls } from '@react-three/drei'
import { Mesh, BoxGeometry, MeshNormalMaterial } from 'three'
import { MyShoes } from '../3DModels/MyShoes'
import { Navbar } from '../Navbar'

// import { BoxGeometry } from 'three'

export const ModelShoes = () => {
    return (
        <>

            <ambientLight intensity={5} />
            {/* <ambientLight intensity={5} /> */}
            <OrbitControls />

            <MyShoes />
        </>
    )
}
