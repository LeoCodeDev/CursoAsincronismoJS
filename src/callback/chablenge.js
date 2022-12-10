const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest; //llamado al XmlHttpRequest
const API = "https://api.escuelajs.co/api/v1"; //API en mayúscula porque es una referencia que no va a cambiar

function fetchData(urlApi, callback) { //urlApi: no confundir y colocar API
  let xhttp = new XMLHttpRequest(); //se instancia un new XMLHttpRequest

  xhttp.open("GET", urlApi, true); // GET = peticion / urlApi, no confundir con API / se habilita con el valor true
  xhttp.onreadystatechange = function (event) { // mantiene escucha de los estados de ejecucion para capturar el estado necesitado.
    if (xhttp.readyState === 4) { // condiciona que solo se cumpla cuando estado se ha completado
      if (xhttp.status === 200) { // condiciona a que la respuesta sea con status 200, procesado correcto
        callback(null, JSON.parse(xhttp.responseText)); // SI se cumple la condicion, transformara la respuesta en JSSON para su posterior manipulacion.
      }
    } else {
      const error = new Error(`Error: ${urlApi}`); //Instancia y construccion del mensaje de error.
      return callback(error, null); // retornamos el error sin ifnormacion adicional, ya que no recibimos data
    }
  };
  xhttp.send();
}

fetchData(`${API}/products`, (error1,data1)=>{
    if(error1) return console.error(error1);
    fetchData(`${API}/products/${data1[0].id}`,(error2,data2)=>{
        if(error2) return console.error(error2);
        fetchData(`${API}/categories/${data2.category.id}`, (error3,data3)=>{
            if(error3) return console.error(error3);
            console.log(data1[0]);
            console.log(data2.title);
            console.log(data3.name);
        })
    })
})