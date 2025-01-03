
    // Movie Data
        const movies = [
            {
                title: "Mufasha The Lion king",
                poster: "https://raw.githubusercontent.com/virat119/viratu/refs/heads/main/Images/Download-Mufasa-The-Lion-King-Part-2-2024-HDCam-Hindi-Tamil-Telugu-English-ESub-480p-720p-1080p.webp",
                audio: "ENGLISH",
                quality: "HDCAM",
                watchUrl: "https://mxdrop.to/e/mkv7e6d1b3xpzw",
                downloadUrl: "https://mxdrop.to/f/mkv7e6d1b3xpzw"
            },
            {
                title: "Redone",
                poster: "https://raw.githubusercontent.com/virat119/images/refs/heads/main/download (1).webp",
                audio: "English",
                quality: "Full Hd",
                watchUrl: "https://vidsrc.net/embed/movie/tt14948432",
                downloadUrl: "#"
            },
            {
                title: "Anora",
                poster: "https://raw.githubusercontent.com/virat119/viratu/refs/heads/main/Images/mbZQsj9e5MmxLWsHdyew7di30aM.webp",
                audio: "English",
                quality: "Full Hd",
                watchUrl: "https://pub-51b90112ce364c91978b92138322581c.r2.dev/Anora.2024.720p.WEB-DL.x264.ESub.KMMOVIES.TOP.mkv?response-content-disposition=attachment;filename=Anora.2024.720p.WEB-DL.x264.ESub.KMMOVIES.TOP.mkv",
                downloadUrl: "https://pub-51b90112ce364c91978b92138322581c.r2.dev/Anora.2024.720p.WEB-DL.x264.ESub.KMMOVIES.TOP.mkv?response-content-disposition=attachment;filename=Anora.2024.720p.WEB-DL.x264.ESub.KMMOVIES.TOP.mkv"
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
