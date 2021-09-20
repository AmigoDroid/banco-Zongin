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
    var msg ='olá, os dados de login estão sendo salvos em uma api,(use dados fake) pois esse projeto é so para estudo'
    alert(msg)
});