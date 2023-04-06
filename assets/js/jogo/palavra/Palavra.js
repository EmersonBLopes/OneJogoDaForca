import bancoDePalavrasOffline from "../../../data/listaDePalavra.json" assert {type:"json"};
import Requisicao from "../../API/Requisicao.js";

export default class Palavra{

  #listaDePalavras;
  #palavraAtualIndex;
  #acertos = new Array();
  
  #solicitador = new Requisicao();

  /**
   *@classdesc Contém todos os recursos necessários para o tratamento das palavras
  */
  constructor(){

    //tenta receber uma lista de palavras do servidor, caso falhe ira atribuir uma lista offline
    try{

      this.#listaDePalavras = this.#solicitador.solicitarPalavrasAleatorias(20);

    }catch(ex){

      this.#listaDePalavras = bancoDePalavrasOffline;

    }

    //sorteia uma palavra
    this.#palavraAtualIndex = this.#sorteiaPalavra();

    //configurando os acertos
    for(let i = 0; i < this.palavraAtual.legth; i++){ this.acertos.push(0) }
  }
  
  /**
   *@method sorteia um número aleatório com base na largura da lista de palavras
   *@return número aleatório sorteado com base na lista de palavras
   */
  #sorteiaPalavra(){
    return Math.floor(Math.random() * this.#listaDePalavras.length); 
  }

  /**
   * @return {string} palavra atual 
   */
  get palavraAtual(){
    return this.#listaDePalavras[this.palavraAtualIndex];
  }

  /**
   * @method remove a palavra atual da lista de palavras e sorteia uma nova palavra
   */
  trocaPalavra(){

    //remove a palavra atual da lista de palavras 
    this.#listaDePalavras.splice(this.#palavraAtual,1);
    
    //verifica se existe somente uma palavra na lista de palavras caso verdadeiro solicita mais 20 palavras aleatorias
    if(this.#listaDePalavras.length == 1){
      try{
        this.#listaDePalavras = this.#solicitador.solicitarPalavrasAleatorias(20);
      }catch(ex){
        this.#listaDePalavras = bancoDePalavrasOffline;
      }
      this.#acertos.forEach((acerto) => acerto = 0);
    }
  }

  /**
   * @method encontra e indexa a posição da letra
   * @param {string} letra que será consultada
   * @return {Array} de posicoes ou vazio caso nao seja encontrado
   */
  encontraLetra(letra){
    let posicoes = new Array();

    for(let i = 0;  i < this.palavraAtual.length; i++){

      if(this.palavraAtual[i] == letra){
        posicoes.push(i);
      }

    }
    return posicoes; 
  }
}
