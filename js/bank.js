document.getElementById('login-submit').addEventListener('click', function(){
    let emailField = document.getElementById('user-email');
     let userEmail = emailField.value;

     let passwordField = document.getElementById('user-password');
     let userPassword = passwordField.value;

     if(userEmail=='sontan@baap.com' && userPassword=='secret'){
         window.location.href = 'banking.html';
     }
     else{
         console.log('your email or password incorrect');
     }
});

















