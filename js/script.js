
const Buttons = {
	spheres: [...document.querySelectorAll(".button-sphere")],
	skills: [...document.querySelectorAll(".button-skill")]
  }


Buttons.skills.at(0).onclick = function(clickEvent){

}

Buttons.skills.at(1).onclick = function(clickEvent){

}

document.addEventListener("keydown", ({key}) => {
	
	const table = {
		"q": Buttons.spheres.at(0),
		"w": Buttons.spheres.at(1),
		"e": Buttons.spheres.at(2),
		"d": Buttons.skills.at(0),
		"f": Buttons.skills.at(1)
	};

	if (key in table === false){
		return;
	}

	table[key].click();
})

const Invoker = {
	casted: [],
	castThreeSphere: (spheresString) => {
		console.log (spheresString)
		Invoker.casted.length = 0;
		const skillsTable = {"QQQ": "cold snap"};
		
		alert(skillsTable[spheresString]);

	},
	castSphere: (content) => {
	   Invoker.casted.push(content);
	   if (Invoker.casted.length === 3){
			const castedString = Invoker.casted.join("");
			Invoker.castThreeSphere(castedString);
	   }
	}
  }
  
  Buttons.spheres.forEach(node => {
  	const content = node.querySelector("span") .textContent;
  	node.onclick = Invoker.castSphere.bind(null, content);
  }); 

