//获取元素id + 绑定onclick函数
var myClick = function(btnId, fun) {
	var btn = document.getElementById(btnId);
	btn.onclick = fun;
}

//bind函数：为元素绑定事件
function bind(obj, eventStr, callback) {
	if(obj.addEventListener) {
		obj.addEventListener(eventStr, callback, false);
	} else {
		obj.attachEvent("on" + eventStr, function() {
			callback.call(obj);
		});
	}
}

//getStyle函数：获取元素样式
//getStyle(id , "width");
function getStyle(obj, name) {
	if(window.getComputedStyle) {
		return window.getComputedStyle(obj, null)[name];
	} else {
		return obj.currentStyle[name];
	}
}

/*
 * 可以执行简单动画的函数
 * 参数：
 * obj：要执行的对象
 * attr：要执行动画的样式，比如：left top width height
 * target：执行动画的目标位置
 * speed：移动的速度（正数向右移动，负数向左移动）
 * callback：回调函数，这个函数将会在动画执行完毕以后执行
 */
function move(obj, attr, target, speed, callback) {
	//关闭上一个定时器
	clearInterval(obj.timer);
	//判断速度的正负值
	//正数向右移动，负数向左移动
	var current = parseInt(getStyle(obj, attr));
	if(current > target) {
		speed = -speed;
	}
	//开启一个定时器
	obj.timer = setInterval(function() {
		var oldValue = parseInt(getStyle(obj, attr));
		var newValue = oldValue + speed;
		//判断newValue是否大于target
		if((speed > 0 && newValue > target) || (speed < 0 && newValue < target)) {
			newValue = target;
		}

		obj.style[attr] = newValue + "px";

		if(newValue == target) {
			clearInterval(obj.timer);
			callback && callback();
		}
		//回调函数，有则执行
	}, 30);
}

//定义一个函数，用来向一个元素中添加指定的class属性值
/*
 * 参数：
 * obj 要添加class属性的元素
 * cn 要添加的class值
 */
function addClass(obj, cn) {
	if(!hasClass(obj, cn)) {
		obj.className += " " + cn;
	}
}

//判断一个元素中是否含有指定的class属性值，
//如果有该class，则返回true，没有则返回false
function hasClass(obj, cn) {
	//判断obj中有没有cn class
	//创建一个正则表达式，\b是单词边界，必须是独立b2
	//var reg = /\bb2\b/;
	var reg = new RegExp("\\b" + cn + "\\b");
	return reg.test(obj.className);
}

//删除一个元素中指定的class属性
function removeClass(obj, cn) {
	var reg = new RegExp("\\b" + cn + "\\b");
	obj.className = obj.className.replace(reg, "");
}

//切换一个类
//如果元素中具有该类，则删除
//如果元素中没有该类，则添加
function toggleClass(obj, cn) {
	if(hasClass(obj, cn)) {
		//有，则删除
		removeClass(obj, cn);
	} else {
		//没有，则添加
		addClass(obj, cn);

	}
}