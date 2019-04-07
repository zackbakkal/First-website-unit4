var arganOil = {
	"name": "Argan Oil",
	"Price": 24.99,
	"Qty": 0
};

function start()
{
	if (JSON.parse(localStorage.getItem("arganOil") == null)) {
		localStorage.setItem("arganOil", JSON.stringify(arganOil));
	}
	
	var addArganButton = document.getElementById("addarganoil");
	addArganButton.addEventListener("click", addArganOil, false);
	
}

function addArganOil()
{
	var item = JSON.parse(localStorage.getItem("arganOil"));
	item.Qty = item.Qty + 1;
	localStorage.setItem("arganOil", JSON.stringify(item));
}

window.addEventListener("load", start, false);