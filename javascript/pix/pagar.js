function pagar(cpf){

}
function existecpf(cpf){
var body={
    cpf:cpf
}
var url_cpf='';
var resposta = fazgetcpf(url_cpf,body);
}
//cpf existe cadastrado? y/n
function verificar(body){
    var s_n = JSON.parse(body);
    var sn = s_n.existe;
    if(sn===true){
        //y
    }else{
        //n
    }
}


//buscar o cpf no servidor
function fazpostcpf(url,body){
    var get = new XMLHttpRequest();
    get.open('POST',url,true);
    get.setRequestHeader('Content-type','application/json');
    get.send(JSON.stringify(body));
    get.onload=function(){
        verificar(this.responseText);
    }
}
