const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const PLAY =1;
const END =0;
var engine, world;

var car;
var mountain;
var fac;
var odometer;
var road;
var greenLine;
var coin;
var distance=50;

var gameState = PLAY;
var carPosition,roadPosition;
var setCarPosition =true;
function preload(){
  back_img = loadImage("images/metroback.gif");
  car_img = loadImage("images/car.png");
  acc_img = loadImage("images/acc.png");
  mountain_img = loadImage("images/mount.png");
  coin_img = loadImage("images/coin.png");
  break_img = loadImage("images/break.png");
  road_img = loadImage("images/road.png");
  gameOver_img = loadImage("images/gameOver1.png");
}

function setup() {
  createCanvas( 900,500);

  engine = Engine.create();
  world = engine.world;

  coin = createSprite(50,46,10,10);
  coin.addImage("coin",coin_img);
  coin.scale = 0.1;

  // road = createSprite(width/2,365,10,10);
  // road.addImage("road",road_img);
  // road.scale = 1;
  //var scale = 0.9;
  
  road = new Ground(450,250,800,20);
  // greenLine =new Ground(2500,330,5000,50,"images/grass.png");
  car = new Car(50, 220,100,80);
  //Matter.Body.setPosition(car.body, {x: 50 , y: road.height/2+car.height/2-30});

  acc = createSprite(850,400,10,10);
  acc.addImage("acc",acc_img);
  acc.scale = 0.5;

  breaker = createSprite(80,400,10,10);
  breaker.addImage("break",break_img);
  breaker.scale = 0.5;

  distance=50;
  carPosition = car.body.position;
  roadPosition=road.body.position;

  // car = createSprite(100,300,10,10);
  // car.addImage("car",car_img);
  // car.scale = 0.3;
  
}




function draw() {
   background(back_img);
   Engine.update(engine);
   drawSprites();
 // background(255);

 if(gameState===PLAY){
    greenLine.display();
    road.display();
    car.display();
    accelerate();
 }

 else if(gameState===END){
   console.log("End");
   setCarPosition=false;
   //  background(255);
  //   image(gameOver_img,450,250,900,500);
  //   textSize(40);
  //   fill("black");
  //   text("GAME OVER : ",roadPosition.width/2,roadPosition.height/2)
  //   noLoop();
 }
  
  textSize(25);
  fill("black");
  text("C",41,57);

  textSize(40);
  fill("black");
  text("RPM : ",30,106);
  text(" : ",60,57);
 
}

function accelerate(){
  followTheCar();
  if(keyDown(LEFT_ARROW)){
    //car.moveLeft();
    carPosition.x = carPosition.x -2;
  }
 
   if(keyDown(RIGHT_ARROW)){
     //car.moveRight();
     carPosition.x = carPosition.x +2;
     distance=distance+1;
     console.log(distance)
 
     if(distance>500){
        gameState = END;
     }
 }

if(setCarPosition){
  Matter.Body.setPosition(car.body, {x: carPosition.x , y: road.height/2+car.height/2-30});
}

}

function followTheCar(){
  camera.position.x=carPosition.x+400;
  //  camera.position.y=road.height-100;
}
