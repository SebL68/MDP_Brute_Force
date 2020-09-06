/*******************
 * Expérimentation de création d'une liste de mots de passe.
 * On se rend compte qu'il y a beaucoup trop de combinaisons possible pour faire un brute force.
 * ****************/

var fromChar = 33; // Char de début
var toChar = 127; // Char de fin
var nbChar = 8; // Taille du mot de passe
var charTable = [];

for(var i=0;i<nbChar;i++){
	charTable.push(fromChar);
}

//On se limite aux 1000 premières combinaisons.
for(var i=0 ; i<1000 ; i++){
	addChar(0);
	console.log(String.fromCharCode(...charTable));
}

console.log("Nombre de combinaisons possible :" + Math.pow(toChar-fromChar, nbChar));

function addChar(i){
	if(charTable[i] == toChar){
		charTable[i] = fromChar;
		addChar(i+1);
	}else{
		charTable[i]++;
	}
}
