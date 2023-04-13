import Desenho from "./Desenho.js";

export default class Letras{

  #desenhistaLetra;
  #numeroDeLetras;
  #posicoesDasLetras;

  /**
   * @class classe que controla os desenhos do quadro de letras
   */
  constructor(numeroDeLetras){
    this.#desenhistaLetra = new Desenho(document.getElementById("quadro-letras"));
    this.#numeroDeLetras = numeroDeLetras;
    this.#posicoesDasLetras = new Array();
  }

  set numeroDeLetras(numero){
    this.#numeroDeLetras = numero;
  }

  /**
   * @method calcula o tamanho da palavra como um todo incluindo margim
   * @return {number} tamanho da palavra. este valor sera utilizado posteriormente para centralizar a palavra no quadro
   */
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


  /**
   * @method desenha os tracos que ficam abaixo da letra
   */
  desenhaEspacoLetras(){
    
    var x1,x2,larguraPalavra;
    const y = this.#desenhistaLetra.alturaMaxima*0.75;
    
    //calcula o ponto de partida
    x1 = (this.#desenhistaLetra.larguraMaxima-this.#calculaLarguraPalavra(0.08,0.125))/2;
    for(var i = 0; i < this.#numeroDeLetras; i++){
      this.#desenhistaLetra.desenharTraco(x1,x1+this.#desenhistaLetra.larguraMaxima*0.08,y,y);
      this.#posicoesDasLetras[i] = x1;
      //margin a direita de cada traco
      x1 += this.#desenhistaLetra.larguraMaxima*0.125;
    }
  }

  desenhaLetra(letra, indexAcertos){
    for(let i =0; i<indexAcertos.length; i++){
     this.#desenhistaLetra.desenharLetra(letra,this.#posicoesDasLetras[indexAcertos[i]]); 
    }
  }

  /**
   * @method apaga os desenhos do quadro de letras
   */
  apagarQuadro(){
    this.#desenhistaLetra.limpaQuadro();
  }
}
