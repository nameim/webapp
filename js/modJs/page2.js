define(function(require, exports, module) {
	var tpl = require('../tpl/page2.tpl');

	var app =  {
		init: function() {
			$body.append(tpl);
		},
		run: function() {
			console.log('this is page2');
		}
	};
	
	app.init();

	module.exports = app;
});