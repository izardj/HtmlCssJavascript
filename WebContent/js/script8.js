// fonction normale
function multiplication(x, y) {
	return x * y;
}

// fonction anonyme
var carre = function(x) {
	return x * x;
}

var a = prompt("Entrer le premier nombre");
var b = prompt("Entrer le deuxième nombre");

// appel d'une fonction normale
alert(multiplication(a, b));


var c = prompt("Saisir une valeur");
//appel d'une fonction anonyme
alert(carre(c));