import { useSpring, animated, config } from "@react-spring/web"
import KeyboardScene from '../3dModel/KeyboardScene';
import Title from './Title';
import Buttons from './Buttons';
import Terminal from './Terminal';

export default function About() {

    const styles = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: config.molasses
    })


    return (
        <div className="flex flex-col lg:justify-between lg:h-full p-7 lg:py-20">
            <Title />
            <div>
                <Terminal />
                <Buttons />
                <animated.div style={styles} class="w-full aspect-[4/3] border-zinc-2 lg:w-4/6 xl:w-5/6">
                    <KeyboardScene />
                </animated.div>
            </div>
        </div>
    )
}