const formLogin = document.querySelector('.login-form')
const loginPopup = document.querySelector('.modal-login')
const login = formLogin.querySelector('[name = login]')
const password = formLogin.querySelector('[name = password]')
const nameSave = formLogin.querySelector('[name = savelogin]')
let isLocalStoregeSupport = true
let localStorageLogin = ''

try{
    localStorageLogin = localStorage.getItem('login')
} catch(err){
    isLocalStoregeSupport = false
}

const getstoragelogin = () => {
    try{
        localStorageLogin = localStorage.getItem('login')
    } catch(err){
        isLocalStoregeSupport = false
}
    return localStorageLogin
}

// Валидация формы
formLogin.addEventListener('submit',function(evt){
    if (!login.value || !password.value){
        evt.preventDefault();
        loginPopup.classList.add('modal-error')
        
    }else{
        if (isLocalStoregeSupport){
            evt.preventDefault();
            if (nameSave.checked){
                localStorage.setItem('login',login.value)
                localStorage.setItem('namesave',nameSave.checked)
            }else{
                localStorage.removeItem('login')
                localStorage.removeItem('namesave')
            }
        }
    }
})



export { getstoragelogin }
