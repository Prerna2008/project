var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions=[];
var divisionHeight=300;
var score =0;
var particle1;
var turn=0;
var gameState="start";
var count;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  
  textSize(20)
 text("Score : "+score,20,30);
 text("500",100,530);
 text("500",180,530);
 text("500",260,530);
 text("100",340,530);
 text("100",420,530);
 text("100",500,530);
 text("200",580,530);
 text("200",660,530);
 text("200",740,530);
 text("500",20,530);


  Engine.update(engine);
 
  for (var k = 0; k < divisions.length; k++) {
     
    divisions[k].display();
  }
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }

 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
  
 if(particle1!=null){
   if(particle1.body.position.y>760){
     if(particle1.body.position.x<300&&particle1.body.position.x<600){
score=score+500;
particle1=null;
if(turn>=6){
  gameState="end";
}
     }
   }
 }


 if(particle1!=null){
  if(particle1.body.position.y>760){
    if(particle1.body.position.x>301){
score=score+100;
particle1=null;
if(turn>=6){
 gameState="end";
}
    }
  }
}

if(particle1!=null){
  if(particle1.body.position.y>760){
    if(particle1.body.position.x>601&&particle1.body.position.x<900){
score=score+200;
particle1=null;
if(turn>=6){
 gameState="end";
}
    }
  }
}


 if(gameState==="end"){
   textSize(60)
  text("GAME OVER",400,400);

 }
 ground.display();
}

function mousePressed(){
  if(gameState!=="end"){
    turn++;
    particle1=new Particle(mouseX,10,10,10)
    particles.push(new Particle(mouseX, 10,10));
  }
}