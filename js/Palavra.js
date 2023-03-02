import Forca from "./canva/Forca.js";
import Letras from "./canva/Letras.js";
import Requisicao from "./API/Requisicao.js";

export default class Palavra{

  #palavras;
  #palavraAtual;
  #palavraAtualIndex;
  #tentativas;
  #acertos;
  #letra;
  #historicoDeLetras;
  #desenhistaForca;
  #desenhistaLetra;
  #requisicao

  #sorteiaPalavra(){
    let palavraAtualIndex = Math.floor(Math.random()*this.#palavras.length);
    var palavraSorteada = this.#palavras[palavraAtualIndex];
    this.#palavraAtualIndex = palavraAtualIndex;
    this.#palavraAtual = palavraSorteada.conteudo;
  }

  constructor(){
    this.#requisicao = new Requisicao();
    this.#palavras = this.#requisicao.solicitarPalavrasAleatorias(3);
    this.#sorteiaPalavra();
    this.#tentativas = 9;
    this.#acertos = new Array(this.#palavraAtual.length);
    for (var i = 0; i < this.#acertos.length; i++) {
        this.#acertos[i] = 0;
    }
    this.#historicoDeLetras = Array();
    this.#desenhistaForca = new Forca();
    this.#desenhistaLetra = new Letras(this.#palavraAtual.length);
    this.#desenhistaForca.controlaDesenho(this.#tentativas);
    this.#desenhistaLetra.desenhaEspacoLetras();
  }

  setAcertos(index){
    
    this.#acertos[index] = 1;
  }

#verificaHistorico(letra){

  //variavel que armazena o resultado da consulta
  var resultado = false;

  //verifica se se a letra já foi usada
  for(var i=0; i < this.#historicoDeLetras.length; i++){
    if(this.#historicoDeLetras[i] == letra){
      resultado = !resultado;
      break;
    }
  };
  //caso a letra não tenha sido usada a adicionara ao histórico.
  if(!resultado){
  
    this.#historicoDeLetras.push(letra);
  }
  return resultado;
}

    //verifica se a letra existe na palavra, caso exista retorna true 
#verificaLetraPalavra(letra){
  let resposta = false;
  for (var i = 0; i < this.#palavraAtual.length; i++) {
    if (this.#palavraAtual[i] == letra) {
      this.setAcertos(i);
      resposta = true;
    }
  }
  return resposta;
}

//retorna o index das letras encontradas
#buscaIndex(letra){
  let indexEncontrados = new Array(); 
  for(var i = 0; i<this.#palavraAtual.length; i++){
    if(this.#palavraAtual[i] == letra){
      indexEncontrados.push(i);
    }
  }
  return indexEncontrados;
}
//verifica se todas as letras foram acertadas
#verificaGanhou(){
      //confere todos os acertos

      if(this.#acertos.length == 0) return false;

      for (let i = 0; i < this.#acertos.length; i++) {
        if (this.#acertos[i] != 1) {
          return false;
        }
      }
      return true;
    }

trocaPalavra(){
  }

  //recebe um a tecla como parâmetro
comparar(letra) {
  var acertou;
  var ganhou;

  //verifica se a letra consta no histórico se falso entra dentro do if
  if(!this.#verificaHistorico(letra)){
    
    //verifica se a letra consta na palavra;
    acertou = this.#verificaLetraPalavra(letra);
    
    if (!acertou) {
      this.#tentativas--;
      this.#desenhistaForca.controlaDesenho(this.#tentativas);
    }else{
      this.#desenhistaLetra.desenhaLetra(letra,this.#buscaIndex(letra));
    }
  }
  ganhou = this.#verificaGanhou();
  if(ganhou){
    alert("Você ganhou!");
    setTimeout(() => {
      this.#desenhistaForca.controlaDesenho(-1);    
        this.#desenhistaLetra.apagarQuadro();
        this.#palavras.splice(this.#palavraAtualIndex,1);
        if(this.#palavras.length == 1){
          this.#palavras = this.#requisicao.solicitarPalavrasAleatorias(3);
        }
        this.#sorteiaPalavra();
        this.#tentativas = 9;
        this.#acertos = new Array(this.#palavraAtual.length);
        for (var i = 0; i < this.#acertos.length; i++) {
            this.#acertos[i] = 0;
        }
        this.#historicoDeLetras.splice(0)
        this.#desenhistaLetra.numeroDeLetras = this.#palavraAtual.length;
        this.#desenhistaForca.controlaDesenho(this.#tentativas);
        this.#desenhistaLetra.desenhaEspacoLetras();

    },3000);
  }else if(this.#tentativas == 0){
    alert("Você perdeu.");

    setTimeout(() => {
      this.#desenhistaForca.controlaDesenho(-1);    
        this.#desenhistaLetra.apagarQuadro();
        this.#palavras.splice(this.#palavraAtualIndex,1);
        if(this.#palavras.length == 1){
          this.#palavras = this.#requisicao.solicitarPalavrasAleatorias(3);
        }
        this.#sorteiaPalavra();
        this.#tentativas = 9;
        this.#acertos = new Array(this.#palavraAtual.length);
        for (var i = 0; i < this.#acertos.length; i++) {
            this.#acertos[i] = 0;
        }
        this.#historicoDeLetras.splice(0)
        this.#desenhistaLetra.numeroDeLetras = this.#palavraAtual.length;
        this.#desenhistaForca.controlaDesenho(this.#tentativas);
        this.#desenhistaLetra.desenhaEspacoLetras();

    },3000);
  }
  
  return ganhou
}
}
