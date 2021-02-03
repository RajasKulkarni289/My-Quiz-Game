var canva,q,a,b,c,d,button;
var bgImg,bg;
var form, player, game;
var gameState = 0;
var database;

function preload(){
  bgImg=loadImage("BgImg.jpg");
}

function setup(){
  canvas = createCanvas(1500,700);
  bg=createSprite(300,500);
  bg.addImage(bgImg);
  bg.scale=0.4

  button=createSprite(displayWidth/2+150, 200,10,10)
  button.visible=false;

  database = firebase.database();
 game=new Game();
 game.getState();
 game.start();
}


function draw(){
  if(mousePressedOver(button)){
   
    text("Which was the first stone to be on Thanos' Gauntlet ?", 120, 100);
    a=createSprite(displayWidth+150,150);
    shapeColor="black";
    text("Power Stone",displayWidth+120,150);

    b=createSprite(displayWidth+200,150);
    shapeColor="black";
    text("Time Stone",displayWidth+170,150);

    c=createSprite(displayWidth+150,200);
    shapeColor="black";
    text("Mind Stone",displayWidth+150,200);

    d=createSprite(displayWidth+200,200);
    shapeColor="black";
    text("Space Stone",displayWidth+170,200);


    
    
      
  }
  

  drawSprites();
}

