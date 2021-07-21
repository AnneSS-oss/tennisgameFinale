class Game{

constructor(){

}

getState() {
    var gameStateRef = database.ref('gameState');
    gameStateRef.on("value", function (data) {
        gameState = data.val();
    })
}

update(state) {
    database.ref('/').update({
        gameState: state
    });
}

async start() {
    if(gameState === 0) {
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if (playerCountRef.exists()) {
            playerCount = playerCountRef.val();
            player.getCount();
        }
        form = new Form();
        form.display();
    }

    

    player1 = createSprite(1200,300);
    player1.addImage(player1Image);
    player1.scale = 0.2;

    player2 = createSprite(50,300);
    player2.addImage(player2Image);
    player2.scale = 0.15;
    players = [player1,player2];

    tball = createSprite(600,300,50,50);
    tball.addImage(tballImage);
    tball.velocityX = 5;
    tball.velocityY = 6;
    tball.scale = 0.1;
    

    
}
  
    play(){

    form.hide();
    Player.getPlayerInfo();

    if(allPlayers !== undefined){
        var index = 0;

        var x = 400;
        var y = 200;

        for(var plr in allPlayers){

        index = index+1;

        if(index === player.index){
            textSize("15")
            fill("blue");
            text(allPlayers[plr].name , x-25, y+25);
        }

    }

    player1.y = mouseY;
    player2.y = mouseY;

    edges = createEdgeSprites();

    tball.bounceOff(edges);
    tball.bounceOff(player1);
    tball.bounceOff(player2);

    if(tball.x > 1250){
        player2score = player2score +1;
        tball.x=600
        tball.y=300
    }

    if(tball.x < 40){
        player1score = player1score +1;
        tball.x=600
        tball.y=300
    
    }

    drawSprites();
    textSize(30);
    text(player1score, 1100,20);
    textSize(30);
    text(player2score, 130,20);
    



    }
    }
}