import bancoDePalavrasOffline from "../../../data/listaDePalavra.json" assert {type:"json"};
import Requisicao from "../../API/Requisicao.js";

export default class Palavra{

  #listaDePalavras;
  #palavraAtualIndex;
  #acertos = new Array();
  #palavraAtual;
  
  #solicitador = new Requisicao();

  /**
   * @return {string} palavra atual 
   */
  get palavraAtual(){
    return this.#palavraAtual;
  }


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
    for(let i = 0; i < this.#palavraAtual.length; i++){ this.acertos.push(0) }
  }
  
  /**
   *@method sorteia um número aleatório com base na largura da lista de palavras
   *@return número aleatório sorteado com base na lista de palavras
   */
  #sorteiaPalavra(){

    const numeroAleatorio = Math.floor(Math.random() * this.#listaDePalavras.length);
    this.#palavraAtual = this.#listaDePalavras[numeroAleatorio].conteudo;
    this.#palavraAtualIndex = numeroAleatorio;
  }

  get acertos(){
    return this.#acertos;
  }

  /**
   * @method remove a palavra atual da lista de palavras e sorteia uma nova palavra
   */
  trocaPalavra(){

    //remove a palavra atual da lista de palavras 
    this.#listaDePalavras.splice(this.#palavraAtualIndex,1);
    
    //verifica se existe somente uma palavra na lista de palavras caso verdadeiro solicita mais 20 palavras aleatorias
    if(this.#listaDePalavras.length == 1){

      try{

        this.#listaDePalavras = this.#solicitador.solicitarPalavrasAleatorias(20);
        
      }catch(ex){

        this.#listaDePalavras = bancoDePalavrasOffline;

      }
    }
    this.#sorteiaPalavra();

    this.#acertos = []; //esvazia array de acertos
    for(let i = 0; i < this.#palavraAtual; i++){this.acertos.push(0)}; //popula o array de acertos
  }

  /**
   * @method encontra e indexa a posição da letra
   * @param {string} letra que será consultada
   * @return {Array} de posicoes ou vazio caso nao seja encontrado
   */
  encontraLetra(letra){
    let posicoes = new Array();

    console.log(this.#palavraAtual)
    for(let i = 0;  i < this.#palavraAtual.length; i++){

      if(this.#palavraAtual[i] == letra){

        posicoes.push(i);
        this.#acertos[i] = 1;

      }

    }
    return posicoes; 
  }
}
