const mainColor = "#0A3871";
const backgroundColor = "#F3F5FC";

var telaForca = document.getElementById("quadro-forca");
const svgNS = "http://www.w3.org/2000/svg";

var palavra = "calopsita";
var historicoDeLetras = new Array();
var tentativas = 9;
var letra;
//cada indice do array acertos representa uma letra da palavra secreta caso 0, falso a letra nao foi descoberta. caso 1 a letra foi descoberta 
var acertos = new Array(palavra.length);
for (var i = 0; i < acertos.length; i++) {
    acertos[i] = 0;
}


function desenhaLinhaBase(){
	const primeiraLinha = document.createElementNS(svgNS,"line");
	primeiraLinha.setAttributeNS(null,"x1",larguraMaximaForca()-larguraMaximaForca()*0.95);
	primeiraLinha.setAttributeNS(null,"y1",alturaMaximaForca()-alturaMaximaForca()*0.1);
	primeiraLinha.setAttributeNS(null,"x2",larguraMaximaForca()*0.95);
	primeiraLinha.setAttributeNS(null,"y2",alturaMaximaForca()-alturaMaximaForca()*0.1);
	primeiraLinha.setAttributeNS(null, "stroke-linecap","round");
	primeiraLinha.setAttributeNS(null,"style",`stroke:${mainColor};stroke-width:12;`);

	telaForca.appendChild(primeiraLinha);
}


function desenhaSegundaLinha(){
	const segundaLinha = document.createElementNS(svgNS,"line");
	segundaLinha.setAttributeNS(null,"x1",larguraMaximaForca()-larguraMaximaForca()*0.8);
	segundaLinha.setAttributeNS(null,"y1",alturaMaximaForca()-alturaMaximaForca()*0.1);
	segundaLinha.setAttributeNS(null,"x2",larguraMaximaForca()-larguraMaximaForca()*0.8);
	segundaLinha.setAttributeNS(null,"y2",alturaMaximaForca()-alturaMaximaForca()*0.9);
	segundaLinha.setAttributeNS(null, "stroke-linecap","round");
	segundaLinha.setAttributeNS(null,"style",`stroke:${mainColor};stroke-width:12;`);

	telaForca.appendChild(segundaLinha);
}

function desenhaTerceiraLinha(){
	const terceiraLinha = document.createElementNS(svgNS,"line");
	terceiraLinha.setAttributeNS(null,"x1",larguraMaximaForca()-larguraMaximaForca()*0.8);
	terceiraLinha.setAttributeNS(null,"y1",alturaMaximaForca()-alturaMaximaForca()*0.9);
	terceiraLinha.setAttributeNS(null,"x2",larguraMaximaForca()-larguraMaximaForca()*0.4);
	terceiraLinha.setAttributeNS(null,"y2",alturaMaximaForca()-alturaMaximaForca()*0.9);
	terceiraLinha.setAttributeNS(null, "stroke-linecap","round");
	terceiraLinha.setAttributeNS(null,"style",`stroke:${mainColor};stroke-width:12;`);

	telaForca.appendChild(terceiraLinha);
}

function desenhaQuartaLinha(){
	const quartaLinha = document.createElementNS(svgNS,"line");
	quartaLinha.setAttributeNS(null,"x1",larguraMaximaForca()-larguraMaximaForca()*0.4);
	quartaLinha.setAttributeNS(null,"y1",alturaMaximaForca()-alturaMaximaForca()*0.9);
	quartaLinha.setAttributeNS(null,"x2",larguraMaximaForca()-larguraMaximaForca()*0.4);
	quartaLinha.setAttributeNS(null,"y2",alturaMaximaForca()-alturaMaximaForca()*0.8);
	quartaLinha.setAttributeNS(null, "stroke-linecap","round");
	quartaLinha.setAttributeNS(null,"style",`stroke:${mainColor};stroke-width:12;`);

	telaForca.appendChild(quartaLinha);
}

function desenhaCabeca(){
	const cabeca = document.createElementNS(svgNS,"circle");
	cabeca.setAttributeNS(null,"cx",larguraMaximaForca()-larguraMaximaForca()*0.4);
	cabeca.setAttributeNS(null,"cy",alturaMaximaForca()-alturaMaximaForca()*0.7);
	cabeca.setAttributeNS(null,"r",alturaMaximaForca()-alturaMaximaForca()*0.92);
	cabeca.setAttributeNS(null,"style",`stroke:${mainColor};stroke-width:12;fill:${backgroundColor};`);

	telaForca.appendChild(cabeca);
}

function desenhaTronco(){
	const tronco = document.createElementNS(svgNS,"line");
	tronco.setAttributeNS(null,"x1",larguraMaximaForca()-larguraMaximaForca()*0.4);
	tronco.setAttributeNS(null,"y1",alturaMaximaForca()-alturaMaximaForca()*0.62);
	tronco.setAttributeNS(null,"x2",larguraMaximaForca()-larguraMaximaForca()*0.4);
	tronco.setAttributeNS(null,"y2",alturaMaximaForca()-alturaMaximaForca()*0.39);
	tronco.setAttributeNS(null, "stroke-linecap","round");
	tronco.setAttributeNS(null,"style",`stroke:${mainColor};stroke-width:12;`);

	telaForca.appendChild(tronco);
}

