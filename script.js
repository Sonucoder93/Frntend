// Toggle button logic to open/close left menu
const toggleButton = document.querySelector('.toggle-button');
const menuOptions = document.querySelector('.menu-options');

toggleButton.addEventListener('click', () => {
    menuOptions.classList.toggle('show');
});

// Function to update content based on page clicked
const navLinks = document.querySelectorAll('.nav-links a');
const mainContent = document.querySelector('.main-content');

navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const page = this.getAttribute('data-page');
        loadPageContent(page);
    });
});

function loadPageContent(page) {
    switch (page) {
        case 'home':
            mainContent.innerHTML = `
                <h1>Welcome to ShinyDigital</h1>
                <p>Innovative solutions for your digital needs.</p>
            `;
            break;
        case 'services':
            mainContent.innerHTML = `
                <h1>Our Services</h1>
                <p>We offer a wide range of services to meet your digital needs, including Web Design, App Development, and Digital Marketing.</p>
            `;
            break;
        case 'portfolio':
            mainContent.innerHTML = `
                <h1>Portfolio</h1>
                <p>Check out our recent projects and digital transformations.</p>
            `;
            break;
        case 'blog':
            mainContent.innerHTML = `
                <h1>Blog</h1>
                <p>Read our latest insights and articles about the digital world.</p>
            `;
            break;
        case 'contact':
            mainContent.innerHTML = `
                <h1>Contact Us</h1>
                <p>If you have any questions or want to get in touch, feel free to contact us!</p>
            `;
            break;
        default:
            mainContent.innerHTML = '<h1>404 Not Found</h1><p>The page you are looking for does not exist.</p>';
    }
}

// On page load, show home content by default
window.onload = () => loadPageContent('home');
