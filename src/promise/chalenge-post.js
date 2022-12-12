import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1'

function postData(urlApi, data){
    const response = fetch(urlApi, {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'Application/json'
        },
        body: JSON.stringify(data)
    })
    return response
}

const categoryData = {
    "name": "Tools",
    "image": "https://www.truevalue.com/media/magefan_blog/workshop-tools-table-board-840x560-75.jpg"
  }

// const data = {
//     "title": "Vacum Pump",
//     "price": 470,
//     "description": "Vacum Pump to clean refrigeration systems and remove humidity",
//     "categoryId": 1,
//     "images": ["https://images.pexels.com/photos/2569839/pexels-photo-2569839.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"]
//   }

  postData(`${API}/categories`, categoryData)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.error(err))

    