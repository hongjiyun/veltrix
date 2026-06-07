document.addEventListener('DOMContentLoaded', () => {
  const langContainers = document.querySelectorAll('.lang_container');

  langContainers.forEach((container) => {
    const langBtn = container.querySelector('.lang_btn');
    if (!langBtn) return;

    langBtn.addEventListener('click', (e) => {
      e.preventDefault();
      container.classList.toggle('active');
    });
  });

  document.addEventListener('click', (e) => {
    langContainers.forEach((container) => {
      if (!container.contains(e.target)) {
        container.classList.remove('active');
      }
    });
  });

  // menu
  const menuBtn = document.querySelector('.menu_img');
  const headerNav = document.querySelector('.header_nav');

  menuBtn.addEventListener('click', function(e) {
    e.preventDefault();
    headerNav.classList.toggle('active');
  });

});

const topBtn = document.querySelector('.top_btn');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        topBtn.classList.add('show');
    } else {
        topBtn.classList.remove('show');
    }
});