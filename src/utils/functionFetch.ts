

export default async function getFilters(route: string) {
    const typesFetch = fetch(`${process.env.URL_API}/${route}`, {
        headers: { "content-type": "application/json" },
        method: "GET",
    })
        .then((response) => response.json())
    // console.log(typesFetch);
    return typesFetch;
}