const cards = document.querySelectorAll('.card');

cards.forEach((card) => {
    card.addEventListener('click', () => {
        const cardBack = card.querySelector('.card-back');
        if (cardBack.hasAttribute('data-active')) {
          cardBack.removeAttribute('data-active');
        } else {
          cardBack.setAttribute('data-active', 'true');
        }
    });
});
