var Engine = (function(global) {
	var doc = global.document,
		win = global.window,
		canvas = doc.createElement('canvas'),
		ctx = canvas.getContext('2d');

	canvas.width = 540;
	canvas.height = 390;
	// ctx.fillStyle="black";
	// ctx.fillRect(0, 0, canvas.width, canvas.height);
	canvas.style.border = "solid 1px";
	canvas.setAttribute("class", "canvas");
	doc.body.appendChild(canvas);

	global.ctx = ctx;
})(this);