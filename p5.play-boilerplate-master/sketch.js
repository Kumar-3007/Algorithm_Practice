var object
var moving
function setup() {
  createCanvas(800,400);
  object=createSprite(400, 200, 50, 50);
 
  moving=createSprite(780,90,20,90);

}

function draw() {
  background(0,0,255);  
  drawSprites();
  
  moving.y=World.mouseY;
  moving.x=World.mouseX;

  if(moving.x-object.x < moving.width/2+object.width/2
    && object.x - moving.x < moving.width/2+object.width/2
    && moving.y - object.y < moving.height/2+object.height/2
    && object.y - moving.y < moving.height/2+object.height/2){
   object.shapeColor= "red";
   moving.shapeColor= "yellow";
  } 

  else {
    object.shapeColor="balck";
    moving.shapeColor="black";
  }
}