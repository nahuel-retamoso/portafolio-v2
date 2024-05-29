export default function TitleDescription ({ name, description }) {
    return (
        <div class='w-4/6 lg:w-full xl:pl-5'>
            <h3 class="mb-2 text-stone-200/90 font-medium">{name}</h3>
            <p class="text-sm font-extralight text-stone-200/85">{description}</p>
        </div>
    )
}