import Desenho from "./Desenho.js";

export default class Letras{

  #desenhistaLetra;
  #numeroDeLetras;

  constructor(numeroDeLetras){
    this.#desenhistaLetra = new Desenho(document.getElementById("quadro-letras"));
    this.#numeroDeLetras = numeroDeLetras;
  }

  //desenha o espaço para cada letra da palavra.
  desenhaEspacoLetras(){
    var x1,x2;
    
    const y = this.#desenhistaLetra.alturaMaxima*0.75;

    x1 = 10;
    for(var i = 0; i < this.#numeroDeLetras; i++){
      console.log(i);
      this.#desenhistaLetra.desenharTraco(x1,x1+this.#desenhistaLetra.larguraMaxima*0.15,y,y);
      x1 = x1+this.#desenhistaLetra.larguraMaxima*0.20;
    }
  }

  areaPalavra(){
    return desenhistaLetra.larguraMaxima;
  }

}
