export default class Palavra{

  #palavras;
  #palavraAtual;
  #tentativas;
  #acertos;
  #letra;
  #historicoDeLetras;

  constructor(){
    this.#palavras = new Array();
    this.#palavraAtual = "Alura";
    this.#tentativas = 9;
    this.#acertos = new Array(this.#palavraAtual.length);
    for (var i = 0; i < this.#acertos.length; i++) {
        this.#acertos[i] = 0;
    }
    this.#historicoDeLetras = Array();
  }

  setAcertos(index){
    
    this.#acertos[index] = 1;
  }

  #verificaHistorico(letra){

    //variavel que armazena o resultado da consulta
    var resultado = false;
    var botao = document.getElementById(`tecla-${letra}`);

    //verifica se se a letra já foi usada
    for(var i=0; i < this.#historicoDeLetras.length; i++){
      if(this.#historicoDeLetras[i] == letra){
        resultado = !resultado;
        break;
      }
    }

    //caso a letra não tenha sido usada a adicionara ao histórico.
    if(!resultado){
      
      this.#historicoDeLetras.push(letra);

      //altera a classe do botão para desativado
      botao.classList.toggle("tecla_desativada");
      
    }

    return resultado;
    }

    //verifica se a letra existe na palavra, caso exista retorna true 
#verificaLetraPalavra(letra){

      for (var i = 0; i < this.#palavraAtual.length; i++) {
        if (this.#palavraAtual[i] == letra) {
          this.setAcertos(i);
          return true;
        }
      }
      return false;
    }

    //verifica se todas as letras foram acertadas
#verificaGanhou(){

      //confere todos os acertos
      for (var i = 0; i < this.#acertos.length; i++) {
        if (this.#acertos[i] != 1) {
          return false;
        }
      }

      return true;
    }

    comparar(letra) {

      var acertou;
      var ganhou;

    //verifica se a letra consta no histórico se falso entra dentro do if
    if(!this.#verificaHistorico(letra)){
      
      //verifica se a letra consta na palavra;
      acertou = this.#verificaLetraPalavra(letra);
      
      if (!acertou) {
        this.#tentativas--;
        desenhar();
      }else{
        //escreveLetra();
      }
    }
    ganhou = this.#verificaGanhou();
    return ganhou;
    }
}
