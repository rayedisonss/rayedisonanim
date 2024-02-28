import { OrbitControls, ScrollControls } from "@react-three/drei";
import { Overlay } from "./Overlay";
import { TigaSepatu } from "./TigaSepatu";

import WebGL from 'three/addons/capabilities/WebGL.js';
import { ThreeShoes } from "./3DModels/ThreeShoes";



export const Experience = () => {


    return (
        <>

            {/* Cahaya */}

            <ambientLight intensity={5} />




            {/* Kontrol Mouse seperti blender */}
            {/* INI Pengecekan apabila device atau Web nya support atau tidak */}
            {/* {WebGL.isWebGLAvailable() ? <OrbitControls enableZoom={false} /> : null} */}





            {/* Scroll control 3 halaman, jadi untuk mengatur berapa halaman yang bisa kita scroll */}
            <ScrollControls pages={3} damping={.3}  >

                {/* <Navbar /> */}


                <Overlay />

                {/* Assets 3D */}


                <ThreeShoes />
                {/* <TigaSepatu /> */}
                {/* <Office /> */}

            </ScrollControls>


        </>
    )
}
