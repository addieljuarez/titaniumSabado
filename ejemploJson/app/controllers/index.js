

var url = 'http://www.azteca.com/historico/index/more/format/json?program=272&string=&category=0&type=2&page=-2&numItems=50&imgW=65&imgH=65';

var data = [];

var cliente = Titanium.Network.createHTTPClient({
	onload : function(){
		// Ti.API.info(this.responseText);
		
		var resultado = JSON.parse(this.responseText);
		
		// alert(resultado.items.length);
		
		
		for (var i=0; i < resultado.items.length; i++) {
			var row = Titanium.UI.createTableViewRow({
				height:80,
				detalles:{
					title:resultado.items[i].title,
					imagenDetalle : resultado.items[i].img,
					descripcion: resultado.items[i].desc,
					hora : resultado.items[i].stamp,
				}
			});
			
			
			var labelTitulo = Titanium.UI.createLabel({
				color:'#000',
				top:5,
				text:resultado.items[i].title,
				left:60,
			});
			
			var imagen = Titanium.UI.createImageView({
				image:resultado.items[i].img,
				height:50,
				width:50,
				left:0,
			});
			
			
			row.add(labelTitulo);
			row.add(imagen);
			
			data.push(row);
		};
		
		$.tableView.setData(data);
		
		
		Ti.API.info(resultado);
		
		
		$.tableView.addEventListener('click', function(e){
			var ventanaDetalle = Alloy.createController('detalles', e.rowData.detalles).getView();
			ventanaDetalle.open();
		});
		
		
	},
	onerror: function(e){
		alert(e.error);
	},
	timeout:5000,
});

cliente.open('GET', url);
cliente.send();


$.index.open();
