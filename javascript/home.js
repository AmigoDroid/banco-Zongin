window.onload=function(){
    update();
}
//
var user ={
    nome:localStorage.getItem('nome'),
    sobrenome:localStorage.getItem('sobrenome'),
    cpf:localStorage.getItem('cpf'),
    saldo:localStorage.getItem('saldo')
}

function update(){
var logado = localStorage.getItem('logado')
if(logado=='true'){
    mostrar_dados(user);
}else{
    console.log(false);
    location.replace('login.html')
}
}
function mostrar_dados(obj){
    var nome = document.getElementById('nome-id');
    var saldo = document.getElementById('saldo');
    //pegar o saldo e transformar em real
    const dados = obj.saldo;
    var dados_saldo=parseFloat(dados);
    var dinheiro = dados_saldo.toLocaleString('pt-br',{style:'currency',currency:'BRL'});
    //escrever na tela
    saldo.innerText='saldo: '+dinheiro;
    nome.innerText=obj.nome;
}