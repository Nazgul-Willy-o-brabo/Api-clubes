const URL = "http://localhost:3000/usuarios";

let btn = document.getElementById('fa-eye');


function entrar(){
    let usuario = document.getElementById('usuario');
    let userLabel = document.getElementById('userLabel');
    
    let senha = document.getElementById('senha');
    let senhaLabel = document.getElementById('senhaLabel');
    
    let msgError = document.getElementById('msgErro');
    let listaUser = [];
    
    let userValid = {
      nome: '',
      user: '',
      senha: ''
    }
    
    
    
    listaUser.forEach((item) => {
      if(usuario.value == item.userCad && senha.value == item.senhaCad){
         
        userValid = {
           nome: item.nomeCad,
           user: item.userCad,
           senha: item.senhaCad
         }
        
      }
    })
     
    if(usuario.value == userValid.user && senha.value == userValid.senha){
        window.location.href = 'https://www.youtube.com/watch?v=rQzSiiRe6YM';
    } else {  
      msgError.setAttribute('style', 'display: block');
      msgError.innerHTML = 'Usuario ou senha incorretos';
      usuario.focus();
    }
}




btn.addEventListener('click', () => {
    let inputsenha = document.getElementById('#senha');
    if(inputsenha.getAttribute('type') == 'password'){
        inputsenha.setAttribute('type', 'text');
    } else {
        inputsenha.setAttribute('type', 'password');
    }
})



