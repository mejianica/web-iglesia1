const photos = document.getElementById('photoTrack');
const images = document.querySelectorAll('.photos img');
const imageWidth = 700;
let index = 0;

function slide() {
    index++;
    photos.style.transition = 'transform 0.5s ease-in-out';
    photos.style.transform = `translateX(-${index * imageWidth}px)`;

    // cuando llega a la imagen duplicada (última), saltamos sin animación
    if (index === images.length - 1) {
        setTimeout(() => {
            photos.style.transition = 'none';
            photos.style.transform = 'translateX(0)';
            index = 0;
        }, 500); // tiempo igual a la duración de la transición
    }
}

setInterval(slide, 5000);