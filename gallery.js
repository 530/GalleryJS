/* Jeremiah Howell */
var chico=["Bear Hole","Covered Bridge","Upper Park","In N Out","Old 32"];
var current;

function shuffleGallery() {
  var randomIndex;
  do {
  	randomIndex = Math.floor(Math.random() * chico.length);
  }
  while (randomIndex==current);
	current = randomIndex;
	
  console.log(chico[current]);
}