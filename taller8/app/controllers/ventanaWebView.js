var args = arguments[0] || {};


$.cerrar.addEventListener('click', function(e){
	$.ventanaWebView.close();
});

// $.webView.url = 'http://www.appcelerator.com/';
$.webView.url = 'index.html';
