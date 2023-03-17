export default class Requisicao{

  #URL = "https://apipalavrasspring-production.up.railway.app/";

  solicitarPalavrasAleatorias(numeroDePalavras){

    const httpRequest = new XMLHttpRequest();
    let resposta;
    httpRequest.onload = () => resposta = httpRequest.response;
    httpRequest.open("GET",this.#URL+`palavras-aleatorias?numeroMaximo=${numeroDePalavras}`,false);
    httpRequest.send();

    return JSON.parse(resposta);
  }

  async adicionarPalavra(palavra){
    const resposta = await Promise.resolve(fetch(this.#URL+"solicitar",{ method: "POST", headers:{ "Content-Type" : "text/plain" }, body: palavra})
      .then((promise) => promise.text())
      .then((textoResposta) => textoResposta)
    );

    return resposta;
  }
}
