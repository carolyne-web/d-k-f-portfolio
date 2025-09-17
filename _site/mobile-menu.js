// Mobile hamburger menu functionality
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.getElementById('hamburger');
  const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
  
  if (hamburger && mobileMenuOverlay) {
    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('active');
      mobileMenuOverlay.classList.toggle('active');
    });
  }
});