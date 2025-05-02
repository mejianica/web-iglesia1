window.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.getElementById('menu-btn');
  
    if (menuBtn) {
      menuBtn.addEventListener('click', function () {
        menuBtn.classList.toggle('open');
      });
    }
  });
  