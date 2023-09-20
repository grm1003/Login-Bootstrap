
var email = document.getElementById('email').value;
var senha = document.getElementById('senha').value;

document.getElementById('login').addEventListener('submit', (e) => {

 

    if(!validateEmail()) {
        e.preventDefault(); 
        appendAlert("Email inválido!",'liveAlertPlaceholderEmail');
    }

    if(!validateSenha()) {
        e.preventDefault(); 
        appendAlert( "Senha não contém 8 caracteres e um número!",'liveAlertPlaceholderSenha');
    }

    debugger
    if(!validateEmail() && !validateSenha())return;
    else{
        debugger
        console.log("tudo ok")
        document.getElementById('login').submit();

    }
    
        
    
    
})


function appendAlert(message,id){
   
    var alert = document.getElementById(id); 
    const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-warning alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '</div>'
  ].join('')

  alert.append(wrapper)
}






function validateSenha() {
    return senha.length >= 8;
}


function validateEmail() {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
}

  

    


