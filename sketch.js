
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

function preload()
{
	treeimg=loadImage("Plucking mangoes/tree.png");
	stoneimg=loadImage("Plucking mangoes/stone.png");
	mangoimg=loadImage("Plucking mangoes/mango.png");
	boyimg=loadImage("Plucking mangoes/boy.png");
}

function setup() {
	createCanvas(1000, 510);

treesprite= createSprite(700,250,100,200);
treesprite.addImage("tree",treeimg);
treesprite.scale=0.4;


boysprite=createSprite(150,428,50,100);
boysprite.addImage("boy",boyimg);
boysprite.scale=0.1;
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
//tree1=new tree(400,400);
ground1=new ground(500,500,1000,20)
stone1=new stone(200,200);
mango1=new mango(500,250);
mango2=new mango(570,230);
mango3=new mango(850,250);
mango4=new mango(950,200);
mango5=new mango(650,150);


sling1=new sling(stone1.object,{x:100,y:375});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
//tree1.display();


  

drawSprites();
  ground1.display();


  stone1.display();


mango1.display();
mango2.display();
mango3.display();
mango4.display();
mango5.display();
 

sling1.display();


detectcollision(stone1,mango1)
detectcollision(stone1,mango2)
detectcollision(stone1,mango3)
detectcollision(stone1,mango4)
detectcollision(stone1,mango5)





}


function mouseDragged(){
stone1.object.position.x=mouseX;
stone1.object.position.y=mouseY;
}

function mouseReleased(){
	sling1.throw();
	Matter.Body.applyForce(stone1.object,stone.object.position,{x:50,y:-50});
}


function keyPressed(){
	if(keyCode==32){
		sling1.attach(stone1.object	);
	}
}

function detectcollision(o1,o2){
	var distance=dist(o1.object.position.x,o1.object.position.y,o2.object.position.x,o2.object.position.y);

	if(distance<=45){
		Matter.Body.setStatic(o2.object,false);
	}

}
   