
    const hamburger = document.querySelector('.hamburger')
    const list = document.querySelector('.list')
    const cross = document.querySelector('.cross')
    const videoPlay = document.querySelector('.video-play')
    const cut = document.querySelector('.cut')
    const play = document.querySelector('.play')
    const navMenu = document.querySelector(".navbar ul");

    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });

    cross.addEventListener('click', () => {
        navMenu.classList.remove("active")
    })

    play.addEventListener('click', () => {
        videoPlay.classList.toggle('show')
    })
    cut.addEventListener('click', () => {
        videoPlay.classList.toggle('show')
    })