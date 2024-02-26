/* eslint-disable react/no-unknown-property */
import { useSpring, animated, useInView, config } from "@react-spring/web"
import { useEffect, useState } from "react"
import imageUrlBuilder from '@sanity/image-url'
import { client } from "../../sanity"
import { TbWorld } from "react-icons/tb";
import { MdArrowOutward } from "react-icons/md";

export default function ProjectCard({ name, description, image, tags, repo, deploy }) {

    const [ref, inViewSpring] = useInView(() => ({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: config.molasses
    }))

    const [hover, setHover] = useState(false)
    const [imageHover, setImageHover] = useState(false)

    const cardSprings = useSpring({
        // scale: hover ? 1.01 : 1,
        backgroundColor: hover ? 'rgba(255, 255, 255, 0.03)' : 'rgba(255, 255, 255, 0.00)',
        boxShadow: hover ? '0 4px 30px rgba(0, 0, 0, 0.1)' : '0 4px 30px rgba(0, 0, 0, 0.0)',
        // backdropFilter: hover ? 'blur(2.3px)' : 'blur(0px)',
        webkitBackdropFilter: hover ? 'blur(2.3px)' : 'blur(0px)',
        border: hover ? '1px solid rgba(255, 255, 255, 0.02)' : '1px solid rgba(255, 255, 255, 0.00)',
    })

    const imageSprings = useSpring({
        scale: imageHover ? 1.02 : 1,
        
    })

    const deployIconSpring = useSpring({
        color: imageHover ? 'rgba(255, 255, 255, 0.6)' : 'rgba(255, 255, 255, 0.0)',
        config: config.molasses
    })

    const backgroundSpring = useSpring({
        backgroundColor: imageHover ? 'rgba(0, 0, 0, 0.2)' : 'rgba(0, 0, 0, 0.0)',
        // border: imageHover ? '2px solid rgba(255,255,255,0.3)' : '0px solid rgba(255,255,255,0.0)',
        boxShadow: imageHover ? '0px 0px 15px 1px rgba(0,0,0,0.41)' : '0px 0px 0px 0px rgba(0,0,0,0.0)',
        config: config.molasses
    })


    useEffect(() => {

    }, [])

    const builder = imageUrlBuilder(client)

    function urlFor(source) {
        return builder.image(source)
    }

    const [imageUrl, setImageUrl] = useState('')

    useEffect(() => {
        const url = urlFor(image)
        setImageUrl(url)
    }, [])

    return (
        <animated.div ref={ref} class=" h-fit my-3 hover:shadow-2xl lg:p-6 rounded-md lg:shadow-inner" onMouseOver={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{ ...cardSprings, ...inViewSpring }}>



            <div class="lg:flex lg:pb-2">
                <div class='w-4/6 lg:pl-5'>
                    <h3 class="mb-2 text-white/90 font-medium">{name}</h3>
                    <p class="text-sm font-extralight text-white/80">{description}</p>
                </div>



                <div class='lg:order-first lg:w-2/6 my-5 lg:my-0 w-44'>

                    <a href={deploy} target="_blank">
                    <animated.div onMouseEnter={() => setImageHover(true)} onMouseLeave={() => setImageHover(false)} class="flex justify-center items-center  w-full h-28  rounded-md bg-local bg-cover" style={{ ...imageSprings, backgroundImage: `url(${imageUrl})`, ...deployIconSpring }}>
                        <animated.div class='h-full w-full flex items-center justify-center z-10' style={{ ...backgroundSpring}}>
                            <TbWorld class='h-10 w-10' />
                        </animated.div>
                    </animated.div>
                    </a>


                    <div class="lg:w-48 flex">
                        <a href={repo} target="_blank" class='flex justify-center items-center text-white/30 bg-white/5 rounded-md p-1 w-fit h-fit mt-3'>
                            <p class='text-sm font-normal pr-1'>Github repository</p>
                            <MdArrowOutward />
                        </a>
                    </div>

                </div>



            </div>

            <div class="flex-wrap col flex space-x-2 py-3 lg:py-1 lg:mb-0">
                {tags.map((tag, key) => {
                    return (
                        <div key={key} class="rounded-xl bg-green-800/10 w-fit px-3 mb-2">
                            <text class="text-xs font-medium text-green-200/30">{tag}</text>
                        </div>
                    )
                })}
            </div>

        </animated.div>
    )
}