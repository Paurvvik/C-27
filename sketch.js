const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, ground;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);   
    box2 = new Box(920,320,70,70);
    box3 = new Box(920,230,70,70);
    box4 = new Box(700,230,70,70);
    box5 = new Box(810,130,70,70);
    bird = new Bird(100,250,50,50);
    ground = new Ground(600,height,1200,30); 
    ground2 = new Ground(100,280,350,250);
    pig1 = new Pig (810,320,50,50);
    pig2 = new Pig (810,230,50,50);   
    log1 = new Log(810,300,20,300,PI/2);
    log2 = new Log(810,200,20,300,PI/2);
    log3 = new Log(700,130,20,150,PI/7);
    log4 = new Log(920,130,20,150,-PI/7) 
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    ground2.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    box3.display();
    box4.display();
    box5.display();
    bird.display();
}

