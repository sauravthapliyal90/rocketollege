document.addEventListener('DOMContentLoaded', function() {
  var burger = document.querySelector('.burger');
  console.log("click");
  console.log(burger);
  
  var navMobile = document.getElementById('nav-mobile');
  if (burger && navMobile) {
    burger.addEventListener('click', function() {
      // console.log('clicked');
      navMobile.classList.toggle('open');
      // Ensure <ul> is visible
      var ul = navMobile.querySelector('ul');
      if (ul && navMobile.classList.contains('open')) {
        ul.style.display = 'block';
      }
    });
  }
  // Optional: Hide menu when clicking a menu item (for better UX)
  if (navMobile) {
    navMobile.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        navMobile.classList.remove('open');
      });
    });
  }
}); 





 const modal = document.getElementById('imageModal');
        const modalImg = document.getElementById('modalImage');
        const modalCaption = document.querySelector('.modal-caption');
        const closeBtn = document.querySelector('.close');

        // Get all images in the collage
        const images = document.querySelectorAll('.photo-slot img');

        // Add click event to each image
        images.forEach((img, index) => {
            img.addEventListener('click', function() {
                modal.style.display = 'block';
                modalImg.src = this.src;
                modalCaption.textContent = this.alt || `Photo ${index + 1}`;
            });
        });

        // Close modal when clicking the X
        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
        });

        // Close modal when clicking outside the image
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });

        // Close modal with Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && modal.style.display === 'block') {
                modal.style.display = 'none';
            }
        });