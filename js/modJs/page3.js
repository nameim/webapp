define(function(require, exports, module) {
	var tpl = require('../tpl/page3.tpl');

	var app =  {
		init: function() {
			$body.append(tpl);
		},
		run: function() {
			console.log('this is page3');
		}
	};
	
	app.init();

	module.exports = app;
});