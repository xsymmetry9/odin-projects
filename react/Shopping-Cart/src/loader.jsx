export async function loader(){
    const data = await fetch('https://fakestoreapi.com/products', {mode: "cors"})
    .then((response) => response.json())

    return data;
}