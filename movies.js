
function searchMovies() {
    const searchTerm = document.getElementById("searchInput").value.toLowerCase().trim(); // Get the search term from input and remove extra spaces
    const resultsContainer = document.getElementById("results"); // Get the results container
    resultsContainer.innerHTML = ''; // Clear previous results

    // Get all folders
    const folders = document.querySelectorAll('.folder');

    let foundMovies = [];
    
    // Loop through each folder
    folders.forEach(folder => {
        const movies = folder.querySelectorAll('.movie-card');
        
        // Loop through each movie in the folder
        movies.forEach(movie => {
            const movieTitle = movie.querySelector('.movie-title').textContent.toLowerCase().trim(); // Get the movie title and normalize it
            const movieCard = movie; // The movie card itself

            // Check if the movie title contains the search term
            if (movieTitle.includes(searchTerm)) {
                foundMovies.push(movieCard.cloneNode(true)); // If matched, add to the results
            }
        });
    });

    // Display search results
    if (foundMovies.length === 0) {
        resultsContainer.innerHTML = '<p>No movies found.</p>';
    } else {
        foundMovies.forEach(movie => {
            resultsContainer.appendChild(movie); // Add matched movies to the results container
        });
    }
}
