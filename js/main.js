// js/main.js - Main JavaScript
// Mobile menu toggle
const menuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');

if (menuBtn) {
    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });
}

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('show')) {
            navLinks.classList.remove('show');
        }
    });
});

// Active link highlighting
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage) {
        link.classList.add('active');
    }
});

// Gallery filtering (for gallery.html)
const filterBtns = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

if (filterBtns.length > 0) {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filter = btn.getAttribute('data-filter');
            
            galleryItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const target = this.getAttribute('href');
        if (target !== '#' && target !== '#') {
            const element = document.querySelector(target);
            if (element) {
                e.preventDefault();
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});
