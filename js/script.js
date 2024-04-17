const span = document.querySelectorAll('#nav-mob-icon span')
const sidebar = document.getElementById('sidebar')
const registerMob = document.getElementById('register-mob')
const secim = document.getElementById('secim')
const sports = document.getElementById('sports')
const nov = sports.querySelectorAll('.nov')
let allClicked = false;
let sidex = 0
let registerx = 0
let secimx = 0
function sidebarAc() {
    sidex++
    registerx = 0
    if (sidex % 2) {
        sidebr(1)
        registerMob.style.top = '-8vh'
        registerMob.style.zIndex = '-1'
    }else {
        sidebr(-1)
    }
}
function langOpen() {
    registerx++
    sidex = 0
    if(registerx % 2){
        registerMob.style.top = '8vh'
        registerMob.style.zIndex = '100'
        registerMob.style.opacity = '100'
        sidebr(-1)
    }else{
        registerMob.style.top = '-8vh'
        registerMob.style.zIndex = '-1'
        registerMob.style.opacity = '0'
    }
}
function sidebr(y) {
    if(y === 1){
        for (let i = 0; i < span.length; i++) span[i].style.margin = '0'
        span[1].style.opacity = '0'
        span[0].style.transform = 'translateY(6px) rotate(50deg)'
        span[2].style.transform = 'rotate(-50deg)'
        sidebar.style.transform = 'translateX(0)'
    }else if(y === -1){
        for (let i = 0; i < span.length; i++) span[i].style.margin = '2.5px'
        span[1].style.opacity = '100'
        span[0].style.transform = 'translateY(0) rotate(0)'
        span[2].style.transform = 'rotate(0)'
        sidebar.style.transform = 'translateX(-300%)'
    }
}
function secimAc(){
    secimx++
    if (secimx % 2) {
        secim.style.transform = 'translateX(0)'
    }else{
        secim.style.transform = 'translateX(-300%)'
    }
}
function sportall(){
    if(!allClicked){
        let kod = ''
        for (let i = 0; i < nov.length; i++) {
            kod += `<li>${nov[i].innerHTML}</li>`
        }
        sports.innerHTML = kod
        allClicked = true
    }
}
function sportAc(n) {
    sports.innerHTML = `<li>${nov[n].innerHTML}</li>`
    allClicked = false
}
var swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});