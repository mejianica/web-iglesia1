gsap.registerPlugin(ScrollToPlugin);

// Selecciona todos los enlaces dentro del header y footer 
document.querySelectorAll('header a, .btn a, footer a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    // Obtén el destino del desplazamiento del atributo href del enlace
    const target = document.querySelector(this.getAttribute('href'));

    if (target) {
      // Desplaza la ventana hacia el destino con un desplazamiento suave
      gsap.to(window, {
        scrollTo: { y: target, offsetY: 65 }, 
        duration: 0.8,
        ease: "power2.out"
      });
    }
  });
});

