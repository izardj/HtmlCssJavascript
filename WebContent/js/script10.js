document.getElementById("gros_titre").innerHTML += " HTML";
document.querySelector("a").href = "http://fr.wikipedia.org";
document.querySelector("p").className = "para1";
document.getElementById("gros_titre").className = "titre";
document.querySelector("img").src = "img/chien.jpg";

var newPara = document.createElement("p");
newPara.id="nouveau";

var texte = document.createTextNode("Texte inséré!!");

newPara.appendChild(texte);
document.body.appendChild(newPara);

// creer un element
var newPara2 = document.createElement("p");
var texte = document.createTextNode("Un premier paragraphe inséré avant!!");
newPara2.appendChild(texte);
document.body.insertBefore(newPara2, document.querySelector("p"));

// supprimer un element
document.body.removeChild(document.querySelector("h2"));

// aligner a droite
document.querySelector("h3").className = "right";