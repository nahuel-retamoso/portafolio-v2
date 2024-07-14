import { config, useSpring, animated } from "@react-spring/web";
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdOutlineContactPage } from "react-icons/md";
import { getContactInfo } from "../../../sanity";

function Buttons() {

    const styles = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: config.molasses
    })

    function copyToClipboard() {
        // Copy the text inside the text field
        navigator.clipboard.writeText(data?.email_adress);

        // Alert the copied text
        alert(data?.email_adress + " - COPIED TO CLIPBOARD");
    }

    const [data, setData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            let data = await getContactInfo();
            setData(data[0]);
        };

        fetchData();
    }, [])

    return (
        <animated.div style={styles} className="flex justify-between px-5 lg:w-4/6 xl:w-5/6 text-stone-400 lg:p-5">
            <a href={data?.github_profile_url} target="_blank">
                <FaGithub class="h-8 w-8" />
            </a>
            <a href={data?.linkedin_profile_url} target="_blank">
                <FaLinkedin class="h-8 w-8" />
            </a>
            <a onClick={() => copyToClipboard()} target="_blank">
                <MdEmail class="h-8 w-8" />
            </a>
            <a href={data?.cvlink} target="_blank">
                <MdOutlineContactPage class="h-8 w-8" />
            </a>
        </animated.div>
    )
}

export default Buttons;