
var user={
    nome:'',
    sobrenome:'',
    cpf:'',
    usuario:'',
    senha:'',
    saldo:'0,00'
   
}

var forme = document.getElementById('formulario');


forme.addEventListener('submit',function(e){
    e.preventDefault();
    cadastrarbt();
})


function cadastrarbt(){
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
        //cadastrar
        cadastraruser(nm,snm,cp,us,sn);
    }

}
