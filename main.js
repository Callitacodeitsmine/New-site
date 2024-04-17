function toggleMenu() {
  var menu = document.getElementById("menuItems");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}

document.querySelectorAll('.menu-item').forEach(link => {
  link.addEventListener('click', scrollToContent);
});

function scrollToContent(event) {
  event.preventDefault();
  const targetId = this.getAttribute('href').substring(1);
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    // Smooth scroll to the target element
    targetElement.scrollIntoView({ behavior: 'smooth' });
  }
}