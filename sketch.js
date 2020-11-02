var bullet,wall;
var speed,weight;
var wall2,wall3,wall4;
var bullet2,bullet3,bullet4;
var partion1,partion2,partion3;
var thickness;

function setup() {
   createCanvas(displayWidth,displayHeight);

   partion1 = createSprite(displayWidth/2,displayHeight/4,displayWidth,10);
   partion2 = createSprite(displayWidth/2,displayHeight/2,displayWidth,10);
   partion3 = createSprite(displayWidth/2,displayHeight/4+displayHeight/2,displayWidth,10);

   speed = random(223,321);
   weight = random(30,52);
   thickness = random(22,83);

   bullet = createSprite(displayWidth/2 - 700,displayHeight/4 - 100,50,10);
   bullet.velocityX = speed;
   bullet2 = createSprite(displayWidth/2 - 700,displayHeight/4 + 100,50,10);
   bullet2.velocityX = speed;
   bullet3 = createSprite(displayWidth/2 - 700,displayHeight/2 + 100,50,10);
   bullet3.velocityX = speed;
   bullet4 = createSprite(displayWidth/2 - 700,displayHeight/4 + displayHeight/2 + 100,50,10);
   bullet4.velocityX = speed; 

   wall = createSprite(displayWidth/2 + 650,displayHeight/4 - 100,thickness,50);
   wall2 = createSprite(displayWidth/2 + 650,displayHeight/4 + 100,thickness,50);
   wall3 = createSprite(displayWidth/2 + 650,displayHeight/2 + 100,thickness,50);
   wall4 = createSprite(displayWidth/2 + 650,displayHeight/4 + displayHeight/2 + 100,thickness,50);
}

function draw() {
   background("#000000");
   partion1.shapeColor = "#FFFFFF"
   partion2.shapeColor = "#FFFFFF"
   partion3.shapeColor = "#FFFFFF"

   bullet.shapeColor = "#FFFFFF"
   bullet2.shapeColor = "#FFFFFF"
   bullet3.shapeColor = "#FFFFFF"
   bullet4.shapeColor = "#FFFFFF"

   //wall.shapeColor = "#505050"

  
   if (hasCollided(bullet,wall)) 
  {
    bullet.velocityX = 0;
    bullet2.velocityX = 0;
    bullet3.velocityX = 0;
    bullet4.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/thickness * thickness * thickness;
    if (damage > 10) 
    {
        wall.shapeColor = color(255,0,0);
        wall2.shapeColor = color(255,0,0);
        wall3.shapeColor = color(255,0,0);
        wall4.shapeColor = color(255,0,0);
 
    }

    if (damage < 10)
    {

       wall.shapeColor = color(0,255,0);
       wall2.shapeColor = color(0,255,0);
       wall3.shapeColor = color(0,255,0);
       wall4.shapeColor = color(0,255,0);

    }
  }
 bullet.display();
 bullet2.display();
 bullet3.display();
 bullet4.display();
 partion1.display();
 partion2.display();
 partion3.display();
 wall.display();
 wall2.display();
 wall3.display();
 wall4.display();
//  speed,display();
//  weight.display();
}

function hasCollided(lbullet, lwall) {
   bulletRightEdge=lbullet.x +lbullet.width;
   wallLeftEdge=lwall.x;
   if (bulletRightEdge>=wallLeftEdge) {
      return true
   }
   return false;
}