// JavaScript for Mobile Menu Toggle and Lucide Icons
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide icons
    lucide.createIcons();

    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = mobileMenu.querySelectorAll('a');

    // 1. Toggle mobile menu
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // 2. Hide mobile menu after clicking a link (for smooth scrolling)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Check if the link leads to a section (starts with '#')
            if (link.getAttribute('href').startsWith('#')) {
                mobileMenu.classList.add('hidden');
            }
        });
    });

    // 3. Simple function to ensure smooth scrolling on all anchor clicks
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});