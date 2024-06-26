/* eslint-disable react/no-unknown-property */
import { useSpring, animated, useInView, config } from "@react-spring/web"
import { useState } from "react"
import Image from "./CardComponents/Image";
import Tags from "./CardComponents/Tags";
import TitleDescription from "./CardComponents/TitleDescription";
import GithubButton from "./CardComponents/GithubButton";

export default function ProjectCard({ name, description, image, tags, repo, deploy }) {

    const [ref, inViewSpring] = useInView(() => ({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: config.molasses
    }))

    const [hover, setHover] = useState(false)

    const cardSprings = useSpring({
        backgroundColor: hover ? 'rgba(255, 255, 255, 0.02)' : 'rgba(255, 255, 255, 0.00)',
        boxShadow: hover ? '0 4px 30px rgba(0, 0, 0, 0.05)' : '0 4px 30px rgba(0, 0, 0, 0.0)',
        webkitBackdropFilter: hover ? 'blur(2.3px)' : 'blur(0px)',
        border: hover ? '1px solid rgba(255, 255, 255, 0.02)' : '1px solid rgba(255, 255, 255, 0.00)',
        config: config.stiff,
    })

    return (
        <animated.div ref={ref} class=" h-fit my-3 hover:shadow-2xl xl:p-6 rounded-md xl:shadow-inner" onMouseOver={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{ ...cardSprings, ...inViewSpring }}>

            <div class="xl:flex xl:pb-2">

                <TitleDescription name={name} description={description} />

                <div class='xl:order-first xl:w-2/6 my-5 xl:my-0 w-44'>
                    <Image imageRef={image} deploy={deploy} />
                    <div class="xl:w-48 flex">
                        <GithubButton repo={repo} />
                    </div>
                </div>
            </div>

            <Tags tags={tags} />

        </animated.div>
    )
}