function searchMovies() {
    const searchTerm = document.getElementById("searchInput").value.toLowerCase().trim(); // Get the search term from input and remove extra spaces
    const resultsContainer = document.getElementById("results"); // Get the results container
    resultsContainer.innerHTML = ''; // Clear previous results

    // Get all movie cards
    const moviesData = [];

    // Get all folders
    const folders = document.querySelectorAll('.folder');

    folders.forEach(folder => {
        const movies = folder.querySelectorAll('.movie-card');
        
        movies.forEach(movie => {
            const movieTitle = movie.querySelector('.movie-title') ? movie.querySelector('.movie-title').textContent.toLowerCase().trim() : '';
            const movieCard = movie; // The movie card element

            // Add movie data to array
            moviesData.push({ title: movieTitle, card: movieCard });
        });
    });

    // Initialize Fuse.js with fuzzy search options
    const options = {
        includeScore: true, // Include score in result (lower score is more similar)
        threshold: 0.3, // Adjust threshold for fuzziness (lower is more strict)
        keys: ['title'] // Search only in the title
    };

    const fuse = new Fuse(moviesData, options); // Create Fuse instance with data and options
    const foundMovies = fuse.search(searchTerm); // Perform the fuzzy search

    // Display search results
    if (foundMovies.length === 0) {
        resultsContainer.innerHTML = '<p>No movies found.</p>';
    } else {
        foundMovies.forEach(result => {
            const matchedMovie = result.item.card; // Get matched movie card
            resultsContainer.appendChild(matchedMovie); // Add matched movie to the results container
        });
    }
}
