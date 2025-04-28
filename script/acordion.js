const headers = document.querySelectorAll('.accordion-header');

headers.forEach(header => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;
    const isOpen = content.classList.contains('open');

    // Cerrar todos
    document.querySelectorAll('.accordion-content').forEach(c => {
      c.style.maxHeight = null;
      c.style.paddingTop = '0px';
      c.style.paddingBottom = '0px';
      c.classList.remove('open');
    });

    document.querySelectorAll('.accordion-header').forEach(h => {
      h.classList.remove('active');
    });

    // Abrir el clickeado si estaba cerrado
    if (!isOpen) {
      header.classList.add('active');
      content.classList.add('open');
      content.style.maxHeight = content.scrollHeight + 'px';
      content.style.paddingTop = '30px';
      content.style.paddingBottom = '30px';
    }
  });
});


// Botones "Ver más"
// const buttons = document.querySelectorAll('.btn-vermas');

// buttons.forEach(button => {
//   button.addEventListener('click', (e) => {
//     e.stopPropagation();

//     const extra = button.previousElementSibling;
//     const visible = extra.style.display === 'block';

//     if (visible) {
//       extra.style.display = 'none';
//       button.textContent = 'Ver más';
//     } else {
//       extra.style.display = 'block';
//       button.textContent = 'Ver menos';
//     }
//   });
// });
