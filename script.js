document.addEventListener('DOMContentLoaded', function() {
    function updateClock() {
        const now = new Date();
        let hours = now.getHours();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // Convert 0 to 12
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        
        const clockElement = document.getElementById('clock-time');
        if (clockElement) {
            clockElement.textContent = `${hours}:${minutes}:${seconds} ${ampm}`;
        }
    }
    
    // Run immediately and every second
    updateClock();
    setInterval(updateClock, 1000);
});

// Carousel auto-rotate
const myCarousel = document.getElementById('mainCarousel');
const carousel = new bootstrap.Carousel(myCarousel, {
    interval: 5000, // Change slide every 5 seconds
    wrap: true
});


    document.addEventListener('DOMContentLoaded', function() {
        // Example: Add smooth scrolling to all links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    });