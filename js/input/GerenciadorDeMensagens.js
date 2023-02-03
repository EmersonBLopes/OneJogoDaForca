export default class GerenciadorDeMensagens{

  #mensagensDeTratamento = [
    "Digite uma palavra",
    "Este campo não pode estar vazio",
    "A palavra não pode conter números",
    "No minimo três caracteres",
    "Limite de caracter foi ultrapassado",
    "Sugestão de palavra enviada =)" 
  ];
    
  #input;

  alteraMensagem(indexDaMensagem){
    this.#input.value = ""
    this.#input.setAttribute("placeholder",this.#mensagensDeTratamento[indexDaMensagem]);
    this.#input.classList.remove("entrada-de-texto");
    if(indexDaMensagem != 5){
      this.#input.classList.add("entrada-de-texto_erro");
    }else{
      this.#input.classList.add("entrada-de-texto_sucesso");
    }
  }

  get mensagemPadrao(){

    this.#input.setAttribute("placeholder", this.#mensagensDeTratamento[0])
    this.#input.classList.remove("entrada-de-texto_erro");
    this.#input.classList.remove("entrada-de-texto_sucesso");
    this.#input.classList.add("entrada-de-texto");
  }

  constructor(input){
    this.#input = input; 
  }

}
