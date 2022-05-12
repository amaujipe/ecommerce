import createTag from "../utils/createTag";

// This function recieves and object
// Send 'null' on any attribute you dont need. ie => 'id': null
function ImageTag({ src, srcset, alt, id, classes }) {
    const image = createTag('img', id, ...classes);
    
    image.setAttribute('src', src);
    
    if(srcset)
        image.setAttribute('srcset', srcset);
    
    if(alt)
        image.setAttribute('alt', alt);
    
    return image;
}

export default ImageTag;