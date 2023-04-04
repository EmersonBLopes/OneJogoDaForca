import tratarInput from "./tratamentoInput.js";
const input = document.querySelector("#texto");
const botaoSalvar = document.querySelector("[data-salvar]");
const botaoCancelar = document.querySelector("[data-cancelar]");

input.addEventListener("keydown",(evento) => {
  if(evento.which === 13){
    tratarInput(input);
  } 
})

botaoSalvar.addEventListener("click",(evento)=>{
  evento.preventDefault();
  tratarInput(input);
})

botaoCancelar.addEventListener("click",(evento)=>{
  evento.preventDefault();
  location.replace("https://emersonblopes.github.io/OneJogoDaForca/index.html");
})
