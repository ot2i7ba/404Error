// Wait for the DOM to fully load before executing the script
document.addEventListener('DOMContentLoaded', function() {
  // Get the "Go Back" link element by its ID
  var goBackLink = document.getElementById('go-back-link');
  // Check if the "Go Back" link element exists
  if (goBackLink) {
    // Add a click event listener to the "Go Back" link element
    goBackLink.addEventListener('click', function(event) {
      // Prevent the default link behavior
      event.preventDefault();
      // Check if the browser supports the history API
      if (window.history && window.history.back) {
        // Navigate back to the previous page
        window.history.back();
      }
    });
  }
});
