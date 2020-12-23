
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var ground,boys,trees,sto,shot;
var mangs1,mangs2,mangs3,mangs4,mangs5;

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world  = engine.world;
	Engine.run(engine);
	//Create the Bodies Here.
	
 mangs1 = new Mangoo(500,350,50,50,70);
 mangs2 = new Mangoo(600,400,50,50,70);
 mangs3 = new Mangoo(690,250,50,50,70);
 mangs4 = new Mangoo(750,330,50,50,70);
 mangs5 = new Mangoo(850,400,50,50,70);
 boys   = new man(200,650,150,200,70);

 sto    = new stoo(150,600,30,30);
 
 trees  = new tre(680,440,550,550,100);
 ground = new grounds(500,700,1000,20);
 shot   = new sling(sto.body,{x:150, y:600});

  
}

function draw() {
	background("lightgrey");
	Engine.update(engine);

 ground.display();
 trees.display();
 mangs1.display();
 mangs2.display();
 mangs3.display();
 mangs4.display();
 mangs5.display();
 boys.display();
 sto.display();
 
 shot.display()
 detect(sto,mangs1);
 detect(sto,mangs2);
 detect(sto,mangs3);
 detect(sto,mangs4);
 detect(sto,mangs5);
 
}

function mouseDragged(){
    Matter.Body.setPosition(sto.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    shot.fly();
}

function detect(obj1,obj2){
var mangoBodyPosition=obj2.body.position
var stoneBodyPosition=obj1.body.position

var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance<obj2.r+obj1.r){
 Body.setStatic(obj2.body,false);
}
}

function keyPressed(){
if (keyPressed === 32){
 Body.setPosition(sto.body,{x:150, y:600})
shot.attach(sto.body);
}
}

