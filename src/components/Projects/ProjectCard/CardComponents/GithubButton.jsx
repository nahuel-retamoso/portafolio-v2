import { MdArrowOutward } from "react-icons/md";

export default function GithubButton({repo}) {
    return (
        <a href={repo} target="_blank" class='flex justify-center items-center text-white/30 bg-white/5 rounded-md p-1 w-fit h-fit mt-3'>
            <p class='text-sm font-normal pr-1'>Github repository</p>
            <MdArrowOutward />
        </a>
    )
}