var Engine = (function(global) {
	var doc = global.document,
		win = global.window,
		canvas = doc.createElement('canvas'),
		ctx = canvas.getContext('2d'),
		lastTime;

	canvas.width = 540;
	canvas.height = 390;
	// ctx.fillStyle="black";
	// ctx.fillRect(0, 0, canvas.width, canvas.height);
	canvas.style.border = "solid 1px";
	canvas.setAttribute("class", "canvas");
	doc.body.appendChild(canvas);

	/* This function serves as the kickoff point for the game loop itself
     * and handles properly calling the update and render methods.
     */
    function main() {
        /* Get our time delta information which is required if your game
         * requires smooth animation. Because everyone's computer processes
         * instructions at different speeds we need a constant value that
         * would be the same for everyone (regardless of how fast their
         * computer is) - hurray time!
         */
        var now = Date.now(),
            dt = (now - lastTime) / 1000.0;

        /* Call our update/render functions, pass along the time delta to
         * our update function since it may be used for smooth animation.
         */
        update(dt);
        render();

        /* Set our lastTime variable which is used to determine the time delta
         * for the next time this function is called.
         */
        lastTime = now;

        /* Use the browser's requestAnimationFrame function to call this
         * function again as soon as the browser is able to draw another frame.
         */
        win.requestAnimationFrame(main);
    }
    
    function update(dt){
    	updateEntities(dt);
    }

    function updateEntities(dt){
    	pacman.update(dt);
    }

	function init(){
		lastTime = Date.now();
		main();
	}

	function render(){
		renderEntities();
	}
	function renderEntities(){
		pacman.render();
	}

	Resources.load([
		'img/Pacman.gif'
	]);
	Resources.onReady(init);

	global.ctx = ctx;
})(this);