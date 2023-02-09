import Desenho from "./Desenho.js";

export default class Letras{

  #desenhistaLetra;
  #numeroDeLetras;
  #posicoesDasLetras;

  constructor(numeroDeLetras){
    this.#desenhistaLetra = new Desenho(document.getElementById("quadro-letras"));
    this.#numeroDeLetras = numeroDeLetras;
    this.#posicoesDasLetras = new Array();
  }

  //responsavel por calcular o tamanho da palavra, adiciona o somatório de cada palavra e margem e retorna dentro de uma variavel
  #calculaLarguraPalavra(porcentagemTraco,porcentagemMargem){
    var larguraPalavra = 0;
    for(var i = 1; i <= this.#numeroDeLetras;i++){
      if(i != this.#numeroDeLetras){
        larguraPalavra += this.#desenhistaLetra.larguraMaxima*porcentagemTraco + this.#desenhistaLetra.larguraMaxima*porcentagemMargem - this.#desenhistaLetra.larguraMaxima*porcentagemTraco;
      }else{
        larguraPalavra += this.#desenhistaLetra.larguraMaxima*porcentagemTraco;
      }
    }

    return larguraPalavra;
  }


  //desenha o espaço para cada letra da palavra.
  desenhaEspacoLetras(){
    var x1,x2,larguraPalavra;
    const y = this.#desenhistaLetra.alturaMaxima*0.75;
    
    larguraPalavra = 0;
    if(this.#desenhistaLetra.larguraMaxima < 373){
      //calcula o ponto de partida
      x1 = (this.#desenhistaLetra.larguraMaxima-this.#calculaLarguraPalavra(0.08,0.125))/2;
      for(var i = 0; i < this.#numeroDeLetras; i++){
        this.#desenhistaLetra.desenharTraco(x1,x1+this.#desenhistaLetra.larguraMaxima*0.08,y,y);
        this.#posicoesDasLetras[i] = x1;
        //margin a direita de cada traco
        x1 += this.#desenhistaLetra.larguraMaxima*0.125;
      }
    }else{
      //calcula o ponto de partida
      x1 = (this.#desenhistaLetra.larguraMaxima-this.#calculaLarguraPalavra(0.10,0.15))/2;
      for(var i = 0; i < this.#numeroDeLetras; i++){

        this.#posicoesDasLetras[i] = x1;
        this.#desenhistaLetra.desenharTraco(x1,x1+this.#desenhistaLetra.larguraMaxima*0.10,y,y);
        //margin a direita de cada traco
        x1 += this.#desenhistaLetra.larguraMaxima*0.15;
      }
    }
  }

  desenhaLetra(letra, indexAcertos){
    for(let i =0; i<indexAcertos.length; i++){
     this.#desenhistaLetra.desenharLetra(letra,this.#posicoesDasLetras[indexAcertos[i]]); 
    }
  }

}
