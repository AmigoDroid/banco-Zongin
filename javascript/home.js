window.onload=function(){
    if(localStorage.getItem('logado')==='true'&&user_id.id!=null){
        start(user_id.id)
    }else{
        window.location.replace('/pages/login.html')
    }
    }
    function update(){
    
    }
