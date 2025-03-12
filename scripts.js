
// 📌 Fix: Search Icon Toggle
document.addEventListener("DOMContentLoaded", function () {
    const searchIcon = document.querySelector(".search-icon");
    const searchBar = document.querySelector(".search-bar");

    searchIcon.addEventListener("click", function () {
        if (searchBar.style.display === "none" || searchBar.style.display === "") {
            searchBar.style.display = "block"; // Show search bar
        } else {
            searchBar.style.display = "none"; // Hide search bar
        }
    });
});
document.getElementById("searchBar").addEventListener("keyup", function () {
    let searchQuery = this.value.toLowerCase();
    let scholarships = document.querySelectorAll(".scholarship-container");

    scholarships.forEach((scholarship) => {
        let title = scholarship.getAttribute("data-title").toLowerCase();
        
        if (title.includes(searchQuery)) {
            scholarship.style.display = "block"; // Show matching scholarships
        } else {
            scholarship.style.display = "none"; // Hide non-matching scholarships
        }
    });
});

 
function autoRotateLogo() {
    const logo = document.querySelector('.logo');
    let rotation = 0;

    setInterval(() => {
        rotation = (rotation + 180) % 360; // Rotates 180 degrees every 5s
        logo.style.transform = `rotate(${rotation}deg)`;
    }, 5000);
}

// Start the automatic rotation when the page loads
window.onload = autoRotateLogo;




    // Add event listeners to all "See More" buttons
    document.querySelectorAll('.see-more-btn').forEach(button => {
        button.addEventListener('click', function() {
            // Find the hidden content within the same scholarship-details container
            const moreDetails = this.closest('.scholarship-details').querySelector('.more-details');
            
            // Toggle visibility of the hidden content
            moreDetails.classList.toggle('show');
            
            // Change the button text based on visibility
            this.textContent = moreDetails.classList.contains('show') ? 'See Less ⬆️' : 'See More ⬇️';
        });
    });







    // Function to switch sections
function switchSection(page) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });

    // Show the selected section
    let activeSection = document.querySelector(`.section[data-page="${page}"]`);
    if (activeSection) {
        activeSection.classList.add('active');
    }
}

// Add event listeners to navigation links
document.querySelectorAll('.nav-item').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default link behavior
        let page = this.getAttribute('data-page'); // Get the page key
        switchSection(page); // Switch to the corresponding section
    });
});

// Show the home section by default
switchSection('home');
