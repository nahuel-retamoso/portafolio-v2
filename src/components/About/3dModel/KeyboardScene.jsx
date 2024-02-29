import { Canvas } from "@react-three/fiber";
import Model from "./Model";
import { Suspense } from "react";

export default function KeyboardScene() {

    return (
        <Canvas orthographic camera={{ zoom: 50, position: [0, 0, 100] }}>
            <Suspense>
                <ambientLight color="white" intensity={0.5} />
                <Model/>
                <directionalLight color={'white'}/>
            </Suspense>
        </Canvas>
    )
}