function desenhaPernaDireita(){
	const pernaDireita = document.createElementNS(svgNS,"line");
	pernaDireita.setAttributeNS(null,"x1",larguraMaximaForca()-larguraMaximaForca()*0.4);
	pernaDireita.setAttributeNS(null,"y1",alturaMaximaForca()-alturaMaximaForca()*0.39);
	pernaDireita.setAttributeNS(null,"x2",larguraMaximaForca()-larguraMaximaForca()*0.45);
	pernaDireita.setAttributeNS(null,"y2",alturaMaximaForca()-alturaMaximaForca()*0.20);
	pernaDireita.setAttributeNS(null, "stroke-linecap","round");
	pernaDireita.setAttributeNS(null,"style",`stroke:${mainColor};stroke-width:12;`);

	telaForca.appendChild(pernaDireita);
}

function desenhaPernaEsquerda(){
	const pernaEsquerda = document.createElementNS(svgNS,"line");
	pernaEsquerda.setAttributeNS(null,"x1",larguraMaximaForca()-larguraMaximaForca()*0.4);
	pernaEsquerda.setAttributeNS(null,"y1",alturaMaximaForca()-alturaMaximaForca()*0.39);
	pernaEsquerda.setAttributeNS(null,"x2",larguraMaximaForca()-larguraMaximaForca()*0.35);
	pernaEsquerda.setAttributeNS(null,"y2",alturaMaximaForca()-alturaMaximaForca()*0.20);
	pernaEsquerda.setAttributeNS(null, "stroke-linecap","round");
	pernaEsquerda.setAttributeNS(null,"style",`stroke:${mainColor};stroke-width:12;`);

	telaForca.appendChild(pernaEsquerda);
}

function desenhaBracoDireito(){
	const bracoDireito = document.createElementNS(svgNS,"line");
	bracoDireito.setAttributeNS(null,"x1",larguraMaximaForca()-larguraMaximaForca()*0.4);
	bracoDireito.setAttributeNS(null,"y1",alturaMaximaForca()-alturaMaximaForca()*0.55);
	bracoDireito.setAttributeNS(null,"x2",larguraMaximaForca()-larguraMaximaForca()*0.48);
	bracoDireito.setAttributeNS(null,"y2",alturaMaximaForca()-alturaMaximaForca()*0.35);
	bracoDireito.setAttributeNS(null, "stroke-linecap","round");
	bracoDireito.setAttributeNS(null,"style",`stroke:${mainColor};stroke-width:12;`);

	telaForca.appendChild(bracoDireito);
}

function desenhaBracoEsquerdo(){
	const bracoEsquerdo = document.createElementNS(svgNS,"line");
	bracoEsquerdo.setAttributeNS(null,"x1",larguraMaximaForca()-larguraMaximaForca()*0.4);
	bracoEsquerdo.setAttributeNS(null,"y1",alturaMaximaForca()-alturaMaximaForca()*0.55);
	bracoEsquerdo.setAttributeNS(null,"x2",larguraMaximaForca()-larguraMaximaForca()*0.32);
	bracoEsquerdo.setAttributeNS(null,"y2",alturaMaximaForca()-alturaMaximaForca()*0.35);
	bracoEsquerdo.setAttributeNS(null, "stroke-linecap","round");
	bracoEsquerdo.setAttributeNS(null,"style",`stroke:${mainColor};stroke-width:12;`);

	telaForca.appendChild(bracoEsquerdo);
}

function alturaMaximaForca(){

	var alturaMaximaForca = telaForca.getBoundingClientRect().height;
	return alturaMaximaForca;
}

function larguraMaximaForca(){

	var larguraMaximaForca = telaForca.getBoundingClientRect().width;
	return larguraMaximaForca;
}

desenhaLinhaBase();

function desenhar(){

switch(tentativas){

	case 8:
		desenhaSegundaLinha();
		break;

	case 7:
		desenhaTerceiraLinha();
		break;

	case 6:
		desenhaQuartaLinha();
		break;

	case 5:
		desenhaCabeca();
		break;

	case 4:
		desenhaTronco();
		break;

	case 3:
		desenhaPernaDireita();
		break;

	case 2:
		desenhaPernaEsquerda();
		break;
	case 1:
		desenhaBracoDireito();
		break;

	case 0:
		desenhaBracoEsquerdo();
		break;
}
}

function verificaHistorico(letra){

	var resultado = false;
	var temNoHistorico = false;

	for(var i=0; i < historicoDeLetras.length; i++){
		if(historicoDeLetras[i] == letra){
			resultado = !resultado;
			temNoHistorico = !temNoHistorico;
			break;
		}
	}

	if(!temNoHistorico){
		historicoDeLetras.push(letra);
	}
	console.log(historicoDeLetras);

	return resultado;
}

function comparar(letra) {

    var acertou = false;
    var ganhou = true;
	var botao = document.getElementById(`tecla-${letra}`);

	if(!verificaHistorico(letra)){

		botao.classList.toggle("tecla-desativada");

		for (i = 0; i < palavra.length; i++) {
			if (palavra[i] == letra) {
				acertos[i] = 1;
				acertou = true;
			}
		}
		if (!acertou) {
			tentativas--;
			desenhar();
		}
		for (i = 0; i < acertos.length; i++) {
			if (acertos[i] != 1) {
				ganhou = false;
			}
		}
	}else{
		ganhou = !ganhou;
	}
    return ganhou;
}
