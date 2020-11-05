import { onScroll } from "./eventListeners.about.js";
import { intersectionObserver, imagesLazyLoader } from "./eventListeners.about.js";

export const main = () => {

    const bannerImage = document.querySelector('.about-me-banner');
    const navbar = document.querySelector('.navbar');
    const animItems = document.querySelectorAll('.anim');
    const images = document.querySelectorAll('.image');

    onScroll(bannerImage);

    let isScrolling;

    window.addEventListener('scroll', () => {
        window.clearTimeout(isScrolling);
        navbar.style.transform = 'translate(-50%, -100%)';
        isScrolling = setTimeout(() => {
            navbar.style.transform = 'translate(-50%, 0)';
        }, 700)
    })

    for (const image of images) {
        imagesLazyLoader.observe(image)
    }

    animItems.forEach(item => {
        intersectionObserver.observe(item);
    });
}
