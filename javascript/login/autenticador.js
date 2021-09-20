function auteticar(us,pas){
    //fazer get
    let dadosUsuario = fazget('https://api-teste-get.herokuapp.com/api/usuario')
  //  let tt= fazget('http://localhost:8877/api/usuario');
    let users = JSON.parse(dadosUsuario);
    //verificar valor
    for(i=0;i<=users.length-1;i++){
      let username=users[i].usuario;
      let password=users[i].senha;
      console.log('user: '+username+' pass: '+password +' Id: '+i);
      if(us===username && pas===password){
        console.log('Logado');
        logar(i);
        break;
      }else{
        if (i>users.length-1) {
          ///console.log('ERRO');
          
          alert('usuario ou senha incorretos!');
          break;
        }
      }
    }
  }
  function logar(position){
    user_id.id=position;
    localStorage.setItem('id',user_id.id);
    localStorage.setItem('logado',true);

    location.assign("./home.html")
  }