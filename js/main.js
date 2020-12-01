let contenido = document.querySelector(".content-qr");

const data = [{
  "id":"1",
  "image":"https://www.mexicoenfotos.com/MX14946377748241.jpg",
  "title":"Fuente las tarascas",
  "description":"Fuente de bronce con 3 mujeres sujetando un cuenco de fruta, esculpida por José Luis Padilla Retana en 1984."
},{
  "id":"2",
  "image":"https://acueductoonline.com/wp-content/uploads/2019/05/Encendido-de-la-Catedral-moreliainvita-2.jpg",
  "title":"Catedral de morelia",
  "description":"La catedral de Morelia es un recinto religioso sede de la arquidiócesis de Morelia de la Iglesia católica en México. Se encuentra ubicada como su nombre propiamente lo dice en la ciudad de Morelia"
},{
  "id":"3",
  "image":"https://rinconpoeticoloyola.files.wordpress.com/2014/05/06-acueducto-de-morelia-06.jpg",
  "title":"Acueducto de morelia",
  "description":"El acueducto de Morelia es uno de los acueductos más importantes de México localizado en la ciudad conocida entonces como Valladolid, y ahora como Morelia"
}]

document.addEventListener("DOMContentLoaded", event => {
    let scanner = new Instascan.Scanner({ video: document.getElementById('preview') });
    Instascan.Camera.getCameras().then(cameras => {
      scanner.camera = cameras[cameras.length - 1];
      scanner.start();
    }).catch(e => console.error(e));
  
    scanner.addListener('scan', content => {
      for (let index = 0; index < data.length; index++) {
        const element = data[index];
        const key = data[index].id;
        console.log("contenido: "+content);
        console.log("key: "+key);
        if (content == key) {
          contenido.innerHTML = `<div class="card card-scan mt-3">
          <div class="bg-image hover-overlay ripple" data-ripple-color="light">
            <img src="${element.image}" class="img-fluid" />
            <a href="#">
              <div class="mask" style="background-color: rgba(251, 251, 251, 0.15)"></div>
            </a>
          </div>
          <div class="card-body">
            <h5 class="card-title">${element.title}</h5>
            <p class="card-text">
              ${element.description}
            </p>
          </div>

        </div>`
        }
      }


    });
  
  });
  

  
