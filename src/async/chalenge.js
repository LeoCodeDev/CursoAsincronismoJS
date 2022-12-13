import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1'

async function fetchtData(urlApi){
    const response = await fetch(urlApi)
    const data = await response.json()
    return data
}

const getProduct = async (urlApi) => {
    try {
        const products = await fetchtData(`${urlApi}/products`)
        const product = await fetchtData(`${urlApi}/products/${products[10].id}`)
        const category = await fetchtData(`${urlApi}/categories/${product?.category.id}`)

        console.log(products)
        console.log(product)
        console.table(category)
    } catch (error) {
        console.error(error)
    }
}

getProduct(API)