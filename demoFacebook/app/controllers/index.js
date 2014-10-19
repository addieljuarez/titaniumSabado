

var fb = require('facebook');
fb.permissions = ['email, user_birthday, user_hometown, user_location, publish_actions, publish_stream, publish_checkins, user_photos'];
fb.forceDialogAuth = true;

$.botonFacebook.addEventListener('click', function(e){
	fb.authorize();
});


fb.addEventListener('login', function(e){
	if (e.success) {
        
        
        fb.requestWithGraphPath('me', {}, 'GET', function(e) {
		    if (e.success) {
		        // alert(e.result);
		        Ti.API.info(e.result);
		        
		        var result = JSON.parse(e.result);
		        $.nombre.text =  result.email;
		        
		        
		    } else if (e.error) {
		        alert(e.error);
		    } else {
		        alert('Unknown response');
		    }
		});
        
    } else if (e.error) {
        alert(e.error);
    } else if (e.cancelled) {
        alert("Canceled");
    }
});

$.logout.addEventListener('click', function(e){
	fb.logout();
});


$.index.open();
