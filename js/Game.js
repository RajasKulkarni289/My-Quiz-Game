class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      
      form = new Form()
      form.display();
    }
   
    
    
  
  }

  play(){
    
    textSize(30);
    text("Which was the first stone to be on Thanos' Gauntlet ?", 120, 100)
    Player.getPlayerInfo();

    if(allPlayers !== undefined){
     var x=150;
     var y=0;
     var index=0;
      for(var plr in allPlayers){
        index++;
        x=x+200;
        y=allPlayers[plr].distance;
        players[index-1].x=x;
        players[index-1].y=displayHeight-200-y;
        if (plr === "player" + player.index)
          players[index-1].shapeColor="Blue";
        camera.position.x=displayWidth/2;
        camera.position.y=players[index-1].y;
      }
    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=50
      player.update();
    }
    drawSprites();
  }
}
