    var login ={
    usuario:'',
    senha:'',
    logado:false,
    cpf:''
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
