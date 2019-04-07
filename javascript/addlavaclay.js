var clay = {
	"name": "Lava Clay",
	"Price": 14.99,
	"Qty": 0
};

function start()
{

	if (JSON.parse(localStorage.getItem("clay") == null)) {
		localStorage.setItem("clay", JSON.stringify(clay));
	}
	
	var addClayButton = document.getElementById("addlavaclay");
	addClayButton.addEventListener("click", addLavaClay, false);
	
}

function addLavaClay()
{
	var item = JSON.parse(localStorage.getItem("clay"));
	item.Qty = item.Qty + 1;
	localStorage.setItem("clay", JSON.stringify(item));
}
	


window.addEventListener("load", start, false);