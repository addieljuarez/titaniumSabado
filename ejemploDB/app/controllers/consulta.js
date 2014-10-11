var args = arguments[0] || {};

$.cerrar.addEventListener('click', function(e){
	$.consulta.close();
});






var db = require('lib/db');

var resultado = db.consultar();

var data = [];

for (var i=0; i < resultado.length; i++) {
	var row = Titanium.UI.createTableViewRow({
		height:100,
		layout:'vertical',
	});
	
	var labelNombre = Titanium.UI.createLabel({
		text:resultado[i].nombre,
	});
	
	var labelDireccion = Titanium.UI.createLabel({
		text:resultado[i].direccion,
	});
	
	row.add(labelNombre);
	row.add(labelDireccion);
	data.push(row);
	
};

$.tableView.setData(data);
