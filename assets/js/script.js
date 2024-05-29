const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.navbar-link');
  const pages = document.querySelectorAll('[data-page]');

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      const targetPage = link.getAttribute('data-nav-link');

      // Remove 'active' class from all navbar links and pages
      navLinks.forEach(nav => nav.classList.remove('active'));
      pages.forEach(page => page.classList.remove('active'));

      // Add 'active' class to the clicked navbar link and corresponding page
      link.classList.add('active');
      document.querySelector(`[data-page="${targetPage}"]`).classList.add('active');
    });
  });
});
// Get the modal
var modal = document.getElementById("imageModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var modalImg = document.getElementById("modalImage");

// Add click event to all images with class "image-link"
document.querySelectorAll('.image-link').forEach(item => {
  item.addEventListener('click', function (event) {
    event.preventDefault();
    modalImg.src = this.querySelector('img').src;
    modal.style.display = "block"; // Ensure it's set to block before adding the class
    setTimeout(() => {
      modal.classList.add("show");
    }, 10); // Slight delay to allow display property to be set
  });
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.classList.remove("show");
  setTimeout(function () {
    modal.style.display = "none";
  }, 400); // Match this duration with the CSS transition duration
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.classList.remove("show");
    setTimeout(function () {
      modal.style.display = "none";
    }, 400); // Match this duration with the CSS transition duration
  }
}
// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });

// Get references to the button and contact information elements
const showContactsBtn = document.getElementById('showContactsBtn');
const contactInfo = document.getElementById('contactInfo');

// Add click event listener to the button
showContactsBtn.addEventListener('click', function() {
  // Toggle the visibility of the contact information
  if (contactInfo.classList.contains('visible')) {
    contactInfo.classList.remove('visible');
    showContactsBtn.querySelector('span').textContent = 'Show Contacts'; // Update button text
    showContactsBtn.querySelector('ion-icon').setAttribute('name', 'chevron-down'); // Update button icon
  } else {
    contactInfo.classList.add('visible');
    showContactsBtn.querySelector('span').textContent = 'Hide Contacts'; // Update button text
    showContactsBtn.querySelector('ion-icon').setAttribute('name', 'chevron-up'); // Update button icon
  }
});