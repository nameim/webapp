define(function(require, exports, module) {
	//配置路由
	return Backbone.Router.extend({
		routes: {
			'': 'home',
			'at/:module/:action(/*condition)': 'loadmodule'
		},
		home: function() {
			this.loadmodule('index', 'index');
		},
		//按照at/module/action(/conditions)格式的请求自动加载模块
		loadmodule: function(module, action, conditions) {
			//将参数字符串'a:123/b:456'转换为json对象{a:123, b:456}
			var obj = {};
			if(conditions && conditions.indexOf(':') > -1) {
				conditions.replace(/(\w+)\s*:\s*([\w-]+)/g, function(a, b, c) {
					b && (obj[b] = c);
				});
			} else {
				obj = conditions;
			}
			//加载module目录下对应的模块
			require.async(['module', module, action].join('/'), function(o) {
				if(o) {
					//显示隐藏
					$body.find('.app').hide();
					$('.app-' + module).show();
					//运行当前模块
					o.run();
				} else {
					console.log('模块加载失败！');
				}
			})
		}
	});
});
	