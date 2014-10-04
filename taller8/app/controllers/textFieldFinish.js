var args = arguments[0] || {};

// alert(args);
// 

$.resultado.text = args;


$.textFieldFinish.addEventListener('swipe', function(e){
	if (e.direction == 'right') {
		$.textFieldFinish.close();
	};
});
