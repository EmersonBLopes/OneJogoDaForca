/*var palavra = "calopsita";
var tentativas = 9;
var acertos = new Array(palavra.length);
var letra;
for (var i = 0; i < acertos.length; i++) {
    acertos[i] = 0;
}

function comparar(letra) {
    var acertou = false;
    var ganhou = true;
    for (i = 0; i < palavra.length; i++) {
        if (palavra[i] == letra) {
            acertos[i] = 1;
            acertou = true;
        }
    }
    if (!acertou) {
        tentativas--;
    }
    for (i = 0; i < acertos.length; i++) {
        if (acertos[i] != 1) {
            ganhou = false;
        }
    }
    return ganhou;
}
do {
    letra = prompt("digite uma letra:");
    if (comparar(letra)) {
        console.log("parabens, voce ganhou!");
    }
    else if (tentativas == 0) {
        console.log("voce perdeu");
    }
    console.log(acertos, tentativas);
} while (tentativas > 0);*/

var mainColor = "#0A3871";
var backgroundColor = "#F3F5FC";

var telaForca = document.getElementById("quadro-forca");
const svgNS = "http://www.w3.org/2000/svg";

const primeiraLinha = document.createElementNS(svgNS,"line");
primeiraLinha.setAttributeNS(null,"x1",larguraMaximaForca()-larguraMaximaForca()*0.8);
primeiraLinha.setAttributeNS(null,"y1",alturaMaximaForca()-alturaMaximaForca()*0.1);
primeiraLinha.setAttributeNS(null,"x2",larguraMaximaForca()*0.8);
primeiraLinha.setAttributeNS(null,"y2",alturaMaximaForca()-alturaMaximaForca()*0.1);
primeiraLinha.setAttributeNS(null, "stroke-linecap","round");
primeiraLinha.setAttributeNS(null,"style",`stroke:${mainColor};stroke-width:12;`);

telaForca.appendChild(primeiraLinha);


const segundaLinha = document.createElementNS(svgNS,"line");
segundaLinha.setAttributeNS(null,"x1",larguraMaximaForca()-larguraMaximaForca()*0.7);
segundaLinha.setAttributeNS(null,"y1",alturaMaximaForca()-alturaMaximaForca()*0.1);
segundaLinha.setAttributeNS(null,"x2",larguraMaximaForca()-larguraMaximaForca()*0.7);
segundaLinha.setAttributeNS(null,"y2",alturaMaximaForca()-alturaMaximaForca()*0.8);
segundaLinha.setAttributeNS(null, "stroke-linecap","round");
segundaLinha.setAttributeNS(null,"style",`stroke:${mainColor};stroke-width:12;`);

telaForca.appendChild(segundaLinha);

function alturaMaximaForca(){

	var alturaMaximaForca = telaForca.getBoundingClientRect().height;
	return alturaMaximaForca;
}

function larguraMaximaForca(){

	var larguraMaximaForca = telaForca.getBoundingClientRect().width;
	return larguraMaximaForca;
}

