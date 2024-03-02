import { ScrollControls } from "@react-three/drei";
import { Overlay } from "./Overlay";
import { ThreeShoes } from "./3DModels/ThreeShoes";



export const Experience = () => {


    return (
        <>

            {/* Cahaya */}
            <ambientLight intensity={5} />

            {/* Scroll control 3 halaman, jadi untuk mengatur berapa halaman yang bisa kita scroll */}
            <ScrollControls pages={3} damping={.3}  >
                <Overlay />
                {/* Assets 3D */}
                <ThreeShoes />
            </ScrollControls>


        </>
    )
}
