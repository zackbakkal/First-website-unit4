var soap = {
	"name": "Exfoliating Soap",
	"Price": 19.99,
	"Qty": 0
};

function start()
{
	if (JSON.parse(localStorage.getItem("soap") == null)) {
		localStorage.setItem("soap", JSON.stringify(soap));
	}
	
	var addSoapButton = document.getElementById("addblacksoap");
	addSoapButton.addEventListener("click", addBlackSoap, false);
}
function addBlackSoap()
{
	var item = JSON.parse(localStorage.getItem("soap"));
	item.Qty = item.Qty + 1;
	localStorage.setItem("soap", JSON.stringify(item));
}

window.addEventListener("load", start, false);