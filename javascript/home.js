const login ={
  logado: localStorage.getItem('logado'),
  usuario: localStorage.getItem('usuario'),
  senha: localStorage.getItem('senha')
}
const dados={
   nome:'',
   saldo:0
}


    window.onload=function(){
      //logado();
    }

    function logado(){
      if(login.logado==='true'){
        logar(login.usuario,login.senha);
    }else{
     alert('você presisa fazer o login')
      location.replace('/pages/login.html')
    }
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
        }
        else
        {
          if(logado===false){
            //não logado 
            alert('você presisa fazer o login')
            location.replace('/pages/login.html')
          }
          else
          {
            location.replace('/pages/splash.html');
          }
        }
      }



      function pagar(){
        location.assign('/pages/pagar_pix.html')
      }


      function pix(){
        let body = {
          usuario:localStorage.getItem('usuario'),
          senha:localStorage.getItem('senha'),
          cpf:localStorage.getItem('cpf')
        }
       
        alert('minha chave PIX é: '+body.cpf +' use ela para receber pagamentos');
      }
    