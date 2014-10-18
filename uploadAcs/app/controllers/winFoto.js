var args = arguments[0] || {};

Ti.API.info('argumentos----------------------------');
Ti.API.info(args);

Ti.API.info('properties-----------------------------');
Ti.API.info(Titanium.App.Properties.getString('id'));
Ti.API.info(Titanium.App.Properties.getString('sessionId'));
Ti.API.info(Titanium.App.Properties.getString('firstname'));

Ti.API.info('globals----------------------------------');
Ti.API.info(Alloy.Globals.response);



$.logout.addEventListener('click', function(e){
	Alloy.Globals.cloud.Users.logout(function (e) {
	    if (e.success) {
	        alert('Success: Logged out');
	        $.winFoto.close();
	    } else {
	        alert('Error:\n' +
	            ((e.error && e.message) || JSON.stringify(e)));
	    }
	});
});

$.imagen.addEventListener('click', function(e){
	Titanium.Media.openPhotoGallery({
		success: function(event){
			var img = event.media;
			$.imagen.image = img;
		},
		cancel: function(){
			alert('se cancelo');
		},
		error: function(e){
			alert(e.error);
		},
	});
});

$.botonSubir.addEventListener('click', function(e){
	Alloy.Globals.cloud.Photos.create({
	    photo: $.imagen.getImage(),
	}, function (e) {
	    if (e.success) {
	        var photo = e.photos[0];
	        alert('Success:\n' +
	            'id: ' + photo.id + '\n' +
	            'filename: ' + photo.filename + '\n' +
	            'size: ' + photo.size,
	            'updated_at: ' + photo.updated_at);
	    } else {
	        alert('Error:\n' +
	            ((e.error && e.message) || JSON.stringify(e)));
	    }
	});
});

