const usuario ={
    nome:'Não registrado',
    saldo:0,
    id:null
}
const user_id = {
    id:localStorage.getItem('id')
  }
  function mostrardados(){
    var valor = usuario.saldo;
    var grana = parseFloat(valor);
   var dinheiro = grana.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
  var text_saldo= document.getElementById('saldo');
  var text_nome= document.getElementById('nome-id')

  text_saldo.innerText='Saldo: '+dinheiro
  text_nome.innerText=usuario.nome;

   console.log(dinheiro);
}
function start(position){
    let dadosUsuario = fazget('https://api-teste-get.herokuapp.com/api/usuario');
    let ussers = JSON.parse(dadosUsuario);
    usuario.nome=ussers[position].Nome;
    usuario.saldo=ussers[position].Saldo;
mostrardados();
}