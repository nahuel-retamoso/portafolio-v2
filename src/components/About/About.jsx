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
            <animated.h1 style={styles} className="text-4xl font-bold my-3 text-stone-200/95 2xl:text-5xl">Nahuel Retamoso</animated.h1>
            <animated.h2 style={styles} className="font-semibold text-stone-200/80 text-lg mb-3 font-medium 2xl:text-xl">Programador Fullstack</animated.h2>
            <animated.div style={styles} className="h-40 pt-10 lg:pt-2 lg:h-24 lg:pr-10">
                <style>
                    {`
        .responsive-text {
          font-size: 16px;
        }
        @media (min-width: 1024px) {
          .responsive-text {
            font-size: 1.3vw;
          }
        }
        @media (min-width: 1280px) {
          .responsive-text {
            font-size: 16px;
          }
        }
        @media (min-width: 1536px) {
          .responsive-text {
            font-size: 16px;
          }
        }
      `}
                </style>
                <TypeAnimation
                    sequence={[
                        1000,
                        'Hola, este mi portafolio 👋. Vivo en Buenos Aires, Argentina 📌. Te invito a ver mis proyectos personales con los que estuve practicando. Cada uno cuentan con deploy y link al repo de GitHub.',
                        4000,
                        'Soy programador full-stack, uso JavaScript. Aunque por ahora me estoy centrando más en el front-end, usando React; me gustaría continuar aprendiendo más del back-end.',
                        4000,
                        'Inicié a programar de manera autodidacta y posteriormente realicé el curso de React y back-end con Node.js en Coderhouse.',
                        4000,
                        'Amplíe mi experiencia mediante la práctica y el aprendizaje de diversas librerías y herramientas, aplicándolas en mis proyectos personales.',
                        4000,
                        'No dudes en comunicarte conmigo si pensás que podría ayudar en tu proyecto o si deseas más detalles sobre mi experiencia. Estoy abierto para cualquier consulta.',
                        4000,
                    ]}
                    wrapper="span"
                    deletionSpeed={88}
                    speed={78}
                    cursor={true}
                    repeat={Infinity}
                    // style={{ 'fontSize': '1vw' }}
                    className="responsive-text text-white/50 font-extralight bg-white/5"
                />
            </animated.div>
            <animated.div style={styles} class="w-full aspect-[4/3] border-zinc-2 lg:w-4/6 xl:w-5/6">
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
                <a href={data?.cvlink} target="_blank">
                    <MdOutlineContactPage class="h-9 w-9" />
                </a>
            </animated.div>
        </div>
    )
}