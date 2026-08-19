// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Menu
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('is-active');
    });
}

// Typewriter Effect
const typewriterText = document.querySelector('.typewriter');
if (typewriterText) {
    const text = typewriterText.textContent.trim();
    typewriterText.textContent = '';
    let i = 0;

    function type() {
        if (i < text.length) {
            typewriterText.textContent += text.charAt(i);
            i++;
            setTimeout(type, 70);
        }
    }
    
    // Start after a short delay
    setTimeout(type, 500);
}

// Fade-in Animations on Scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            if (entry.target.classList.contains('bar')) {
                // Re-trigger animation for progress bars
                entry.target.style.width = entry.target.dataset.width;
            }
        }
    });
}, observerOptions);

// Select all elements to animate
document.querySelectorAll('.about-card, .timeline-item, .skill-item, .project-card, .contact-item, .contact-form').forEach(el => {
    el.classList.add('fade-in-scroll');
    observer.observe(el);
});

// Handle Contact Form
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = contactForm.querySelector('button');
        const originalText = btn.innerText;
        
        btn.innerText = 'Envoi en cours...';
        btn.disabled = true;

        // Simulate API call
        setTimeout(() => {
            alert('Merci Idrissa ! Votre message a bien été envoyé (Simulation).');
            contactForm.reset();
            btn.innerText = originalText;
            btn.disabled = false;
        }, 1500);
    });
}

// Active link on scroll
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 150) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').includes(current)) {
            item.classList.add('active');
        }
    });
});
