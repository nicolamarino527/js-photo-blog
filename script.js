// Milestone 1
// Sfruttando gli screen e gli asset in allegato riproduciamo la grafica proposta in maniera statica: 
// utilizzando soltanto HTML e CSS e riproducendo una singola fotografia (usiamo una qualunque immagine a piacimento)

// Milestone 2
// Utilizzando Postman, testiamo una chiamata a questo endpoint:
// https://lanciweb.github.io/demo/api/pictures/

// Studiamo bene la risposta e i dati che ci fornisce iniziando a pensare a come poterli sfruttare.
// Milestone 3

// Inseriamo il JavaScript ed effettuiamo una chiamata AJAX all’API, sfruttando la risposta per generare
//  dinamicamente in pagina una serie di foto!
// Bonus
// rendi la pagina responsive, in modo che su mobile e tablet le foto si dispongano man mano una sotto l’altra
//  ed il titolo abbia una dimensione adeguata



// scriviamo le variabili
const endPoint = 'https://lanciweb.github.io/demo/api/pictures/';

let  photoList = document.getElementById("photo-container");
let photo ="";
// console.log(title);

// for (let i = 0; i < title.length; i++) {
//   title[i].innerHTML = `<span class="date">00-00-00</span>`;
// }
// // console.log(endPoint);

axios.get(endPoint)

    .then(response => {
        const data = response.data;

        for (let i = 0; i < data.length; i++){
            let dataNames = data[i];
            const {id, title, date, url} = dataNames;  
            photo = `<div class="photo">
                        <img class="pin" src="./img/pin.svg" alt="">
                        <img class="img" scr="${url}" alt="photo">
                        <div class="photo-text">
                            <span class="date">${date}</span>
                            <h2 class="title">${title}</h2>
                        </div>
                    </div>`

            photoList.innerHTML += photo;
            console.log(photo);
            
            
        }
        
    })
    .catch(error => {
        console.error(error)
        
    })

    
    
    
   