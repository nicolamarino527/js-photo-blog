// ------------------------------------ Parte 1 ------------------------------------

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

// ------------------------------------ Parte 1 ------------------------------------

// Milestone 1
// Facciamo in modo di creare un overlay che copra l’intera pagina e all’interno,
// centrata, disponiamo un’immagine qualunque ed un button di chiusura.

// Milestone 2
// Facciamo sparire l’overlay con l’aiuto di una classe CSS che imposti il display: none .
// Dopodiché facciamo sì che cliccando una qualunque foto. L’overlay ricompaia.
// Cliccando invece il button di chiusura, l’overlay scompare nuovamente.

// Milestone 3
// Inseriamo il pezzo di logica finale: quando una foto viene cliccata, dobbiamo 
// fare in modo che sia proprio quella foto a essere mostrata all’interno dell’overlay.
// Ci sono diversi modi di farlo, prova a sperimentare :slightly_smiling_face:
// Bonus
// Spostandosi col mouse sopra le foto, queste si zoommano, ruotano di 10 gradi e 
// la loro ombra aumenta, il tutto in manierà fluida. Inoltre il mouse diventa un 
// puntatore, per far capire all’utente che può cliccare

// ---------------------------------------------------------------------------------

// Definiamo l'endpoint da cui recuperare i dati dell'API
const endPoint = 'https://lanciweb.github.io/demo/api/pictures/';

// Selezioniamo il contenitore HTML in cui verranno aggiunti gli elementi
let photoContainer = document.getElementById("photo-container");

// Creiamo una variabile vuota per poi successivamente aggiungere l'html da sostituire
let photo = "";

// Creiamo la variabile del bottone
const button = document.getElementById("button");

// Creiamo la variabile del'overlay
const overlay = document.getElementById("overlay");

// Variabile dell immagine dell overlay 
const overlayImage = document.getElementsByClassName("overlay-image");


const imageWindow = document.getElementById("image-window");

// Effettuiamo una chiamata GET all'endpoint utilizzando Axios
axios.get(endPoint)

    // In caso di successo della chiamata, gestiamo la risposta
    .then(response => {

        // Recuperiamo i dati dalla risposta
        const data = response.data;

        // Creiamo un ciclo per iterare su ogni oggetto dell'array `data`
        for (let i = 0; i < data.length; i++) {
            let dataNames = data[i];

            // Estrapoliamo i valori dall'oggetto corrente
            const { id, title, date, url } = dataNames;

            // Creiamo un blocco HTML da aggiungere in pagina
            let photo = `<div id="${id}" class="photo">
                        <img class="pin" src="./img/pin.svg" alt="">
                        <img class="img" src="${url}" alt="photo">
                        <div class="photo-text">
                            <span class="date">${date}</span>
                            <h2 class="title">${title}</h2>
                        </div>
                        </div>`;
            // Aggiungiamo il blocco HTML generato al contenitore `photo-container`
            photoContainer.innerHTML += photo;

            }
        })
                
    // In caso di errore nella richiesta, gestiamo l'errore
    .catch(error => {
        console.error(error); 
    });

// Creiamo la funzione che ci permette di chiudere l overlay al CLICK
function closeWindow() {
    overlay.classList.add("d-none");
};

button.addEventListener("click", (close) => {

        // Evitiamo che la pagina ricarichi
        close.preventDefault();
        console.log("close");
        
        // Aggiungiamo la classe display-none al contenitore dell overlay
        closeWindow();
});

//creiamo la funzione che ci permette di visualizzare le immagini nell'overlay al click 
photoContainer.addEventListener("click",(element) => {

    // Facciamo comparire la pagina di overlay al click sulla foto 
    overlay.classList.remove("d-none");
    
    
    if (element.target.classList.contains("img")) {
        const currentImage = element.target.src
        console.log(currentImage);

        let viewdImage = `<div><img src="${currentImage}" alt="" class="overlay-image"></img></div>`;
        imageWindow.innerHTML = viewdImage;
    }

    

});




// ___---_---_-__-_-_-_-_-_-_-_-__-_-_-_-_-___-_-_-_-_

//creiamo la funzione che ci permette di visualizzare le immagini nell'overlay al click 

// photoList.addEventListener("click",(element) => {
    
    
//     // Facciamo comparire la pagina di overlay al click sulla foto 
//     overlay.classList.remove("d-none");
    
//     // Aggiungiamo la foto cliccata per ogni immgane all' overlay
//     func
    


// });

// element.target.classList("img") = clickedElement


// let idNumber = 2;

// let student = students.filter(number => number.id === idNumber);
// console.log(student);