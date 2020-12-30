var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var b,o,x;
var b1,o1,x1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	packageSprite=createSprite(width/2, 200, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


b=createSprite(width/2,height-50,200,20);
o=createSprite(300,610,20,100);
x=createSprite(500,610,20,100);
b.shapeColor=("#FF0000");
o.shapeColor=("#FF0000");
x.shapeColor=("#FF0000");


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.rectangle(width/2 , 200 , 50,50, {restitution:0, isStatic:true});
	World.add(world, packageBody);
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	b1= Bodies.rectangle(width/2, height-50, 200, 20 , {isStatic:true} );
	 World.add(world, b1);
	 
	 o1= Bodies.rectangle(300, 610, 20, 100 , {isStatic:true} );
	 World.add(world, o1);
	 
	 x1= Bodies.rectangle(500, 610, 20, 100 , {isStatic:true} );
 	World.add(world, x1);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);

  packageSprite.x= packageBody.position.x;
  packageSprite.y= packageBody.position.y;
 //rect(packageBody.position.x,packageBody.position.y,60,60);

  b.x=b1.position.x;
  b.y=b1.position.y;

  o.x=o1.position.x;
  o.y=o1.position.y;

 x.x=x1.position.x;
 x.y=x1.position.y;

  drawSprites();

 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.

	Matter.Body.setStatic(packageBody,false);
	
  }
}



