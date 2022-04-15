const userName = document.getElementById('uname')
const email = document.getElementById('email')
const password = document.getElementById('password')
const submit = document.querySelector('.btn-submit')

const user = [];

submit.addEventListener('click', (e) => {
    e.preventDefault();
    if (userName.value && email.value && password.value) {
        user.push({
            'userName': userName.value,
            'email': email.value,
            'password': password.value
        })

        userName.value = ''
        email.value = ''
        password.value = ''
        
        console.log(user);
        return ;
    }
    
    alert("All fields are required");
    
});
