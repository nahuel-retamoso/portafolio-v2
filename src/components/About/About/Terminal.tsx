import { config, useSpring, animated } from "@react-spring/web";
import { TypeAnimation } from "react-type-animation";

function Terminal() {

    const styles = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: config.molasses
    })

    return (
        <div className='h-40 mt-10 lg:mt-0 lg:h-48 lg:w-4/6 xl:w-5/6 border border-black/50 overflow-hidden rounded-md opacity-70'>
            <div className='h-9 bg-[#2c3133] flex items-center'>
                <div className='w-1/6'>

                </div>
                <div className='justify-center flex w-4/6'>
                    <p className='text-xs'>computer@nahuel-desk: ~</p>
                </div>
                <div className='rounded-full w-1/6 text-[10px] flex justify-end p-3'>X</div>
            </div>
            <animated.div style={styles} className=" bg-[#232729] h-full px-3">
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
                        'computer@nahuel-desk:~$ Hola! soy Nahuel, este mi portafolio 👋. Vivo en Buenos Aires, Argentina 📌. Te invito a ver mis proyectos personales. Cada uno cuentan con deploy y link al repo de GitHub.',
                        4000,
                        'computer@nahuel-desk:~$ Inicié a programar de manera autodidacta usando javascript y aprendiendo conceptos. Luego realicé el curso de React y back-end con Node.js en Coderhouse.',
                        4000,
                        'computer@nahuel-desk:~$ Con mis proyectos personales aprendi a usar diversas librerias y herramientas. Manejo de estados, animaciones e implementar APIs',
                        4000,
                        'computer@nahuel-desk:~$ Abajo vas a encontrar links a mi perfil de github, linkedin, email y CV.',
                        5000,
                        'computer@nahuel-desk:~$ Podes hacer click en el teclado de abajo! no te vayas sin haberlo probado 🖱️ 👇',
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
    )
}

export default Terminal;