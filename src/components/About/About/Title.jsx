import { config, useSpring, animated } from "@react-spring/web"

function Title() {

    const styles = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: config.molasses
    })

    return (
        <div className='flex flex-col items-center lg:items-start'>
            <animated.h1 style={styles} className="text-4xl font-bold my-1 text-stone-200/95 2xl:text-5xl">Nahuel Retamoso</animated.h1>
            <animated.h2 style={styles} className="font-normal text-stone-200/80 text-lg font-medium 2xl:text-xl">Programador Fullstack</animated.h2>
        </div>
    )
}

export default Title;