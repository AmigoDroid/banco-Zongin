function fazget(url){
    let request = new XMLHttpRequest();
    request.open('GET',url,false);
    request.send();
    return request.responseText;
}
function positionumeber(){
   let dadosUsuario = fazget('https://api-teste-get.herokuapp.com/api/usuario')
   let tt= fazget('http://localhost:8877/api/usuario');
  let users = JSON.parse(dadosUsuario);
  var position=users.length;
  return position;
}
//main();