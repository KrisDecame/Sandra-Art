import { onNavItemHover } from "./eventListeners.js";
import { intersectionObserver } from "/pages/about/js/eventListeners.about.js";

export const main = () => {

    const navItems = document.querySelectorAll('.list-item');
    const navbarMenu = document.querySelector('.navbar__menu');
    const introVideo = document.querySelector('#paint-drop-video');
    const navLines = document.querySelectorAll('.line');
    const animElements = document.querySelectorAll('.anim');
    const navAnchors = document.querySelectorAll('.nav-item-anchor');

    const media = window.matchMedia("(min-width: 600px)");

    onNavItemHover(navItems, navbarMenu, navAnchors, media);

    introVideo.muted = true;
    setTimeout(() => {
        introVideo.play();
    }, 1000);

    introVideo.addEventListener("timeupdate", e => {
        if (e.target.currentTime > 15) {
            e.target.pause();
        }
    });

    for (const navItem of navItems) {
        for (const line of navLines) {
            line.style.width = (navItem.clientHeight / 3) + 'px';
        }
    }

    animElements.forEach(item => {
        intersectionObserver.observe(item);
    });
}
