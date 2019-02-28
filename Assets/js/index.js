function toogle() {
	var el = document.getElementById("style");
	if (el.href.match("Assets/css/day.css")) {
		el.href = "Assets/css/night.css";
	} else {
		el.href = "Assets/css/day.css";
	}
}


"use strict";
const urlXP = "https://demo1915525.mockable.io/expprofissional";
const urlHAB = "https://demo1915525.mockable.io/habtecnicas";

function httpGetAsync(theUrl, callback) {
	let xmlHttp = new XMLHttpRequest();
	xmlHttp.onreadystatechange = function () {
		if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
			callback(xmlHttp.responseText);
	}
	xmlHttp.open("GET", theUrl, true); // true for asynchronous 
	xmlHttp.send(null);
}



httpGetAsync(urlXP, (resp) => {
	var obj = JSON.parse(resp);
	var result = "";
	obj.respEP.forEach(x => {
		result = result + '<h3>Período: ' + x.periodo + ' </h3>';
		result = result + '<h3>Empresa: ' + x.empresa + "</h3>";
		result = result + '<h3>Cargo: ' + x.cargo + "</h3>";
		result = result + '<h3>Funções: ' + x.funcoes + "</h3>" + "<br>";
	});
	document.getElementById("emp1").innerHTML = result;
});

httpGetAsync(urlHAB, (resp) => {
	var obj = JSON.parse(resp);
	var result = "";
	obj.respHT.forEach(x => {
		result = result + "<h3>•" + x.info + "</h3>";
		result = result + "<h3>•" + x.office + "</h3>";
		result = result + "<h3>•" + x.node + "</h3>";
		result = result + "<h3>•" + x.css + "</h3>";
		result = result + "<h3>•" + x.js + "</h3>";
		result = result + "<h3>•" + x.html + "</h3>";
	});
	document.getElementById("hab").innerHTML = result;
});

