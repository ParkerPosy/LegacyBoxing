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

  const coursesButton = navList.querySelector("li.group > button");
  const dropdownLinks = navList.querySelectorAll<HTMLAnchorElement>("li.group div a");

  const activeDropdownLink = Array.from(dropdownLinks).find((link) => {
    const linkPath = new URL(link.href).pathname;
    // Check if the link is a course page and matches the current path
    return linkPath.startsWith("/pages/courses/") && linkPath === currentPath;
  });

  if (activeDropdownLink) {
    // Highlight the specific active course link in the dropdown
    activeDropdownLink.classList.add("underline", "text-boxing-red");

    // Also highlight the main "Courses" button
    if (coursesButton) {
      coursesButton.classList.add("text-boxing-red");
    }
  }
});