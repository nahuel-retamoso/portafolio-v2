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
        <div className="flex flex-col lg:justify-between lg:h-full p-7 lg:py-20">
            <div>
                <div className='flex flex-col items-center lg:items-start'>
                <animated.h1 style={styles} className="text-4xl font-bold my-1 text-stone-200/95 2xl:text-5xl">Nahuel Retamoso</animated.h1>
                <animated.h2 style={styles} className="font-light text-stone-200/80 text-lg font-medium 2xl:text-xl">Programador Fullstack</animated.h2>
                </div>
                <div className='h-40 mt-10 lg:mt-16 lg:h-40 lg:w-4/6 xl:w-5/6 border border-black/50 overflow-hidden rounded-md'>
                    <div className='h-9 bg-[#2c3133] flex items-center'>
                        <div className='w-1/6'>

                        </div>
                        <div className='justify-center flex w-4/6'>
                            <p className='text-xs'>computer@nahuel-desk: ~</p>
                        </div>
                        <div className='rounded-full w-1/6 text-[10px] flex justify-end p-3'>X</div>
                    </div>
                    <animated.div style={styles} className=" bg-[#232729] h-full px-1">
                        <style>
                            {`
            .responsive-text {
            font-size: 12px;
            }
            @media (min-width: 1024px) {
            .responsive-text {
                font-size: 1.3vw;
            }
            }
            @media (min-width: 1280px) {
            .responsive-text {
                font-size: 12px;
            }
            }
            @media (min-width: 1536px) {
            .responsive-text {
                font-size: 13px;
            }
            }
        `}
                        </style>
                        <TypeAnimation
                            sequence={[
                                1000,
                                'Hola! soy Nahuel, este mi portafolio 👋. Vivo en Buenos Aires, Argentina 📌. Te invito a ver mis proyectos personales. Cada uno cuentan con deploy y link al repo de GitHub.',
                                4000,
                                'Inicié a programar de manera autodidacta usando javascript y aprendiendo conceptos. Luego realicé el curso de React y back-end con Node.js en Coderhouse.',
                                4000,
                                'Con mis proyectos personales aprendi a usar diversas librerias y herramientas. Manejo de estados, animaciones e implementar APIs',
                                4000,
                                'Abajo vas a encontrar links a mi perfil de github, linkedin, email y CV.',
                                5000,
                                'Podes hacer click en el teclado de abajo! no te vayas sin haberlo probado 🖱️ 👇',
                                5000
                            ]}
                            wrapper="span"
                            deletionSpeed={88}
                            speed={78}
                            cursor={true}
                            repeat={Infinity}
                            // style={{ 'fontSize': '1vw' }}
                            className="responsive-text text-white font-light"
                        />
                    </animated.div>
                </div>
                <animated.div style={styles} class="w-full aspect-[4/3] border-zinc-2 lg:w-4/6 xl:w-5/6">
                    <KeyboardScene />
                </animated.div>
            </div>

            <animated.div style={styles} className="mt-10 flex justify-between px-5 lg:px-0 lg:mt-16 lg:w-4/6 xl:w-5/6 text-stone-200/80">
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