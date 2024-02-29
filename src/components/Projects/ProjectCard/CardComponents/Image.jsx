import { config, useSpring, animated } from "@react-spring/web";
import { useEffect, useState } from "react";
import {client} from '../../../../sanity.js'
import imageUrlBuilder from '@sanity/image-url'
import { TbWorld } from "react-icons/tb";

export default function Image({ imageRef, deploy }) {

    const [imageHover, setImageHover] = useState(false)


    const imageSprings = useSpring({
        scale: imageHover ? 1.02 : 1,
        config: config.stiff
    })

    const backgroundSpring = useSpring({
        backgroundColor: imageHover ? 'rgba(0, 0, 0, 0.2)' : 'rgba(0, 0, 0, 0.0)',
        // border: imageHover ? '2px solid rgba(255,255,255,0.3)' : '0px solid rgba(255,255,255,0.0)',
        boxShadow: imageHover ? '0px 0px 15px 1px rgba(0,0,0,0.41)' : '0px 0px 0px 0px rgba(0,0,0,0.0)',
        config: config.stiff
    })

    const deployIconSpring = useSpring({
        color: imageHover ? 'rgba(255, 255, 255, 0.6)' : 'rgba(255, 255, 255, 0.0)',
        config: config.molasses
    })

    const builder = imageUrlBuilder(client)

    function urlFor(source) {
        return builder.image(source)
    }

    const [imageUrl, setImageUrl] = useState('')

    useEffect(() => {
        const url = urlFor(imageRef)
        setImageUrl(url)
    }, [])

    return (
        <a href={deploy} target="_blank">
            <animated.div onMouseEnter={() => setImageHover(true)} onMouseLeave={() => setImageHover(false)} class="flex justify-center items-center  w-full h-28  rounded-md bg-local bg-cover" style={{ ...imageSprings, backgroundImage: `url(${imageUrl})`, ...deployIconSpring }}>
                <animated.div class='h-full w-full flex items-center justify-center z-10' style={{ ...backgroundSpring }}>
                    <TbWorld class='h-10 w-10' />
                </animated.div>
            </animated.div>
        </a>
    )
}