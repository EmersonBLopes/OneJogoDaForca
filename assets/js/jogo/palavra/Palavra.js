import bancoDePalavrasOffline from "../../../data/listaDePalavra.json" assert {type:"json"};
import Requisicao from "../../API/Requisicao.js";

export default class Palavra{

  #listaDePalavras;
  #palavraAtual;
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
    this.#palavraAtual = this.#sorteiaPalavra();

    //configurando os acertos
    for(let i = 0; i < palavraAtual.legth; i++){ this.acertos.push(0) }
  }
  
  /**
   *@method sorteia um número aleatório com base na largura da lista de palavras
   *@return número aleatório sorteado com base na lista de palavras
   */
  #sorteiaPalavra(){
    return Math.floor(Math.random() * this.#listaDePalavras.length); 
  }

  /**
   * @return palavra atual 
   */
  get palavraAtual(){
    return this.#listaDePalavras[this.palavraAtual];
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
}
