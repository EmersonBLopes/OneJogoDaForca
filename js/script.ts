var palavra:string = "calopsita";
var tentativas:number = 9;
var acertos:Array<number> = new Array(palavra.length);
var letra:string;

for(var i=0; i<acertos.length; i++){
	acertos[i] = 0;
}

console.log(i);

function comparar(letra:string):boolean{

	var acertou:boolean = false;
	var ganhou:boolean = true;

	for(i=0; i<palavra.length; i++){

		if(palavra[i] == letra){

			acertos[i] = 1;	
			acertou = true;
		}					
	}		

	if(!acertou){
		tentativas--;
	}
	
	for(i=0;i<acertos.length; i++){
		if(acertos[i] != 1){
			ganhou = false;
		}
	}

	return ganhou;
}

do{
	letra = prompt("digite uma letra:");

	if(comparar(letra)){
		console.log("parabens, voce ganhou!");
	}else if(tentativas==0){
		console.log("voce perdeu");
	}

	console.log(acertos,tentativas);

}while(tentativas>0);
