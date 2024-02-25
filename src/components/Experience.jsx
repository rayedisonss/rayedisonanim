import { OrbitControls, ScrollControls } from "@react-three/drei";
import { Office } from "./Office";
import { Overlay } from "./Overlay";
import { TigaSepatu } from "./TigaSepatu";
import { Card } from "./CardsShoes/Card";
import WebGL from 'three/addons/capabilities/WebGL.js';


export const Experience = () => {


    return (
        <>

            {/* Cahaya */}

            <ambientLight intensity={2} />




            {/* Kontrol Mouse seperti blender */}
            {/* INI Pengecekan apabila device atau Web nya support atau tidak */}
            {WebGL.isWebGLAvailable() ?
                <OrbitControls enableZoom={false} />
                // null
                :
                null

            }





            {/* Scroll control 3 halaman, jadi untuk mengatur berapa halaman yang bisa kita scroll */}
            <ScrollControls pages={3} damping={.3}  >

                {/* <Navbar /> */}


                <Overlay />

                {/* Assets 3D */}

                <TigaSepatu />
                {/* <Office /> */}

            </ScrollControls>


        </>
    )
}
