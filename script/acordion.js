// Control del acordeón
const headers = document.querySelectorAll('.accordion-header');

headers.forEach(header => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;
    const isOpen = content.classList.contains('open');
    
   header.classList.toggle('active');

    // Cerrar todos
    document.querySelectorAll('.accordion-content').forEach(c => {
      c.style.maxHeight = null;
      c.classList.remove('open');
    });

    // Abrir el clickeado si estaba cerrado
    if (!isOpen) {
      content.style.maxHeight = content.scrollHeight + 'px';
      content.classList.add('open');
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
