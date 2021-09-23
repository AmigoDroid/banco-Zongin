    var login ={
    usuario:'',
    senha:'',
    logado:false
}
var forme = document.getElementById('formulario');
forme.addEventListener('submit',function(e){

    e.preventDefault(); 
    let us = document.getElementById('usuario').value;
    let pas = document.getElementById('senha').value;
   if(us===''||pas===''){

   }else{
      logar(us,pas);
   }
});
function teste(){
    var url ='http://localhost:8877/cpf';
   var body={
        cpf:446447
    }
    const api = new XMLHttpRequest();
    api.open('POST',url,true);
    api.setRequestHeader('Content-type',"application/json");
    api.send(body);
    api.onload=function(){
        console.log(this.responseText);
    }
}