// import fetch from "node-fetch"
// const API = 'https://api.escuelajs.co/api/v1'

// async function fetchData(urlApi){
//     const response = await fetch(urlApi)
//     const data = await response.json()
//     return data
// }

// async function* getProduct(urlApi){
//     try {
//         const products = await fetchData(`${urlApi}/products`)
//         yield console.log(products[10])
//         const product = await fetchData(`${urlApi}/products/${products[10].id}`)
//         yield console.log(product.title)
//         const category = await fetchData(`${urlApi}/categories/${product?.category.id}`)
//         yield console.log(category.name)
//     } catch (err) {
//         console.log(err)
//     }
// }

// const gP = getProduct(API)

// gP.next()
// gP.next()
// gP.next()

//Platzi-Async
//Author: @marigabirodcue
//Date: 01/07/2022

import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";
const urlApi = API;

//Declaración de fetchData como la función del Generador
async function* fetchData(url) {
  const response = await fetch(url);
  yield await response.json();
}

//Llamadas con el método next() en el objeto del Generador usando .then() y manipulando value y done
fetchData(`${urlApi}/products`)
  .next()
  .then(({ value, done }) => {
    console.log(value); //Imprime la lista de los Productos de la API

    const idProduct = value[0].id; //Extrae el id del producto que queremos manipular

    console.log(
      `Copiame: ${urlApi}/products/${idProduct} y pegame en el navegador`
    );

    fetchData(`${urlApi}/products/${idProduct}`)
      .next()
      .then(({ value, done }) => {
        console.log(value.title); //Imprime el Título del producto solicitado

        const idCategory = value.category.id;

        fetchData(`${urlApi}/categories/${idCategory}`)
          .next()
          .then(({ value, done }) => {
            console.log(value.name); //Imprime el nombre de la categoría del producto seleccionado
          });
      });
  });
