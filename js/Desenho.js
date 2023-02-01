export default class Desenho{

  #mainColor = "#0A3871";
  #backgroundColor = "#F3F5FC";
  #svgNS = "http://www.w3.org/2000/svg";
  //var telaPalavra = document.getElementById("quadro-letras");
  
  getAlturaMaximaQuadro(canva){ return canva.getBoundingClientRect().height; }

  getLarguraMaxima(canva){ return canva.getBoundingClientRect().width  }

  get svgNS(){ return this.#svgNS; }
  get backgroundColor(){ return this.#backgroundColor;}
  get mainColor(){ return this.#mainColor;}

  desenhar(){ throw new Error("Método desenhar dever ser implementado")};
}
