const Engine = Matter.Engine;

const World = Matter.World;
const Bodies = Matter.Bodies;

const Body = Matter.Body;

let engine;
let world;

var road , car , cannon_ball;
var road_image , car_image;


function preload(){
  road_image = loadImage("road.png");
  car_image  = loadImage("car.png");
}


function setup() 
{
  createCanvas(700,600);
 
  engine = Engine.create();
  world = engine.world;

  road = createSprite(350,400,40,20);
  road.addImage(road_image);
  road.x = road.width/2;
  road.velocityX=-3;

  car=createSprite(150,400,10,10);
  car.addImage(car_image);
  car.scale=0.25;

//  cannon_ball=createSprite(200,200,20,20);
//  cannon_ball.addImage(cbImg);
//  cannon_ball.scale=0.05;

}



function draw() 
{
  background(51);
  Engine.update(engine);

 
  if (road.x <0){
    road.x = road.width/2;
  }


  drawSprites();
 }
