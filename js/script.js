
const Buttons = {
	spheres: [...document.querySelectorAll(".button-sphere")],
	skills: [...document.querySelectorAll(".button-skill")]
  }

Buttons.spheres.at(0).onclick = function(clickEvent){
console.log (clickEvent.type)
	
}

Buttons.spheres.at(1).onclick = function(clickEvent){

}

Buttons.spheres.at(2).onclick = function(clickEvent){

}

document.addEventListener("keydown", ({key}) => {
	
	const table = {
		"q": Buttons.spheres.at(0),
		"w": Buttons.spheres.at(1),
		"e": Buttons.spheres.at(2)
	};

	if (key in table === false){
		return;
	}

	table[key].click();
})

console.log (Buttons.skills)