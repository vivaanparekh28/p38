class Game{
constructor(){

}
//update the gameState in the DB (when playerCount become 4)
updateState(s){
    var dbref=database.ref("/"); 
    //to go to the location  in the DB
    //to do the work in the DB -->saving --.set or .update
    dbref.update({
    gameState:s 
    });
}

//to get the gameState value from the DB
getState(){
   var dbref=database.ref("gameState")
    dbref.on("value",function (r){
gameState=r.val()
    })

}


//what should happen at the beginning
start(){
if(gameState===0){
player = new Player();
player.getPlayerCount(); //to fil;l the playerCount global variable at the beginning of the game

form = new Form();
form.display(); //to display the form at the beginning of the game

}
// car1=createSprite(100,200,50,50)
// car2=createSprite(300,200,50,50)
// car3=createSprite(500,200,50,50)
// car4=createSprite(700,200,50,50)
// cars=[car1,car2,car3,car4]
trex1=createSprite()
}

play(){

    form.hide();
    textSize(30);
    text("Game Has Begun",100,100)

    Player.getPlayersInfo()

    if(allplayers!=undefined){
var index=0;
var x=0;
var y=0;
    //    var yPos = 150;
        for (var plr in allplayers){
x=x+200
y=windowHeight-allplayers[plr].distance-100
index=index+1
cars[index-1].x=x
cars[index-1].y=y
if (index===player.index){
    cars[index-1].shapeColor="blue"
    camera.position.x=windowWidth/2
    camera.position.y=cars[index-1].y
    text(allplayers[plr].name,cars[index-1].x,cars[index-1].y-100)
}
            // text(allplayers[plr].name+ ":" + allplayers[plr].distance,100,yPos )
            // yPos+=50;
        }


    }

if(keyDown(UP_ARROW)){
    player.distance +=5;
    player.update();
}
drawSprites()
}



}