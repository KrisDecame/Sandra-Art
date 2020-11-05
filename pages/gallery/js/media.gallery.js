const media = window.matchMedia("(min-width: 600px)");

export const exposedImageMediaQuery = exposedImage => {
    if (media.matches) {
        exposedImage.style.width = '60vw';
        const imageSizeRatio = exposedImage.clientHeight - exposedImage.clientWidth;

        if ((exposedImage.clientHeight > window.innerHeight) || imageSizeRatio >= 100) {
            exposedImage.style.height = '90vh';
            exposedImage.style.width = 'initial';
        } else {
            exposedImage.style.height = 'initial';
            exposedImage.style.width = '60vw';
        }
    } else {
        exposedImage.style.height = 'initial';
        exposedImage.style.width = '90vw';
    }
}
