const html = document.querySelector('html')
const checkbox = document.querySelector('#switch')
const menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.nav-menu');

menu.addEventListener('click', () =>  {
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');
})

checkbox.addEventListener('change', () => {
    html.classList.toggle('dark-mode')
})