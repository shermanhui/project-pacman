var Engine = (function(global) {
	var doc = global.document,
		win = global.window,
		canvas = doc.createElement('canvas'),
		ctx = canvas.getContext('2d');

	canvas.width = 540;
	canvas.height = 390;
	canvas.style.border = "solid 1px";
	canvas.setAttribute("class", "canvas");
	doc.body.appendChild(canvas);

	global.ctx = ctx;
})(this);