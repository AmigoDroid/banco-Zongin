  function mostrardados(nome,Saldoapi){
    var valor = Saldoapi;
    var grana = parseFloat(valor);
   var dinheiro = grana.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
  var text_saldo= document.getElementById('saldo');
  var text_nome= document.getElementById('nome-id')

  text_saldo.innerText='Saldo: '+dinheiro
  text_nome.innerText=nome;
  
}