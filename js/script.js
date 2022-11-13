
const buttons = [...document.querySelectorAll(".button-sphere")];

buttons.at(0).onclick = function(){
	
}

buttons.at(1).onclick = function(){

}

buttons.at(2).onclick = function(){

}

document.addEventListener("keydown", ({key}) => {
	
	const table = {
		"q": buttons.at(0),
		"w": buttons.at(0),
		"e": buttons.at(0)
	};

	if (key in table === false){
		return;
	}

	table[key].click();
})