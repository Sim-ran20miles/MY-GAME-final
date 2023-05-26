
var bg, bgImage
var bird,birdFlying
var ghost, ghostRunning
var person, personWalking
var ghost, ghostImage
var invisibleGround
var birdGroup

function preload(){
 bgImage = loadImage("background.jpeg");
 birdFlying = loadAnimation("birdFlying1.png", "birdFlying2.png", "birdFlying3.png");
 ghostRunning = loadAnimation("Ghost1.png", "Ghost2.png", "Ghost3.png", "Ghost4.png", 
 "Ghost5.png", "Ghost6.png", "Ghost7.png", "Ghost8.png")
  personWalking = loadAnimation("PersonWalking1.png", "PersonWalking2.png", "PersonWalking3.png", 
  "PersonWalking4.png") 
  ghostImage = loadImage("Ghost.png")
}

function setup(){
  createCanvas(600,200)
  
bg = createSprite(300, 100, 600, 200);
bg.addImage("bg", bgImage);
bg.scale = 2;
bg.velocityX = -3;

ghost = createSprite(50, 100, 10,10);
ghost.addImage("ghost", ghostImage);
ghost.scale = 0.2 ;

ground = createSprite(300, 180, 600, 2);
 ground.visible = false;

 birdGroup = new Group()
}

function draw(){
  background("white");
 
  if(bg.x<0){
    bg.x = bg.width/3;
  }
  
  if(keyDown("space")){
    ghost.velocityY = -10
  }
  ghost.velocityY = ghost.velocityY + 0.5;

  ground.collide(ghost)
  birds()
drawSprites()

if(birdGroup.isTouching(ghost)|| ghost.y>220||ghost.y<0){
  ghost.destroy()
  birdGroup.destroyEach()
  textSize(30);
  text("Game Over!", 100, 100)
  ground.velocity = 0;
}
}


function birds(){
  if(frameCount%150===0){
    bird = createSprite(600, 180, 2,2)
    bird.addAnimation("Flying", birdFlying)
    bird.velocityX = -3;
    bird.y = random(20, 180);
birdGroup.add(bird);
  }
}