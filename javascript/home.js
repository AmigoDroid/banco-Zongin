window.onload=function(){
   if(login.logado==='true'){
       logar(login.usuario,login.senha);
   }else{
    alert('você presisa fazer o login')
     location.replace('/pages/login.html')
   }
}

    const login ={
       logado: localStorage.getItem('logado'),
       usuario: localStorage.getItem('usuario'),
       senha: localStorage.getItem('senha')
    }
    const dados={
        nome:'',
        saldo:0
    }
    function logar(user,pass){
        let url ='https://api-teste-get.herokuapp.com/login'
        let body ={
          usuario:''+user,
          senha:''+pass
        }
       let res= fazerPost(url,body);
      }
      function recebeResposta(body){
        let resposta = JSON.parse(body);
        logado = resposta.logado;
        if(logado===true){

          let nomeapi = resposta.nome;
          let saldoapi = resposta.saldo;  

          mostrardados(nomeapi,saldoapi);

        }else{
          if(logado===false){
            //não logado 
            alert('você presisa fazer o login')
            location.replace('/pages/login.html')
          }else{
            console.log('falha interna');
            location.replace('/pages/splash.html');
          }
        }
      }
      function pagar(){
        location.assign('/pages/pagar_pix.html')
      }