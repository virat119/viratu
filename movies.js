function searchMovies() {
    const searchTerm = document.getElementById("searchInput").value.toLowerCase().trim(); // Get the search term, trim extra spaces and convert to lowercase
    const resultsContainer = document.getElementById("results"); // Get the results container
    resultsContainer.innerHTML = ''; // Clear previous results

    // Get all folders
    const folders = document.querySelectorAll('.folder');

    let foundMovies = [];
    
    // Loop through each folder to check for movie name match
    folders.forEach(folder => {
        const movies = folder.querySelectorAll('.movie-card');
        
        movies.forEach(movie => {
            const movieTitle = movie.querySelector('.movie-title').textContent.toLowerCase().trim(); // Clean up movie title (remove spaces, convert to lowercase)
            
            // If movie title matches the search term, add to results
            if (movieTitle.includes(searchTerm)) {
                foundMovies.push(movie.cloneNode(true)); // Clone matched movie and add to results array
            }
        });
    });

    // Display search results
    if (foundMovies.length === 0) {
        resultsContainer.innerHTML = '<p>No movies found. Please try a different search.</p>';
    } else {
        foundMovies.forEach(movie => {
            resultsContainer.appendChild(movie); // Add each matched movie to the results container
        });
    }
}
