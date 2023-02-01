import Desenho from "./Desenho.js";


export default class DesenhoForca extends Desenho{

  #telaForca = document.getElementById("quadro-forca");
  #larguraMaximaForca = super.getLarguraMaxima(this.#telaForca);
  #alturaMaximaForca = super.getAlturaMaximaQuadro(this.#telaForca);

  #desenhaLinhaBase(){
      const primeiraLinha = document.createElementNS(super.svgNS,"line");
      primeiraLinha.setAttributeNS(null,"x1",this.#larguraMaximaForca-this.#larguraMaximaForca*0.95);
      primeiraLinha.setAttributeNS(null,"y1",this.#alturaMaximaForca-this.#alturaMaximaForca*0.1);
      primeiraLinha.setAttributeNS(null,"x2",this.#larguraMaximaForca*0.95);
      primeiraLinha.setAttributeNS(null,"y2",this.#alturaMaximaForca-this.#alturaMaximaForca*0.1);
      primeiraLinha.setAttributeNS(null, "stroke-linecap","round");
      primeiraLinha.setAttributeNS(null,"style",`stroke:${super.mainColor};stroke-width:12;`);

      this.#telaForca.appendChild(primeiraLinha);
  }


#desenhaSegundaLinha(){
      const segundaLinha = document.createElementNS(super.svgNS,"line");
      segundaLinha.setAttributeNS(null,"x1",this.#larguraMaximaForca-this.#larguraMaximaForca*0.8);
      segundaLinha.setAttributeNS(null,"y1",this.#alturaMaximaForca-this.#alturaMaximaForca*0.1);
      segundaLinha.setAttributeNS(null,"x2",this.#larguraMaximaForca-this.#larguraMaximaForca*0.8);
      segundaLinha.setAttributeNS(null,"y2",this.#alturaMaximaForca-this.#alturaMaximaForca*0.9);
      segundaLinha.setAttributeNS(null, "stroke-linecap","round");
      segundaLinha.setAttributeNS(null,"style",`stroke:${super.mainColor};stroke-width:12;`);

      this.#telaForca.appendChild(segundaLinha);
    }

#desenhaTerceiraLinha(){
      const terceiraLinha = document.createElementNS(super.svgNS,"line");
      terceiraLinha.setAttributeNS(null,"x1",this.#larguraMaximaForca-this.#larguraMaximaForca*0.8);
      terceiraLinha.setAttributeNS(null,"y1",this.#alturaMaximaForca-this.#alturaMaximaForca*0.9);
      terceiraLinha.setAttributeNS(null,"x2",this.#larguraMaximaForca-this.#larguraMaximaForca*0.4);
      terceiraLinha.setAttributeNS(null,"y2",this.#alturaMaximaForca-this.#alturaMaximaForca*0.9);
      terceiraLinha.setAttributeNS(null, "stroke-linecap","round");
      terceiraLinha.setAttributeNS(null,"style",`stroke:${super.mainColor};stroke-width:12;`);

      this.#telaForca.appendChild(terceiraLinha);
    }

#desenhaQuartaLinha(){
      const quartaLinha = document.createElementNS(super.svgNS,"line");
      quartaLinha.setAttributeNS(null,"x1",this.#larguraMaximaForca-this.#larguraMaximaForca*0.4);
      quartaLinha.setAttributeNS(null,"y1",this.#alturaMaximaForca-this.#alturaMaximaForca*0.9);
      quartaLinha.setAttributeNS(null,"x2",this.#larguraMaximaForca-this.#larguraMaximaForca*0.4);
      quartaLinha.setAttributeNS(null,"y2",this.#alturaMaximaForca-this.#alturaMaximaForca*0.8);
      quartaLinha.setAttributeNS(null, "stroke-linecap","round");
      quartaLinha.setAttributeNS(null,"style",`stroke:${super.mainColor};stroke-width:12;`);

      this.#telaForca.appendChild(quartaLinha);
    }

#desenhaCabeca(){
      const cabeca = document.createElementNS(super.svgNS,"circle");
      cabeca.setAttributeNS(null,"cx",this.#larguraMaximaForca-this.#larguraMaximaForca*0.4);
      cabeca.setAttributeNS(null,"cy",this.#alturaMaximaForca-this.#alturaMaximaForca*0.7);
      cabeca.setAttributeNS(null,"r",this.#alturaMaximaForca-this.#alturaMaximaForca*0.92);
      cabeca.setAttributeNS(null,"style",`stroke:${super.mainColor};stroke-width:12;fill:${super.backgroundColor};`);

      this.#telaForca.appendChild(cabeca);
    }

#desenhaTronco(){
      const tronco = document.createElementNS(super.svgNS,"line");
      tronco.setAttributeNS(null,"x1",this.#larguraMaximaForca-this.#larguraMaximaForca*0.4);
      tronco.setAttributeNS(null,"y1",this.#alturaMaximaForca-this.#alturaMaximaForca*0.62);
      tronco.setAttributeNS(null,"x2",this.#larguraMaximaForca-this.#larguraMaximaForca*0.4);
      tronco.setAttributeNS(null,"y2",this.#alturaMaximaForca-this.#alturaMaximaForca*0.39);
      tronco.setAttributeNS(null, "stroke-linecap","round");
      tronco.setAttributeNS(null,"style",`stroke:${super.mainColor};stroke-width:12;`);

      this.#telaForca.appendChild(tronco);
    }

#desenhaPernaDireita(){
      const pernaDireita = document.createElementNS(super.svgNS,"line");
      pernaDireita.setAttributeNS(null,"x1",this.#larguraMaximaForca-this.#larguraMaximaForca*0.4);
      pernaDireita.setAttributeNS(null,"y1",this.#alturaMaximaForca-this.#alturaMaximaForca*0.39);
      pernaDireita.setAttributeNS(null,"x2",this.#larguraMaximaForca-this.#larguraMaximaForca*0.45);
      pernaDireita.setAttributeNS(null,"y2",this.#alturaMaximaForca-this.#alturaMaximaForca*0.20);
      pernaDireita.setAttributeNS(null, "stroke-linecap","round");
      pernaDireita.setAttributeNS(null,"style",`stroke:${super.mainColor};stroke-width:12;`);

      this.#telaForca.appendChild(pernaDireita);
    }

#desenhaPernaEsquerda(){
      const pernaEsquerda = document.createElementNS(super.svgNS,"line");
      pernaEsquerda.setAttributeNS(null,"x1",this.#larguraMaximaForca-this.#larguraMaximaForca*0.4);
      pernaEsquerda.setAttributeNS(null,"y1",this.#alturaMaximaForca-this.#alturaMaximaForca*0.39);
      pernaEsquerda.setAttributeNS(null,"x2",this.#larguraMaximaForca-this.#larguraMaximaForca*0.35);
      pernaEsquerda.setAttributeNS(null,"y2",this.#alturaMaximaForca-this.#alturaMaximaForca*0.20);
      pernaEsquerda.setAttributeNS(null, "stroke-linecap","round");
      pernaEsquerda.setAttributeNS(null,"style",`stroke:${super.mainColor};stroke-width:12;`);

      this.#telaForca.appendChild(pernaEsquerda);
    }

#desenhaBracoDireito(){
      const bracoDireito = document.createElementNS(super.svgNS,"line");
      bracoDireito.setAttributeNS(null,"x1",this.#larguraMaximaForca-this.#larguraMaximaForca*0.4);
      bracoDireito.setAttributeNS(null,"y1",this.#alturaMaximaForca-this.#alturaMaximaForca*0.55);
      bracoDireito.setAttributeNS(null,"x2",this.#larguraMaximaForca-this.#larguraMaximaForca*0.48);
      bracoDireito.setAttributeNS(null,"y2",this.#alturaMaximaForca-this.#alturaMaximaForca*0.35);
      bracoDireito.setAttributeNS(null, "stroke-linecap","round");
      bracoDireito.setAttributeNS(null,"style",`stroke:${super.mainColor};stroke-width:12;`);

      this.#telaForca.appendChild(bracoDireito);
    }

#desenhaBracoEsquerdo(){
      const bracoEsquerdo = document.createElementNS(super.svgNS,"line");
      bracoEsquerdo.setAttributeNS(null,"x1",this.#larguraMaximaForca-this.#larguraMaximaForca*0.4);
      bracoEsquerdo.setAttributeNS(null,"y1",this.#alturaMaximaForca-this.#alturaMaximaForca*0.55);
      bracoEsquerdo.setAttributeNS(null,"x2",this.#larguraMaximaForca-this.#larguraMaximaForca*0.32);
      bracoEsquerdo.setAttributeNS(null,"y2",this.#alturaMaximaForca-this.#alturaMaximaForca*0.35);
      bracoEsquerdo.setAttributeNS(null, "stroke-linecap","round");
      bracoEsquerdo.setAttributeNS(null,"style",`stroke:${super.mainColor};stroke-width:12;`);

      this.#telaForca.appendChild(bracoEsquerdo);
    }

   desenhar(tentativa){

      switch(tentativa){

        case 9:
          this.#desenhaLinhaBase();
          break;

        case 8:
          this.#desenhaSegundaLinha();
          break;

        case 7:
          this.#desenhaTerceiraLinha();
          break;

        case 6:
          this.#desenhaQuartaLinha();
          break;

        case 5:
          this.#desenhaCabeca();
          break;

        case 4:
          this.#desenhaTronco();
          break;

        case 3:
          this.#desenhaPernaDireita();
          break;

        case 2:
          this.#desenhaPernaEsquerda();
          break;
        case 1:
          this.#desenhaBracoDireito();
          break;

        case 0:
          this.#desenhaBracoEsquerdo();
          break;
      }

  }

}

