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