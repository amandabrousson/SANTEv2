//MENU BURGUER

const navBurger = document.getElementById('navBurger')
const abrirBurger = document.getElementById('abrirBurger')
const cerrarBurger = document.getElementById('cerrarBurger')

abrirBurger.addEventListener('click', ()=>{
    console.log('click');
    navBurger.classList.add('visible')
})

cerrarBurger.addEventListener('click', ()=>{
    navBurger.classList.remove('visible')
})