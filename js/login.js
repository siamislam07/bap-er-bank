// step-1 : add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    // step-2: get the email address inside the email input field
    // always remember to use .value to get text from a input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    
    // step-3: get password
    //3.a: set id on the html element
    //3.b: get the element
    //4.c: get the value from the element
    const passwordField = document.getElementById('user-pass');
    const pass = passwordField.value
    
    //DNAGER: DO NOT VERIFY e-email password on the client side
    // step-4 : verify email and password
    
    if (email === 'redwan7@valohoiya.jaw' && pass === 'valoi asi') {
        window.location.href = 'bank.html'
    }else{
        alert('Thik koira input de harami')
    }
})