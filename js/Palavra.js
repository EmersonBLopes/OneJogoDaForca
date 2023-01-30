class Palavra{

  #palavras;
  #palavraAtual;
  #tentativas;
  #acertos;
  #letra;
  #historicoDeLetras;

var acertos = new Array(palavra.length);

  constructor(){
    this.#palavras = new array();
    this.#palavraAtual = "Alura";
    this.#tentativas = 9;
    this.#acertos = new array(palavraAtual.length);
    for (var i = 0; i < acertos.length; i++) {
        acertos[i] = 0;
    }
    this.historicoDeLetras = array();
  }

  set acertos(index){
    
    this.#acertos[index] = 1;
  }

  set palavraAtual(){

  }

#verificaHistorico(letra){

  //variavel que armazena o resultado da consulta
	var resultado = false;
  var botao = document.getElementById(`tecla-${letra}`);

  //verifica se se a letra já foi usada
	for(var i=0; i < historicoDeLetras.length; i++){
		if(this.#historicoDeLetras[i] == letra){
			resultado = !resultado;
			break;
		}
	}

  //caso a letra não tenha sido usada a adicionara ao histórico.
	if(!resultado){
    
		historicoDeLetras.push(letra);

    //altera a classe do botão para desativado
		botao.classList.toggle("tecla_desativada");
    
	}

	return resultado;
}

//verifica se a letra existe na palavra, caso exista retorna true 
#verificaLetraPalavra(letra){

		for (i = 0; i < palavra.length; i++) {
			if (palavraAtual[i] == letra) {
        this.acerto(i);
				return true;
			}
		}
    return false;
}

//verifica se todas as letras foram acertadas
#verificaGanhou(){

    //confere todos os acertos
		for (i = 0; i < acertos.length; i++) {
			if (this.#acertos[i] != 1) {
				return false;
			}
		}

    return true;
}

comparar(letra) {

    var acertou;
    var ganhou;
  
  //verifica se a letra consta no histórico se falso entra dentro do if
	if(!this.#verificaHistorico(letra)){
    
    //verifica se a letra consta na palavra;
    acertou = this.#verificaLetraPalavra(letra);
    
		if (!acertou) {
			this.#tentativas--;
			desenhar();
		}else{
			//escreveLetra();
		}

    ganhou = this.#verificaGanhou();

    return ganhou;
}
}
