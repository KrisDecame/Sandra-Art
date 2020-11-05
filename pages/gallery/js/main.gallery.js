import { getImagesData } from "./getImages.gallery.js";
import { galleryImagesObserver, imagesLazyLoader } from "./eventListeners.gallery.js";
import { exposeImage } from "./createExposedImage.gallery.js";

export const main = async () => {

    const wrapper = document.querySelector('.gallery-wrapper');
    const navbar = document.querySelector('.navbar');
    const imagesData = await getImagesData();
    const reversedImagesOrder = imagesData.reverse();
    const media = window.matchMedia("(min-width: 600px)");

    const createImagesHTML = () => {
        let imgHTML = '';
        reversedImagesOrder.forEach(image => {
            imgHTML += `
            <div class="image-container anim" data-anim="appear 2s 2s ease-out forwards">
                <img class="image"
                    data-id="${image.id}"
                    data-src="${image.url}"
                    data-title="${image.title}"
                    data-dimensions="${image.dimensions}"
                    data-caption="${image.caption}"
                    data-status="${image.status}"
                    data-anim="appear 2s ease-out forwards"
                    alt="img">
            </div>`;
        });
        return imgHTML;
    }

    const printImages = async () => {
        const imgHTML = await createImagesHTML();
        wrapper.innerHTML = imgHTML;
    }

    const getImages = async () => {
        await printImages();
        const imgs = document.querySelectorAll('.image');

        return imgs;
    }

    const images = await getImages();

    for (const image of images) {
        imagesLazyLoader.observe(image);
        image.onclick = () => {
            exposeImage(image, wrapper);
        }
    }

    images.forEach(img => {
        galleryImagesObserver.observe(img)
    });

    const backToTopButton = document.querySelector('.backToTopButton');
    backToTopButton.addEventListener('click', () => {
        window.scrollTo(0, 0);
    })

    window.addEventListener('scroll', () => {
        const y = window.scrollY;

        if (y > 700) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    })

}
