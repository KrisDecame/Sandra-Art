export const getData = async (link) => {
    const data = await (await fetch(link)).json();
    return data;
}