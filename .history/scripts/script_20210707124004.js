const headerCityButton = document.querySelector('.header__city-button');

headerCityButton.addEventListener('click', () => {
    const city = prompt('Укажите ваш город');
    headerCityButton.textContent = city;
});