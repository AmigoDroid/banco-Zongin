function auteticar(us,pas){
    //fazer get
    let dadosUsuario = fazget('https://api-teste-get.herokuapp.com/api/usuario')
    let users = JSON.parse(dadosUsuario);
    //verificar valor
    for(i=0;i<=users.length-1;i++){
      let username=users[i].usuariro;
      let password=users[i].senha;
      //console.log(username+' '+password);
      if(us===username && pas===password){
       /// console.log('Logado');
        logar(i);
        break;
      }else{
        if (i>=users.length-1) {
          console.log('não logado');
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