let caraMoneda= ;
let cruzMoneda= ;

var caraMoneda = Math.floor(Math.random() * 2);

while(caraMoneda){
	console.log("¡Cara! Lanza de nuevo...");
	var caraMoneda = Math.floor(Math.random() * 2);
}
console.log("¡Cruz! Lanzamiento concluido.");