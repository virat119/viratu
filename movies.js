
function searchMovies() {
    const searchTerm = document.getElementById("searchInput").value.toLowerCase().trim(); // Get the search term from input and remove extra spaces
    const resultsContainer = document.getElementById("results"); // Get the results container
    resultsContainer.innerHTML = ''; // Clear previous results

    // Get all folders
    const folders = document.querySelectorAll('.folder');

    let moviesData = []; // Store all movies data
    let foundMovies = [];

    // Loop through each folder and collect all movie data
    folders.forEach(folder => {
        const movies = folder.querySelectorAll('.movie-card');
        
        movies.forEach(movie => {
            const movieTitle = movie.querySelector('.movie-title') ? movie.querySelector('.movie-title').textContent.toLowerCase().trim() : '';
            const movieCard = movie;  // The movie card element

            moviesData.push({ title: movieTitle, card: movieCard }); // Store movie data in the array
        });
    });

    // Initialize Fuse.js with fuzzy search options
    const options = {
        includeScore: true, // Include score in result (lower score is more similar)
        threshold: 0.3, // Adjust threshold for fuzziness (lower is more strict)
        keys: ['title'] // Only search in the title
    };

    const fuse = new Fuse(moviesData, options); // Create Fuse instance with data and options
    foundMovies = fuse.search(searchTerm); // Perform the fuzzy search

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
