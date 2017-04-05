//1- Cibler un element
var p1 = document.querySelector("p");

// 2- Ajouter un ecouteur d'evenement
p1.addEventListener("mouseover", Fonction1);
p1.addEventListener("mouseout", Reset1);
p1.addEventListener("mousedown", Fonction2);
p1.addEventListener("mouseup", Reset2);

function Fonction1() {
	this.innerHTML = "Cliquez sur moi maintenant";
	this.style.backgroundColor = "orange";
}
function Reset1() {
	this.innerHTML = "Passer sur moi";
	this.style.backgroundColor = "";
}
function Fonction2() {
	this.innerHTML = "Bravo";
	this.className = "styleDown";
}
function Reset2() {
	this.innerHTML = "Passer sur moi";
	this.className = "styleUp";
}