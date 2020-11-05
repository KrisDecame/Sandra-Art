export const onNavItemHover = (navItems, navbarMenu, navAnchors, media) => {

    for (const item of navItems) {
        if (media.matches) {
            navbarMenu.style.height = item.clientHeight + 'px';
            const middleItem = navItems[Math.round((navItems.length-1)/2)];

            item.addEventListener('mouseover', () => {
                navbarMenu.style.top = `${item.getBoundingClientRect().top}px`;
            });

            item.addEventListener('mouseleave', () => {
                navbarMenu.style.top = `${middleItem.getBoundingClientRect().top}px`;
            })
        } else {
            const navLines = document.querySelectorAll('.line');
            navbarMenu.style.height = '20px';
            navbarMenu.addEventListener('click', () => {
                for (const item of navAnchors) {
                    item.classList.toggle('visible');
                }
                for (let i = 0; i < navLines.length; i++) {
                    navLines[i].classList.toggle(`line-transform`)
                }
            })
        }
    }
}
