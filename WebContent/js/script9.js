var titre = document.getElementById("gros_titre");
alert(titre);

var tableau = document.getElementsByTagName("p");
alert("Notre page contient " + tableau.length + " paragraphes");

var tableau2 = document.getElementsByClassName("para");
alert("Notre page contient " + tableau2.length + " élément(s) de class para");

var lien = document.querySelector("p a");
alert(lien);

var tableau3 = document.querySelectorAll(".para");
alert("Notre page contient " + tableau3.length + " élément(s) de class para");