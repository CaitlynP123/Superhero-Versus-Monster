const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Body = Matter.Body
const Constraint = Matter.Constraint

var backgroundImg

var engine, world

var blocks = []

var monsterImg, monster

function preload() {
  backgroundImg = loadImage("images/GamingBackground.png")
}

function setup() {
  createCanvas(3000, 800);

  engine = Engine.create()
  world = engine.world

  ground = new Ground(750,650,1500,20)

  hero = new Hero(500,300,250,250)

  rope = new Rope(hero.hero, {x: 500, y: 100})

  monster1 = new Monster(900,75,100,125)
  monster2 = new Monster(1400,75,100,125)

  for(var i = 1; i <=8; i++){
    blocks.push(new Block(900,100,50,50))
  }

  for(var i = 1; i <=10; i++){
    blocks.push(new Block(1000,100,50,50))
  }

  for(var i = 1; i <=12; i++){
    blocks.push(new Block(1100,100,50,50))
  }
  
  for(var i = 1; i <=12; i++){
    blocks.push(new Block(1200,100,50,50))
  }

  for(var i = 1; i <=10; i++){
    blocks.push(new Block(1300,100,50,50))
  }

  for(var i = 1; i <=8; i++){
    blocks.push(new Block(1400,100,50,50))
  }  
}

function draw() {
  background(backgroundImg);

  Engine.update(engine)
  
  for(i = 0; i < blocks.length; i++){
	  blocks[i].display()
  }

  ground.display()

  hero.display()
  
  rope.display()

  monster1.display()
  monster2.display()

  drawSprites()
}

function mouseDragged(){
  Body.setPosition(hero.hero, {x: mouseX, y: mouseY})
}

function mouseReleased(){
  rope.fly()
}

function keyPressed(){
  if(keyCode == 32){
    rope.attach(hero.hero)
  }
}

