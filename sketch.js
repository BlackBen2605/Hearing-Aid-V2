var y1;
var n1;
var a1;




var gameState=0;

function preload(){

}

function setup(){
var canvas= createCanvas(1450,1000)

if(gameState===0){
fill("red");
textSize(50);
text("Press 1 to Start!",displayWidth/1.95,displayHeight/2)
textSize(40);
text("Hearing Test",displayWidth/2.3,displayHeight/4);


}
if(keyCode === 49){
    gameState=1
}

if(gameState === 1){

}


}

function draw(){

drawSprites();
}