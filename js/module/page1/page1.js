define(function(require, exports, module) {
	var	Store = require('store');
	var tpl = require('./page1.tpl');

	var app =  {
		init: function() {
			$body.append(tpl);
		},
		run: function() {
			console.log('this is page1');
		}
	};
	
	app.init();

	module.exports = app;
});