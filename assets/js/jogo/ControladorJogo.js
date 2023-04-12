import Forca from "./canva/Forca.js";
import Letras from "./canva/Letras.js";
import Palavra from "./palavra/Palavra.js"

export default class ControladorJogo{

  #palavra;
  #tentativas;
  #historicoDeLetras;
  #desenhistaForca;
  #desenhistaLetra;
  #audioGanhou;
  #audioPerdeu;
  #audioAcertou;
  #audioErrou;

  /**
   * @class classe responsavel por controlar o jogo e se comunicar com as outras classes
   */
  constructor(){
    //configuracao dos atributos desta classe
    this.#palavra = new Palavra();
    this.#tentativas = 9;
    this.#historicoDeLetras = new Array();

    //configuracao dos objetos da classes responsaveis pelo desenho
    this.#desenhistaForca = new Forca();
    this.#desenhistaLetra = new Letras(this.#palavra.palavraAtual.length);
    this.#desenhistaForca.controlaDesenho(this.#tentativas);
    this.#desenhistaLetra.desenhaEspacoLetras();

    //configuracao do audio do jogo
    this.#audioGanhou = new Audio("../audio/ganhou.mp3");
    this.#audioPerdeu = new Audio("../audio/perdeu.mp3");
    this.#audioErrou = new Audio("../audio/erro.mp3");
    this.#audioAcertou = new Audio("../audio/acerto.mp3");
  }

/**
 * @method verifica se a letra ja foi utilizada
 * @param {string} letra a qual sera verificada
 * @return {boolean} verdadeiro se a letra ja foi utilizada caso contario falso
 *
 */
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
  if(!resultado) this.#historicoDeLetras.push(letra); 

  return resultado;
}

/**
 * @method verifica se todas as letras foram acertadas
 * @return {boolean} retorna true se todas as letras foram acertadas caso contrario false;
 */
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
  this.#desenhistaForca.controlaDesenho(-1);    
  this.#desenhistaLetra.apagarQuadro();
  this.#palavra.trocaPalavra();
  this.#tentativas = 9;
  this.#historicoDeLetras.splice(0)
  this.#desenhistaLetra.numeroDeLetras = this.#palavra.palavraAtual.length;
  this.#desenhistaForca.controlaDesenho(this.#tentativas);
  this.#desenhistaLetra.desenhaEspacoLetras();
}

/**
 * @method responsavel por revelar todas as letras que nao foram acertadas. Consequentemente revelando a palavra
 */
#revelaPalavra(){

    //confere todos as letras da palavra
    for(let i = 0; i < this.#palavra.palavraAtual.length; i++){
      //se acerto for diferente de 1 revela letra
      if(this.#palavra.acertos[i] != 1) this.#desenhistaLetra.desenhaLetra(this.#palavra.palavraAtual[i],[i]); 
    }
}

/**
 * @method executado quando o jogador clicar no botao de novo jogo
 */
trocaPalavra(){
    this.#revelaPalavra();
    setTimeout(() => this.#resetaJogo(),2000);
}

/**
 * @method metodo principal que recebe inputs do usuario, se comunica com outras classes atraves de instancias de objetos e sinaliza caso o jogo tenha chegado ao fim 
 * @param {string} letra solicitada pelo usuario
 * @return {boolean} verdadeiro se o jogo tenha chegado ao fim. caso contrario falso
 */
controladorPrincipal(letra) {

  let fimDeJogo; //armazena um boolean indicando se o jogo acabou
  const indexDosAcertos = this.#palavra.encontraLetra(letra);//verifica se a letra consta no array


  //verifica se a letra consta no histórico se falso entra dentro do if
  if(!this.#verificaHistorico(letra)){
    
    //verifica se o array de acertos esta vazio caso sim significa que o jogador errou
    if (indexDosAcertos.length == 0) {

      this.#tentativas--; //decrementa -1 do numero de tentativas restante
      if(localStorage.getItem("audio") === "true") this.#audioErrou.play();//toca o audio de erro
      this.#desenhistaForca.controlaDesenho(this.#tentativas);//desenha no quadro da forca com base no numero de tentativas

    }else{

      if(localStorage.getItem("audio") === "true") this.#audioAcertou.play(); //toca audio de acerto
      this.#desenhistaLetra.desenhaLetra(letra,indexDosAcertos); //escreve a letra no quadro da palavra

    }
  }
  
  fimDeJogo = this.#verificaGanhou();//verifica se o jogo chegou ao fim
  //caso o usuario tenha acertado a palavra ou perdido executa este treicho de codigo
  if(fimDeJogo){

    if(localStorage.getItem("audio") === "true") this.#audioGanhou.play(); //toca audio de vitoria

    setTimeout(() => alert("Você ganhou!"),1000); //mensagem de vitoria
    setTimeout(() => this.#resetaJogo(),3000); //reseta o jogo

  }else if(this.#tentativas == 0){ //treicho que sera executado se o usuario perdeu

    fimDeJogo = true; //sinaliza o fim do jogo

    if(localStorage.getItem("audio") === "true") this.#audioPerdeu.play(); //toca audio de derrota

    setTimeout(() => alert("Você perdeu."),1000); //mensagem de derrota

    this.#revelaPalavra(); //revela letras que nao foram acertadas
    setTimeout(() => this.#resetaJogo(),3000); //reseta o jogo

  }
  
  return fimDeJogo;
}

}
