import Palavra from "./Palavra.js";

const botaNovoJogo = document.querySelector("[data-novojogo]");
const botaoDesistir = document.querySelector("[data-desistir]");
var palavra = new Palavra();

//transforma o html collection em Array
var tecladoVirtual = Array.from(document.getElementsByClassName("tecla-virtual"));

function resetaTeclas(){
    tecladoVirtual.forEach((tecla)=>{
      tecla.classList.remove("tecla_desativada");
    })
}

//adiciona um evento listerner para cada tecla do teclado virtual 
tecladoVirtual.forEach((tecla)=>{
  tecla.addEventListener("click", (evento)=>{
    let teclaClicada = evento.srcElement;
    let letra = teclaClicada.dataset.letra;
    //desativa tecla
    teclaClicada.classList.add("tecla_desativada");
    if(palavra.comparar(letra)){
      resetaTeclas();
    };
  })
})

//escuta entradas do teclado
document.addEventListener("keydown",(evento)=>{
  if(evento.keyCode >= 65 && evento.keyCode <= 90){
    let tecla = document.querySelector(`[data-letra="${evento.key.toLowerCase()}"]`);
    let letra = tecla.dataset.letra;
    //desativa tecla
    tecla.classList.add("tecla_desativada");
    if(palavra.comparar(letra)){
        resetaTeclas();
        evento.preventDefault();
    };
  }
});

botaNovoJogo.addEventListener("click",()=>{
  resetaTeclas();
  palavra.trocaPalavra();
});

botaoDesistir.addEventListener("click",()=>{
  location.replace("https://emersonblopes.github.io/OneJogoDaForca/index.html");
});
