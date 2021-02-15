var database;

var playerCount, gameState = 0;

var player,game,form;
var trex1,trex2
var allplayers



var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

var cloudsGroup, cloudImage;
var obstaclesGroup, obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6;



function preload(){
  trex_running =   loadAnimation("./trex1.png","trex3.png","trex4.png");
  
  
  groundImage = loadImage("./ground2.png");
  
  cloudImage = loadImage("./cloud.png");
  
  obstacle1 = loadImage("./obstacle1.png");
  obstacle2 = loadImage("./obstacle2.png");
  obstacle3 = loadImage("./obstacle3.png");
  obstacle4 = loadImage("./obstacle4.png");
  obstacle5 = loadImage("./obstacle5.png");
  obstacle6 = loadImage("./obstacle6.png");
}


function setup(){
  database = firebase.database();

  createCanvas(windowWidth-50,windowHeight-50);

  game = new Game();//to create the object of the game class
  game.getState(); //to get the gameState from the DB at the beginnning of the game
  game.start();


}

function draw(){
  if(playerCount===2){
    game.updateState(1);
    
  }
  if(gameState===1){
 
    clear();
    game.play();
   
  }
    
  
}

