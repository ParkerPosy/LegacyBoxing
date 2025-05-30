document.getElementById('menu-toggle')!.addEventListener('click', (event) => {
  const mobileMenu = document.getElementById('mobile-menu');
  mobileMenu!.classList.toggle('hidden');
  event.stopPropagation();
});

// Close menu when clicking outside of header
document.addEventListener('click', (event) => {
  const mobileMenu = document.getElementById('mobile-menu');
  const header = document.getElementById('legacy-boxing-header');

  if (mobileMenu && !mobileMenu.classList.contains('hidden') &&
    header && !header.contains(event.target as Node)) {
    mobileMenu.classList.add('hidden');
  }
});