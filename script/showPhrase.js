let parrafo = document.getElementById('phrase-text');
let autor = document.getElementById('author');
// Array de frases 
const frases = [
    "Jehová es mi pastor, nada me faltará.",
    "El da esfuerzo al cansado, y multiplica las fuerzas al que no tiene ningunas.",
    "Lámpara es a mis pies tu palabra,y luz a mi camino.",
    "El que habita al abrigo del Altísimo. Morará bajo la sombra del Omnipotente.."
];
// Array de autores correspondientes
const autores = [
    "Salmo 23",
    "Isaias 40:29",
    "Salmo 119:105",
    "Salmo 91", 
];

function fraseAleatoria(){
    let indiceAleatorio = Math.floor(Math.random() * frases.length);
    return indiceAleatorio;
}
 let i = fraseAleatoria();
parrafo.textContent = frases[i];
autor.textContent = autores[i];