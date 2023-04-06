import Forca from "./canva/Forca.js";
import Letras from "./canva/Letras.js";
import Palavra from "./palavra/Palavra.js"
import Requisicao from "../API/Requisicao.js";
import listaDePalavra from "../../data/listaDePalavra.json" assert {type:"json"};

export default class ControladorJogo{

  #palavra = new Palavra();
  //#palavras;
  //#palavraAtual;
  //#palavraAtualIndex;
  #tentativas;
  #acertos;
  #historicoDeLetras = new Array();
  #desenhistaForca;
  #desenhistaLetra;
  #requisicao;
  #audioGanhou;
  #audioPerdeu;
  #audioAcertou;
  #audioErrou;

  //Classe Palavra
  /*#sorteiaPalavra(){
    let palavraAtualIndex = Math.floor(Math.random()*this.#palavras.length);
    var palavraSorteada = this.#palavras[palavraAtualIndex];
    this.#palavraAtualIndex = palavraAtualIndex;
    this.#palavraAtual = palavraSorteada.conteudo;
  }*/

  constructor(){
    console.log(this.#palavra.palavraAtual)
    this.#tentativas = 9;
    this.#desenhistaForca = new Forca();
    this.#desenhistaLetra = new Letras(this.#palavra.palavraAtual.length);
    this.#desenhistaForca.controlaDesenho(this.#tentativas);
    this.#desenhistaLetra.desenhaEspacoLetras();
    this.#audioGanhou = new Audio("../audio/ganhou.mp3");
    this.#audioPerdeu = new Audio("../audio/perdeu.mp3");
    this.#audioErrou = new Audio("../audio/erro.mp3");
    this.#audioAcertou = new Audio("../audio/acerto.mp3");
    /*this.#requisicao = new Requisicao();
    try{
    this.#palavras = this.#requisicao.solicitarPalavrasAleatorias(20);
    }catch(ex){
      this.#palavras = listaDePalavra;
      console.log("Servidor Indisponível");
    }
    this.#sorteiaPalavra();
    this.#palavra.acertos = new Array(this.#palavraAtual.length);
    for (var i = 0; i < this.#palavra.acertos.length; i++) {
        this.#palavra.acertos[i] = 0;
    }
    this.#historicoDeLetras = Array();
    */
  }

  setAcertos(index){
    
    this.#palavra.acertos[index] = 1;
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

//Classe palavra
/*#verificaLetraPalavra(letra){
  let resposta = false;
  for (var i = 0; i < this.#palavraAtual.length; i++) {
    if (this.#palavraAtual[i] == letra) {
      this.setAcertos(i);
      resposta = true;
    }
  }
  return resposta;
}*/

//Classe Palavra
/*#buscaIndex(letra){
  let indexEncontrados = new Array(); 
  for(var i = 0; i<this.#palavraAtual.length; i++){
    if(this.#palavraAtual[i] == letra){
      indexEncontrados.push(i);
    }
  }
  return indexEncontrados;
}*/
//verifica se todas as letras foram acertadas
#verificaGanhou(){
      //confere todos os acertos

      if(this.#palavra.acertos.length == 0) return false;

      for (let i = 0; i < this.#palavra.acertos.length; i++) {
        if (this.#palavra.acertos[i] != 1) {
          return false;
        }
      }
      return true;
    }

//classe palavra
trocaPalavra(){
    for(let i = 0; i < this.palavra.acertos.length; i++){
      if(this.palavra.acertos[i] != 1){
        this.#desenhistaLetra.desenhaLetra(this.palavra.palavraAtual[i],[i]);
      }
    }
    setTimeout(() => {
        /*if(this.#palavras.length == 1){
          this.#palavras = this.#requisicao.solicitarPalavrasAleatorias(20);
        }
        this.#sorteiaPalavra();
        for (var i = 0; i < this.#palavra.acertos.length; i++) {
            this.#palavra.acertos[i] = 0;
        }
        this.#palavra.acertos = new Array(this.#palavra.palavraAtual.length);
        */

        this.#desenhistaForca.controlaDesenho(-1);    
        this.#desenhistaLetra.apagarQuadro();
        this.palavra.trocaPalavra();
        this.#tentativas = 9;
        this.#historicoDeLetras.splice(0)
        this.#desenhistaLetra.numeroDeLetras = this.#palavra.palavraAtual.length;
        this.#desenhistaForca.controlaDesenho(this.#tentativas);
        this.#desenhistaLetra.desenhaEspacoLetras();

  },2000)
}

  //recebe um a tecla como parâmetro
comparar(letra) {

  let fimDeJogo;
  const indexDosAcertos = this.#palavra.encontraLetra(letra);

  console.log(indexDosAcertos);

  //verifica se a letra consta no histórico se falso entra dentro do if
  if(!this.#verificaHistorico(letra)){
    
    //verifica se a letra consta na palavra;
    if (indexDosAcertos.length == 0) {

      this.#tentativas--;
      if(localStorage.getItem("audio") === "true") this.#audioErrou.play();
      this.#desenhistaForca.controlaDesenho(this.#tentativas);

    }else{

      if(localStorage.getItem("audio") === "true") this.#audioAcertou.play();
      this.#desenhistaLetra.desenhaLetra(letra,indexDosAcertos);

    }
  }
  
  fimDeJogo = this.#verificaGanhou();
  if(fimDeJogo){
    if(localStorage.getItem("audio") === "true") this.#audioGanhou.play();
    setTimeout(() => alert("Você ganhou!"),1000);
    setTimeout(() => {
      /*this.#palavras.splice(this.#palavra.palavraAtualIndex,1);
        if(this.#palavras.length == 1){
          let novasPalavras = this.#requisicao.solicitarPalavrasAleatorias(20);
          for(const palavra of novasPalavras){
            this.#palavras.push(palavra);
          }
        }
        */
      this.#desenhistaForca.controlaDesenho(-1);    
      this.#desenhistaLetra.apagarQuadro();
      this.#palavra.sorteiaPalavra();
      this.#tentativas = 9;
      this.#palavra.acertos = new Array(this.#palavra.palavraAtual.length);
      for (var i = 0; i < this.#palavra.acertos.length; i++) {
          this.#palavra.acertos[i] = 0;
      }
      this.#historicoDeLetras.splice(0)
      this.#desenhistaLetra.numeroDeLetras = this.#palavra.palavraAtual.length;
      this.#desenhistaForca.controlaDesenho(this.#tentativas);
      this.#desenhistaLetra.desenhaEspacoLetras();

    },3000);
  }else if(this.#tentativas == 0){
    fimDeJogo = true;
    if(localStorage.getItem("audio") === "true") this.#audioPerdeu.play();
    setTimeout(() => alert("Você perdeu."),1000);
    for(let i = 0; i < this.#palavra.acertos.length; i++){
      if(this.#palavra.acertos[i] != 1){
        this.#desenhistaLetra.desenhaLetra(this.#palavra.palavraAtual[i],[i]);
      }
    }
    setTimeout(() => {
      this.#desenhistaForca.controlaDesenho(-1);    
      //classe Palavra
        /*        this.#palavras.splice(this.#palavra.palavraAtualIndex,1);
        if(this.#palavras.length == 1){
          this.#palavras = this.#requisicao.solicitarPalavrasAleatorias(20);
        }*/
      this.#desenhistaLetra.apagarQuadro();

        this.#palavra.sorteiaPalavra();
        this.#tentativas = 9;
        this.#palavra.acertos = new Array(this.#palavra.palavraAtual.length);
        for (var i = 0; i < this.#palavra.acertos.length; i++) {
            this.#palavra.acertos[i] = 0;
        }
        this.#historicoDeLetras.splice(0)
        this.#desenhistaLetra.numeroDeLetras = this.#palavra.palavraAtual.length;
        this.#desenhistaForca.controlaDesenho(this.#tentativas);
        this.#desenhistaLetra.desenhaEspacoLetras();

    },3000);
  }
  
  return fimDeJogo;
}
}
