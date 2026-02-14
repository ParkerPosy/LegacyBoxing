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

document.addEventListener("DOMContentLoaded", function () {
  const currentPath = window.location.pathname;
  const navList = document.querySelector("#mobile-menu ul");
  if (!navList) return;

  const navLinks = navList.querySelectorAll<HTMLAnchorElement>("li > a");
  navLinks.forEach((link) => {
    const linkPath = new URL(link.href).pathname;
    if (linkPath === "/" && currentPath === "/") {
      link.classList.add("underline", "text-boxing-red");
      return;
    }
    if (linkPath !== "/" && currentPath.startsWith(linkPath)) {
      link.classList.add("underline", "text-boxing-red");
    }
  });

  // Handle all dropdown groups (Courses and More)
  const dropdownGroups = navList.querySelectorAll<HTMLElement>("li.group");
  dropdownGroups.forEach((group) => {
    const groupLabel = group.querySelector("label");
    const groupLinks = group.querySelectorAll<HTMLAnchorElement>("div a");

    const activeLink = Array.from(groupLinks).find((link) => {
      const linkPath = new URL(link.href).pathname;
      return linkPath !== "/" && currentPath.startsWith(linkPath);
    });

    if (activeLink) {
      activeLink.classList.add("underline", "text-boxing-red");
      if (groupLabel) {
        groupLabel.classList.add("text-boxing-red");
      }
    }
  });
});