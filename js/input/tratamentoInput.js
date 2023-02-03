import GerenciadorDeMensagens from "./GerenciadorDeMensagens.js";


function validarPalavra(palavra){
  if(palavra == "") return 1;
  

  for(var i = 0; i < palavra.length;i++){
    if((palavra.charCodeAt(i) >= 48 && palavra.charCodeAt(i) <= 57)) return 2;
  }

  if(palavra.length<3) return 3;
  if(palavra.length>8) return 4;

  return 5;
}

function tratarInput(input){
  
  const palavra = input.value;
  const gerenciador = new GerenciadorDeMensagens(input);
  const codigoDeValidacao = validarPalavra(input.value);

  gerenciador.alteraMensagem(codigoDeValidacao);

  setTimeout(() => {gerenciador.mensagemPadrao;},2000);
}

export default tratarInput;
