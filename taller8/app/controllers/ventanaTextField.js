var args = arguments[0] || {};

$.botonCerrar.addEventListener('click', function(){
	$.ventanaTextField.close();
});



$.input.addEventListener('change', function(e){
	// alert('prueba');
	Ti.API.info('1==='+$.input.value);
	Ti.API.info('2==='+this.value);
	Ti.API.info('3==='+e.source.value);
});


$.ventanaTextField.addEventListener('click', function(e){
	// Ti.API.info('x===' +e.x + ' y===='+e.y);
	// Ti.API.info(e.source);
});
