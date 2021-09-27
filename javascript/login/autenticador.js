// function auteticar(us,pas){
//     //fazer get
//     let dadosUsuario = fazget('https://api-teste-get.herokuapp.com/api/usuario')
//   //  let tt= fazget('http://localhost:8877/api/usuario');
//     let users = JSON.parse(dadosUsuario);
//     //verificar valor
//     for(i=0;i<=users.length-1;i++){
//       let username=users[i].usuario;
//       let password=users[i].senha;
//      // console.log('user: '+username+' pass: '+password +' Id: '+i);
//      // console.log(pas);
//       //
//       if(us===username && pas===password){
//       // console.log('Logado');
//         logar(i);
//         break;
//       }else{
//         if (i>=users.length-1) {
//           ///console.log('ERRO');
          
//           alert('usuario ou senha incorretos!');
//           break;
//         }
//       }
//     }
//   }
//   function logar(position){
//     user_id.id=position;
//     localStorage.setItem('id',user_id.id);
//     localStorage.setItem('logado',true);

//     location.assign("./home.html")
//   }

  function logar(user,pass){
    let url ='https://api-teste-get.herokuapp.com/login'
    
    
    let body ={
      usuario:''+user,
      senha:''+pass
    }


    login.usuario=user;
    login.senha=pass;
   fazerPost(url,body);
   //login.cpf= dados.cpf;
   
  }
  function recebeResposta(body){
    let resposta = JSON.parse(body);
    console.log(resposta);
    logado = resposta.logado;
    if(logado===true){
      let nome = resposta.nome;
      let saldo = resposta.saldo;
      let cpf = resposta.cpf;
      //salvvar login
      localStorage.setItem('logado',true);
      localStorage.setItem('usuario',login.usuario);
      localStorage.setItem('senha',login.senha);
      localStorage.setItem('cpf',cpf);

      
     //fazer o login de fato
     location.assign('/pages/home.html')
    }else{
      if(logado===false){
        //usuario ou senha incorretos 
        
        alert('usuario ou senha incorretos')
      }else{
        console.log('falha interna');
      }
    }
  }
