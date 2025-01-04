
// Additional links dikhane ke liye function
function showAdditionalLinks(event) {
    event.preventDefault(); // Default behavior rokta hai
    const additionalLinks = event.target.closest('.movie-card').querySelector('.additional-links');
    if (additionalLinks) {
        additionalLinks.style.display = 'block'; // Hidden links ko dikhata hai
    }
}

// Sabhi links ek saath check karne ke liye function
function checkAllLinks() {
    const links = document.querySelectorAll('.additional-links a');
    links.forEach(link => {
        const win = window.open(link.href, '_blank');
        if (win) {
            win.focus(); // Naye tab ko focus karta hai
        } else {
            alert('Please allow popups to check all links!'); // Agar popup block ho to warning deta hai
        }
    });
}

