const comecarBtn = document.querySelector('.comecar-btn')
const comecarMenu = document.querySelector('.comecar__drop')
const contaBtn = document.querySelector('.conta-btn')
const contaMenu = document.querySelector('.conta__drop')
const hambBtn = document.querySelector('.nav__hamb')
const listaNav = document.querySelector('.nav__lista')

comecarBtn.addEventListener('click', () => {
    comecarMenu.classList.toggle('active');
});

contaBtn.addEventListener('click', () => {
    contaMenu.classList.toggle('active');
});

hambBtn.addEventListener('click', () => {
    listaNav.classList.toggle('active');
});