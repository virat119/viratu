
        // Function to show additional download links
        function showAdditionalLinks(event) {
            event.preventDefault(); // Prevent default link action (since it's a placeholder link)
            
            // Get the parent div of the clicked button and then show the hidden download links
            var parentDiv = event.target.closest('.movie-details');
            var additionalLinks = parentDiv.querySelector('.additional-links');
            
            // Toggle the display of the additional links
            if (additionalLinks.style.display === 'none' || additionalLinks.style.display === '') {
                additionalLinks.style.display = 'block';
            } else {
                additionalLinks.style.display = 'none';
            }
        }

        // Function to handle "Check All Links"
        function checkAllLinks() {
            alert('All links are working!');
        }
    
