export default function Tags({ tags }) {
    return (
        <div class="flex-wrap col flex py-3 lg:py-1 lg:mb-0">
            {tags.map((tag, key) => {
                return (
                    <div key={key} class="rounded-xl bg-green-800/10 w-fit px-3 mb-2 mr-3">
                        <text class="text-xs font-medium text-green-200/30">{tag}</text>
                    </div>
                )
            })}
        </div>
    )
}