import { config, useSpring, animated } from "@react-spring/web";
import ProjectCard from "./ProjectCard";

export default function Projects () {

    const styles = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: config.molasses
    })

    return (
        <animated.div style={styles} class="m-7">
            <h2 class="text-md font-bold text-white/80 mb-10 lg:ml-6">PROJECTOS</h2>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
        </animated.div>
    )
}