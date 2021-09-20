function fazerPost(url,body){
    var resq = new XMLHttpRequest();
    resq.open('POST',url,true);
   
    resq.send(JSON.stringify(body));
    resq.onload=function(){
        console.log(this.responseText);
    }
    return resq.responseText;
}
function cadastraruser(){
    let url ='https://api-teste-get.herokuapp.com/adduser';
    let posite = positionumeber();
    let id = posite;
    let nome = document.getElementById('nome').value;
    let sobrenome = document.getElementById('sobrenome').value;
    let cpf = document.getElementById('cpf').value;
    let usuario=document.getElementById('usuario').value;
    let senha=document.getElementById('senha').value
    let saldo=0;

    body={
        'id':id,
        'Nome':nome,
        'SobreNome':sobrenome,
        'Cpf':cpf,
        'Saldo':saldo,
        'usuario':usuario,
        'senha':senha
    }
    fazerPost(url,body);
   //console.log(body);


}