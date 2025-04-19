// Update welcome message with username
document.addEventListener('DOMContentLoaded', function() {
    const username = localStorage.getItem('username');
    if (username) {
        const welcomeMessage = document.querySelector('.welcome-section p');
        welcomeMessage.textContent = `Welcome back, ${username}! Access your academic information, course materials, and more.`;
    }

    // Simulate real-time updates (in a real application, this would come from a server)
    setInterval(updateNotifications, 30000); // Check for new notifications every 30 seconds

    // Add hover effects to dashboard cards
    const dashboardCards = document.querySelectorAll('.dashboard-card');
    dashboardCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
            card.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
        });
    });

    // Add click handlers for quick links
    const quickLinks = document.querySelectorAll('.quick-links-list a');
    quickLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            // Add your quick link functionality here
            console.log('Quick link clicked:', link.textContent);
        });
    });

    // Add announcement hover effects
    const announcements = document.querySelectorAll('.announcement');
    announcements.forEach(announcement => {
        announcement.style.opacity = '1';
        announcement.style.transform = 'translateX(0)';
        
        announcement.addEventListener('mouseenter', () => {
            announcement.style.transform = 'translateX(5px)';
        });

        announcement.addEventListener('mouseleave', () => {
            announcement.style.transform = 'translateX(0)';
        });
    });

    // Add event hover effects
    const events = document.querySelectorAll('.event');
    events.forEach(event => {
        event.style.opacity = '1';
        event.style.transform = 'translateX(0)';
        
        event.addEventListener('mouseenter', () => {
            event.style.transform = 'translateX(5px)';
        });

        event.addEventListener('mouseleave', () => {
            event.style.transform = 'translateX(0)';
        });
    });

    // Initialize scroll animations for dashboard cards
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    dashboardCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        observer.observe(card);
    });
});

// Demo notification data
const notifications = [
    {
        type: 'announcement',
        title: 'System Maintenance',
        message: 'Portal will be under maintenance this weekend.',
        timestamp: new Date(Date.now() - 3600000).toLocaleString()
    },
    {
        type: 'event',
        title: 'Guest Lecture',
        message: 'Special lecture on AI and Machine Learning',
        timestamp: new Date(Date.now() - 7200000).toLocaleString()
    }
];

// Function to update notifications
function updateNotifications() {
    // In a real application, this would fetch from a server
    const announcementsList = document.querySelector('.announcements-list');
    const eventsList = document.querySelector('.events-list');
    
    if (Math.random() > 0.7) { // 30% chance of new notification
        const newNotification = {
            type: Math.random() > 0.5 ? 'announcement' : 'event',
            title: 'New Update',
            message: 'This is a simulated real-time update.',
            timestamp: new Date().toLocaleString()
        };
        
        notifications.unshift(newNotification);
        
        // Update the appropriate list
        const container = newNotification.type === 'announcement' ? announcementsList : eventsList;
        const newElement = document.createElement('div');
        newElement.className = newNotification.type;
        newElement.innerHTML = `
            <h4>${newNotification.title}</h4>
            <p>${newNotification.message}</p>
            <small>Posted: ${newNotification.timestamp}</small>
        `;
        
        // Add with animation
        newElement.style.opacity = '0';
        container.insertBefore(newElement, container.firstChild);
        setTimeout(() => {
            newElement.style.transition = 'opacity 0.5s ease';
            newElement.style.opacity = '1';
        }, 10);
        
        // Remove oldest if more than 5
        if (container.children.length > 5) {
            container.removeChild(container.lastChild);
        }
    }
} 