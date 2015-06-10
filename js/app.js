define(function(require, exports, module) {
	var Router = require('router');

	//定义全局变量App
	window.App = {
		init: function() {
			App.route = new Router();
			Backbone.history.start({pushstate:true});
		}
	};

	exports.init = App.init;
});