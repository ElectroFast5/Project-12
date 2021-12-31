var runner;
var running;
var bomb;
var drink;
var path;
var pathImage;

function preload(){
    //pre-load images
running = loadAnimation("Jake1.png", "Jake2.png", "Jake3.png", "Jake4.png", "Jake5.png");
pathImage = loadImage("path.png");
}

function setup(){
  createCanvas(400,400);

  //road sprite
  path = createSprite(200, 200, 300, 400);
  path.addImage("road", pathImage);

  //invisible walls
  wall1 = createSprite(60, 200, 10, 400);
  wall1.visible = false;
  wall2 = createSprite(345, 200, 10, 400);
  wall2.visible = false;

  //runner sprite
  runner = createSprite(200, 200, 20, 20);
  runner.addAnimation("moving", running);
  runner.scale = 0.6;
}

function draw() {
  background("black");

  path.velocityY = 10;

  drawSprites();


  if(mouseX > wall1.x && mouseX < wall2.x) {
  runner.x = mouseX;
  }

  if(path.y > 400) {
    path.y = 300;
  }
  
}