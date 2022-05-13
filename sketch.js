var backGround,bgImg;
var shooter, shooterImg,shooterShooting1,shooterDeadImg;
var zombie,zombieImg;
var heart, heart1Img, heart2Img, heart3Img;
var zombieGroup;

function preload(){
bgImg=loadImage("assets/bg.jpeg");
shooterImg=loadImage("assets/shooter_2.png");
shooterShooting1=loadImage("assets/shooter_3.png");
shooterDeadImg=loadImage("assets/shooter_1.png");
zombieImg=loadImage("assets/zombie.png");
heart1Img=loadImage("assets/heart_1.png");
heart2Img=loadImage("assets/heart_2.png");
heart3Img=loadImage("assets/heart_3.png");
}

function setup(){
createCanvas(windowWidth,windowHeight);

backGround=createSprite(windowWidth/2,windowHeight/2+130,20,20);
backGround.addImage("backGround",bgImg);

shooter=createSprite(windowWidth/2-300,windowHeight/2+150);
shooter.addImage("shooter",shooterImg);
shooter.scale=0.8;

heart=createSprite(windowWidth/2+200,windowHeight/2-200);
heart.addImage("life",heart1Img);
heart.scale=0.3;

zombieGroup=new Group();

}

function draw(){

background("black");

if(keyDown(UP_ARROW)){
shooter.y=shooter.y-10;
}

if(keyDown(DOWN_ARROW)){
  shooter.y=shooter.y+10;
  }

if(keyWentDown("m")){
 shooter.addImage(shooterShooting1); 
  }

else if(keyWentUp("m")){
shooter.addImage(shooterImg);
  }

if(zombieGroup.isTouching(shooter)){
  for(var i=0;i<zombieGroup.length;i++){
    if(zombieGroup[i].isTouching(shooter)){
      zombieGroup[i].destroy();
    }
  }
}

Enemy();

drawSprites();

}

function Enemy(){


  if(frameCount%60===0){

  zombie=createSprite(random(windowWidth+10,windowWidth+20),random(windowHeight/2,windowHeight/2+200));
  zombie.addImage("zombie",zombieImg);
  zombie.velocityX=-9;
  zombie.scale=0.3;
  zombie.lifetime=1000;
  zombieGroup.add(zombie);
  }
  
}