var args = arguments[0] || {};


if (Titanium.Platform.osname == 'android') {
	$.imagenLocal.image = '/appcelerator.png';
}else{
	$.imagenLocal.image = 'appcelerator.png';
}


$.imagenRemota.image = 'http://www.appcelerator.com/wp-content/uploads/scale_triangle1.png';

var dialogo = Titanium.UI.createOptionDialog({
	cancel:2,
	options:['camara', 'galeria', 'cancelar'],
	title:'toma una foto',
});

$.imagenCamara.addEventListener('click', function(e){
	dialogo.show();
});


dialogo.addEventListener('click', function(e){
	if (e.index == 0) {
		Titanium.Media.showCamera({
			success:function(event){
				$.imagenCamara.image = event.media;
			},
			error:function(e){
				alert(e.error);
			},
			cancel: function(){
				alert('cancelado');
			},
		});
	};
	if (e.index == 1) {
		Titanium.Media.openPhotoGallery({
			success:function(event){
				$.imagenCamara.image = event.media;
			},
			error:function(e){
				alert(e.error);
			},
			cancel: function(){
				alert('cancelado');
			},
		});
	};
});

