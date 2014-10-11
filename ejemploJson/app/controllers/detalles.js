var args = arguments[0] || {};

// alert(args);
$.cerrar.addEventListener('click', function(e){
	$.detalles.close();
});

$.titulo.text = args.title;

$.imagen.image = args.imagenDetalle;
$.descripcion.text = args.descripcion;
