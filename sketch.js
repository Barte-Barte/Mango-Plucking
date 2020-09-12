
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var boy,boyImg, rock1;
function preload()
{
	boyImg=loadImage("boy.png");
}

function setup() {
	createCanvas(1200, 700);

	boy= createSprite(300,600,30,30)
	boy.addImage("boy",boyImg)
	boy.scale=0.15
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     ground1= new Ground(600,690,1200,25);
     tree1=new Tree(950,360);

     rock1=new Rock(300,200)
     sling1=new Slingshot(rock1.body,{x:210,y:510});
     m1 = new Mango(900,150,8);
     m2 = new Mango(950,120,10);
     m3 = new Mango(1000,100,7);
     m4 = new Mango(950,60,9);
     m5 = new Mango(1050,60,6);
     m6 = new Mango(1100,120,10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground1.display();
  tree1.display();
 
  sling1.display();
  drawSprites();
  rock1.display();
  m1.display();
	m2.display();
	m3.display();
	m4.display();
	m5.display();
  m6.display();
  collision(rock1,m1);
  collision(rock1,m2);
  collision(rock1,m3);
  collision(rock1,m4);
  collision(rock1,m5);
  collision(rock1,m6);
  strokeWeight(3);
	stroke(0);
	fill(255);
    text('Let us Pluck the Mangoes ', 285, 22);
    text("Press space for a second chance!!!!!",285,44)
}



function mouseDragged()
{

Matter.Body.setPosition(rock1.body,{x:mouseX, y:mouseY})

}

function mouseReleased()
{

sling1.fly();

}

function collision(a,b){
	var d = dist(a.body.position.x,a.body.position.y,b.body.position.x,b.body.position.y)
	if(d <= 50){
		Body.setStatic(b.body,false);
	}
}

function keyPressed()
{
if(keyCode===32)

{

Matter.Body.setPosition(rock1.body,{x:200,y:200})

sling1.attach(rock1.body);

}

}
