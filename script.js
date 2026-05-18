const navSlide = () => {
    const burger = document.querySelector('#burger');
    const nav = document.querySelector('#nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Menüyü Aç/Kapat
        nav.classList.toggle('nav-active');

        // Link Animasyonları
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Burger Animasyonu (X şekline dönüşme)
        burger.classList.toggle('toggle');
    });
}

navSlide();