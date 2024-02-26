import { TypeAnimation } from 'react-type-animation';
import { useSpring, animated, config } from "@react-spring/web"
import KeyboardScene from './3dModel/KeyboardScene';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdOutlineContactPage } from "react-icons/md";
import { getContactInfo } from '../../sanity';
import { useEffect, useState } from 'react';

export default function About() {

    const styles = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: config.molasses
    })

    const [ data, setData ] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            let data = await getContactInfo();
            setData(data[0]);
            // console.log(data[0].github_profile_url); // Ten en cuenta que este log puede no reflejar inmediatamente los cambios en 'projects' debido a la naturaleza asincrónica de setState.
        };
    
        fetchData();
    },[])

    
    return (
        <div className="p-7 lg:pt-20">
            <animated.h1 style={styles} className="text-4xl font-bold my-3 text-stone-200 lg:text-5xl">Nahuel Retamoso</animated.h1>
            <animated.h2 style={styles} className="font-semibold text-stone-300 text-lg mb-3 font-medium lg:text-xl">Programador Fullstack</animated.h2>
            <animated.div style={styles} className="h-40 pt-10 lg:pt-2 lg:h-24 lg:pr-10">
                <TypeAnimation
                    sequence={[
                        'Soy un desarrollador javascript fullstack. Me enfoco principalmente en el frontend usando React y Next.', // Types 'One'
                        2000, // Waits 1s
                        'Realice el curso de React y Backend en Coderhouse. Ademas estuve practicando y aprendiendo nuevas librerias y herramientas con mis projectos personales.', // Deletes 'One' and types 'Two'
                        2000, // Waits 2s
                        'Te invito a ver algunos de ellos en la seccion de projectos, mas abajo.',
                        2000, // Types 'Three' without deleting 'Two'
                        () => {
                            console.log('Sequence completed');
                        },
                    ]}
                    wrapper="span"
                    deletionSpeed={88}
                    speed={78}
                    cursor={true}
                    repeat={Infinity}
                    className="text-white/50 text-md font-extralight bg-white/5"
                />
            </animated.div>
            <animated.div style={styles} class="w-full aspect-[4/3] border-zinc-2 lg:w-4/6">
                <KeyboardScene />
            </animated.div>
            <animated.div style={ styles } className="mt-10 flex space-x-10 lg:mt-28 lg:pl-2 text-white/60">
                <a href={data?.github_profile_url} target="_blank">
                    <FaGithub class="h-9 w-9" />
                </a>
                <a href={data?.linkedin_profile_url} target="_blank">
                <FaLinkedin class="h-9 w-9" />
                </a>
                <a href={data?.email_adress} target="_blank">
                <MdEmail class="h-9 w-9" />
                </a>
                <a href={data?.curriculum} target="_blank">
                <MdOutlineContactPage class="h-9 w-9" />
                </a>
            </animated.div>
        </div>
    )
}