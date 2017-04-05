//1- Cibler un element
var p1 = document.querySelector("p");

// 2- Ajouter un ecouteur d'evenement
p1.addEventListener("mouseover", Fonction1);

function Fonction1(){
	this.innerHTML="Cliquez sur moi maintenant";
	this.style.backgroundColor = "orange";
}