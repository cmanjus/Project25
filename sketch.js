var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,paper1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var ground1,dustbin;
function preload()
{
	dustbin = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);
	paper1 = new Paper(100,600,20);
	ground1 = new Ground(width/2,height-10,width,20);

	bottom = Bodies.rectangle(850,height-30,200,20,{isStatic:true});
	World.add(world,bottom);
	side1 = Bodies.rectangle(750,height-170,20,300,{isStatic:true});
	World.add(world,side1);
	side2 = Bodies.rectangle(950,height-170,20,300,{isStatic:true});
	World.add(world,side2);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(180);
  console.log(paper1)
  paper1.display();
  ground1.display();
  
  fill(180);
  noStroke();
  rect(bottom.position.x,bottom.position.y,200,20);
  rect(side1.position.x,side1.position.y,20,300);
  rect(side2.position.x,side2.position.y,20,300);
  fill(0);
	text("UP arrow ----> to throw the paper into dustbin",100,50);
	text("Space ----> re-position",100,100);
  image(dustbin,850,530);
  dustbin.resize(250,0);

  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:80,y:-87});
	}
	if(keyCode===32){
		Matter.Body.setPosition(paper1.body,{x:100,y:600});
	}
}


