import tratarInput from "./tratamentoInput.js";
const input = document.querySelector("#texto");
const botaoSalvar = document.querySelector("[data-salvar]");

input.addEventListener("keydown",(evento) => {
  if(evento.which === 13){
    tratarInput(input);
  } 
})

botaoSalvar.addEventListener("click",(evento)=>{
  evento.preventDefault();
  tratarInput(input);
})
