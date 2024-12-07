// Bollywood movies array
const bollywoodMovies = [
    { name: "Dilwale", url: "bollywood-movies.html" },
    { name: "3 Idiots", url: "bollywood-movies.html" },
    { name: "Kabir Singh", url: "bollywood-movies.html" }
];

// Hollywood movies array
const hollywoodMovies = [
    { name: "Deadpool & Wolverine (2024) 1080p HD.mkv<", url: "hollywood-movies.html" },
    { name: "Red One  Hindi Dubbed(2024) 1080p HD.mkv", url: "hollywood-movies.html" },
    { name: "Avengers", url: "hollywood-movies.html" }
];

// South movies array
const southMovies = [
    { name: "Bahubali", url: "south-movies.html" },
    { name: "KGF", url: "south-movies.html" },
    { name: "RRR", url: "south-movies.html" }
];

// Search function
function searchMovies() {
    const query = document.querySelector('.search-bar').value.toLowerCase();
    let results = [];

    // Check in Bollywood, Hollywood, and South arrays
    [bollywoodMovies, hollywoodMovies, southMovies].forEach((movieArray) => {
        movieArray.forEach((movie) => {
            if (movie.name.toLowerCase().includes(query)) {
                results.push(movie);
            }
        });
    });

    // Display results
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; // Clear previous results
    if (results.length > 0) {
        results.forEach((movie) => {
            const movieElement = document.createElement('div');
            movieElement.innerHTML = `<a href="${movie.url}">${movie.name}</a>`;
            resultsDiv.appendChild(movieElement);
        });
    } else {
        resultsDiv.innerHTML = 'No movies found.';
    }
}
