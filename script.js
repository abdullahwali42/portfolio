// Target ONLY the "View my work" button by its ID
const scrollBtn = document.getElementById('scroll-btn');

if (scrollBtn) {
    scrollBtn.addEventListener('click', function(e) {
        e.preventDefault(); // Only stops the jump for THIS button
        
        const targetElement = document.getElementById('work');
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
}