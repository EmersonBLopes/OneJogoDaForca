import Desenho from "./Desenho.js";


export default class Forca{

  #desenhista;

  constructor(){
    this.#desenhista = new Desenho(document.getElementById("quadro-forca"));
  }

// #desenhaSegundaLinha(){
//       const segundaLinha = document.createElementNS(super.svgNS,"line");
//       segundaLinha.setAttributeNS(null,"x1",this.#larguraMaximaForca-this.#larguraMaximaForca*0.8);
//       segundaLinha.setAttributeNS(null,"y1",this.#alturaMaximaForca-this.#alturaMaximaForca*0.1);
//       segundaLinha.setAttributeNS(null,"x2",this.#larguraMaximaForca-this.#larguraMaximaForca*0.8);
//       segundaLinha.setAttributeNS(null,"y2",this.#alturaMaximaForca-this.#alturaMaximaForca*0.9);
//       segundaLinha.setAttributeNS(null, "stroke-linecap","round");
//       segundaLinha.setAttributeNS(null,"style",`stroke:${super.mainColor};stroke-width:12;`);
//
//       this.#telaForca.appendChild(segundaLinha);
//     }
//
// #desenhaTerceiraLinha(){
//       const terceiraLinha = document.createElementNS(super.svgNS,"line");
//       terceiraLinha.setAttributeNS(null,"x1",this.#larguraMaximaForca-this.#larguraMaximaForca*0.8);
//       terceiraLinha.setAttributeNS(null,"y1",this.#alturaMaximaForca-this.#alturaMaximaForca*0.9);
//       terceiraLinha.setAttributeNS(null,"x2",this.#larguraMaximaForca-this.#larguraMaximaForca*0.4);
//       terceiraLinha.setAttributeNS(null,"y2",this.#alturaMaximaForca-this.#alturaMaximaForca*0.9);
//       terceiraLinha.setAttributeNS(null, "stroke-linecap","round");
//       terceiraLinha.setAttributeNS(null,"style",`stroke:${super.mainColor};stroke-width:12;`);
//
//       this.#telaForca.appendChild(terceiraLinha);
//     }
//
// #desenhaQuartaLinha(){
//       const quartaLinha = document.createElementNS(super.svgNS,"line");
//       quartaLinha.setAttributeNS(null,"x1",this.#larguraMaximaForca-this.#larguraMaximaForca*0.4);
//       quartaLinha.setAttributeNS(null,"y1",this.#alturaMaximaForca-this.#alturaMaximaForca*0.9);
//       quartaLinha.setAttributeNS(null,"x2",this.#larguraMaximaForca-this.#larguraMaximaForca*0.4);
//       quartaLinha.setAttributeNS(null,"y2",this.#alturaMaximaForca-this.#alturaMaximaForca*0.8);
//       quartaLinha.setAttributeNS(null, "stroke-linecap","round");
//       quartaLinha.setAttributeNS(null,"style",`stroke:${super.mainColor};stroke-width:12;`);
//
//       this.#telaForca.appendChild(quartaLinha);
//     }
//
//
// #desenhaTronco(){
//       const tronco = document.createElementNS(super.svgNS,"line");
//       tronco.setAttributeNS(null,"x1",this.#larguraMaximaForca-this.#larguraMaximaForca*0.4);
//       tronco.setAttributeNS(null,"y1",this.#alturaMaximaForca-this.#alturaMaximaForca*0.62);
//       tronco.setAttributeNS(null,"x2",this.#larguraMaximaForca-this.#larguraMaximaForca*0.4);
//       tronco.setAttributeNS(null,"y2",this.#alturaMaximaForca-this.#alturaMaximaForca*0.39);
//       tronco.setAttributeNS(null, "stroke-linecap","round");
//       tronco.setAttributeNS(null,"style",`stroke:${super.mainColor};stroke-width:12;`);
//
//       this.#telaForca.appendChild(tronco);
//     }
//
// #desenhaPernaDireita(){
//       const pernaDireita = document.createElementNS(super.svgNS,"line");
//       pernaDireita.setAttributeNS(null,"x1",this.#larguraMaximaForca-this.#larguraMaximaForca*0.4);
//       pernaDireita.setAttributeNS(null,"y1",this.#alturaMaximaForca-this.#alturaMaximaForca*0.39);
//       pernaDireita.setAttributeNS(null,"x2",this.#larguraMaximaForca-this.#larguraMaximaForca*0.45);
//       pernaDireita.setAttributeNS(null,"y2",this.#alturaMaximaForca-this.#alturaMaximaForca*0.20);
//       pernaDireita.setAttributeNS(null, "stroke-linecap","round");
//       pernaDireita.setAttributeNS(null,"style",`stroke:${super.mainColor};stroke-width:12;`);
//
//       this.#telaForca.appendChild(pernaDireita);
//     }
//
// #desenhaPernaEsquerda(){
//       const pernaEsquerda = document.createElementNS(super.svgNS,"line");
//       pernaEsquerda.setAttributeNS(null,"x1",this.#larguraMaximaForca-this.#larguraMaximaForca*0.4);
//       pernaEsquerda.setAttributeNS(null,"y1",this.#alturaMaximaForca-this.#alturaMaximaForca*0.39);
//       pernaEsquerda.setAttributeNS(null,"x2",this.#larguraMaximaForca-this.#larguraMaximaForca*0.35);
//       pernaEsquerda.setAttributeNS(null,"y2",this.#alturaMaximaForca-this.#alturaMaximaForca*0.20);
//       pernaEsquerda.setAttributeNS(null, "stroke-linecap","round");
//       pernaEsquerda.setAttributeNS(null,"style",`stroke:${super.mainColor};stroke-width:12;`);
//
//       this.#telaForca.appendChild(pernaEsquerda);
//     }
//
// #desenhaBracoDireito(){
//       const bracoDireito = document.createElementNS(super.svgNS,"line");
//       bracoDireito.setAttributeNS(null,"x1",this.#larguraMaximaForca-this.#larguraMaximaForca*0.4);
//       bracoDireito.setAttributeNS(null,"y1",this.#alturaMaximaForca-this.#alturaMaximaForca*0.55);
//       bracoDireito.setAttributeNS(null,"x2",this.#larguraMaximaForca-this.#larguraMaximaForca*0.48);
//       bracoDireito.setAttributeNS(null,"y2",this.#alturaMaximaForca-this.#alturaMaximaForca*0.35);
//       bracoDireito.setAttributeNS(null, "stroke-linecap","round");
//       bracoDireito.setAttributeNS(null,"style",`stroke:${super.mainColor};stroke-width:12;`);
//
//       this.#telaForca.appendChild(bracoDireito);
//     }
//
// #desenhaBracoEsquerdo(){
//       const bracoEsquerdo = document.createElementNS(super.svgNS,"line");
//       bracoEsquerdo.setAttributeNS(null,"x1",this.#larguraMaximaForca-this.#larguraMaximaForca*0.4);
//       bracoEsquerdo.setAttributeNS(null,"y1",this.#alturaMaximaForca-this.#alturaMaximaForca*0.55);
//       bracoEsquerdo.setAttributeNS(null,"x2",this.#larguraMaximaForca-this.#larguraMaximaForca*0.32);
//       bracoEsquerdo.setAttributeNS(null,"y2",this.#alturaMaximaForca-this.#alturaMaximaForca*0.35);
//       bracoEsquerdo.setAttributeNS(null, "stroke-linecap","round");
//       bracoEsquerdo.setAttributeNS(null,"style",`stroke:${super.mainColor};stroke-width:12;`);
//
//       this.#telaForca.appendChild(bracoEsquerdo);
//     }
//
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
          // this.#desenhaSegundaLinha();
          break;

        case 7:
          // this.#desenhaTerceiraLinha();
          break;

        case 6:
          //this.#desenhaQuartaLinha();
          break;

        case 5:
          this.#desenhista.desenharCirculo(
            this.#desenhista.larguraMaxima*0.6,
            this.#desenhista.alturaMaxima*0.3,
            this.#desenhista.alturaMaxima*0.08
          );
          this.desenhaCabeca();
          break;

        case 4:
          //this.#desenhaTronco();
          break;

        case 3:
          //this.#desenhaPernaDireita();
          break;

        case 2:
          //this.#desenhaPernaEsquerda();
          break;
        case 1:
          //this.#desenhaBracoDireito();
          break;

        case 0:
          //this.#desenhaBracoEsquerdo();
          break;
      }

  }

}

