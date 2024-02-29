import { config, useSpring, animated } from "@react-spring/web";
import ProjectCard from "./ProjectCard/ProjectCard.jsx";
import { useEffect, useState } from "react";
import {getProjects} from "../../sanity.js";

export default function Projects () {

    const styles = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: config.molasses
    })

    const [ data, setData ] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            let data = await getProjects();
            setData(data);
            console.log(data); // Ten en cuenta que este log puede no reflejar inmediatamente los cambios en 'projects' debido a la naturaleza asincrónica de setState.
        };
    
        fetchData();
    },[])

    return (
        <animated.div style={styles} class="m-7">
            <h2 class="text-md font-bold text-stone-200/80 mb-10 lg:ml-6">PROJECTOS</h2>
            {data?.map((project, key) => {
                return (<ProjectCard key={key} name={project.project_name} description={project.project_description} image={project.project_image} tags={project.project_tags} deploy={project.deploy_link} repo={project.repo_link}/>)
            })}
        </animated.div>
    )
}