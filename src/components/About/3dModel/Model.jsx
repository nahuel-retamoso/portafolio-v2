import { useAnimations, useGLTF } from "@react-three/drei"
import { useEffect, useRef, useState } from "react"
import { useSpring, animated, config } from "@react-spring/three"

export default function Model() {

    const {scene, animations} = useGLTF("/keyboard/scene.gltf")
    const modelRef = useRef()
    const modelAnimations = useAnimations(animations, modelRef)
    const [ click, setClick ] = useState(false)
    
    //animations

    useEffect(() => {
        modelAnimations.actions.Animation.play()
    }, [modelAnimations])

    const animationSpeed = (x) => {
        modelAnimations.actions.Animation.setDuration(x);
    }
    
    useEffect(() => {
        if(click == true) {
            animationSpeed(1)
            setTimeout(() => {animationSpeed(3)}, "2000")
            setClick(false)
        }
    }, [click])

    const rotation = useSpring({ from: {rotation: 0.65, scale: 30}, to: {rotation: 1}, loop: { reverse: true,}, config: {
        mass: 25,
        friction: 56,
        tension: 40,
    } })

    const scale = useSpring({ from: { scale: 10}, to: { scale: 28}, config: config.molasses })


    const handleClick = () => {
        setClick(true)
    }


    return(
        <animated.mesh onDoubleClick={(e) => handleClick()} rotation-y={rotation.rotation} onClick={() => handleClick()} scale={scale.scale}  rotation-x={0.5}>
            <primitive ref={modelRef}  object={scene}/>
        </animated.mesh>
    )
}