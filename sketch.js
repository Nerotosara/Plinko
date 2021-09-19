var Engine = Matter.Engine,
 World = Matter.World,
 Events=Matter.Events,
 Bodies = Matter.Bodies;
var Particles =[];
var Plinko=[];
var divisions=[];
var engine;
var world;
var Ground;
var divisionsHeight = 300
function setup() {
  createCanvas(800,800);
  engine = Engine.create();
	world = engine.world;
Ground=new ground(width/2,height,width,20);
for ( var j =40; j<=width; j=j+50)
{
Plinko.push(new plinko(j,75))
}
for ( var j =15; j<=width-10; j=j+50)
{
Plinko.push(new plinko(j,175))
}
for ( var j =40; j<=width; j=j+50)
{
Plinko.push(new plinko(j,275))
}
for ( var j =15; j<=width-10; j=j+50)
{
Plinko.push(new plinko(j,375))
}
for(var k=0;k<=width;k=k+80)
{
  divisions.push(new divison(k,height-divisionsHeight/2,10,divisionsHeight))
}





}

function draw() {
  background(25,55,65);  
  Engine.update(engine)
Ground.display();
if(frameCount%60===0){
  Particles.push(new partical(random(width/2-10,width/2+10),10,10))
}
for(var j=0;j<Particles.length;j++){
  Particles[j].display();
  }
  for (var k=0;k<divisions.length;k++){
    divisions[k].display();
  }
  for(var i=0;i<Plinko.length;i++){
    Plinko[i].display();
  }
}