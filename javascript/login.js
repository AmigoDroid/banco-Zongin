'use strict'
 var url_home='home.html'
var login ={
    usuario:localStorage.getItem('usuario'),
    senha:localStorage.getItem('senha')
}
var forme = document.getElementById('formulario');
forme.addEventListener('submit',function(e){

    e.preventDefault(); 
    let us = document.getElementById('usuario').value;
    let pas = document.getElementById('senha').value;
   if(us===''||pas===''){

   }else{
      auteticar(us,parseInt(pas));
   }
});