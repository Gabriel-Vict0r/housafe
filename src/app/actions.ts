
import { IFilter, IType } from "@/models/intefaces/all";
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
            },
        });
        const filters = filter.json();
        console.log(filters);
        return filters;
    } catch (error: any) {
        throw new Error(`erro ao obter dados: ${error.message}`);
    }
}

export async function fetchFilter({ route, keys, tag }: IFilter) {
    const getFilter = unstable_cache(
        async () => await getFilters({ route: route, tag: tag }),
        keys,
        {
            revalidate: 60,
            tags: tag
        }
    )
    return getFilter();
}