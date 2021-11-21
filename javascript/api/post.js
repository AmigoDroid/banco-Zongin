function fazerPost(url,body){
    var resq = new XMLHttpRequest();
    resq.open('POST',url,true);
    resq.setRequestHeader('Content-type','application/json')
    resq.send(JSON.stringify(body));
    resq.onload=function(){
       // console.log(this.responseText);
        //mandar resposta
        recebeResposta(this.responseText);
    }
    return resq.responseText;
}
function cadastraruser(nm,snm,cpft,us,sen){
    const url ='https://api-teste-get.herokuapp.com/adduser';
    let usuario=document.getElementById('usuario').value;
    let senha=document.getElementById('senha').value;
    let saldo=0;

   const body={
        'Nome':nm,
        'SobreNome':snm,
        'Cpf':cpft,
        'Saldo':saldo,
        'usuario':us,
        'senha':''+sen
    }
    fazerPost(url,body);
    location.replace('./login.html')

}

function recebeResposta(res){
const resp = JSON.parse(res);
if(resp.resposta==true){
    alert('cadastrado');
}else{
    alert('erro');
}
}