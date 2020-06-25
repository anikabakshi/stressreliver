var movingrect,fixedrect

function setup() {
  createCanvas(600,600);
  fixedrect=createSprite(200, 200, 50, 50);
  fixedrect.shapeColor="red"

  movingrect=createSprite(600,600,50,50)
  movingrect.shapeColor="red"
}

function draw() {
  background("yellow");

  movingrect.x=mouseX;
  movingrect.y=mouseY;

  if(movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2&&
    fixedrect.x-movingrect.x<movingrect.width/2+fixedrect.width/2&&
    movingrect.y-fixedrect.y<movingrect.height/2+fixedrect.height/2&&
    fixedrect.y-movingrect.y<movingrect.height/2+fixedrect.height/2){
    fixedrect.shapeColor="orange";
    movingrect.shapeColor="orange";
  }
  else{

    fixedrect.shapeColor="red";
    movingrect.shapeColor="red";

  }
  
  drawSprites();
}