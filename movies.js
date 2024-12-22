
// Updated movieFolders structure with movies inside folders
const movieFolders = {
    "Bollywood": [
        { name: "Movie 1", url: "movie1.html", poster: "poster1.jpg" },
        { name: "Movie 2", url: "movie2.html", poster: "poster2.jpg" }
    ],
    "South": [
        { name: "Martin", url: "martin.html", poster: "martin_poster.jpg" },
        { name: "South Movie 2", url: "southmovie2.html", poster: "southmovie2.jpg" }
    ],
    "Hollywood": [
        { name: "Hollywood Movie 1", url: "hollywoodmovie1.html", poster: "hollywoodmovie1.jpg" },
        { name: "Hollywood Movie 2", url: "hollywoodmovie2.html", poster: "hollywoodmovie2.jpg" }
    ],
    "English": [
        { name: "English Movie 1", url: "englishmovie1.html", poster: "englishmovie1.jpg" },
        { name: "English Movie 2", url: "englishmovie2.html", poster: "englishmovie2.jpg" }
    ]
};

function searchMovies() {
    const searchTerm = document.getElementById("searchInput").value.toLowerCase();
    const resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = ''; // Clear previous results

    let foundMovies = [];

    // Loop through each folder and search for matching movies
    for (const folder in movieFolders) {
        const folderMovies = movieFolders[folder];
        const matchedMovies = folderMovies.filter(movie => movie.name.toLowerCase().includes(searchTerm));

        if (matchedMovies.length > 0) {
            matchedMovies.forEach(movie => {
                foundMovies.push(movie);
            });
        }
    }

    if (foundMovies.length === 0) {
        resultsContainer.innerHTML = '<p>No movies found.</p>';
    } else {
        foundMovies.forEach(movie => {
            const movieCard = document.createElement("div");
            movieCard.classList.add("movie-card");

            movieCard.innerHTML = `
                <img src="${movie.poster}" alt="${movie.name}">
                <div class="movie-details">
                    <div class="movie-title">${movie.name}</div>
                    <div class="buttons">
                        <a href="${movie.url}" class="watch-button">Watch Now</a>
                    </div>
                </div>
            `;

            resultsContainer.appendChild(movieCard);
        });
    }
                        }
