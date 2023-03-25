export default class Requisicao{

  //#URL = "https://apipalavrasspring-production.up.railway.app/";
  #URL = "http://localhost:8080/";

  /**
   *@method solicitarPalavrasAleatorias solicita um número especifico de palavras ao servidor
   *@param {number} numeroDePalavras quantidade maxíma de palavras que será retornada pelo servidor
   *@return {Array} array de objetos
   */
  solicitarPalavrasAleatorias(numeroDePalavras){

    const httpRequest = new XMLHttpRequest();
    let resposta;
    httpRequest.onload = () => resposta = httpRequest.response;
    httpRequest.open("GET",this.#URL+`palavras-aleatorias?numeroMaximo=${numeroDePalavras}`,false);
    httpRequest.send();

    return JSON.parse(resposta);
  }

  /**
   * @method adicionarPalavra envia a palavra recebida pelo input para o servidor
   * @param {string} palavra palavra a qual será enviada para o servidor
   * @return {string} mensagem de retorno do servidor
   */
  async adicionarPalavra(palavra){
    const resposta = await Promise.resolve(fetch(this.#URL+"solicitar",{ method: "POST", headers:{ "Content-Type" : "text/plain" }, body: palavra})
      .then((promise) => promise.text())
      .then((textoResposta) => textoResposta)
    );

    return resposta;
  }

  /**
   * @method verificarConexao verifica a conexão com o servidor
   * @return retorna verdadeiro se conseguir estabelecer conexão com o sevirdor senão retorna false
   */
  async verificarConexao(){
  
   let resposta = true; 

    try{
      await fetch(this.#URL+"palavras-aleatorias");
    }catch{
      resposta = !resposta;
    }

  return resposta;
  }
}
