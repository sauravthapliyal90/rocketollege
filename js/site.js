"use strict";

$(document).ready(function () {
	/* Video Lightbox */
	if (!!$.prototype.simpleLightboxVideo) {
		$('.video').simpleLightboxVideo();
	}

	/*ScrollUp*/
	if (!!$.prototype.scrollUp) {
		$.scrollUp();
	}

	// Copy menu only once on DOMContentLoaded
	if ($('#nav-main').length && $('#nav-mobile').length && $('#nav-mobile').is(':empty')) {
		$("#nav-mobile").html($("#nav-main").html());
	}

	/* Sticky Navigation */
	if (!!$.prototype.stickyNavbar) {
		$('#header').stickyNavbar();
	}

	$('#content').waypoint(function (direction) {
		if (direction === 'down') {
			$('#header').addClass('nav-solid fadeInDown');
		}
		else {
			$('#header').removeClass('nav-solid fadeInDown');
		}
	});

});

document.addEventListener('DOMContentLoaded', function() {
  // Burger menu copy
  var navMain = document.getElementById('nav-main');
  var navMobile = document.getElementById('nav-mobile');
  if (navMain && navMobile && navMobile.innerHTML.trim() === '') {
    navMobile.innerHTML = navMain.innerHTML;
  }

  // Modal popup for .show-popup links
  var modal = document.getElementById('customModal');
  var modalText = document.getElementById('customModalText');
  var closeBtn = document.querySelector('.custom-modal-close');

  if (modal && modalText && closeBtn) {
    document.querySelectorAll('a.show-popup').forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        var img = link.querySelector('img');
        modalText.textContent = 'More Information about this University is coming soon!';
        modal.style.display = 'flex';
      });
    });
    closeBtn.addEventListener('click', function() {
      modal.style.display = 'none';
    });
    window.addEventListener('click', function(e) {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  }
});


/* Preloader and animations */
$(window).load(function () { // makes sure the whole site is loaded
	$('#status').fadeOut(); // will first fade out the loading animation
	$('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
	$('body').delay(350).css({'overflow-y': 'visible'});

	/* WOW Elements */
	if (typeof WOW == 'function') {
		new WOW().init();
	}

	/* Parallax Effects */
	if (!!$.prototype.enllax) {
		$(window).enllax();
	}

	// Smooth scroll for menu links

});
