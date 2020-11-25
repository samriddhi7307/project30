
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
 
function setup() {
	createCanvas(900, 800);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	roof2 = new roof(400,550,300,20);
	roof1 = new roof(450,790,width,30);
	roof3 = new roof(700,400,300,20);
	b1 = new box(300,250,30,40);
	b2 = new box(330,250,30,40);
	b3 = new box(360,250,30,40);
	b4 = new box(390,250,30,40);
	b5 = new box(420,250,30,40);
	b6 = new box(450,250,30,40);
	b7 = new box(480,250,30,40);
	b8 = new box(330,235,30,40);
	b9= new box(360,235,30,40);
	b10 = new box(390,235,30,40);
	b11 = new box(420,235,30,40);
	b12 = new box(450,235,30,40);
	b13 = new box(360,195,30,40);
	b14 = new box(390,195,30,40);
	b15 = new box(420,195,30,40);
	b16 = new box(390,155,30,40);
	b24 = new box(630,135,30,40);
	b25 = new box(660,135,30,40);
	b26 = new box(690,135,30,40);
	b27 = new box(720,135,30,40);
	b28 = new box(750,135,30,40);
	b29 = new box(660,95,30,40);
	b30 = new box(690,95,30,40);
	b31 = new box(720,95,30,40);
	b32 = new box(690,55,30,40);
	stone1 = new stone(100,400,20);
	slingshot1 = new slingshot (stone1.body,{x:100,y:450});
 
	Engine.run(engine);
}


function draw() {
	
  background("#382C2C");
  rectMode(CENTER);

 Engine.update(engine);
 roof2.display();
 roof1.display();
 roof3.display();
 push(); 
 fill("lightblue"); 
 b1.display(); 
 b2.display();
 b3.display();
 b4.display();
 b5.display();
 b6.display();
 b7.display();
 pop(); 
 push();
 fill("lightpink");
 b8.display();
 b9.display();
 b10.display();
 b11.display();
 b12.display();
 pop();
 push();
 fill("#3FE0D0");
 b13.display();
 b14.display();
 b15.display();
 pop();
 push();
 fill("#808080");
 b16.display();
 pop();
 push();
 fill("lightblue");
 b24.display();
 b25.display();
 b26.display();
 b27.display();
 b28.display();
 pop();
 push();
 fill("#3FE0D0");
 b30.display();
 b29.display();
 b31.display();
 pop();
 push();
 fill("lightpink");
 b32.display();
 pop();
 stone1.display();
 slingshot1.display();
}

function mouseDragged(){
  
    Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingshot1.fly();
}
 
function keyPressed(){
	if(keyCode === 32){
   slingshot1.attach(stone1.body,stone1.body.position);
	}
}