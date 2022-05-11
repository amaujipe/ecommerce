function cardsToShow(isDesktop) {
    if(isDesktop !== true) 
        isDesktop = window.matchMedia('(min-width: 1024px)').matches;
    let numberOfCards = 4;
    if(isDesktop)
        numberOfCards = 6;
    return numberOfCards;
}

export default cardsToShow;