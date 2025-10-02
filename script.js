// Welcome Modal
function closeModal() {
    document.getElementById('welcomeModal').style.display = 'none';
}

// Theme Toggle
function toggleTheme() {
    const body = document.body;
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';//Ternary Operator
    body.setAttribute('data-theme', newTheme);
}

// Animated Text
const texts = [
    'Software Engineering Student',
    'Google Student Ambassador',
    'Web Developer',
    'Cybersecurity Enthusiast',
    'Open Source Contributor',
    'Problem Solver',
    
];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const animatedTextEl = document.getElementById('animatedText');

function typeText() {
    const currentText = texts[textIndex];
    
    if (isDeleting) {
        animatedTextEl.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        animatedTextEl.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentText.length) {
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        typeSpeed = 500;
    }

    setTimeout(typeText, typeSpeed);
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Scroll Animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Initialize
setTimeout(() => {
    typeText();
}, 500);

// Close modal on outside click
document.getElementById('welcomeModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});