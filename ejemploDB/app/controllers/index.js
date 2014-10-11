

var db = require('lib/db');

$.botonEnviar.addEventListener('click', function(e){
	if ($.inputNombre.value != '' && $.inputDireccion.value != '' && $.inputTelefono.value != '' && $.inputEmail.value != '') {
		
		db.agregar($.inputNombre.value, $.inputDireccion.value, $.inputTelefono.value, $.inputEmail.value);
		var consulta = Alloy.createController('consulta').getView();
		consulta.open();
		
	}else{
		alert('no dejes campos vacios');
	}
	
	
});





$.index.open();
