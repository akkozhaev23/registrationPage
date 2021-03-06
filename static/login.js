const loginBtn = document.querySelector('.login-btn')
const loginForm = document.querySelector('#loginForm')

loginBtn.addEventListener('click', e => {
    e.preventDefault()

    fetch('/login', {
        method: 'POST',
        body: new FormData(loginForm)
    }).then(response => response.json())
        .then(data => alert(data.message))
})