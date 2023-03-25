import Requisicao from "./API/Requisicao.js";

const solicitador = new Requisicao();

const botaoPrimario = document.querySelector("[data-comecar]");
const botaoSecundario = document.querySelector("[data-sugerir]");

console.log( await solicitador.verificarConexao());

botaoPrimario.addEventListener("click", ()  => window.location = "./pages/jogo_da_forca.html");
botaoSecundario.addEventListener("click", () => window.location = "./pages/adicionar.html");

