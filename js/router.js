define(function(require, exports, module) {
	//配置路由
	return Backbone.Router.extend({
		routes: {
			'': 'home',
			':action(/*condition)': 'loadmodule'
		},
		home: function() {
			this.loadmodule('index');
		},
		//按照action(/conditions)格式的请求自动加载模块
		loadmodule: function(action, conditions) {
			//将参数字符串'update/1'转换为json对象[update, 1]
			var arr = [];
			if(conditions) {
				arr = conditions.split('/');
			}
			//加载module目录下对应的模块
			require.async(['modJs', action].join('/'), function(o) {
				if(o) {
					//显示隐藏
					console.log(action);
					$body.find('.app').hide();
					$('.app-' + action).show();
					//运行当前模块
					o.run(arr);
				} else {
					console.log('模块加载失败！');
				}
			})
		}
	});
});
	