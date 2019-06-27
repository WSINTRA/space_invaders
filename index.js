//Build a JS script that will create Space invaders.

//What is space invaders at its most basic ?

// A sprite that moves from the top most left of the screen, to the right, 
// when it gets to the right it moves a level down.

// A sprite controlled by input moves from left to right on the lower level of screen.

//Both sprite fire, lower one on button press,
// top one on every 2 seconds..

// First problem to solve..
// create a moving sprite from the top of the screen to the bottom..

        // Set line width
//helper function



//screen
function Screen(width, height) {
   this.canvas = document.createElement("canvas");
   this.canvas.width = this.width = width;
   this.canvas.height = this.height = height;
   this.ctx = this.canvas.getContext("2d");

   document.body.appendChild(this.canvas);
};

Screen.prototype.drawSprite = function(sp, x, y) {
 this.ctx.drawImage(sp.img, sp.x, sp.y, sp.w, sp.h, x, y , sp.w, sp.h);
};



//sprite
function Sprite(img, x, y, w, h) {
  this.img = img;
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;

};


//InputHandler
function InputHandler(){
this.down = {};
this.pressed = {};
var _this = this
document.addEventListener("keydown", function(event) {
  _this.down[event.keyCode] = true;
});
document.addEventListener("keyup", function(event) {
  delete _this.down[event.keyCode];
  delete _this.pressed[event.keyCode];
  });
};

InputHandler.prototype.isDown = function(code){
   return this.down[code];
};
InputHandler.prototype.isPressed = function(code){
  if (this.pressed[code]){
    return false;
  } else if (this.down[code]) {
    return this.pressed[code] = true;
  }
  return false;
};



