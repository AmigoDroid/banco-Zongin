window.onload=function(){
    update();
}
function update(){
var logado = localStorage.getItem('logado')
if(logado=='true'){
   // console.log(true);
}else{
    console.log(false);
    location.replace('login.html')
}
}