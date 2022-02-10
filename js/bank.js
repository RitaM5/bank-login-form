document.getElementById('login-submit').addEventListener('click', function(){
    let emailField = document.getElementById('user-email');
     let userEmail = emailField.value;
     //console.log(userEmail);
     let passwordField = document.getElementById('user-password');
     let userPassword = passwordField.value;
     //console.log(userPassword);
     if(userEmail=='sontan@baap.com' && userPassword=='secret'){
         window.location.href = 'banking.html';
     }
     else{
         console.log('your email or password incorrect');
     }
});

document.getElementById('deposit-button').addEventListener('click',function(){
    let depositInput = document.getElementById('deposit-input');
    let depositAmount = depositInput.value;
    console.log(depositAmount);
})















