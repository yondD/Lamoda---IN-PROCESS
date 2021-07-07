const headerCityButton = document.querySelector('.header__city-button');

headerCityButton.textContent = localStorage.getItem('lomoda-location') || 'Ваш город?'

headerCityButton.addEventListener('click', () => {
    const city = prompt('Укажите ваш город');
    headerCityButton.textContent = city;
    localStorage.setItem('lomoda-location', city);
});


// Модальное окно

const subHeaderCart = document.querySelector('.subheader__cart');
const cartOverlay = document.querySelector('.cart-overlay');

const cartModalCartOpen = () => {
    cartOverlay.classList.add('cart-overlay-open');

};

subHeaderCart.addEventListener('click', () => {});

cartOverlay.addEventListener('click', event => {
    const target = event.target;

});