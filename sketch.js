
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var wall1, wall2, wall3;
var paper;
var ground;

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	wall1= new bin(665, 380, 10, 80);
	wall2= new bin(730, 390, 140, 10);
	wall3= new bin(795, 380, 10, 80);


	paper= new ball(100,385,10);

	var ground_op={
		isStatic:true
	};
	ground=Bodies.rectangle(width/2, 400, width,10, ground_op)
	World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");

  wall2.display();
  wall1.display(); 
  wall3.display();

  paper.display();

  push(); 
  fill("green")
  rect(ground.position.x, ground.position.y,width, 10)
  pop();
  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode == UP_ARROW || keyCode == RIGHT_ARROW) {
		Matter.Body.applyForce(paper.body, {x:0, y:0}, {x:13, y:-14})
	}
}



