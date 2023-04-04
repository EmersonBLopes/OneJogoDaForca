import Requisicao from "./API/Requisicao.js";

const solicitador = new Requisicao();

//captura botoes de navegação
const botaoPrimario = document.querySelector("[data-comecar]");
const botaoSecundario = document.querySelector("[data-sugerir]");

//verifica se o servidor está disponível
const disponibilidadeDoServidor = await solicitador.verificarConexao();

//configuracoes padroes caso o usuário nunca tenha configurado o jogo
if(localStorage.length == 0){
  localStorage.setItem("teclado-virtual", true);
  localStorage.setItem("audio", true);
}

//caso o servidor não esteja disponível exibe um alerta para o usuário
if(!disponibilidadeDoServidor){

  const avisoServidor = document.createElement("div");
  const mensagemServidor = document.createElement("span");
  const iconeAviso = document.createElement("i");
  const secaoPrincipal = document.querySelector("[data-principal]");
  
  iconeAviso.classList.add("fa-solid");
  iconeAviso.classList.add("fa-triangle-exclamation");

  mensagemServidor.innerHTML = " Servidor indisponível"

  avisoServidor.append(iconeAviso);
  avisoServidor.append(mensagemServidor);

  avisoServidor.classList.add("principal__mensagem-servidor");
  secaoPrincipal.prepend(avisoServidor);
}

//redireciona o usuário para os respectivos links caso click nos botoes de navegação
botaoPrimario.addEventListener("click", ()  => window.location = "./assets/pages/jogo_da_forca.html");
botaoSecundario.addEventListener("click", () => window.location = "./assets/pages/adicionar.html");

