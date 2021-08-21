var path , boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var y;
var topedge,leftedge,rightedge;

var runninganimation
function preload(){
  pathImg=loadImage("path.png");
  boyImg=loadImage("Runner-1.png","Runner-2.png");
 
}

function setup(){
createCanvas(400,400);
var path=createSprite(200,200);
path.addImage("path",pathImg);
path.velocityY= 4;
path.scale=1.2;


var boy= createSprite(200,300,200,200);
boy.addImage(boyImg);
boy.scale=0.08;
  

leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible=false;


rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible=false;
}

function draw() {
  background(0);
 
 
  
  if(path.y > 400 ){ 
    (path.y = path.height / 2)
}
  
 
  
drawSprites();
 

}
