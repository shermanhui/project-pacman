var gameObj = function (){
	this.sprite = '';
};

gameObj.prototype.render = function() {
	ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// ===== PACMAN OBJECT ===== //

// Making the Pacman Class which needs a render and handleInput() method
var Pacman = function(){
	gameObj.call(this);
	this.sprite = 'img/Pacman.gif';
	this.x = 100;
	this.y = 100;
};

Pacman.prototype = Object.create(gameObj.prototype);
Pacman.prototype.constructor = Pacman;

Pacman.prototype.update = function(){
	// Pacman's movement and controls
};

// respawn Pacman
Pacman.prototype.reset = function(){

};

// ===== END PACMAN OBJECT ===== //

// ===== GHOST OBJECTS ===== //
// The ghosts: Chase Pacman - most basic operation, we have to implement a way for the ghosts to traverse the map
var Ghosts = function() {
	gameObj.call(this);
	this.sprite = '';
	this.x = 10;
	this.y = 10;
};

var pacman = new Pacman();

// Event Listener for key inputs
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    pacman.handleInput(allowedKeys[e.keyCode]);
});