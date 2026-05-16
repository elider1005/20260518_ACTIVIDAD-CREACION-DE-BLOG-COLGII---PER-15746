/**
 * main.js
 * Lógica para la carga modular de Header y Footer desde la carpeta /components.
 * Esto asegura que cualquier cambio en los archivos .html de componentes
 * se refle je automáticamente en todas las páginas del sitio.
 */

document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. CARGA DEL HEADER ---
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
        fetch('components/header.html')
            .then(response => {
                if (!response.ok) throw new Error("Error al cargar el header");
                return response.text();
            })
            .then(data => {
                headerPlaceholder.innerHTML = data;
                highlightActiveLink();
            })
            .catch(err => {
                console.error("Error cargando el header modular:", err);
                // Fallback en caso de error (opcional)
            });
    }

    // --- 2. CARGA DEL FOOTER ---
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        fetch('components/footer.html')
            .then(response => {
                if (!response.ok) throw new Error("Error al cargar el footer");
                return response.text();
            })
            .then(data => {
                footerPlaceholder.innerHTML = data;
            })
            .catch(err => {
                console.error("Error cargando el footer modular:", err);
            });
    }

    // --- 3. LÓGICA DEL CARRUSEL INTERACTIVO ---
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const carruselBox = document.querySelector('.carrusel-box');
    
    if (slides.length > 0) {
        let currentSlide = 0;
        let slideInterval;

        const showSlide = (n) => {
            slides.forEach(slide => slide.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));
            
            currentSlide = (n + slides.length) % slides.length;
            slides[currentSlide].classList.add('active');
            dots[currentSlide].classList.add('active');
        };

        const nextSlide = () => showSlide(currentSlide + 1);
        const prevSlide = () => showSlide(currentSlide - 1);

        const startAutoPlay = () => {
            slideInterval = setInterval(nextSlide, 5000);
        };

        const stopAutoPlay = () => {
            clearInterval(slideInterval);
        };

        // Eventos
        if (nextBtn) nextBtn.addEventListener('click', () => {
            nextSlide();
            stopAutoPlay();
            startAutoPlay();
        });

        if (prevBtn) prevBtn.addEventListener('click', () => {
            prevSlide();
            stopAutoPlay();
            startAutoPlay();
        });

        dots.forEach(dot => {
            dot.addEventListener('click', (e) => {
                const index = parseInt(e.target.dataset.index);
                showSlide(index);
                stopAutoPlay();
                startAutoPlay();
            });
        });

        // Pausa en hover
        if (carruselBox) {
            carruselBox.addEventListener('mouseenter', stopAutoPlay);
            carruselBox.addEventListener('mouseleave', startAutoPlay);
        }

        // Iniciar autoplay
        startAutoPlay();
    }

    /**
     * Función para resaltar el enlace de la página actual en el menú.
     */
    function highlightActiveLink() {
        const currentPage = window.location.pathname.split("/").pop() || "index.html";
        const navLinks = document.querySelectorAll("#nav-menu a");

        navLinks.forEach(link => {
            const linkHref = link.getAttribute('href');
            if (linkHref === currentPage) {
                link.classList.add('link-activo');
            }
        });
    }
});
