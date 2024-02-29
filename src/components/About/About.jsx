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

    const [data, setData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            let data = await getContactInfo();
            setData(data[0]);
        };

        fetchData();
    }, [])

    function copyToClipboard() {



        // Copy the text inside the text field
        navigator.clipboard.writeText(data?.email_adress);

        // Alert the copied text
        alert(data?.email_adress + " - COPIED TO CLIPBOARD");
    }


    return (
        <div className="p-7 lg:pt-20">
            <animated.h1 style={styles} className="text-4xl font-bold my-3 text-stone-200/95 lg:text-5xl">Nahuel Retamoso</animated.h1>
            <animated.h2 style={styles} className="font-semibold text-stone-200/80 text-lg mb-3 font-medium lg:text-xl">Programador Fullstack</animated.h2>
            <animated.div style={styles} className="h-40 pt-10 lg:pt-2 lg:h-24 lg:pr-10">
                <TypeAnimation
                    sequence={[
                        'Hola, este mi portafolio 👋. Vivo en Buenos Aires, Argentina 📌. Te invito a ver mis projectos personales con los que estuve practicando. Cada uno cuentan con deploy y link a su repo de github.',
                        3000,
                        'Tengo conocimientos fullstack, uso javascript. Me enfoco principalmente en el frontend usando React.', // Types 'One'
                        3000, // Waits 1s
                        'Inicié a programar de manera autodidacta y posteriormente perfeccioné mis habilidades a través del curso de React y Backend en Coderhouse.', // Deletes 'One' and types 'Two'
                        3000, // Waits 2s
                        'Amplie mi experiencia mediante la práctica y el aprendizaje de diversas librerías y herramientas, las cuales he aplicado en proyectos personales.',
                        3000, // Types 'Three' without deleting 'Two'
                        'Si mi perfil es de su interes o desea mas detalles sobre mi experiencia, estoy disponible para cualquier consulta.',
                        3000,
                    ]}
                    wrapper="span"
                    deletionSpeed={88}
                    speed={78}
                    cursor={true}
                    repeat={Infinity}
                    className="text-white/50 text-md font-extralight bg-white/5"
                />
            </animated.div>
            <animated.div style={styles} class="w-full aspect-[4/3] border-zinc-2 lg:w-5/6">
                <KeyboardScene />
            </animated.div>
            <animated.div style={styles} className="mt-10 flex space-x-10 lg:mt-20 lg:pl-2 text-stone-200/80">
                <a href={data?.github_profile_url} target="_blank">
                    <FaGithub class="h-9 w-9" />
                </a>
                <a href={data?.linkedin_profile_url} target="_blank">
                    <FaLinkedin class="h-9 w-9" />
                </a>
                <a onClick={() => copyToClipboard()} target="_blank">
                    <MdEmail class="h-9 w-9" />
                </a>
                <a href="https://drive.google.com/file/d/1oFgpnhb61djCqb6p5b5FG7gaVCO6JWd4/view?usp=sharing" target="_blank">
                    <MdOutlineContactPage class="h-9 w-9" />
                </a>
            </animated.div>
        </div>
    )
}