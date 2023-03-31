const audio = document.querySelector("#audio");
const tecladoVirtual = document.querySelector("#teclado-virtual");

audio.checked = audio.checked != null ? localStorage.getItem("audio") === "true" : true;
tecladoVirtual.checked = tecladoVirtual.checked != null ? localStorage.getItem("teclado-virtual") === "true" : true;


audio.addEventListener("click",() => localStorage.setItem("audio",audio.checked));
tecladoVirtual.addEventListener("click", () => localStorage.setItem("teclado-virtual",tecladoVirtual.checked));
