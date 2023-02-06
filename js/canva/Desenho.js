export default class Desenho{

  #mainColor = "#0A3871";
  #backgroundColor = "#F3F5FC";
  #svgNS = "http://www.w3.org/2000/svg";
  #strokeWidth = 12;
  #tela;

  constructor(tela){

    this.#tela = tela;
  }
  //var telaPalavra = document.getElementById("quadro-letras");
  
  get alturaMaxima(){ return this.#tela.getBoundingClientRect().height; }

  get larguraMaxima(){ return this.#tela.getBoundingClientRect().width; }

  desenharTraco(x1,x2,y1,y2){

    const traco = document.createElementNS(this.#svgNS,"line");
    traco.setAttributeNS(null,"x1",x1);
    traco.setAttributeNS(null,"y1",y1);
    traco.setAttributeNS(null,"x2",x2);
    traco.setAttributeNS(null,"y2",y2);
    traco.setAttributeNS(null,"stroke-linecap","round");
    traco.setAttributeNS(null,"style",`stroke:${this.#mainColor}; stroke-width:${this.#strokeWidth};`)
    
    this.#tela.appendChild(traco);
  };

  desenharCirculo(x,y,r){

    const circulo = document.createElementNS(this.#svgNS,"circle");
    circulo.setAttributeNS(null,"cx",x);
    circulo.setAttributeNS(null,"cy",y);
    circulo.setAttributeNS(null,"r",r);
    circulo.setAttributeNS(null,"style",`stroke:${this.#mainColor};stroke-width:${this.#strokeWidth};fill:${this.#backgroundColor};`)

    this.#tela.appendChild(circulo);
  }
}
