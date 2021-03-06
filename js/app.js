// Enemies our player must avoid
var Enemy = function(x, y, speed=20) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = speed;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    var deltaX = this.speed * dt;
    if (this.x < 500) {
      this.x += (this.speed * dt);
    } else {
      this.x = -100;
    }

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
  this.sprite = 'images/char-cat-girl.png';
  this.x = 200;
  this.y = 320;
};

// Move the player based on keyboard input
Player.prototype.handleInput = function(key) {
  console.log('handle player input', key);
  var x, y;
  switch(key) {
    case 'left':
      x = Math.max(this.x - 10, -10)
      this.x = x;
      break;
    case 'up':
      y = Math.max(this.y - 10, -10)
      this.y = y;
      break;
    case 'right':
      x = Math.min(this.x + 10, 410);
      this.x = x;
      break;
    case 'down':
      y = Math.min(this.y + 10, 430);
      this.y = y;
      break;
  }
}

Player.prototype.update = function() {
  // do stuff here.
}

Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var enemy1 = new Enemy(100, 220, 40);
var enemy2 = new Enemy(0, 145, 32);
var enemy3 = new Enemy(35, 60, 50);
var allEnemies = [enemy1, enemy2, enemy3];
var player = new Player();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
