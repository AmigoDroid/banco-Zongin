function fazget(url){

    let request = new XMLHttpRequest();
    request.open('GET',url,false);
    request.send();
    return request.responseText;
}
function criaLinha(usuario){
console.log(usuario);
}
function main(){
   let dadosUsuario = fazget('https://api-teste-get.herokuapp.com/api/usuario')
   JSON.parse(dadosUsuario);
  console.log(dadosUsuario);
  criaLinha(dadosUsuario);
}
main();