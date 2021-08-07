var box
function setup() {
  createCanvas(400,400);
  box=createSprite(200,200,40,40)
}

function draw() 
{
  background(30);
  if(keyIsDown(RIGHT_ARROW)){
    box.position.x=box.position.x+4
    background('red');
  }
  if(keyIsDown(LEFT_ARROW)){
    box.position.x=box.position.x-4
    background('green');
}
if(keyIsDown(UP_ARROW)){
  box.position.y=box.position.y-4
  background('orange');
}
if(keyIsDown(DOWN_ARROW)){
  box.position.y=box.position.y+4
  background('yellow');
}
drawSprites()}





