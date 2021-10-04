var SeaIMG,shipIMG,Ship,sea;
function preload(){
SeaIMG = loadImage("sea.png");
shipIMG = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");

}

function setup(){
  createCanvas(windowWidth,windowHeight)
  sea=createSprite(displayWidth/2,displayHeight/2);
  sea.addImage(SeaIMG);
sea.scale=0.6;
sea.velocityX=-2;
Ship=createSprite(displayWidth/2,displayHeight/2);
Ship.addAnimation("movingship",shipIMG);
Ship.scale=0.5;
}

function draw() {
  background("blue");
  if(sea.x < displayWidth/4){
    sea.x=sea.width/4;
  }
 drawSprites();
}