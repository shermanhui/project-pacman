# project-pacman
HTML5 Canvas Clone of Pacman

## Features

An attempt to clone the classic arcade game Pacman. resource.js and engine.js are referenced from Udacity's [frontend-nanodegree-arcade-game](https://github.com/udacity/frontend-nanodegree-arcade-game) project. 

This project is still on-going, but is expected to take a while. As there are a lot of features that I'm learning on how to implement. I also have no experience with game dev...so I don't really know why I'm attempting this at all.

## List of To Dos:

### Menu
- Menu states
	- Start
	- Pause
	- Game Over
	- Restart
- Score

### Pacman Object
- Pacman's mouth should move
- Move/Control pacman
	- Pacman collision
		- Should stay within boundaries and walls
		- Able to move across the map at certain points
		- On collision with Ghosts 
			- Lose a life
			- Respawn

### Ghost Objects - The toughest part :(
- Basic Ghost Object
	- spawns Four ghosts 
- Ghosts should have basic movement patterns
	- stay within the walls
	- random, but consistent
	- some kind of AI to chase pacman
	- Initial spawn at "home"
- ADVANCED/ TO DO: 
	- Each ghost should have it's own traits reflected in movement patterns
		- Aggressive
		- Passive
		- Fast
		- Random
	- Change states
		- Change to "weak"/blue ghosts when pacman gets power pill
			- Give points to pacman upon being eaten 
			- Reverse direction 
			- Slow down in speed
			- Send back to "home" 

### Pill Objects
- Basic pills 
	- Provide points
	- Collision with pacman = collection
- Power Pills
	- Four on each corner
	- Reverses ghost states so pacman can eat ghosts


## Contribute

Feel free to contribute or let me know of any issues

source: github.com/shui91/project-pacman.git
issues: github.com/shui91/project-pacman/issues/
