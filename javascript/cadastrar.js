
var url_login='login.html'
var user={
    nome:'',
    sobrenome:'',
    cpf:'',
    usuario:'',
    senha:'',
    saldo:'0,00',
    cadastrar(){
        localStorage.setItem('nome',user.nome);
        localStorage.setItem('sobrenome',user.sobrenome);
        localStorage.setItem('cpf',user.cpf);
        localStorage.setItem('usuario',user.usuario);
        localStorage.setItem('senha',user.senha);
        localStorage.setItem('saldo',user.saldo)
    },
    apagar(){
        localStorage.clear();
    }
}
var forme = document.getElementById('formulario');
forme.addEventListener('submit',function(e){
    e.preventDefault();
})
function cadastrar(){
let nm = document.getElementById('nome').value;
let snm = document.getElementById('sobrenome').value;
let cp = document.getElementById('cpf').value;
let us = document.getElementById('usuario').value;
let sn = document.getElementById('senha').value;
if(
    nm==='' ||
    snm==='' ||
    cp==='' ||
    us==='' ||
    sn===''
    ){
        console.log('algum campo vazio!');
    }else{
        console.log('tudo certo!');
        user.nome=nm;
        user.sobrenome=snm;
        user.cpf=cp;
        user.usuario=us;
        user.senha=sn;
        //
        inserir(user);
    }
}
function inserir(obj){
    var id_cpf = window.localStorage.getItem('cpf')
    if(id_cpf===obj.cpf){
        alert('esse CPF já foi cadastrado!');
    }else{
          obj.cadastrar();
  window.location.replace(url_login)
    }


}
