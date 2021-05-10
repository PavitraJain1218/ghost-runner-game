var climber,door,ghost
var ghostImage
var climberImage
var doorImage
var climberGroup,doorGroup,invisibleGroup
var infiniteGround
var tower
function preload(){
    ghostImage=loadImage("ghost-standing.png")
    climberImage=loadImage("climber.png")
    doorImage=loadImage("door.png")
    tower=loadImage("tower.png")
}


function setup(){
    createCanvas(400,400);
    infiniteGround=createSprite(200,200,60,20)
    infiniteGround.addImage("tower",tower)
    infiniteGround.velocityY=-10

    ghost=createSprite(200,300,30,30);
    ghost.addImage("standing",ghostImage);
    ghost.scale=0.5
    ghost.debug=true
    climberGroup=new Group()
    doorGroup=new Group()
    invisibleGroup=new Group()
   
}

function draw(){
    background("black")
    if(keyDown("left")){
    ghost.x= ghost.x-5    
    

    } 
    drawSprites();
    if(keyDown("right")){
        ghost.x=ghost.x+5
    }
    if(keyDown("space")){
        ghost.velocityY= -20
    }
    ghost.velocityY=ghost.velocityY+0.9

    spawnClimber();
if(ghost.isTouching(climberGroup)||ghost.y>400){
    fill("red")
    text("game Over",200,200)
    //ghost.velocityY=0
}
 ghost.collide(invisibleGroup) 
 if(infiniteGround.y<0){
     infiniteGround.y=infiniteGround.height/2
 }  

   
}
function spawnClimber(){
    if(frameCount%160===0){
    var Ran=Math.round(random(10,390));
    climber=createSprite(Ran,20,40,40);
    climber.velocityY=2
    climber.addImage("climberimage", climberImage);
        climber.debug=true
    invisible=createSprite(Ran,10,100,10);
    invisible.velocityY=2
    door=createSprite(Ran,-50,40,40);
    door.velocityY=2
    door.addImage("doorImage",doorImage);

    doorGroup.add(door)
    climberGroup.add(climber)
     invisibleGroup.add(invisible)
    }
}