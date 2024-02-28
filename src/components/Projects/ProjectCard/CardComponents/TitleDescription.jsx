export default function TitleDescription ({ name, description }) {
    return (
        <div class='w-4/6 lg:pl-5'>
            <h3 class="mb-2 text-white/90 font-medium">{name}</h3>
            <p class="text-sm font-extralight text-white/80">{description}</p>
        </div>
    )
}