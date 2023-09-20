document.getElementById('login').addEventListener('submit', (e) => {
    e.preventDefault();
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
    if(email == '') {
        appendAlert("Email inválido!",'liveAlertPlaceholderEmail');
    }
    if(senha == '') {
        appendAlert( "Senha não contém 8 caracteres e um número!",'liveAlertPlaceholderSenha');
    }

    if(email == '' || senha == '')
        return;
    else{
        document.getElementById('login').submit();
    }
})


function appendAlert(message,id) {
    var alert = document.getElementById(id);
    if (!alert.hasChildNodes()) {
        const wrapper = document.createElement('div')
      wrapper.innerHTML = [
        `<div class="alert alert-warning alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '</div>'
      ].join('')
    
      alert.append(wrapper)
    }
}

function validateSenha() {
    return senha.length >= 8;
}


function validateEmail() {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
}
