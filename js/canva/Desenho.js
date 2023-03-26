export default class Desenho{

  #mainColor = "#0A3871";
  #backgroundColor = "#F3F5FC";
  #svgNS = "http://www.w3.org/2000/svg";
  #strokeWidth = 12;
  #tela;
  #duracaoAnimacao = "1s";

  constructor(tela){

    this.#tela = tela;
  }
  //var telaPalavra = document.getElementById("quadro-letras");
  
  get alturaMaxima(){ return this.#tela.getBoundingClientRect().height; }

  get larguraMaxima(){ return this.#tela.getBoundingClientRect().width; }

  desenharTraco(x1,x2,y1,y2,direcao){

    const traco = document.createElementNS(this.#svgNS,"line");
    traco.setAttributeNS(null,"x1",x1);
    traco.setAttributeNS(null,"y1",y1);
    traco.setAttributeNS(null,"x2",x2);
    traco.setAttributeNS(null,"y2",y2);
    traco.setAttributeNS(null,"stroke-linecap","round");
    traco.setAttributeNS(null,"style",`stroke:${this.#mainColor}; stroke-width:${this.#strokeWidth};`)

    //animacoes do SVG
    if(direcao === "horizontal"){

        const animacao = document.createElementNS(this.#svgNS, "animate");
        animacao.setAttributeNS(null,"attributeName","x2");
        animacao.setAttributeNS(null,"attributeType","XML");
        animacao.setAttributeNS(null,"from",x1);
        animacao.setAttributeNS(null,"to",x2);
        animacao.setAttributeNS(null,"begin",this.#tela.getCurrentTime());
        animacao.setAttributeNS(null,"dur",this.#duracaoAnimacao);

        traco.appendChild(animacao);
    }else if(direcao === "vertical"){

        const animacao = document.createElementNS(this.#svgNS, "animate");
        animacao.setAttributeNS(null,"attributeName","y2");
        animacao.setAttributeNS(null,"attributeType","XML");
        animacao.setAttributeNS(null,"from",y1);
        animacao.setAttributeNS(null,"to",y2);
        animacao.setAttributeNS(null,"begin",this.#tela.getCurrentTime());
        animacao.setAttributeNS(null,"dur",this.#duracaoAnimacao);

        traco.appendChild(animacao);

    }else if(direcao == "ambos"){

        const animacaoVertical = document.createElementNS(this.#svgNS, "animate");

        animacaoVertical.setAttributeNS(null,"attributeName","y2");
        animacaoVertical.setAttributeNS(null,"attributeType","XML");
        animacaoVertical.setAttributeNS(null,"from",y1);
        animacaoVertical.setAttributeNS(null,"to",y2);
        animacaoVertical.setAttributeNS(null,"begin",this.#tela.getCurrentTime());
        animacaoVertical.setAttributeNS(null,"dur",this.#duracaoAnimacao);

        traco.appendChild(animacaoVertical);
    
        const animacaoHorizontal = document.createElementNS(this.#svgNS, "animate");
        animacaoHorizontal.setAttributeNS(null,"attributeName","x2");
        animacaoHorizontal.setAttributeNS(null,"attributeType","XML");
        animacaoHorizontal.setAttributeNS(null,"from",x1);
        animacaoHorizontal.setAttributeNS(null,"to",x2);
        animacaoHorizontal.setAttributeNS(null,"begin",this.#tela.getCurrentTime());
        animacaoHorizontal.setAttributeNS(null,"dur",this.#duracaoAnimacao);

        traco.appendChild(animacaoHorizontal);
    }

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

  limpaQuadro(){
    while(this.#tela.hasChildNodes()){
      this.#tela.removeChild(this.#tela.firstChild);
    }
  }
}
