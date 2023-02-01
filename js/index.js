import Palavra from "./Palavra.js";

  var palavra = new Palavra();

  //transforma o html collection em Array
  var tecladoVirtual = Array.from(document.getElementsByClassName("tecla-virtual"));
  
  //adiciona um evento listerner para cada tecla do teclado virtual 
  tecladoVirtual.forEach((tecla)=>{
    tecla.addEventListener("click", (evento)=>{
      var teclaClicada = evento.srcElement;
      palavra.comparar(teclaClicada);
    })
  })

  //escuta entradas do teclado
  document.addEventListener("keydown",(evento)=>{
    var tecla = document.querySelector(`[data-letra="${evento.key}"]`);
    palavra.comparar(tecla);
  });
