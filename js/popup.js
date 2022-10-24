import {getstoragelogin} from './login-form.js'

const loginLink = document.querySelector('.login-link')
const mapLink = document.querySelectorAll('.map-link')
const loginPopup = document.querySelector('.modal-login')
const mapPopup = document.querySelector('.modal-map')
const loginPopupClose = loginPopup.querySelector('.modal-close')
const mapPopupClose = mapPopup.querySelector('.modal-close')
const formLogin = document.querySelector('.login-form')
const login = formLogin.querySelector('[name = login]')
const password = formLogin.querySelector('[name = password]')
const nameSave = formLogin.querySelector('[name = savelogin]')
const pageBody = document.querySelector('body')
const overlay = document.querySelector('.overlay')


loginLink.addEventListener('click', function(evt){
    evt.preventDefault();
    pageBody.classList.add('modal-open')
    loginPopup.classList.add('modal-show');
    overlay.classList.add('modal-show')
    if (getstoragelogin()){
        nameSave.value = localStorage.getItem('savename')
        login.value = getstoragelogin()
        password.focus()
    }else{
        login.focus();
    }
});

overlay.addEventListener('click', function(){
    mapPopup.classList.remove('modal-show')
    pageBody.classList.remove('modal-open')
    overlay.classList.remove('modal-show')
    loginPopup.classList.remove('modal-show')
    loginPopup.classList.remove('modal-error')
})


for (let i=0; i<mapLink.length;i++ ){
    mapLink[i].addEventListener('click',function(evt){
        evt.preventDefault()
        mapPopup.classList.add('modal-show')
        pageBody.classList.add('modal-open')
        overlay.classList.add('modal-show')
    })
}

loginPopupClose.addEventListener('click',function(){
    login.value=''
    password.value=''
    if (!nameSave.checked){
        localStorage.removeItem('login')
    }
    loginPopup.classList.remove('modal-show')
    pageBody.classList.remove('modal-open')
    overlay.classList.remove('modal-show')
})

mapPopupClose.addEventListener('click',function(){
    mapPopup.classList.remove('modal-show')
    pageBody.classList.remove('modal-open')
    overlay.classList.remove('modal-show')
})

window.addEventListener('keydown', function(evt){
    if (evt.key === 'Escape'){
        evt.preventDefault()
        loginPopup.classList.remove('modal-show')
        pageBody.classList.remove('modal-open')
        overlay.classList.remove('modal-show')
        mapPopup.classList.remove('modal-show')
        loginPopup.classList.remove('modal-error')
        
    }
})