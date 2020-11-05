import { exposedImageMediaQuery } from "./media.gallery.js";

export const exposeImage = (image, wrapper) => {
    const exposedImage = document.createElement('div');
    exposedImage.className = 'exposed-image exposed-image-wrapper';
    exposedImage.innerHTML = `
        <div class="exposed-image__back-layer exposed-image-close-element"></div>
        <div class="exposed-image__container">
            <div class="exposed-image__actions-block">
                <button class="toggle-content-button half-visible cta"><img class="" src="/data/logotypes/gallery/info.svg" alt="i"></button>
                <button class="exposed-image-close-element half-visible cta"><img class="" src="/data/logotypes/gallery/x2.svg" alt="x"></button>
            </div>
            <div class="exposed-image__background-image" data-imageurl="${image.src}"><img class="exposed-image__image" src=${image.src}></div>
            <div class="exposed-image__content">
                <b><p class="exposed-image__title">${image.dataset.title}</p></b>
                <p class="exposed-image__dimensions">${image.dataset.dimensions}</p>
                <p class="exposed-image__text">${image.dataset.caption}</p>
                <p class="exposed-image__status">${image.dataset.status}</p>
            </div>
        </div>`;

    document.body.appendChild(exposedImage);
    wrapper.style.opacity = 0.3;

    const exposedImageContainer = document.querySelector('.exposed-image__container');
    const exposedImageImage = document.querySelector('.exposed-image__image');
    const exposedImageBackground = document.querySelector('.exposed-image__background-image');
    const exposedImageContent = document.querySelector('.exposed-image__content');
    const exposedImageActionsBlock = document.querySelector('.exposed-image__actions-block');
    let rotateButton;

    exposedImageBackground.style.backgroundImage = `url(${exposedImageBackground.dataset.imageurl})`;

    const rotateButtonHTML = `<button class="exposed-image-rotate-button half-visible cta"><img class="" src="/data/logotypes/gallery/rotate-right.svg" alt="x"></button>`;
    const media = window.matchMedia("(min-width: 600px)");

    if (media.matches) {
        if (image.dataset.id === '14') {
            exposedImageActionsBlock.innerHTML += rotateButtonHTML;
            rotateButton = document.querySelector('.exposed-image-rotate-button');
            const ctaButtons = document.querySelectorAll('.cta');
            rotateButton.addEventListener('click', () => {
                exposedImageContainer.classList.toggle('rotate');
                exposedImageContent.classList.toggle('content-reverse-rotate');
                for (const button of ctaButtons) {
                    button.classList.toggle('reverse-rotate')
                }
            })
        }
    }

    const exposedImageCloseElements = document.querySelectorAll('.exposed-image-close-element');

    exposedImageCloseElements.forEach(element => {
        element.addEventListener('click', () => {
            exposedImage.remove();
            wrapper.style.opacity = 1;
        })
    })

    const toggleContentButton = document.querySelector('.toggle-content-button');
    toggleContentButton.addEventListener('click', () => {
        toggleContentButton.classList.toggle('half-visible');
        exposedImageContent.classList.toggle('visible');
        exposedImageBackground.classList.toggle('low-opacity');
    })

    exposedImageMediaQuery(exposedImageImage);

    window.onresize = () => {
        exposedImageMediaQuery(exposedImageImage);
    }

}
