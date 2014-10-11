

// alert('test');

var db = Titanium.Database.open('ejemplo');
db.execute('CREATE TABLE IF NOT EXISTS datos(id INTEGER PRIMARY KEY AUTOINCREMENT, nombre TEXT, direccion TEXT, telefono TEXT, email TEXT)');
db.close();



function conteoAgregar(){
	var db = Titanium.Database.open('ejemplo'); 
	var row = db.execute('SELECT * FROM datos');
	var count = row.rowCount;
	db.close();
	row.close();
	
	return count;
};

exports.agregar = function(nombre, direccion, telefono, email){
	var db = Titanium.Database.open('ejemplo');
	db.execute('INSERT INTO datos(nombre, direccion, telefono, email) VALUES(?,?,?,?)', nombre, direccion, telefono, email);
	db.close();
	alert(conteoAgregar());
};


exports.consultar = function(){
	
	var data = [];
	
	var db = Titanium.Database.open('ejemplo');
	
	var consulta = db.execute('SELECT * FROM datos');
	while (consulta.isValidRow()) {
		data.push({
			id: consulta.fieldByName('id'),
			nombre: consulta.fieldByName('nombre'),
			direccion : consulta.fieldByName('direccion'),
			telefono : consulta.fieldByName('telefono'),
			email : consulta.fieldByName('email'),
		});
		
		consulta.next();
	}
	consulta.close();
	db.close();
	return data;
};



