var url_login='/pages/login.html'
var url_cadastrar='/pages/cadastrar.html'
function entrar(){
    window.location.assign(url_login);
}
function cadastrar(){
    window.location.assign(url_cadastrar);
}

var sobre =document.getElementById('sobre');
sobre.addEventListener('click',function(){
    var msg ="Olá, os seus dados são armazenados na sua maquina (localStorage). Para ver os dados click com o botão direito do mause / inspecionar procure a opção Application se seu navegador for o google Chrome."
    alert(msg)
});