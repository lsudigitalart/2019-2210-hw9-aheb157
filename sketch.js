
var myPump1;
var myPump2;
var myPump3;
var myPump4;

var Pump;
var Pumpkin;
var bg;

var randYPos1;
var randYPos2;
var randYPos3;
var randYPos4;

function preload(){
  Pumpkin = loadImage ("bat.gif");
  bg = loadImage ("bg.jpg");
}

function setup() {
  createCanvas(800, 600);
    imageMode(CENTER);

  randYPos1 = random(height);
  randYPos2 = random(height);
  randYPos3 = random(height);
  randYPos4 = random(height);

  myPump1 = new Pump( randYPos1, 0, 3);
  myPump2 = new Pump(randYPos2, 0, 5);
  myPump3 = new Pump( randYPos3, 0, 2);
  myPump4 = new Pump( randYPos4, 0, 4);
}

function draw() {
  

  image (bg, width/2,height/2,800,600);

  myPump1.update();
  myPump1.display();

  myPump2.update();
  myPump2.display();

  myPump3.update();
  myPump3.display();

  myPump4.update();
  myPump4.display();

}

function Pump ( tempY, tempX, tempSpeed) {
 
  this.yPos = tempY;
  this.xPos = tempX;
  this.speed = tempSpeed;

  this.update = function () {
    this.xPos = this.xPos + this.speed;

    if (this.xPos > width) {
        textSize(100);
        fill(255,0,0);
     text('WINNER!!!',150, height/2);
    
    }
  }

  this.display = function () {
  
  Pump = image (Pumpkin,this.xPos, this.yPos, 200,200);
  }}

