import bancoDePalavrasOffline from "../../../data/listaDePalavra.json" assert {type:"json"};
import Requisicao from "../../API/Requisicao.js";

export default class Palavra{

  #listaDePalavras;
  #palavraAtual;
  #acertos;
  
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
  }
  
  #sorteiaPalavra(){
    return Math.floor(Math.random() * this.#listaDePalavras.length); 
  }

  get palavraAtual(){
    return this.#listaDePalavras[this.palavraAtual];
  }
}
