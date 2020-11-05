const options = {
    root: null,
    rootMargin: '0px',
    threshold: null
}

export const galleryImagesObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting === true) {
            entry.target.style.animation = entry.target.dataset.anim;
        } else {
            entry.target.style.animation = 'none';
        }
    });
}, options)

const lazyLoaderOptions = {
    root: null,
    rootMargin: '0px',
    threshold: null
}

export const imagesLazyLoader = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting === true) {
            entry.target.setAttribute('src', entry.target.dataset.src);

            observer.unobserve(entry.target);
        }
    });
}, lazyLoaderOptions)
