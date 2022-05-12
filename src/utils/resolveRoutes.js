function resolveRoutes(hash) {
    let route = null;
    
    if(hash.length === 0)
        route = '#/'
    else if(hash.length <= 4) {
        route =  (hash === '/' || hash === '#/') ? '#/' : '#/:id';
    } else {
        route = hash;
    }

    return route;
}

export default resolveRoutes;