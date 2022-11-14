
const Buttons = {
	spheres: [...document.querySelectorAll(".button-sphere")],
	skills: [...document.querySelectorAll(".button-spell")],
	special: {
		invoke: document.querySelector(".button-invoke")
	}
}


Buttons.skills.at(0).onclick = function(clickEvent){

}

Buttons.skills.at(1).onclick = function(clickEvent){

}

Buttons.special.invoke.onclick = function(clickEvent){
	const spheresString = Invoker.casted.join("");
	Invoker.invoke(spheresString);
}

document.addEventListener("keydown", ({key}) => {
	
	const table = {
		"q": Buttons.spheres.at(0),
		"w": Buttons.spheres.at(1),
		"e": Buttons.spheres.at(2),
		"d": Buttons.skills.at(0),
		"f": Buttons.skills.at(1),
		"r": Buttons.special.invoke,
	};

	if (key in table === false){
		return;
	}

	table[key].click();
})

const Invoker = {
	casted: [],
	invoke: (spheresString) => {
		Invoker.casted.length = 0;
		const skillsTable = {"QQQ+R": "Cold Snap"};
		const skillsTable = {"QQW+R": "Ghost Walk"};
		const skillsTable = {"QQE+R": "Ice Walk"};
		const skillsTable = {"WWW+R": "E.M.P"};
		const skillsTable = {"WWQ+R": "Tornado"};
		const skillsTable = {"WWE+R": "Alacrity"};
		const skillsTable = {"EEE+R": "Sun Strike"};
		const skillsTable = {"EEQ+R": "Forge Spirit"};
		const skillsTable = {"EEW+R": "Chaos Meteor"};
		const skillsTable = {"QWE+R": "Deafeninig Blast"};
		

		alert(skillsTable[spheresString]);


	},
	castSphere: (content) => {
	   Invoker.casted.push(content);
	   while (Invoker.casted.length > 3){
			Invoker.casted.shift();
	   }
		console.log(Invoker.casted);
	},
	createSpell: () => {

	}
}
  
Buttons.spheres.forEach(node => {
  	const content = node.querySelector("span") .textContent;
  	node.onclick = Invoker.castSphere.bind(null, content);
}); 

