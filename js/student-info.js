document.addEventListener('DOMContentLoaded', () => {
    // Initialize scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all animated elements
    document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .fade-in-up').forEach(el => {
        observer.observe(el);
    });

    // Add scroll-based parallax effect to profile header
    const profileHeader = document.querySelector('.student-profile-header');
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        profileHeader.style.transform = `translateY(${scrolled * 0.1}px)`;
    });

    // Add hover effects to detail cards
    const detailCards = document.querySelectorAll('.details-card');
    detailCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
            card.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
        });
    });

    // Add hover effects to info items
    const infoItems = document.querySelectorAll('.info-item');
    infoItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateX(5px)';
            item.style.backgroundColor = 'rgba(0,0,0,0.05)';
        });

        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateX(0)';
            item.style.backgroundColor = 'transparent';
        });
    });

    // Add hover effects to course items
    const courseItems = document.querySelectorAll('.course-item');
    courseItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateX(5px)';
            item.style.backgroundColor = 'rgba(0,0,0,0.05)';
        });

        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateX(0)';
            item.style.backgroundColor = 'transparent';
        });
    });

    // Handle edit photo button
    const editPhotoBtn = document.querySelector('.edit-photo-btn');
    if (editPhotoBtn) {
        editPhotoBtn.addEventListener('click', () => {
            // Add your photo upload functionality here
            console.log('Edit photo clicked');
        });
    }

    // Add smooth scroll behavior for internal links
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

    // Add scroll progress indicator
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + '%';
    });
}); 