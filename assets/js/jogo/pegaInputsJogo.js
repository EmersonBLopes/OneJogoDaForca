import ControladorJogo from "./ControladorJogo.js";

let travar = false;
const botaNovoJogo = document.querySelector("[data-novojogo]");
const botaoDesistir = document.querySelector("[data-desistir]");
let controladorJogo = new ControladorJogo();

//transforma o html collection em Array
var tecladoVirtual = Array.from(document.getElementsByClassName("tecla-virtual"));

if(localStorage.getItem("teclado-virtual") === "false") document.querySelector(".principal__teclado-virtual").remove();

//reseta o teclado virtual
function resetaTeclas(){
    tecladoVirtual.forEach((tecla)=>{
      tecla.classList.remove("tecla_desativada");
    })
}

//quando o usuário acerta todas as letras trava os inputs do usuario por 3 segundos
function travarInputs(){
    travar = true;
    setTimeout(() => travar = false, 3000);
}

//adiciona um evento listerner para cada tecla do teclado virtual 
tecladoVirtual.forEach((tecla)=>{
  tecla.addEventListener("click", (evento)=>{
    if(!travar){
      let teclaClicada = evento.srcElement;
      let letra = teclaClicada.dataset.letra;
      //desativa tecla
      teclaClicada.classList.add("tecla_desativada");
      if(controladorJogo.controladorPrincipal(letra)){
        travarInputs();
        resetaTeclas();
      }
    }
  })
})

//escuta entradas do teclado fisico
document.addEventListener("keydown",(evento)=>{
  if(evento.keyCode >= 65 && evento.keyCode <= 90 && !travar){

    let letra 

    if(localStorage.getItem("teclado-virtual") === "true"){
      let tecla = document.querySelector(`[data-letra="${evento.key.toLowerCase()}"]`);
      letra = tecla.dataset.letra;
      //desativa tecla
      tecla.classList.add("tecla_desativada");
    }else{
      letra = evento.key.toLowerCase();
    }
    if(controladorJogo.controladorPrincipal(letra)){
        travarInputs();
        resetaTeclas();
        evento.preventDefault();
    };
  }
});

//ação ao clicar no botao de novo jogo
botaNovoJogo.addEventListener("click",()=>{
  resetaTeclas();
  controladorJogo.trocaPalavra();
});

//ação caso o usuariao clique em desistir
botaoDesistir.addEventListener("click",()=>{
  location.replace("https://emersonblopes.github.io/OneJogoDaForca/index.html");
});
