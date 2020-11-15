const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object1,ground,ball;



function setup() {
  createCanvas(400,400);
  //createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;

  var object_options = {
    isStatic:true
  }
  object1 = Bodies.rectangle(200,100,50,50,object_options);
  World.add(world,object1);
  
  
  ground = Bodies.rectangle(200,350,10,50,object_options);
  World.add(world,ground);

  var ball_options = {
    restitution: 1
  }
  ball = Bodies.circle(300,50,20,ball_options);

  World.add(world,ball);
  
}

function draw() {
  background(255,255,255);
  Engine.update(engine);
  rectMode(CENTER);

  rect(object1.position.x,object1.position.y,50,50);
  rect(ground.position.x,ground.position.y,400,10);
  //circle(ball.position.x,ball.position.y,20);
  ellipse(ball.position.x,ball.position.y,20,20);

  //rect(200,200,50,50);  
  drawSprites();
}