const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;

var ball, ballopt;


ballopt = {restitution:0.08};

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(400,392,800,10);
  right = new Ground(750,350,10,100);
  left = new Ground(600,350,10,100);

  ball = Bodies.circle(200, 200, 20, ballopt);
  World.add(engine.world, ball);
  
 

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  
  background(51);
  ellipse(ball.position.x, ball.position.y, 20 , 20);
  ground.show();
 
  left.show();
  right.show();
  Engine.update(engine);

}

function keyPressed(){
  if (keyCode == UP_ARROW){
    Matter.Body.applyForce(ball, ball.position, {x:0.05, y:-0.04});
  }


}

