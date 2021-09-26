var form = document.getElementById('formulario');
let valor = document.getElementById('id_valor');
let cpf = document.getElementById('id_cpf');
let span = document.getElementById('span');
let vercpf=0;
cpf.onblur=function(){
  post_cpf(cpf.value,vercpf);
}
cpf.style.border=' 1px solid silver'

valor.style.border=' 1px solid silver'
form.addEventListener('submit',function(e){
  e.preventDefault();

let cpf = document.getElementById('id_cpf').value;
let valor = document.getElementById('id_valor').value;

if(cpf===''|| valor===''){
    alert('preencha os campos corretamente');
}else{
    //pagar o cara
   processar(cpf,valor);
  
   
}});
var PGvalor =0;

function processar(cpf,valor){
    let val = parseFloat(valor);
    let pagar=1;
    if(val <=0.9){
        alert('valor minimo é 1 real')
    }else{
        //realizar pagamento de fato
        post_cpf(cpf,pagar);
        PGvalor=valor;
       // window.postMessage('oi')
    }
   

}
function pagar(body){
    //vamos pagar
   let bod = JSON.parse(body);
   let name = bod.Nome;
   let lastname = bod.SobreNome;
  let yn = confirm(`Você deseja pagar R$:${PGvalor} para ${name} ${lastname}`);
  if(yn==true){
      //pagar agora
  }else{
      //não pagar
  }
  console.log(st);
}
function existe(body){
    let bodyy = body;
    let dados = JSON.parse(bodyy);
    console.log(dados);
    cpf.style.border=' 1px solid rgb(100, 200, 200)'
}
function notexiste(){
console.log('cpf not exist');
cpf.style.border='1px solid rgb(252, 23, 23)';
}




function post_cpf(cpf,id){
    var url_cpf='https://api-teste-get.herokuapp.com/api/user-cpf';
    var body={cpf:cpf}
    var get = new XMLHttpRequest();
    get.open('POST',url_cpf,true);
    get.setRequestHeader('Content-type','application/json');
    get.send(JSON.stringify(body));
    if(id===0){
        //ver cpf
       get.onload=function(){
        let dados = JSON.parse(this.responseText);
        if(dados.Ifcpf===true){
            existe(this.responseText);
        }else{
            notexiste();
        }
    }
}else if(id===1){
    //pagar
    get.onload=function(){
        let dados = JSON.parse(this.responseText);
        if(dados.Ifcpf===true){
            pagar(this.responseText);
        }else{
            notexiste();
        }}
}
}

