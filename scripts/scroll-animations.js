document.addEventListener('DOMContentLoaded', function() {
    // Get all elements that need animation
    const dashboardCards = document.querySelectorAll('.dashboard-card');
    const announcements = document.querySelectorAll('.announcement');
    const events = document.querySelectorAll('.event');
    const statItems = document.querySelectorAll('.stat-item');

    // Create an Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Stop observing once the element is visible
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: '0px 0px -50px 0px' // Adjust the bottom margin to trigger slightly earlier
    });

    // Observe all elements
    dashboardCards.forEach(card => observer.observe(card));
    announcements.forEach(announcement => observer.observe(announcement));
    events.forEach(event => observer.observe(event));
    statItems.forEach(stat => observer.observe(stat));

    // Add smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}); 