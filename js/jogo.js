import Palavra from "./Palavra.js";

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
      console.log("ganhou!")
    };
  })
})

//escuta entradas do teclado
document.addEventListener("keydown",(evento)=>{
  let tecla = document.querySelector(`[data-letra="${evento.key}"]`);
  let letra = tecla.dataset.letra;
  //desativa tecla
  tecla.classList.add("tecla_desativada");
  if(palavra.comparar(letra)){
      resetaTeclas();
      console.log("ganhou!")
  };
});

botaoDesistir.addEventListener("click",()=>{
  location.replace("https://emersonblopes.github.io/OneJogoDaForca/index.html");
})
