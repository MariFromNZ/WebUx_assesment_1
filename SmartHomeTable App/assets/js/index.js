// for elements in progress registerBtn
var registerBtn = document.getElementById('registerBtn');
registerBtn.addEventListener('click', function() {
    alert('Sorry, still in development');
});

// for elements in progress
var loginBtn = document.getElementById('loginBtn');
loginBtn.addEventListener('click', function(e) {
    var userNameInput = document.getElementById('name').value;
    var passwordInput = document.getElementById('password').value;
    if(userNameInput === 'Mariia' && passwordInput === '123')
    {

    }
    else{
        alert('Username or password is not correct. Try username - Mariia, password - 123')
    }      
});