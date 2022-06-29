const signupBtn = document.querySelector('.signup-btn')
const signupForm = document.querySelector('#signupForm')

signupBtn.addEventListener('click', e => {
    e.preventDefault()

    fetch('/signUp', {
        method: 'POST',
        body: new FormData(signupForm)
    }).then(response => response.json())
        .then(data => alert(data.message))
})