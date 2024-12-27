    // Movie Data
        const movies = [
            {
                title: "Movie 1",
                poster: "https://via.placeholder.com/300x200",
                audio: "Hindi",
                quality: "HD",
                watchUrl: "https://www.youtube.com/embed/example1",
                downloadUrl: "#"
            },
            {
                title: "Movie 2",
                poster: "https://via.placeholder.com/300x200",
                audio: "English",
                quality: "Full Hd",
                watchUrl: "https://www.youtube.com/embed/example2",
                downloadUrl: "#"
            }
        ];

        // Load Movies
        const movieContainer = document.getElementById('movie-container');

        movies.forEach(movie => {
            const card = `
                <div class="movie-card">
                    <img src="${movie.poster}" alt="${movie.title}" class="movie-poster">
                    <div class="movie-details">
                        <h3 class="movie-title">${movie.title}</h3>
                        <p class="movie-info">Audio: ${movie.audio} | Quality: ${movie.quality}</p>
                    </div>
                    <div class="movie-actions">
                        <a href="${movie.downloadUrl}" class="btn download-btn">Download</a>
                        <button class="btn watch-btn" onclick="playMovie('${movie.watchUrl}')">Watch</button>
                    </div>
                </div>`;
            movieContainer.innerHTML += card;
        });

        // Play Movie
        function playMovie(url) {
            const modal = document.getElementById('player-modal');
            const iframe = document.getElementById('video-frame');
            iframe.src = url;
            modal.style.display = 'flex';
        }

        // Close Player
        function closePlayer() {
            const modal = document.getElementById('player-modal');
            const iframe = document.getElementById('video-frame');
            iframe.src = '';
            modal.style.display = 'none';
        }

        // Full Screen Toggle
        function toggleFullScreen() {
            const iframe = document.getElementById('video-frame');
            if (iframe.requestFullscreen) {
                iframe.requestFullscreen();
            } else if (iframe.mozRequestFullScreen) {
                iframe.mozRequestFullScreen();
            } else if (iframe.webkitRequestFullscreen) {
                iframe.webkitRequestFullscreen();
            } else if (iframe.msRequestFullscreen) {
                iframe.msRequestFullscreen();
            }
        }
