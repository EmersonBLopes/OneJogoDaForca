import Desenho from "./Desenho.js";

export default class Forca{

  #desenhista;

  constructor(){
    this.#desenhista = new Desenho(document.getElementById("quadro-forca"));
  }

   controlaDesenho(tentativa){

      switch(tentativa){

        case 9:
          this.#desenhista.desenharTraco(
            this.#desenhista.larguraMaxima*0.05,
            this.#desenhista.larguraMaxima*0.95,
            this.#desenhista.alturaMaxima*0.9,
            this.#desenhista.alturaMaxima*0.9
            );
          break;

        case 8:
          this.#desenhista.desenharTraco(
            this.#desenhista.larguraMaxima*0.2,
            this.#desenhista.larguraMaxima*0.2,
            this.#desenhista.alturaMaxima*0.9,
            this.#desenhista.alturaMaxima*0.1
          );
          break;

        case 7:
          this.#desenhista.desenharTraco(
            this.#desenhista.larguraMaxima*0.2,
            this.#desenhista.larguraMaxima*0.6,
            this.#desenhista.alturaMaxima*0.1,
            this.#desenhista.alturaMaxima*0.1
          );
          break;

        case 6:
          this.#desenhista.desenharTraco(
            this.#desenhista.larguraMaxima*0.6,
            this.#desenhista.larguraMaxima*0.6,
            this.#desenhista.alturaMaxima*0.1,
            this.#desenhista.alturaMaxima*0.2
          );
          break;

        case 5:
          this.#desenhista.desenharCirculo(
            this.#desenhista.larguraMaxima*0.6,
            this.#desenhista.alturaMaxima*0.3,
            this.#desenhista.alturaMaxima*0.08
          );
          break;

        case 4:
          this.#desenhista.desenharTraco(
            this.#desenhista.larguraMaxima*0.6,
            this.#desenhista.larguraMaxima*0.6,
            this.#desenhista.alturaMaxima*0.38,
            this.#desenhista.alturaMaxima*0.61
          );
          break;

        case 3:
          this.#desenhista.desenharTraco(
            this.#desenhista.larguraMaxima*0.6,
            this.#desenhista.larguraMaxima*0.55,
            this.#desenhista.alturaMaxima*0.61,
            this.#desenhista.alturaMaxima*0.8
          );
          break;

        case 2:
          this.#desenhista.desenharTraco(
            this.#desenhista.larguraMaxima*0.6,
            this.#desenhista.larguraMaxima*0.65,
            this.#desenhista.alturaMaxima*0.61,
            this.#desenhista.alturaMaxima*0.8
          );
          break;
        case 1:
          this.#desenhista.desenharTraco(
            this.#desenhista.larguraMaxima*0.6,
            this.#desenhista.larguraMaxima*0.52,
            this.#desenhista.alturaMaxima*0.45,
            this.#desenhista.alturaMaxima*0.65
          );
          break;

        case 0:
          this.#desenhista.desenharTraco(
            this.#desenhista.larguraMaxima*0.6,
            this.#desenhista.larguraMaxima*0.68,
            this.#desenhista.alturaMaxima*0.45,
            this.#desenhista.alturaMaxima*0.65
          );
          break;

        case -1:
          this.#desenhista.limpaQuadro();
          break;
      }

  }

}

