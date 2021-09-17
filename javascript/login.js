url_home='home.html'
var login ={
    usuario:localStorage.getItem('usuario'),
    senha:localStorage.getItem('senha')
}
var forme = document.getElementById('formulario');
forme.addEventListener('submit',function(e){

    e.preventDefault(); 
    let us = document.getElementById('usuario').value;
    let pas = document.getElementById('senha').value;
    if(login.usuario===null || login.senha===null){
        alert("você precisa se cadastrar!")
    }else if(us===''|| pas===''){
        console.log('preencha os campos');
    }else if(us==login.usuario && pas===login.senha){
        console.log('logado!');
        location.assign(url_home);
        localStorage.setItem('logado','true');
    }else{
        alert('usuario ou senha incorretos!')
    }
});
