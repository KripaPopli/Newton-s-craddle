
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;

function preload()
{
   
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    bob1 = new Bob(200,400,50);
	bob2 = new Bob(300,400,50);
	bob3 = new Bob(400,400,50);
	bob4 = new Bob(500,400,50);
	bob5 = new Bob(600,400,50);

	//rope1 = new Chain();
	//rope2 = new Chain();
	//rope3 = new Chain();
	//rope4 = new Chain();
	//rope5 = new Chain();


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  //rope1.display();
  //rope2.display();
  //rope3.display();
  //rope4.display();
  //rope5.display();

drawSprites();
 
}



