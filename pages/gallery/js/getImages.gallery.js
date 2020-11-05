import { getData } from "/js/ajax.js";

export const getImagesData = () => {
    const imagesData = getData('/data/images/images.json')

    return imagesData;
}
