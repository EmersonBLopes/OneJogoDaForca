import Forca from "./canva/Forca.js";
import Letras from "./canva/Letras.js";
import Palavra from "./palavra/Palavra.js"
import Requisicao from "../API/Requisicao.js";
import listaDePalavra from "../../data/listaDePalavra.json" assert {type:"json"};

export default class ControladorJogo{

  #palavra = new Palavra();
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

  constructor(){
    this.#tentativas = 9;
    this.#desenhistaForca = new Forca();
    this.#desenhistaLetra = new Letras(this.#palavra.palavraAtual.length);
    this.#desenhistaForca.controlaDesenho(this.#tentativas);
    this.#desenhistaLetra.desenhaEspacoLetras();
    this.#audioGanhou = new Audio("../audio/ganhou.mp3");
    this.#audioPerdeu = new Audio("../audio/perdeu.mp3");
    this.#audioErrou = new Audio("../audio/erro.mp3");
    this.#audioAcertou = new Audio("../audio/acerto.mp3");
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

//verifica se todas as letras foram acertadas
#verificaGanhou(){

    //verifica se todas as letras foram acertadas
    for (let i = 0; i < this.#palavra.acertos.length; i++) {

      //se encontrar alguma letra que nao foi acertada returna falso
      if (this.#palavra.acertos[i] != 1) {
        return false;
      }
    }
    //se todas as letras foram acertadas retorna true
    return true;
  }


/**
 * @method responsavel por resetar o jogo ao ganhar, perder ou trocar de palavra
 */
#resetaJogo(){

}

//classe palavra
trocaPalavra(){

  //revela letras que nao foram acertadas
    for(let i = 0; i < this.#palavra.palavraAtual.length; i++){
      if(this.#palavra.acertos[i] != 1){
        this.#desenhistaLetra.desenhaLetra(this.#palavra.palavraAtual[i],[i]);
      }
    }
    setTimeout(() => {
        this.#desenhistaForca.controlaDesenho(-1);    
        this.#desenhistaLetra.apagarQuadro();
        this.#palavra.trocaPalavra();
        this.#tentativas = 9;
        this.#historicoDeLetras.splice(0)
        this.#desenhistaLetra.numeroDeLetras = this.#palavra.palavraAtual.length;
        this.#desenhistaForca.controlaDesenho(this.#tentativas);
        this.#desenhistaLetra.desenhaEspacoLetras();

  },2000)
}

controladorPrincipal(letra) {

  let fimDeJogo;
  const indexDosAcertos = this.#palavra.encontraLetra(letra);


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
      this.#desenhistaForca.controlaDesenho(-1);    
      this.#desenhistaLetra.apagarQuadro();
      this.#palavra.trocaPalavra();
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
      this.#desenhistaLetra.apagarQuadro();
        this.#palavra.trocaPalavra();
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
