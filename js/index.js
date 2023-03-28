import Requisicao from "./API/Requisicao.js";

const solicitador = new Requisicao();

const botaoPrimario = document.querySelector("[data-comecar]");
const botaoSecundario = document.querySelector("[data-sugerir]");

const disponibilidadeDoServidor = await solicitador.verificarConexao();

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

botaoPrimario.addEventListener("click", ()  => window.location = "./pages/jogo_da_forca.html");
botaoSecundario.addEventListener("click", () => window.location = "./pages/adicionar.html");

