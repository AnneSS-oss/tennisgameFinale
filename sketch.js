var canvas,bg;

var gameState = 0;
var playerCount;
var allPlayers;
var database;
var players;

var form,player,game;

var tball, player1,player2, tballImage;
var player1Image, player2Image;
var player1score = 0;
var player2score = 0;

var edges;


function preload(){

    bg = loadImage("court.jpg");
    tballImage = loadImage("ball.gif");
    player1Image = loadImage("bracket.jpg");
    player2Image = loadImage("racket.jpg");

}

function setup(){
createCanvas(displayWidth - 20 ,displayHeight - 30);


database = firebase.database();
game = new Game();
game.getState();
game.start();
}

function draw(){
    background(bg);

    if(playerCount === 2){
        game.update(1);
    }

    if(gameState === 1){
        game.play();
    }



    
}