define(function(require, exports, module) {
	var tpl = require('../tpl/index.tpl');
	
	var app =  {
		init: function() {
			$body.append(tpl);
		},
		run: function() {
			console.log('this is index');
		}
	};

	app.init();
	module.exports = app;
});