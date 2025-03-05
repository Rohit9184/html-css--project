let hambaurger = document.querySelector('.hambaurger')
let navbarList = document.querySelector('.navbar-list')
let cross = document.querySelector('.cross-img')

hambaurger.addEventListener('click',() => {
    navbarList.classList.add('show')
})

cross.addEventListener('click',()=> {
    navbarList.classList.remove('show')
})