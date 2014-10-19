

var map = require('ti.map');





Titanium.Geolocation.getCurrentPosition(function(e){
	
	var latitud = e.coords.latitude;
	var longitud = e.coords.longitude;
	
	var pin = map.createAnnotation({
		latitude:latitud,
		longitude:longitud,
		animate:true,
		title:'hola',
		subtitle:'saludos',
		pincolor:map.ANNOTATION_RED,
		draggable:true,
	});
	
	var viewMap = map.createView({
		mapType:map.NORMAL_TYPE,
		region:{
			latitude:latitud,
			longitude:longitud,
		},
		userLocation:true,
		regionFit:true,
		animate:true,
		annotations:[pin],
	});
	
	$.index.add(viewMap);
	
});




$.index.open();
