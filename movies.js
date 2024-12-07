
// Array of Hollywood movies with their details
const hollywoodMovies = [
    { name: "Red One  Hindi Dubbed(2024) 1080p HD.mkv", url: "hollywood-movies.html", poster: "https://raw.githubusercontent.com/virat119/images/refs/heads/main/download (1).webp" },
    { name: "Deadpool & Wolverine (2024) 1080p HD.mkv", url: "hollywood-movies.html", poster: "https://raw.githubusercontent.com/virat119/images/refs/heads/main/696_resize2x_230x300.webp" },
    { name: "Kabir Singh", url: "hollywood-movies.html", poster: "kabir-singh-poster.jpg" }
];



// Array of Bollywood movies with their details
const bollywoodMovies = [
    { name: "Sabarmati  Hindi", url: "bollywood-movies.html", poster: "https://raw.githubusercontent.com/virat119/images/refs/heads/main/The-Sabarmati-Report-2.jpg" },
    { name: "The Dark Knight", url: "bollywood-movies.html", poster: "dark-knight-poster.jpg" },
    { name: "Avengers", url: "bollywood-movies.html", poster: "avengers-poster.jpg" }
];

// Array of South movies with their details
const southMovies = [
    { name: "Lucky Bhaskar Hindi Dubbed", url: "south-movies.html", poster: "https://raw.githubusercontent.com/virat119/images/refs/heads/main/Lucky_Baskhar_film_poster.jpg"" },
    { name: "Bagheera Hindi Dubbed", url: "south-movies.html", poster: "https://raw.githubusercontent.com/virat119/images/refs/heads/main/bagheera-2024-et00379650-1727337170.jpg" },
    { name: "Kanguwa HD Hindi", url: "south-movies.html", poster: "https://raw.githubusercontent.com/virat119/images/refs/heads/main/download.webp" }
{ name: "Pushpa Part 2 Hindi Dubbed", url: "south-movies.html", poster: "https://raw.githubusercontent.com/virat119/viratu/refs/heads/main/Images/MV5BZjllNTdiM2QtYjQ0Ni00ZGM1LWFlYmUtNWY0YjMzYWIxOTYxXkEyXkFqcGc%40._V1_QL75_UX328_.jpg" }
{ name: "Devara part1 hindi", url: "south-movies.html", poster: "https://raw.githubusercontent.com/virat119/images/refs/heads/main/628_resize2x_230x300.webp" }
{ name: "Martin  hindi", url: "south-movies.html", poster: "https://raw.githubusercontent.com/virat119/images/refs/heads/main/MV5BZjY3MTk3YzQtYjBhMC00N2FkLThiOTMtOWI2NmIxMDFhMDZhXkEyXkFqcGc@._V1_QL75_UX1640_.jpg" }
{ name: "RRR", url: "south-movies.html", poster: "rrr-poster.jpg" }




];

// Function to search for movies based on the user input
function searchMovies() {
    // Get the value from the search bar and trim any extra spaces
    const query = document.querySelector('.search-bar').value.trim().toLowerCase();
    
    // Get the div element where the search results will be displayed
    const resultsDiv = document.getElementById('results');
    
    // Clear any previous results
    resultsDiv.innerHTML = '';

    // Check if the input query is empty
    if (query === '') {
        return; // If no input is provided, do not proceed with the search
    }

    let results = []; // Array to store matching movie details

    // Loop through each movie array (Bollywood, Hollywood, South) to find matching movies
    [bollywoodMovies, hollywoodMovies, southMovies].forEach((movieArray) => {
        movieArray.forEach((movie) => {
            // Check if the movie name includes the search query (case-insensitive)
            if (movie.name.toLowerCase().includes(query)) {
                results.push(movie); // Add matching movie to the results array
            }
        });
    });

    // Display the results
    if (results.length > 0) {
        // Loop through each movie in the results and create an HTML element for each
        results.forEach((movie) => {
            const movieElement = document.createElement('div');
            movieElement.className = 'movie'; // Add a class for styling purposes
            movieElement.style.marginBottom = '15px'; // Add space between movie elements
            
            movieElement.innerHTML = `
                <div style="display: flex; align-items: center; margin-bottom: 10px;">
                    <img src="${movie.poster}" alt="${movie.name} poster" style="width: 100px; height: auto; margin-right: 15px; border-radius: 8px;">
                    <a href="${movie.url}" style="font-size: 18px; text-decoration: none; color: #333; font-weight: bold;">
                        ${movie.name}
                    </a>
                </div>
            `;

            // Append the created movie element to the results div
            resultsDiv.appendChild(movieElement);
        });
    } else {
        // Display a message if no matching movies are found
        resultsDiv.innerHTML = '<p style="font-size: 16px; color: #888;">No movies found. Please try a different search term.</p>';
    }
}
