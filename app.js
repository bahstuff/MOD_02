//// PRÁCTICA:

// var hotel = {
//     name: "Domine",
//     location: "Bilbao centro, junto al museo Guggenheim.",
//     img: "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/itemimages/15/20/152021_v7.jpeg",
// };

// document.getElementById("name-hotel").innerHTML = "Hotel " + hotel.name;
// document.getElementById("location-hotel").innerHTML = "Ubicado en " + hotel.location;
// document.getElementById("img-hotel").src = hotel.img;

//// puntuación usuario
// var opinion = prompt ("Puntua de 1 a 5 estrellas")
// document.getElementById("rating").innerHTML = opinion + " estrellas"

//// Reseña anónima
// var anonimous= confirm ("¿Quiere dejar la reseña de forma anónima?");
// document.getElementById("anonimous").checked = anonimous;




// OPCIONAL:
alert ("Bienvenido a RESEÑAS SOBRE HOTELES")

var hoteles = {

    Domine : {
        name: "Domine",
        location : "Bilbao centro, junto al museo Guggenheim.",
        img: "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/itemimages/15/20/152021_v7.jpeg",
        },

    Hesperia : {
        name : "Hesperia",
        location : "Bilbao centro. Con inmejorables vistas a la ría, frente al museo Guggenheim.",
        img : "https://media-cdn.tripadvisor.com/media/photo-s/1a/af/6d/a0/hesperia-bilbao.jpg",

    },
};

var userSelection = prompt ("¿De qué hotel desea hacer reseña: Domine o Hesperia?");
document.getElementById("name-hotel").innerHTML = "Hotel " + hoteles[userSelection].name;
document.getElementById("location-hotel").innerHTML = "Ubicado en " + hoteles[userSelection].location;
document.getElementById("img-hotel").src = hoteles[userSelection].img;

//STARS
var opinion = prompt ("Puntúa de una a cinco estrellas")

var stars = {
    una: "&#9733" + "&#9734" + "&#9734" + "&#9734" + "&#9734",
    dos: "&#9733" + "&#9733" + "&#9734" + "&#9734" + "&#9734",
    tres: "&#9733" + "&#9733" + "&#9733" + "&#9734" + "&#9734",
    cuatro: "&#9733" + "&#9733" + "&#9733" + "&#9733" + "&#9734",
    cinco: "&#9733" + "&#9733" + "&#9733" + "&#9733" + "&#9733",
};

document.getElementById("rating").innerHTML = "Puntuación: " + stars[opinion];


// OPINION ANONIMA
var anonimous= confirm ("¿Quiere dejar la reseña de forma anónima?");
document.getElementById("anonimous").checked = anonimous;
