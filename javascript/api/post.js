function fazerPost(url,body){
    var resq = new XMLHttpRequest();
    resq.open('POST',url,true);
    resq.setRequestHeader('Content-type','application/json')
    resq.send(JSON.stringify(body));
    resq.onload=function(){
        //mandar resposta
        recebeResposta(this.responseText);
    }
    return resq.responseText;
}


function cadastraruser(nm,snm,cpft,us,sen){
    const url ='https://api-teste-get.herokuapp.com/adduser';
    let saldo=0;
    let cpff = Number.parseInt(cpft);

   const body={
        nome:nm,
        sobrenome:snm,
        cpf:''+cpff,
        saldo:''+saldo,
        usuario:''+us,
        senha:''+sen
    }

    fazerPost(url,body);
    console.table(body);
   

}
function Fazerlogin(body){
    let url ='https://api-teste-get.herokuapp.com/login';
    const api = new XMLHttpRequest();
    api.open('POST',url,true);
    api.setRequestHeader('Content-type','application/json');
    api.send(JSON.stringify(body));
    console.log('fazendo requisição');
    api.onload=function(){
        console.log('resposta do servidor: '+this.responseText);
        respostaLogin(this.responseText);
    }
}

function recebeResposta(res){
const resp = JSON.parse(res);
console.log(resp);
if(resp.resposta==true){
    alert('cadastrado');
    location.replace('./login.html');
}else{
    alert('erro');
}
}
function respostaLogin(status){
    const dados = JSON.parse(status);
    if(dados.resposta==true){
        location.assign('./home');
    }else{
        alert('erro desconheido: '+dados.resposta+' Codigo:'+dados.code);
    }
}