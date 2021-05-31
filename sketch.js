const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var stone;
var rubber;
var iron;


function setup(){
    var canvas = createCanvas(700,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(350,height,700,20)
    hammer = new Hammer(300,100);

    iron= new Iron(100,500);
    stone= new Stone(400,500);
    rubber= new Rubber(300,500,30);
  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    iron.display();
    stone.display();
    rubber.display();

    
 
}