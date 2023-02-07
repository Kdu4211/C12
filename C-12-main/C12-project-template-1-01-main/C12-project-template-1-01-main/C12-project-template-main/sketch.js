var path,boy, leftBoundary,rightBoundary;
var pathImg,boy_run;
var i;

function preload(){
  pathImg = loadImage("path.png");

  boy_run = loadAnimation("jake1.png","jake2.png","jake3.png","jake4.PNG","jake5.png");

  
 
}

function setup(){
  
  createCanvas(400,400);
  path = createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 1;
  path.scale=1.2;

  boy = createSprite(200,200);
  boy.addAnimation("run",boy_run);
  boy.scale=0.8;

 
    
  
  leftBoundary=createSprite(0,0,100,800);
  leftBoundary.visible = false;

  
  rightBoundary=createSprite(410,0,100,800);
  rightBoundary.visible = false;
}

function draw() {
  background(0);
  path.velocityY = 4;
  

  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(rightBoundary);
  boy.collide(leftBoundary);
  
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
