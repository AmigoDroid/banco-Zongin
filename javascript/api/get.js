function fazget(url){
    let request = new XMLHttpRequest();
    request.open('GET',url,false);
    request.send();
    return request.responseText;
}
function main(){
   let dadosUsuario = fazget('https://api-teste-get.herokuapp.com/api/usuario')
  let users = JSON.parse(dadosUsuario);
  //console.log(users);
  //auteticar('filho',0)
}
main();