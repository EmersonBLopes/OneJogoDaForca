const botaoPrimario = document.querySelector("[data-comecar]");
const botaoSecundario = document.querySelector("[data-sugerir]");

botaoPrimario.addEventListener("click", ()  => window.location = "./pages/jogo_da_forca.html");
botaoSecundario.addEventListener("click", () => window.location = "./pages/adicionar.html");
