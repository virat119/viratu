
const hollywoodMovies = [
            { name: "Red One Hindi Dubbed(2024) 1080p HD.mkv", url: "hollywood-movies.html", poster: "https://raw.githubusercontent.com/virat119/images/refs/heads/main/download (1).webp" },
            { name: "Deadpool & Wolverine (2024) 1080p HD.mkv", url: "hollywood-movies.html", poster: "https://raw.githubusercontent.com/virat119/images/refs/heads/main/696_resize2x_230x300.webp" },
            { name: "Anora", url: "hollywood-movies.html", poster: "https://raw.githubusercontent.com/virat119/viratu/refs/heads/main/Images/mbZQsj9e5MmxLWsHdyew7di30aM.webp" }
        ];

        const bollywoodMovies = [
            { name: "Sabarmati Hindi", url: "bollywood-movies.html", poster: "https://raw.githubusercontent.com/virat119/images/refs/heads/main/The-Sabarmati-Report-2.jpg" },
            { name: "Bhool Bhulaiya 3 (2024) 720p WEB DL Hindi", url: "bollywood-movies.html", poster: "https://raw.githubusercontent.com/virat119/viratu/refs/heads/main/Images/MV5BYzBjYzM3OTctMzc3Yy00ZWQ0LWI2MzMtMGZjMTM4OGU1ZmI0XkEyXkFqcGc%40._V1_QL75_UX248_.jpg" },
            { name: "Singham Again", url: "bollywood-movies.html", poster: "https://raw.githubusercontent.com/virat119/viratu/refs/heads/main/Images/images (7).jpeg" }
        ];

        const southMovies = [
            { name: "Lucky Bhaskar Hindi Dubbed", url: "south-movies.html", poster: "https://raw.githubusercontent.com/virat119/images/refs/heads/main/Lucky_Baskhar_film_poster.jpg" },
            { name: "Bagheera Hindi Dubbed", url: "south-movies.html", poster: "https://raw.githubusercontent.com/virat119/images/refs/heads/main/bagheera-2024-et00379650-1727337170.jpg" },
            { name: "Kanguwa HD Hindi", url: "south-movies.html", poster: "https://raw.githubusercontent.com/virat119/images/refs/heads/main/download.webp" },
            { name: "Pushpa Part 2 Hindi Dubbed", url: "south-movies.html", poster: "https://raw.githubusercontent.com/virat119/viratu/refs/heads/main/Images/MV5BZjllNTdiM2QtYjQ0Ni00ZGM1LWFlYmUtNWY0YjMzYWIxOTYxXkEyXkFqcGc%40._V1_QL75_UX328_.jpg" },
            { name: "Devara part1 hindi", url: "south-movies.html", poster: "https://raw.githubusercontent.com/virat119/images/refs/heads/main/628_resize2x_230x300.webp" },
            { name: "Martin hindi", url: "south-movies.html", poster: "https://raw.githubusercontent.com/virat119/images/refs/heads/main/MV5BZjY3MTk3YzQtYjBhMC00N2FkLThiOTMtOWI2NmIxMDFhMDZhXkEyXkFqcGc@._V1_QL75_UX1640_.jpg" },
            { name: "RRR", url: "south-movies.html", poster: "rrr-poster.jpg" }
      { name: "Marco", url: "south-movies.html", poster: "https://raw.githubusercontent.com/virat119/viratu/refs/heads/main/Images/images (8).jpeg" }
        
        
        
        
        
        ];




        function searchMovies() {
            const query = document.querySelector('.search-bar').value.trim().toLowerCase();
            const resultsDiv = document.getElementById('results');
            resultsDiv.innerHTML = '';

            if (query === '') {
                return;
            }

            let results = [];

            [bollywoodMovies, hollywoodMovies, southMovies].forEach((movieArray) => {
                movieArray.forEach((movie) => {
                    if (movie.name.toLowerCase().includes(query)) {
                        results.push(movie);
                    }
                });
            });

            if (results.length > 0) {
                results.forEach((movie) => {
                    const movieElement = document.createElement('div');
                    movieElement.className = 'movie';
                    movieElement.style.marginBottom = '15px';
                    
                    movieElement.innerHTML = `
                        <div style="display: flex; align-items: center; margin-bottom: 10px;">
                            <img src="${movie.poster}" alt="${movie.name} poster" style="width: 100px; height: auto; margin-right: 15px; border-radius: 8px;">
                            <a href="${movie.url}" style="font-size: 18px; text-decoration: none; color: #333; font-weight: bold;">
                                ${movie.name}
                            </a>
                        </div>
                    `;

                    resultsDiv.appendChild(movieElement);
                });
            } else {
                resultsDiv.innerHTML = '<p style="font-size: 16px; color: #888;">No movies found. Please try a different search term.</p>';
            }
        }
