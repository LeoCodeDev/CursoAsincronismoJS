import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1'

function updateData(urlApi, data){
    const update = fetch(urlApi, {
        method: 'PUT',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'Application/json'
        },
        body: JSON.stringify(data)
    })
    return update
}

const data = {
    category: {"id":6,"name":"Tools","image":"https://www.truevalue.com/media/magefan_blog/workshop-tools-table-board-840x560-75.jpg"}
}

updateData(`${API}/products/238`,data)
    .then(result => result.json())
    .then(result => console.log(result))
    .catch(err => console.error(err))