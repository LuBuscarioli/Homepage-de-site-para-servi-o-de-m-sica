const comecarBtn = document.querySelector('.comecar-btn')
const comecarMenu = document.querySelector('.comecar__drop')
const contaBtn = document.querySelector('.conta-btn')
const contaMenu = document.querySelector('.conta__drop')

comecarBtn.addEventListener('click', () => {
    comecarMenu.classList.toggle('active');
});

contaBtn.addEventListener('click', () => {
    contaMenu.classList.toggle('active');
});