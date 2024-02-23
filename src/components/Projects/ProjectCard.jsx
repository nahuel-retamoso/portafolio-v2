import { useSpring, animated, useInView, config } from "@react-spring/web"
import { useEffect, useState } from "react"

export default function ProjectCard() {

    const [ ref, inViewSpring ] = useInView(() => ({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: config.molasses
    }))

    const [hover, setHover] = useState(false)

    const cardSprings = useSpring({
        scale: hover ? 1.02 : 1,
        backgroundColor: hover ? 'rgba(255, 255, 255, 0.03)' : 'rgba(255, 255, 255, 0.00)',
        boxShadow: hover ? '0 4px 30px rgba(0, 0, 0, 0.1)' : '0 4px 30px rgba(0, 0, 0, 0.0)',
        backdropFilter: hover ? 'blur(2.3px)' : 'blur(0px)',
        webkitBackdropFilter: hover ? 'blur(2.3px)' : 'blur(0px)',
        border: hover ? '1px solid rgba(255, 255, 255, 0.02)' : '1px solid rgba(255, 255, 255, 0.00)',
})

    const imageSprings = useSpring({
        scale: hover ? 1.02 : 1,
        skew: hover ? '-1deg, -1deg' : '0deg, 0deg'
    })

useEffect(() => {

}, [])

return (
    <animated.div ref={ref} class=" h-fit my-3 hover:shadow-2xl lg:p-6 rounded-md lg:shadow-inner" onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{ ...cardSprings, ...inViewSpring}}>
        <div class="lg:flex lg:pb-2">
            <div class='w-4/6 lg:pl-5'>
                <h3 class="mb-2 text-white/90 font-medium">Titulo generico de projecto</h3>
                <p class="text-sm font-extralight text-white/80">Descripcion generica de un projecto de frontend para el portafolio de nahuel retamoso desarrollador fullstack</p>
            </div>
            <animated.div class="lg:order-first w-44 h-28 bg-slate-400 rounded-sm my-5 lg:my-0 lg:w-2/6" style={{...imageSprings}}>

            </animated.div>
        </div>
        <div class="flex-wrap col flex space-x-2 py-3 lg:py-0 lg:pl-48 lg:mb-0">
            <div class="rounded-xl bg-green-800/30 w-fit px-3 mb-2">
                <text class="text-xs font-medium text-green-300/70">React</text>
            </div>
            <div class="rounded-xl bg-green-800/30 w-fit px-3 mb-2">
                <text class="text-xs font-medium text-green-300/70">GraphQl</text>
            </div>
            <div class="rounded-xl bg-green-800/30 w-fit px-3 mb-2">
                <text class="text-xs font-medium text-green-300/70">Zustand</text>
            </div>
            <div class="rounded-xl bg-green-800/30 w-fit px-3 mb-2">
                <text class="text-xs font-medium text-green-300/70">Typescript</text>
            </div>
        </div>
    </animated.div>
)
}