function resolveRoutes(hash) {
    let route = null;
    if(hash.length <= 3) {
        route =  (hash === '/') ? '/' : '#/:id';
    } else {
        route = `#/${hash}`;
    }
    return route;
}

export default resolveRoutes;