
$.index.open();

// $.inputUser.value = Titanium.App.Properties.getString('firstname');


$.buttonSend.addEventListener('click', function(e){
	Alloy.Globals.cloud.Users.login({
	    login: $.inputUser.value,
	    password: $.inputPassword.value
	}, function (e) {
	    if (e.success) {
	        var user = e.users[0];
	        // alert('Success:\n' +
	            // 'id: ' + user.id + '\n' +
	            // 'sessionId: ' + Alloy.Globals.cloud.sessionId + '\n' +
	            // 'first name: ' + user.first_name + '\n' +
	            // 'last name: ' + user.last_name);
	            
	     	Alloy.Globals.response = {
	     		'id: ': user.id,
	            'sessionId: ' : Alloy.Globals.cloud.sessionId,
	            'first name: ' : user.first_name,
	            'last name: ' : user.last_name,
	     	};
	     	
	     	Titanium.App.Properties.setString('id', user.id);
	     	Titanium.App.Properties.setString('sessionId' , Alloy.Globals.cloud.sessionId);
	     	Titanium.App.Properties.setString('firstname' , user.first_name);
	     	
	     	var data = {
	     		'id: ': user.id,
	            'sessionId: ' : Alloy.Globals.cloud.sessionId,
	            'first name: ' : user.first_name,
	            'last name: ' : user.last_name,
	     	};
	     	
	     	var winFoto = Alloy.createController('winFoto', data).getView();
	     	winFoto.open();
	     	$.inputPassword.value = '';
	     	$.inputUser.value = '';
	     	
	    } else {
	        alert('Error:\n' +
	            ((e.error && e.message) || JSON.stringify(e)));
	    }
	});
});




// Ti.API.info('argumentos----------------------------');
// Ti.API.info(args);

Ti.API.info('properties-----------------------------');
Ti.API.info(Titanium.App.Properties.getString('id'));
Ti.API.info(Titanium.App.Properties.getString('sessionId'));
Ti.API.info(Titanium.App.Properties.getString('firstname'));

Ti.API.info('globals----------------------------------');
Ti.API.info(Alloy.Globals.response);



