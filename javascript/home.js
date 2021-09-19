window.onload=function(){
    update();
    server();
    
}
const server = async() =>{
    const api = 'https://api-teste-get.herokuapp.com/api/usuario';
    const dados = await fetch(api);
    const txt = await dados.json();
    if(txt.hasOwnProperty('erro')){
        //erro
    }else{
        upuser(txt);
    }
}
const upuser=(text)=>{
user.nome=text.Nome;
user.sobrenome=text.SobreNome;
user.saldo=text.Saldo;
update();
}
//
var user ={
    nome:'',
    sobrenome:'',
    cpf:'',
    saldo:0,
    logado:true
}
function update(){
var logado = localStorage.getItem('logado')
if(user.logado){
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