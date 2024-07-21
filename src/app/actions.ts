
import { IFilter } from "@/models/intefaces/all";
import { revalidateTag, unstable_cache } from "next/cache";




export async function revalidateTagAction(tag: string) {
    revalidateTag(tag);
}

export async function getFilters({ route, tag }: IFilter) {
    try {
        const filter = await fetch(`${process.env.URL_API}/${route}`, {
            next: {
                tags: tag,
                revalidate: 60,

            }
        });
        if (!filter.ok) {
            return { message: 'falha ao obter dados' }
        }
        console.log(filter.json())
        return filter.json();
    } catch (error) {
        throw new Error(`erro ao obter dados: ${error}`);
    }
}

export async function fetchFilter({ route, keys, tag }: IFilter) {
    const getFilter = unstable_cache(
        async () => getFilters({ route: route, tag: tag }),
        keys,
        {
            revalidate: 60,
            tags: tag
        }
    )
    //console.log(getFilter);
    return getFilter;
}

const types = getFilters({
    route: "get-types",
    keys: ["types"],
    tag: ["types"],
});

console.log('teste', types)