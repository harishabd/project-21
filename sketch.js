var thickness, wall;
var speed, weight,bullet;


function setup() {
createCanvas(1600,400);

thickness=random(22,83);
speed=random(223, 321);
weight=random(30,52);

bullet=createSprite(50, 200, 50, 5);
bullet.shapeColor= color(255);
bullet.velocityX = speed;

wall=createSprite(1200,200,thickness,height/2);
wall.shapeColor=(80,80,80);

}

function draw() {
  background("black");  

  if(hasCollided(bullet, wall)){
    bullet.velocityX = 0;
    
    var damage = (0.5 * weight * speed * speed)/(thickness * thickness * thickness);
    if(damage > 10){
      wall.shapeColor = color(255,0,0);
    }
    else {
      wall.shapeColor = color(0,255,0);
    }
  }
  drawSprites();
}

function hasCollided(b,w){
  var bulletRightEdge = b.x + b.width;
  var wallLeftEdge = w.x;
  
  if (bulletRightEdge >= wallLeftEdge){
    return true;
  }
  return false;
}