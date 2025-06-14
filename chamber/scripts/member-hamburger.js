const toggle = document.getElementById('menu-toggle');
    const nav    = document.getElementById('primary-nav');

    toggle.addEventListener('click', () => {
      nav.classList.toggle('open');
      toggle.textContent = nav.classList.contains('open') ? '✕' : '☰';
      toggle.setAttribute('aria-label', nav.classList.contains('open') ? 'Close menu' : 'Open menu');
    });