function logar(){
    User = document.getElementById('usuario').value;
    Senha = document.getElementById('senha').value;
    
    if(User == 'user' && Senha == 'password'){
        document.getElementById('mensagem').innerText = 'Logado com sucesso!'
    }else{
        document.getElementById('mensagem').innerText = 'User ou Senha incorretos!'
    }
    
}