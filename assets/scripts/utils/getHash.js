// Returns URL Hash. i.e. https://midominio.com/searching
// hash = '/searching'. This function uses the 'window.locatation.hash' property
// This line 'return location.hash.slice(1).toLocaleLowerCase().split('/')'
// will return something like this ['', 'value', ''], thats why we use the '[1]
// at the end of this sentence, to access to that value.
function getHash() {
    return location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/';
}

export default getHash;