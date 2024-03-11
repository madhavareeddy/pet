// Get all navigation links
const navLinks = document.querySelectorAll('nav a');
            
// Add click event listener to each navigation link
navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior

        // Save the clicked link in local storage
        const page = this.getAttribute('href').substring(2); // Extract page name from href attribute
        localStorage.setItem('lastClickedPage', page);

        // Redirect to the clicked page
        window.location.href = this.href;
    });
});