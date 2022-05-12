// Returns URL Hash. i.e. https://midominio.com/searching
// hash = '/searching'. This function uses the 'window.locatation.hash' property
function getHash() {
    return location.hash;
}

export default getHash;