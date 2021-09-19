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
       buscar(); 
   }
});
const buscar = async()=>{
    const api = 'https://api-teste-get.herokuapp.com/usuario';
      var dados = await fetch(api);
      var text = await dados.json();
     //  console.log(nome);
       if(text.hasOwnProperty('erro')){
           alert('erro!')
       }else{
           gd(text);
       }
   }
   const gd = (text)=>{
console.log(text.Nome);
console.log(text.Idade);
}
