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

  desenharLetra(caracter,x){
    const y = this.alturaMaxima*0.62; 
    let fontSize;

    //define proporções com base no tamanho de tela
    if(this.larguraMaxima < 426){
      fontSize = 32;
      x += this.larguraMaxima * 0.01;
    }else{
      fontSize = 45;
      x += this.larguraMaxima * 0.0150;
    }

    const letra = document.createElementNS(this.#svgNS,"text");
    letra.setAttributeNS(null,"x",x);
    letra.setAttributeNS(null,"y",y);
    letra.setAttributeNS(null,"font-size",fontSize);
    letra.setAttributeNS(null,"fill",this.#mainColor);
    letra.innerHTML = caracter.toUpperCase();

    this.#tela.appendChild(letra);
  }
}
