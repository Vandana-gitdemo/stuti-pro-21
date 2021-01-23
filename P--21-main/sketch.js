var canvas;
var music;
var block1;
var block2;
var block3;
var block4;
var ball;
var edge1
var edge2
var edge3



function preload(){
    music = loadSound("music.mp3");


}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(710,580,200,40)
    block1.shapeColor = "cyan"
    
    block2 = createSprite(305,580,210,40)
    block2.shapeColor = "yellow"
    
    block3 = createSprite(510,580,200,40)
    block3.shapeColor = "purple"

    block4 = createSprite(100,580,200,40)
    block4.shapeColor = "red"

    ball = createSprite(400,300,30,30)
    ball.velocityY = 15
    ball.velocityX = 15
    ball.shapeColor = "white"
    
    edge1 = createSprite(5,260,10,600)
    edge1.shapeColor = "black"
    
    edge2 = createSprite(795,260,10,600)
    edge2.shapeColor = "black"
    
    edge3 = createSprite(450,5,880,10)
    edge3.shapeColor = "black"
    music.play()
    
  }

function draw() {
    background("black");
    
    ball.bounceOff(edge1)
    ball.bounceOff(edge2)
    ball.bounceOff(edge3)
   
if(ball.isTouching(block1)&&ball.bounceOff(block1)){
  ball.shapeColor = "cyan"
}

if(ball.isTouching(block2)&&ball.bounceOff(block2)){
    ball.shapeColor = "yellow"
  }

  if(ball.isTouching(block3)&&ball.bounceOff(block3)){
    ball.shapeColor = "purple"
  }

  if(ball.isTouching(block4)&&ball.bounceOff(block4)){
    ball.shapeColor = "red"
    ball.velocityX=0;
    ball.velocityY=0;
   // music.stop();
  }

// if(ball.isTouching(block4)){
//   ball.velocityX = 0  
//   ball.velocityY = 0  
// }



  drawSprites();

}
