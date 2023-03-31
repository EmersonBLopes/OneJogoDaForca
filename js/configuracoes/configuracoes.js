const audio = document.querySelector("#audio");

audio.checked = audio.checked != null ? localStorage.getItem("audio") === "true" : true;


audio.addEventListener("click",() => localStorage.setItem("audio",audio.checked));
