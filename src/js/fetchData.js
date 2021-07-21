export default async function fetchData(url, opts) {
    const response = await fetch(`${url}${opts}`);
    const info = await response.text();
    console.log(info);
}