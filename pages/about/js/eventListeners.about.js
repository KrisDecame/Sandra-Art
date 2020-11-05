export const onScroll = (bannerImage) => {

    window.addEventListener('scroll', () => {
        const top = window.scrollY;

        if (top === 0) {
            bannerImage.style.backgroundPosition = `0 0`;
        } else {
            bannerImage.style.backgroundPosition = `0 ${top/10}%`;
        }
    })
}

const options = {
    root: null,
    rootMargin: '0px',
    threshold: null
}

export const intersectionObserver = new IntersectionObserver(entries => {
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
            entry.target.style.backgroundImage = `url(${entry.target.dataset.imagesrc})`;

            observer.unobserve(entry.target);
        }
    });
}, lazyLoaderOptions)
