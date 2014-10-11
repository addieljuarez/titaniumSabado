
$.boton1.addEventListener('click', function(){
	var ventanaTextField = Alloy.createController('ventanaTextField').getView();
	ventanaTextField.open();
});

$.botonImagen.addEventListener('click', function(e){
	var ventanaImagen = Alloy.createController('ventanaImagen').getView();
	ventanaImagen.open();
});

$.botonWebView.addEventListener('click', function(e){
	var ventanaWebView = Alloy.createController('ventanaWebView').getView();
	ventanaWebView.open();
});


$.index.open();
