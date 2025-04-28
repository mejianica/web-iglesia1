let parrafo = document.getElementById('phrase-text');
let autor = document.getElementById('author');
// Array de frases 
const frases = [
    "La justicia es la constante y perpetua voluntad de dar a cada uno lo que le corresponde.",
    "El derecho es la base sobre la que se construye la libertad.",
    "Donde no hay justicia, no hay paz.",
    "El derecho no es más que la voluntad general que procura el bienestar de todos.",
    "La verdadera justicia es la que nunca hace distinción entre los poderosos y los débiles.",
    "En la vida, como en la ley, la verdad siempre prevalecerá.",
    "La justicia no consiste en dar a cada uno lo que merece, sino lo que necesita.",
    "La justicia no es un acto, es una virtud que debe guiar todos nuestros actos.",
    "No hay mayor justicia que defender lo que es justo, aunque el precio sea alto.",
    "El derecho de una persona a ser escuchada es el primer paso hacia la justicia."
];
// Array de autores correspondientes
const autores = [
    "Domingo de Soto",
    "Jean-Jacques Rousseau",
    "Anónimo",
    "John Locke",
    "Thomas Jefferson",
    "Anónimo",
    "Platon",
    "Anónimo",
    "Martin Luther King Jr.",
    "Anónimo"
];

function fraseAleatoria(){
    let indiceAleatorio = Math.floor(Math.random() * frases.length);
    return indiceAleatorio;
}
 let i = fraseAleatoria();
parrafo.textContent = frases[i];
autor.textContent = autores[i];