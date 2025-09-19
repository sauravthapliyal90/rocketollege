document.addEventListener("DOMContentLoaded", function() {
  // Select all company logo links inside the clients section
  document.querySelectorAll('#clients .col-2-3 > a').forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      // You can customize modal content here if you want
      document.getElementById('modalContent').innerHTML = '<p>More information about this University coming soon!</p>';
      document.getElementById('companyModal').style.display = 'flex';
    });
  });

  // Close modal on X click or background click
  document.getElementById('closeModal').onclick = function() {
    document.getElementById('companyModal').style.display = 'none';
  };
  document.getElementById('companyModal').onclick = function(e) {
    if (e.target === this) this.style.display = 'none';
  };
}); 