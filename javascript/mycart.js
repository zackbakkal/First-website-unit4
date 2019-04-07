var rows = "";

function start()
{
	var arganOil = JSON.parse(localStorage.getItem("arganOil"));
	var soap = JSON.parse(localStorage.getItem("soap"));
	var clay =JSON.parse(localStorage.getItem("clay"));
	var totalQty = 0;
	var total = 0;
	
	if(arganOil.Qty > 0) {
		var row1;
		row1 = "<tr><td>" + arganOil.name + "</td>" +
				"<td>" + arganOil.Price + "</td>" +
				"<td>" + arganOil.Qty + "</td>" +
				"<td>" + (arganOil.Price * arganOil.Qty).toFixed(2) + "</td></tr>";
				
		rows += row1;
		totalQty += arganOil.Qty;
		total += arganOil.Qty * arganOil.Price;
	}

	if(soap.Qty > 0) {
		var row2;
		row2 = "<tr><td>" + soap.name + "</td>" +
				"<td>" + soap.Price + "</td>" +
				"<td>" + soap.Qty + "</td>" +
				"<td>" + (soap.Price * soap.Qty).toFixed(2) + "</td></tr>";
		rows += row2;
		totalQty += soap.Qty;
		total += soap.Qty * soap.Price;
	}
	
	if(clay.Qty > 0) {
		var row3;
		row3 = "<tr><td>" + clay.name + "</td>" +
				"<td>" + clay.Price + "</td>" +
				"<td>" + clay.Qty + "</td>" +
				"<td>" + (clay.Price * soap.Qty).toFixed(2) + "</td></tr>";
		rows += row3;
		totalQty += clay.Qty;
		total += clay.Qty * clay.Price;
	}
	
	var content = document.getElementById("tablebody");
	content.innerHTML = rows;
	
	var tqty = document.getElementById("totalqty");
	tqty.innerHTML = totalQty;
	
	var tprice = document.getElementById("totalprice");
	tprice.innerHTML = total.toFixed(2);
}

window.addEventListener("load", start, false);